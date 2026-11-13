import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  const signature = ids.join("|");

  useEffect(() => {
    const sectionIds = signature.split("|").filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveId(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0.01 });

    // Al buscar, las secciones se desmontan y vuelven a montarse como nodos
    // nuevos: se vuelve a observar lo que exista en ese momento.
    function observeCurrent() {
      observer.disconnect();
      sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
        .forEach((section) => observer.observe(section));
    }

    observeCurrent();
    const content = document.getElementById("main-content");
    const mutations = content ? new MutationObserver(observeCurrent) : null;
    mutations?.observe(content, { childList: true, subtree: true });
    return () => {
      mutations?.disconnect();
      observer.disconnect();
    };
  }, [signature]);

  return activeId;
}
