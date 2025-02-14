import { Mail, Github, Linkedin } from 'lucide-preact';
import type { SocialLink } from '../types.ts';

export const socialLinks: SocialLink[] = [
  { href: 'mailto:jindra@example.com', icon: Mail, label: 'Email' },
  { href: 'https://github.com/jindra', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jindra', icon: Linkedin, label: 'LinkedIn' }
];
