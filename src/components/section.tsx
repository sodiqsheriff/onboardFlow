import type { ReactNode } from 'react';
import MotionFadeIn from './motionFadeIn';
interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Section = ({ children, className = '', delay = 0 }: SectionProps) => {
  return (
    <MotionFadeIn delay={delay}>
      <section className={`py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    </MotionFadeIn>
  );
};

export default Section;