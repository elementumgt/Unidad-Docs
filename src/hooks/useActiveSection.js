import { useEffect, useState } from "react";

// Margen en píxeles para considerar que el contenedor llegó al final.
const BOTTOM_TOLERANCE = 4;

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  const signature = ids.join("|");

  useEffect(() => {
    const sectionIds = signature.split("|").filter(Boolean);
    const content = document.getElementById("main-content");

    // Las últimas secciones cortas nunca cruzan la franja observada: al llegar
    // al final del contenido se activa la última que exista.
    function lastIdIfAtBottom() {
      if (!content || content.scrollHeight <= content.clientHeight) return null;
      if (content.scrollTop + content.clientHeight < content.scrollHeight - BOTTOM_TOLERANCE) return null;
      return [...sectionIds].reverse().find((id) => document.getElementById(id)) ?? null;
    }

    const observer = new IntersectionObserver((entries) => {
      const last = lastIdIfAtBottom();
      if (last) return setActiveId(last);
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveId(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0.01 });

    function onScroll() {
      const last = lastIdIfAtBottom();
      if (last) setActiveId(last);
    }

    // Al buscar, las secciones se desmontan y vuelven a montarse como nodos
    // nuevos: se vuelve a observar lo que exista en ese momento.
    function observeCurrent() {
      observer.disconnect();
      sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
        .forEach((section) => observer.observe(section));
    }

    observeCurrent();
    const mutations = content ? new MutationObserver(observeCurrent) : null;
    mutations?.observe(content, { childList: true, subtree: true });
    content?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      content?.removeEventListener("scroll", onScroll);
      mutations?.disconnect();
      observer.disconnect();
    };
  }, [signature]);

  return activeId;
}
