import { readSetting, saveSetting } from "../lib/storage.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePreferences } from "../hooks/usePreferences.js";
import AppSidebar from "./AppSidebar.jsx";
import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";

// La primera carga conserva el foco del navegador (el enlace para saltar al
// contenido debe seguir siendo lo primero); las navegaciones posteriores lo
// llevan al contenido principal, como haría una carga de página completa.
let hasNavigated = false;

function targetFromHash(hash) {
  if (!hash || hash === "#") return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function useRouteFocusAndHash() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;
    // Las páginas se cargan de forma diferida: cuando el navegador intentó
    // seguir el #ancla, el elemento aún no existía. Se resuelve al montar.
    const target = targetFromHash(window.location.hash);
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
    else main.scrollTo({ top: 0, behavior: "instant" });
    if (hasNavigated) main.focus({ preventScroll: true });
    hasNavigated = true;
  }, [pathname]);
}

export default function SiteLayout({ children, navigationGroups = [], page }) {
  const { language } = usePreferences();
  const [collapsed, setCollapsed] = useState(() => readSetting("unidad-sidebar-collapsed") === "true");
  const [mobileOpen, setMobileOpen] = useState(false);
  useRouteFocusAndHash();

  function toggleCollapsed() {
    setCollapsed((current) => {
      const next = !current;
      saveSetting("unidad-sidebar-collapsed", String(next));
      return next;
    });
  }

  return (
    <div className="flex h-dvh min-h-[520px] w-full flex-col overflow-hidden">
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:fixed! focus:left-3 focus:top-3 focus:z-[2000] focus:rounded-lg focus:px-4 focus:py-2 focus:font-bold focus:shadow-lg"
      >
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <div className="page-background" aria-hidden="true" />
      <SiteHeader collapsed={collapsed} onOpenMobile={() => setMobileOpen(true)} onToggleCollapsed={toggleCollapsed} page={page} />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <AppSidebar collapsed={collapsed} mobileOpen={mobileOpen} navigationGroups={navigationGroups} onCloseMobile={() => setMobileOpen(false)} page={page} />
        <main id="main-content" className="content-scroll min-w-0 flex-1 overflow-y-auto focus:outline-none" tabIndex="-1">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
