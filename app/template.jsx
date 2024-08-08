import AnimatedBg from '@/components/backgroud/animatedBg';
import dynamic from 'next/dynamic';

const AnimateBg = dynamic(() => AnimatedBg, { ssr: false });

export default function TemplateRoot({ children }) {
  return (
    <>
      <main className={`text-white grid items-center h-full`}>
        <AnimateBg />
        {children}
      </main>
    </>
  );
}
