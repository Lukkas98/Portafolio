import PageAnimate from "./components/pageAnimate";

export default function TemplateRoot({ children }) {
    return (
      <>
        <main className={`text-white grid items-center h-full`}>
          <PageAnimate>{children}</PageAnimate>
        </main>
      </>
    );
  }