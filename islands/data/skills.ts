// data/skills.ts
import type { SkillItem } from '../types.ts';

import * as icons from 'react-icons/si'

export const skillsData: SkillItem[] = [
  { icon: icons.SiTypescript, text: 'TypeScript', proficiency: 100, category: 'language' },
  { icon: icons.SiJavascript, text: 'JavaScript', proficiency: 100, category: 'language' },
  { icon: icons.SiReact, text: 'React', proficiency: 100, category: 'frontend' },
  // { icon: icons.SiReactquery, text: 'TanstackQuery', proficiency: 100, category: 'frontend' },
  // { icon: icons.SiFresh, text: 'Fresh', proficiency: 20, category: 'frontend' },
  { icon: icons.SiTailwindcss, text: 'Tailwind CSS', proficiency: 10, category: 'frontend' },
  { icon: icons.SiDeno, text: 'Deno', proficiency: 80, category: 'backend' },
  { icon: icons.SiPostgresql, text: 'PostgreSQL', proficiency: 60, category: 'backend' },
  { icon: icons.SiGraphql, text: 'GraphQL', proficiency: 50, category: 'backend' },
  { icon: icons.SiGit, text: 'Git', proficiency: 100, category: 'tools' },
  { icon: icons.SiDocker, text: 'Docker', proficiency: 70, category: 'tools' },
  { icon: icons.SiLinux, text: 'Linux', proficiency: 80, category: 'tools' },
  // { icon: icons.SiAmazonwebservices, text: 'AWS', proficiency: 75, category: 'tools' },
  { icon: icons.SiJenkins, text: 'Jenkins', proficiency: 75, category: 'tools' },
  { icon: icons.SiHtml5, text: 'HTML5', proficiency: 90, category: 'frontend' },
  { icon: icons.SiCss3, text: 'CSS3', proficiency: 60, category: 'frontend' },
  { icon: icons.SiNodedotjs, text: 'Node.js', proficiency: 100, category: 'backend' },
  { icon: icons.SiDeno, text: 'Deno.js', proficiency: 80, category: 'backend' },
  { icon: icons.SiPhp, text: 'PHP', proficiency: 70, category: 'language' },
  { icon: icons.SiPython, text: 'Python', proficiency: 50, category: 'language' },
  { icon: icons.SiApachegroovy, text: 'Groovy', proficiency: 40, category: 'language' },
  { icon: icons.SiRuby, text: 'Ruby', proficiency: 40, category: 'language' },
  { icon: icons.SiAnsible, text: 'Ansible', proficiency: 70, category: 'tools' },
  { icon: icons.SiStorybook, text: 'Storybook', proficiency: 70, category: 'tools' },

  // { icon: icons.SiPlaywright, text: 'Playwright', proficiency: 70, category: 'testing' },
  { icon: icons.SiJest, text: 'Jest', proficiency: 90, category: 'testing' },
];
