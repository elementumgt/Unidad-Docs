import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import LibraryMusicRounded from "@mui/icons-material/LibraryMusicRounded";
import MenuBookRounded from "@mui/icons-material/MenuBookRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import TerminalRounded from "@mui/icons-material/TerminalRounded";
import {
  Alert,
  Chip,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import SiteLayout from "../../components/SiteLayout.jsx";
import {
  actionCount,
  commandCount,
  commandGroups,
  commandNavigationGroups,
  documentedSource,
} from "../content/commandDocs.js";
import { usePreferences } from "../../hooks/usePreferences.js";
import CommandCard from "../components/CommandCard.jsx";
import GuideCard from "../components/GuideCard.jsx";
import StatCard from "../components/StatCard.jsx";

const copy = {
  es: {
    eyebrow: "Referencia oficial",
    title: "Documentación de comandos",
    intro: "Referencia completa de los 59 comandos slash y sus 461 operaciones, generada desde las definiciones reales del bot.",
    source: "Código verificado",
    since: "cambios documentados desde",
    search: "Buscar comando, acción o función",
    noResults: "No hay comandos que coincidan con la búsqueda.",
    commands: "comandos",
    actions: "acciones documentadas",
    groups: "áreas funcionales",
    guide: "Guía esencial",
    quickTitle: "Cómo ejecutar un comando",
    quickBody: "Escribe / en Discord, selecciona Unidad y completa las opciones que Discord marque como obligatorias. Los valores entre corchetes en esta guía son opcionales.",
    permissionTitle: "Permisos y acceso",
    permissionBody: "Discord puede ocultar comandos si no tienes el permiso predeterminado. Algunas acciones también validan roles internos de Admin, Staff, DJ o Economía configurados por el servidor.",
    persistenceTitle: "Persistencia de música",
    persistenceBody: "La cola y el historial se guardan por servidor. Radio y soundboard usan la misma sesión Lavalink; otro canal de voz no puede modificar la cola activa. /stop realiza una limpieza intencional.",
    limitsTitle: "Límites y seguridad",
    limitsBody: "Los comandos aplican límites globales y por interacción. Música solo acepta proveedores autorizados; descargas de imágenes se restringen al CDN de Discord y las operaciones sensibles validan permisos nuevamente.",
    access: "Acceso",
    syntax: "Sintaxis",
    example: "Ejemplo",
    note: "Importante",
    results: "Resultados",
    parameters: "Parámetros",
    required: "Obligatorio",
    optional: "Opcional",
    noParameters: "Sin parámetros",
  },
  en: {
    eyebrow: "Official reference",
    title: "Command documentation",
    intro: "Complete reference for all 59 slash commands and 461 operations, generated from the bot's real definitions.",
    source: "Verified source",
    since: "changes documented since",
    search: "Search commands, actions, or features",
    noResults: "No commands match your search.",
    commands: "commands",
    actions: "documented actions",
    groups: "functional areas",
    guide: "Essential guide",
    quickTitle: "How to run a command",
    quickBody: "Type / in Discord, select Unidad, and complete the options Discord marks as required. Values inside brackets in this guide are optional.",
    permissionTitle: "Permissions and access",
    permissionBody: "Discord may hide commands when you lack their default permission. Some actions also validate the server's configured Admin, Staff, DJ, or Economy roles.",
    persistenceTitle: "Music persistence",
    persistenceBody: "Queue and history are stored per server. Radio and soundboard share the Lavalink session; another voice channel cannot change the active queue. /stop intentionally clears it.",
    limitsTitle: "Limits and safety",
    limitsBody: "Commands apply global and interaction limits. Music accepts approved providers only; image downloads are restricted to Discord's CDN, and sensitive operations revalidate permissions.",
    access: "Access",
    syntax: "Syntax",
    example: "Example",
    note: "Important",
    results: "Results",
    parameters: "Parameters",
    required: "Required",
    optional: "Optional",
    noParameters: "No parameters",
  },
};

const guideNavigation = {
  id: "guide",
  label: { es: "Guía", en: "Guide" },
  items: [
    { id: "overview", label: { es: "Resumen", en: "Overview" } },
    { id: "quick-start", label: { es: "Primeros pasos", en: "Quick start" } },
    { id: "permissions", label: { es: "Permisos", en: "Permissions" } },
    { id: "music-persistence", label: { es: "Persistencia musical", en: "Music persistence" } },
    { id: "limits", label: { es: "Límites", en: "Limits" } },
  ],
};

export default function DocsPage() {
  const { language } = usePreferences();
  const labels = copy[language];
  const [query, setQuery] = useState("");
  const navigationGroups = [guideNavigation, ...commandNavigationGroups()];

  const filteredGroups = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(language);
    if (!normalized) return commandGroups;
    return commandGroups
      .map((group) => ({
        ...group,
        commands: group.commands.filter((command) => [
          command.name,
          command.summary[language],
          command.access[language],
          ...command.usage.flatMap((usage) => [usage.syntax, usage.example, usage.description[language]]),
        ].join(" ").toLocaleLowerCase(language).includes(normalized)),
      }))
      .filter((group) => group.commands.length > 0);
  }, [language, query]);

  const visibleCount = filteredGroups.reduce((total, group) => total + group.commands.length, 0);

  return (
    <SiteLayout navigationGroups={navigationGroups} page="docs">
      <Container maxWidth="lg" className="py-7 sm:py-10 lg:py-12">
        <header id="overview" className="scroll-mt-5">
          <Chip color="primary" icon={<MenuBookRounded />} label={labels.eyebrow} variant="outlined" />
          <Typography component="h1" variant="h1" className="!mt-5 !text-3xl !leading-tight sm:!text-4xl xl:!text-5xl">{labels.title}</Typography>
          <Typography color="text.secondary" className="!mt-3 max-w-3xl !text-base !leading-7">{labels.intro}</Typography>
          <Typography color="text.secondary" className="!mt-2 !font-mono !text-xs">{labels.source}: {documentedSource.current.slice(0, 8)} · {labels.since}: {documentedSource.since.slice(0, 8)}</Typography>
          <div className="mt-6 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
            <StatCard value={commandCount} label={labels.commands} />
            <StatCard value={actionCount} label={labels.actions} />
            <StatCard value={commandGroups.length} label={labels.groups} />
          </div>
        </header>

        <section aria-labelledby="guide-heading" className="mt-10">
          <Typography id="guide-heading" component="h2" variant="h4" className="!mb-4 !font-black">{labels.guide}</Typography>
          <div className="grid gap-4 md:grid-cols-2">
            <GuideCard id="quick-start" icon={<TerminalRounded />} title={labels.quickTitle} body={labels.quickBody} />
            <GuideCard id="permissions" icon={<SecurityRounded />} title={labels.permissionTitle} body={labels.permissionBody} />
            <GuideCard id="music-persistence" icon={<LibraryMusicRounded />} title={labels.persistenceTitle} body={labels.persistenceBody} />
            <GuideCard id="limits" icon={<CheckCircleRounded />} title={labels.limitsTitle} body={labels.limitsBody} />
          </div>
        </section>

        <section className="mt-10" aria-label={labels.search}>
          <TextField
            fullWidth
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            inputProps={{ "aria-label": labels.search }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchRounded /></InputAdornment> }}
            className="glass-control rounded-xl [&_.MuiOutlinedInput-root]:!rounded-xl"
          />
          <Typography color="text.secondary" className="!mt-2 !text-xs">{labels.results}: {visibleCount}/{commandCount}</Typography>
        </section>

        <div className="mt-10 space-y-12">
          {filteredGroups.map((group) => (
            <section aria-labelledby={`group-${group.id}`} key={group.id}>
              <Typography id={`group-${group.id}`} component="h2" variant="h4" className="!font-black">{group.title[language]}</Typography>
              <Typography color="text.secondary" className="!mt-2 !mb-5">{group.description[language]}</Typography>
              <div className="space-y-5">
                {group.commands.map((command) => <CommandCard command={command} language={language} labels={labels} key={command.name} />)}
              </div>
            </section>
          ))}
          {filteredGroups.length === 0 && <Alert severity="info" className="!rounded-xl">{labels.noResults}</Alert>}
        </div>
      </Container>
    </SiteLayout>
  );
}
