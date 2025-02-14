// components/SkillCloud.tsx
import { h } from 'preact';
import { useState } from 'preact/hooks';
import type { SkillItem } from '../types.ts';
import SkillIcon from './SkillIcon.tsx';

interface SkillCloudProps {
  skills: SkillItem[];
}

const getPositions = (items: SkillItem[]) => {
  // Increase base radius to accommodate larger icons
  const baseRadius = 160; // Increased from 120
  const centerX = baseRadius;
  const centerY = baseRadius;

  return items.map((_, index) => {
    // Reduce items per circle for larger icons
    const itemsPerCircle = 6; // Reduced from 8
    const circleIndex = Math.floor(index / itemsPerCircle);
    const itemIndexInCircle = index % itemsPerCircle;

    // Increase spacing between circles
    const radius = baseRadius * (0.4 + circleIndex * 0.5); // Modified multipliers

    const angleStep = (2 * Math.PI) / itemsPerCircle;
    const angleOffset = circleIndex * (angleStep / 2);
    const angle = angleOffset + itemIndexInCircle * angleStep;

    // Add more randomness for organic feel
    const randomRadius = radius * (0.9 + Math.random() * 0.2);
    const x = centerX + randomRadius * Math.cos(angle);
    const y = centerY + randomRadius * Math.sin(angle);

    return { x, y };
  });
};

const SkillCloud = ({ skills }: SkillCloudProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<SkillItem['category'] | 'all'>('all');

  const categories = ['all', 'language', 'frontend', 'backend', 'tools', 'testing'] as const;

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div class="relative w-full max-w-5xl mx-auto px-4">
      {/* Category filters */}
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            class={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-primary-500 text-base-50'
                : 'bg-base-100 text-base-600 hover:bg-primary-100'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div class="flex flex-wrap justify-center gap-8">
        {filteredSkills.map((skill) => {
          const size = Math.max(16, Math.floor(skill.proficiency * 1.28)); // 16-128px range
          const isHovered = hoveredSkill === skill.text;

          return (
            <div
              key={skill.text}
              class={`transition-all duration-300 transform ${
                isHovered ? 'scale-110 z-10' : 'scale-100 z-0'
              }`}
              onMouseEnter={() => setHoveredSkill(skill.text)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div class="relative group">
                <SkillIcon
                  icon={skill.icon}
                  size={size}
                  isHovered={isHovered}
                />

                {/* Tooltip */}
                <div class={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-base-50
                  px-3 py-2 rounded shadow-lg border border-primary-100 whitespace-nowrap
                  transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <p class="text-sm font-mono text-base-700">{skill.text}</p>
                  <div class="mt-1 h-1.5 w-full bg-base-200 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-primary-500 rounded-full transition-all duration-300"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCloud;
