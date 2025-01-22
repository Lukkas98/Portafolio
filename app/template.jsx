"use client";
import dynamic from "next/dynamic";

const AnimateBg = dynamic(() => import("@/components/backgroud/animatedBg"), {
  ssr: false,
  loading: () => null,
});

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
