import { Code2, GitBranch, Mail } from 'lucide-preact';
import type { NavItem } from '../types.ts';

export const navItems: NavItem[] = [
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'timeline', icon: GitBranch, label: 'Timeline' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];
