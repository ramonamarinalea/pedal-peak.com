// app/events/page.tsx
"use client"

import { useState, useEffect, useMemo } from "react"
import { EventCard } from "@/components/events/EventCard"
import { PastEventCard } from "@/components/events/PastEventCard"
import { CyclingEvent, getFutureEvents, getPastEvents } from "@/lib/static-events-data"

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
  const [filters, setFilters] = useState({
    type: "",
    difficulty: "",
    country: "",
  })

  // Get static events data and apply filters
  const events = useMemo(() => {
    let filteredEvents = getFutureEvents()
    
    if (filters.type) {
      filteredEvents = filteredEvents.filter(event => event.type === filters.type)
    }
    
    if (filters.difficulty) {
      filteredEvents = filteredEvents.filter(event => event.difficulty === filters.difficulty)
    }
    
    if (filters.country) {
      filteredEvents = filteredEvents.filter(event => 
        event.country.toLowerCase().includes(filters.country.toLowerCase())
      )
    }
    
    return filteredEvents
  }, [filters])

  // Get past events (static data)
  const pastEvents = useMemo(() => {
    return getPastEvents().slice(0, 10) // Limit to 10 past events
  }, [])

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
        {events.length > 0 ? (
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
        {pastEvents.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-black mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Past Events</h2>
              <p className="text-gray-600">Previous cycling adventures for reference</p>
            </div>
            
            <div className="space-y-2 max-w-4xl mx-auto">
              {pastEvents.map((event) => (
                <PastEventCard key={event.id} event={event} />
              ))}
            </div>
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