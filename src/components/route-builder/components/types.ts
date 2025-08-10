// Component prop types
import type {
  RouteParams,
  GeneratedRoute,
  POIPreference,
  RouteModification
} from '../types';

// Re-export types for components
export type { 
  RouteParams,
  GeneratedRoute,
  POIPreference, 
  RouteModification 
} from '../types';

export interface RouteBuilderFormProps {
  onRouteGenerate: (params: RouteParams) => void;
  isLoading: boolean;
  initialParams?: Partial<RouteParams>;
}

export interface RouteMapPreviewProps {
  route: GeneratedRoute | null;
  isLoading: boolean;
  onRouteModify?: (modifications: RouteModification[]) => void;
  className?: string;
}

export interface RouteMetricsProps {
  route: GeneratedRoute;
  className?: string;
}

export interface POISelectorProps {
  selectedPOIs: POIPreference[];
  onPOIChange: (pois: POIPreference[]) => void;
  className?: string;
}

export interface RouteExportProps {
  route: GeneratedRoute;
  onDownload: () => void;
  onShare?: () => void;
  isDownloading?: boolean;
  className?: string;
}