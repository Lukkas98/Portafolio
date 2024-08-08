import dynamic from "next/dynamic";
import AnimatedBg from "./components/animates/backgroud/animatedBg";

const AnimateBg = dynamic(() => AnimatedBg, { ssr: false })

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
