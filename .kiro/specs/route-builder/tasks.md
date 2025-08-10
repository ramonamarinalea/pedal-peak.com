# Implementation Plan

- [x] 1. Set up project structure and core interfaces
  - Create directory structure for route builder components, services, and types
  - Define TypeScript interfaces for route data models, API responses, and component props
  - Set up barrel exports for clean imports
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Implement core data models and validation
  - Create TypeScript interfaces and types for GeneratedRoute, RouteParams, POILocation, and related models
  - Implement input validation functions for route parameters (locations, distances, elevation preferences)
  - Create utility functions for coordinate validation and geocoding
  - Write unit tests for validation logic
  - _Requirements: 1.1, 1.2, 1.4, 1.5_

- [x] 3. Build basic route builder form component
  - Create RouteBuilderForm component using Pedal Peak design system
  - Implement form fields for start/end locations, ride type, distance range, and elevation preferences
  - Add form validation with real-time feedback using Pedal Peak error styling
  - Implement controlled form state management with React hooks
  - Write component tests for form interactions and validation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 4. Create POI selection interface
  - Build POISelector component with checkbox list for POI categories (bakery, restaurant, cafe, etc.)
  - Implement distance interval input controls with sliders or number inputs
  - Add visual indicators for POI types using Pedal Peak badge components
  - Create state management for POI preferences with validation
  - Write tests for POI selection and distance configuration
  - _Requirements: 2.1, 2.2, 2.3, 2.7, 2.8_

- [x] 5. Implement external API service layer
  - Create ExternalAPIService class with methods for Strava, Komoot, and RideWithGPS integration
  - Implement API rate limiting and error handling for external services
  - Add fallback mechanisms when primary APIs are unavailable
  - Create mock implementations for testing and development
  - Write integration tests for API service methods
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 6. Build route generation engine
  - Create RouteGenerationService that orchestrates external API calls
  - Implement route optimization logic that considers ride type preferences (road vs gravel)
  - Add algorithm to incorporate POIs at specified distance intervals
  - Create route validation and quality scoring system
  - Write comprehensive tests for route generation scenarios
  - _Requirements: 3.1, 3.2, 3.3, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 7. Implement POI service with opening hours
  - Create POIService class that queries Google Places API or similar for POI data
  - Implement opening hours validation and arrival time estimation
  - Add logic to filter POIs based on availability during estimated arrival times
  - Create fallback handling for uncertain opening hours
  - Write tests for POI filtering and time calculations
  - _Requirements: 2.4, 2.5, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 8. Create interactive map preview component
  - Build RouteMapPreview component using Leaflet and OpenStreetMap
  - Implement route path rendering with different colors for surface types
  - Add POI markers with popups showing details and opening hours
  - Create zoom and pan controls with mobile gesture support
  - Write tests for map interactions and rendering
  - _Requirements: 5.1, 5.2, 5.4, 5.6_

- [x] 9. Build route metrics and analytics panel
  - Create RouteMetrics component displaying distance, elevation, and time estimates
  - Implement elevation profile chart using a charting library
  - Add surface type breakdown visualization with Pedal Peak styling
  - Create difficulty rating display with appropriate badges
  - Write tests for metrics calculations and display
  - _Requirements: 5.3, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 10. Implement GPX file generation
  - Create GPXService class that generates properly formatted GPX files
  - Add route metadata including name, description, creation date, and source information
  - Implement waypoint embedding for POIs with descriptions
  - Add GPX validation to ensure file compatibility with GPS devices
  - Write tests for GPX generation and validation
  - _Requirements: 4.1, 4.2, 4.3, 4.5_

- [x] 11. Create route export and download interface
  - Build RouteExport component with download button and file format options
  - Implement file download functionality with proper filename generation
  - Add success/error feedback for download operations
  - Create sharing options for generated routes
  - Write tests for export functionality and user feedback
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 12. Add comprehensive error handling and user feedback
  - Implement error boundary components for graceful error handling
  - Create user-friendly error messages for common failure scenarios
  - Add retry mechanisms for transient API failures
  - Implement loading states and progress indicators throughout the application
  - Write tests for error scenarios and recovery mechanisms
  - _Requirements: 3.5, 3.6, 2.4, 2.5_

- [x] 13. Integrate route builder with main application
  - Add route builder navigation link to main Pedal Peak menu
  - Create route builder page component that combines all sub-components
  - Implement responsive layout that works on mobile and desktop
  - Add route builder to existing routing configuration
  - Write end-to-end tests for complete user workflows
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [x] 14. Implement caching and performance optimizations
  - Add route caching to reduce redundant API calls
  - Implement lazy loading for map components and external libraries
  - Add service worker caching for offline route access
  - Optimize bundle size and implement code splitting
  - Write performance tests and monitoring
  - _Requirements: 3.5, 3.6_

- [x] 15. Add accessibility features and testing
  - Implement keyboard navigation for all interactive elements
  - Add proper ARIA labels and semantic HTML structure
  - Ensure color contrast meets WCAG 2.1 AA standards
  - Add screen reader support for map and route information
  - Write accessibility tests and manual testing procedures
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [ ] 16. Create comprehensive test suite
  - Write unit tests for all service classes and utility functions
  - Add integration tests for API interactions and route generation
  - Create component tests for all React components
  - Implement end-to-end tests for complete user journeys
  - Add performance and accessibility testing automation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_