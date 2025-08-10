// Formatting utilities for route data display

export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)}m`;
  }
  return `${distanceKm.toFixed(1)}km`;
}

export function formatElevation(elevationM: number): string {
  return `${Math.round(elevationM)}m`;
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  
  if (hours === 0) {
    return `${mins}min`;
  }
  
  if (mins === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${mins}min`;
}

export function formatSpeed(kmh: number): string {
  return `${kmh.toFixed(1)} km/h`;
}

export function formatGradient(percentage: number): string {
  return `${percentage.toFixed(1)}%`;
}

export function formatSurfaceType(surface: string): string {
  const surfaceMap: Record<string, string> = {
    'paved': 'Paved',
    'gravel': 'Gravel',
    'trail': 'Trail',
    'unknown': 'Mixed'
  };
  
  return surfaceMap[surface] || surface;
}

export function formatDifficulty(difficulty: 'easy' | 'moderate' | 'hard'): string {
  const difficultyMap = {
    'easy': 'Easy',
    'moderate': 'Moderate', 
    'hard': 'Challenging'
  };
  
  return difficultyMap[difficulty];
}