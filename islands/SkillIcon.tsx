import { h, ComponentType } from 'preact';
import clsx from 'clsx'

interface SkillIconProps {
  icon: ComponentType;
  size: number;
  isHovered: boolean;
  class?: string;
}

const SkillIcon = ({ icon: Icon, size, isHovered, class: className = '' }: SkillIconProps) => {
  // Calculate icon size - 60% of the container size
  const iconSize = Math.floor(size * 0.6);

  // Use inline styles for dynamic sizing
  const iconStyle = {
    width: `${iconSize}px`,
    height: `${iconSize}px`,
    fontSize: `${iconSize}px`,
  };

  return (
    <div
      class={clsx('relative transition-all duration-300', className)}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <div
        class={clsx(
          'absolute inset-0 rounded-full bg-base-50 border-2 transition-colors',
          isHovered
            ? 'border-secondary-500 shadow-lg shadow-secondary-100'
            : 'border-primary-200'
        )}
      />

      <div class="absolute inset-0 flex items-center justify-center">
        <div
          style={iconStyle}
          class={clsx(
            'text-primary-200 transition-colors',
            isHovered && 'text-secondary-400'
          )}
        >
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
