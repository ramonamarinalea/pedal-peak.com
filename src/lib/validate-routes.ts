import { SwissRoute } from "./swiss-routes-data";

/**
 * Validates a single route object
 */
export function validateRoute(route: any): route is SwissRoute {
  return (
    route &&
    typeof route === "object" &&
    typeof route.id === "string" &&
    typeof route.name === "string" &&
    typeof route.distance === "number" &&
    typeof route.elevation === "number" &&
    typeof route.startLat === "number" &&
    typeof route.startLng === "number" &&
    typeof route.createdDate === "string" &&
    typeof route.stravaUrl === "string"
  );
}

/**
 * Validates and filters routes data
 */
export function validateRoutesData(routes: any[]): SwissRoute[] {
  if (!Array.isArray(routes)) {
    console.error("Routes data is not an array");
    return [];
  }

  const validRoutes = routes.filter((route) => {
    const isValid = validateRoute(route);
    if (!isValid) {
      console.warn("Invalid route data:", route);
    }
    return isValid;
  });

  console.log(`Validated ${validRoutes.length} of ${routes.length} routes`);
  return validRoutes;
}

/**
 * Safe route data loader with fallback
 */
export function safeLoadRoutes(routes: any[]): SwissRoute[] {
  try {
    return validateRoutesData(routes);
  } catch (error) {
    console.error("Error loading routes:", error);
    return [];
  }
}