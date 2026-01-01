export interface TimelineItem {
  month: string;
  title: string;
  description: string;
  details?: string[]; // New field for richer content points
  tags: string[];
  photos?: string[]; // New field for photo gallery
  highlight?: boolean;
}

export interface InsightItem {
  category: 'success' | 'warning' | 'info';
  title: string;
  points: string[];
}

export interface PlanItem {
  area: string;
  goals: string[];
}

export interface StatProps {
  label: string;
  value: string;
  trend?: string;
}
