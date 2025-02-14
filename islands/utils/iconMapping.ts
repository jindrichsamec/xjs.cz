// utils/iconMapping.ts
import {
  Code2,
  Braces,
  FileJson,
  Layout,
  Palette,
  Cpu,
  Server,
  Globe,
  Database,
  Network,
  GitBranch,
  Container,
  Terminal,
  Cloud,
  Binary
} from 'lucide-preact';
import type { IconType } from '../types.ts';

export const iconMap: Record<IconType, typeof Code2> = {
  'code': Code2,
  'braces': Braces,
  'fileJson': FileJson,
  'layout': Layout,
  'palette': Palette,
  'cpu': Cpu,
  'server': Server,
  'globe': Globe,
  'database': Database,
  'network': Network,
  'gitBranch': GitBranch,
  'container': Container,
  'terminal': Terminal,
  'cloud': Cloud,
  'binary': Binary
};
