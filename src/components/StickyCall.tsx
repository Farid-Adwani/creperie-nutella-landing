import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export function StickyCall() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:24404005"
      aria-label="Appeler la Crêperie Nutella"
      className={`fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-rouge px-5 py-4 font-semibold text-cream shadow-xl shadow-cocoa/25 transition-all duration-500 hover:bg-chocolate ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <span className="pulse-ring relative grid size-6 place-items-center">
        <Phone className="size-5" />
      </span>
      <span className="hidden sm:inline">24 404 005</span>
    </a>
  );
}
