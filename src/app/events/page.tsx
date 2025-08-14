// app/events/page.tsx
"use client"

import { useState, useEffect, useCallback } from "react"
import { EventCard } from "@/components/events/EventCard"
import { PastEventCard } from "@/components/events/PastEventCard"
import { fetchEvents, CyclingEvent } from "@/lib/events-api"

const eventTypes = [
  { value: "", label: "All Events" },
  { value: "TRAINING_CAMP", label: "Training Camps" },
  { value: "CYCLING_HOLIDAY", label: "Cycling Holidays" },
  { value: "WEEKEND_GETAWAY", label: "Weekend Getaways" },
  { value: "TOUR", label: "Tours" },
]

const difficulties = [
  { value: "", label: "All Levels" },
  { value: "BEGINNER", label: "Beginner" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "ADVANCED", label: "Advanced" },
  { value: "EXPERT", label: "Expert" },
]

export default function EventsPage() {
  const [events, setEvents] = useState<CyclingEvent[]>([])
  const [pastEvents, setPastEvents] = useState<CyclingEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingPast, setLoadingPast] = useState(false)
  const [filters, setFilters] = useState({
    type: "",
    difficulty: "",
    country: "",
  })

  const fetchEventsData = useCallback(async () => {
    setLoading(true)
    try {
      const params: Record<string, string> = {}
      
      // Add filters to params
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params[key] = value
      })
      
      const data = await fetchEvents(params)
      setEvents(data.events)
    } catch (error) {
      console.error("Error fetching events:", error)
    } finally {
      setLoading(false)
    }
  }, [filters])

  const fetchPastEventsData = useCallback(async () => {
    setLoadingPast(true)
    try {
      const data = await fetchEvents({ past: true, limit: 10 })
      setPastEvents(data.events)
    } catch (error) {
      console.error("Error fetching past events:", error)
    } finally {
      setLoadingPast(false)
    }
  }, [])

  useEffect(() => {
    fetchEventsData()
    fetchPastEventsData()
  }, [fetchEventsData, fetchPastEventsData])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight text-black mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Cycling Events & Adventures
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Discover unforgettable cycling experiences from training camps in the Swiss Alps 
            to weekend getaways exploring hidden gravel routes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="px-4 py-2 border border-gray-300 bg-white text-black text-sm font-medium focus:outline-none focus:border-black"
          >
            {eventTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          <select
            value={filters.difficulty}
            onChange={(e) => handleFilterChange("difficulty", e.target.value)}
            className="px-4 py-2 border border-gray-300 bg-white text-black text-sm font-medium focus:outline-none focus:border-black"
          >
            {difficulties.map((diff) => (
              <option key={diff.value} value={diff.value}>
                {diff.label}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Country"
            value={filters.country}
            onChange={(e) => handleFilterChange("country", e.target.value)}
            className="px-4 py-2 border border-gray-300 bg-white text-black text-sm font-medium placeholder-gray-500 focus:outline-none focus:border-black"
          />

          {(filters.type || filters.difficulty || filters.country) && (
            <button
              onClick={() => setFilters({ type: "", difficulty: "", country: "" })}
              className="px-4 py-2 text-sm text-gray-600 hover:text-black font-medium"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-gray-200 mb-4"></div>
                <div className="h-4 bg-gray-200 mb-2"></div>
                <div className="h-4 bg-gray-200 w-2/3"></div>
              </div>
            ))}
          </div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-black mb-4">No Events Found</h3>
            <p className="text-gray-600">Try adjusting your filters to find more events.</p>
          </div>
        )}

        {/* Past Events Section */}
        {(pastEvents.length > 0 || loadingPast) && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Past Events</h2>
              <p className="text-gray-600">Previous cycling adventures for reference</p>
            </div>
            
            {loadingPast ? (
              <div className="space-y-2 max-w-4xl mx-auto">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-100 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="space-y-2 max-w-4xl mx-auto">
                {pastEvents.map((event) => (
                  <PastEventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Events are sourced from verified cycling organizers including training camps, 
            cycling holidays, and weekend adventures. All events link directly to the organizer&apos;s booking system.
          </p>
        </div>
      </div>
    </div>
  )
}