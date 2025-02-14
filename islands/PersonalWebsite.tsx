// PersonalWebsite.tsx
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { skillsData } from './data/skills.ts';
import { timelineData } from './data/timeline.ts';
import { socialLinks } from './data/social.ts';
import { navItems } from './data/navigation.ts';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
  Layout,
  Cpu,
  Palette,
  Server,
  Database,
  Globe,
  Network,
  GitBranch,
  Container,
  Terminal,
  Cloud
} from 'lucide-preact';
import type { TimelineItemProps, NavItem, SocialLink } from './types.ts';
import SkillCloud from './SkillCloud.tsx';

const TimelineItemComponent = ({ year, title, description, isVisible }: TimelineItemProps) => (
  <div
    class={`transition-all duration-1000 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}
  >
    <div class="flex gap-6 mb-12 group">
      <div class="text-sm font-mono text-primary-600 w-20 text-right pt-2">
        {year}
      </div>
      <div class="relative flex-1">
        <div class="absolute left-0 top-0 -ml-3 mt-3 w-6 h-6 bg-base-50 rounded-full border-2 border-primary-500 group-hover:border-secondary-500 flex items-center justify-center">
          <div class="w-2 h-2 bg-primary-500 rounded-full group-hover:bg-secondary-500"></div>
        </div>
        <div class="absolute left-0 top-0 -ml-[0.5px] mt-9 w-px h-16 bg-gradient-to-b from-primary-500 to-transparent"></div>
        <div class="ml-8 bg-base-50 p-4 rounded shadow-lg border border-primary-200 group-hover:border-secondary-200 transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <GitBranch class="w-4 h-4 text-primary-600 group-hover:text-secondary-600" />
            <h3 class="font-mono text-lg font-semibold text-primary-600 group-hover:text-secondary-600">
              {title}
            </h3>
          </div>
          <p class="text-base-600 font-mono text-sm">{description}</p>
          <div class="mt-3 text-xs font-mono text-base-400">
            commit {Math.random().toString(16).slice(2, 10)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PersonalWebsite = () => {
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const items = document.querySelectorAll('[data-timeline-item]');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        setVisibleItems(prev => ({ ...prev, [index]: isVisible }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div class="bg-base-50">
      {/* Hero Section */}
      <section class="relative h-screen flex items-center justify-center">
        <nav class="absolute top-8 right-8 z-20">
          <div class="flex items-center gap-6">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                class="text-primary-600 hover:text-secondary-600 transition-colors group relative"
                aria-label={label}
              >
                <Icon class="w-6 h-6" />
                <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </nav>

        <div class="absolute inset-0 z-0">
          <img
            src="/background.jpg"
            alt="Background"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-base-50/55 to-base-100/95"></div>
        </div>

        <div class="relative z-10 text-center px-4">
          <div class="flex flex-col items-center">
            <div class="w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-primary-400 shadow-lg">
              <img
                src="/jindra.jpg"
                alt="Profile"
                class="w-full h-full object-cover"
              />
            </div>
            <h1 class="text-5xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Ahoj, jsem Jindra! 👋
            </h1>
            <p class="text-2xl mb-6 text-base-700 font-mono">
              TypeScript & Deno Developer
            </p>
            <p class="max-w-xl text-lg text-base-600 font-mono">
              S nadšením tvořím moderní webové aplikace a sdílím své zkušenosti
            </p>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          class={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary-500 transition-opacity duration-500 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          } hover:text-secondary-500`}
        >
          <ChevronDown class="w-8 h-8 animate-bounce" />
        </button>
      </section>

      {/* Skills Section */}
<section id="skills" class="bg-gradient-to-b from-base-50 to-base-100 py-24">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
      Technologie & Dovednosti
    </h2>

    <SkillCloud skills={skillsData} />

    <p class="text-center mt-12 text-base-600 font-mono">
      Velikost ikon reprezentuje úroveň zkušeností s danou technologií
    </p>
  </div>
</section>

      {/* Timeline Section */}
      <section id="timeline" class="bg-base-100 py-24">
        <div class="max-w-4xl mx-auto px-4">
          <div class="flex items-center justify-between mb-16">
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              git log --oneline
            </h2>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                <span class="text-base-500 text-sm">main</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-secondary-500"></div>
                <span class="text-base-500 text-sm">feature</span>
              </div>
            </div>
          </div>
          <div class="relative font-mono">
            <div class="absolute left-[7.5rem] top-0 bottom-0 w-px bg-primary-100"></div>
            <div class="space-y-2">
              {timelineData.map((item, index) => (
                <div key={item.year} data-timeline-item>
                  <TimelineItemComponent
                    {...item}
                    isVisible={visibleItems[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="bg-base-50 py-24">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            Pojďme spolupracovat
          </h2>
          <p class="text-lg text-base-600 mb-12">
            Máte zajímavý projekt nebo nabídku? Rád si o tom popovídám.
          </p>
          <div class="flex justify-center gap-8">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                class="flex items-center gap-2 text-primary-600 hover:text-secondary-600 transition-colors"
              >
                <Icon class="w-5 h-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-base-50 border-t border-primary-100 py-8">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <p class="text-slate-500">
            © {new Date().getFullYear()} Jindra. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
