import type { ComponentType } from 'preact';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TimelineItemProps extends TimelineItem {
  isVisible: boolean;
}

export interface NavItem {
  id: string;
  icon: React.FC;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: React.FC;
  label: string;
}


export interface SkillItem {
  icon: ComponentType<any>;
  text: string;
  proficiency: number; // 0-100
  category: 'language' | 'frontend' | 'backend' | 'tools' | 'testing';
}
