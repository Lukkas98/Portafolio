"use client";
import { AnimatePresence } from "framer-motion";
import Star from "./components/animates/backgroud/star";

export default function TemplateRoot({ children }) {
  return (
    <AnimatePresence>
      <main className={`text-white grid items-center h-full`}>
        <div className="grid grid-cols-3 fixed top-0 left-0 h-full w-full place-items-center -z-50">
          {Array(9)
            .fill()
            .map((_, i) => (
              <Star key={i} />
            ))}
        </div>
        {children}
      </main>
    </AnimatePresence>
  );
}
