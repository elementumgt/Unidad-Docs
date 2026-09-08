import { bilingual, list, paragraph, subtitle } from "../../shared/legal/documentBuilders.js";

export const privacyDocument = Object.freeze({
  kind: "privacy",
  title: bilingual("Política de Privacidad", "Privacy Policy"),
  eyebrow: bilingual("Privacidad por diseño", "Privacy by design"),
  summary: bilingual(
    "Esta política explica qué información procesa Unidad, para qué se utiliza y cómo puedes ejercer control sobre ella.",
    "This policy explains what information Unidad processes, why it is used, and how you can exercise control over it.",
  ),
  updated: bilingual("8 de septiembre de 2026", "September 8, 2026"),
  sections: [
    {
      id: "alcance",
      title: bilingual("1. Alcance y responsable", "1. Scope and controller"),
      blocks: [
        paragraph(
          "Esta Política de Privacidad se aplica al bot de Discord Unidad y a sus funciones dentro de los servidores donde se instala. El operador de Unidad determina los fines y medios del tratamiento descrito aquí.",
          "This Privacy Policy applies to the Unidad Discord bot and its features within servers where it is installed. Unidad’s operator determines the purposes and means of the processing described here.",
        ),
        paragraph(
          "Los administradores de cada servidor deciden qué módulos habilitar y pueden definir reglas adicionales para su comunidad. Discord trata información conforme a sus propias políticas, independientes de esta.",
          "Each server’s administrators decide which modules to enable and may establish additional rules for their community. Discord processes information under its own policies, independently from this one.",
        ),
      ],
    },
    {
      id: "datos",
      title: bilingual("2. Datos que procesamos", "2. Data we process"),
      blocks: [
        subtitle(
          "Identificadores y perfil de Discord",
          "Discord identifiers and profile",
          "Identificadores de usuario, servidor, canal, mensaje y rol; nombre visible, nombre de usuario, avatar y roles necesarios para ejecutar comandos y aplicar permisos.",
          "User, server, channel, message, and role identifiers; display name, username, avatar, and roles needed to run commands and enforce permissions.",
        ),
        subtitle(
          "Configuración y actividad comunitaria",
          "Configuration and community activity",
          "Preferencias del servidor, comandos personalizados, palabras moderadas, asignaciones de roles, XP, mensajes, niveles, economía, inventario, eventos, tickets, coaching, perfiles de juego, metadatos de canales de voz temporales, contadores y configuración de logs.",
          "Server preferences, custom commands, moderated words, role assignments, XP, messages, levels, economy, inventory, events, tickets, coaching, game profiles, temporary voice-channel metadata, counters, and log configuration.",
        ),
        subtitle(
          "Funciones sociales y contenido aportado",
          "Social features and submitted content",
          "Estados AFK y motivos, cumpleaños, relaciones familiares, perfiles sociales y favoritos, agradecimientos, atribución y recompensas de invitaciones, sorteos y participantes, sugerencias, reseñas, mensajes fijados dinámicamente, recordatorios, notas personales y contenido necesario para reportes o transcripciones de tickets.",
          "AFK status and reasons, birthdays, family relationships, social profiles and favorites, acknowledgements, invitation attribution and rewards, giveaways and participants, suggestions, reviews, sticky messages, reminders, personal notes, and content needed for reports or ticket transcripts.",
        ),
        subtitle(
          "Música",
          "Music",
          "Consultas o enlaces solicitados, título, autor, proveedor, duración, identificador del solicitante, estado de reproducción, marcas de tiempo, cola persistente e historial de reproducción.",
          "Requested queries or links, title, author, provider, duration, requester identifier, playback status, timestamps, persistent queue, and playback history.",
        ),
        subtitle(
          "Integraciones y operación",
          "Integrations and operations",
          "Nombres o identificadores de Twitch configurados por administradores; consultas enviadas voluntariamente a búsqueda, traducción, juegos, GIF o chatbot; y registros técnicos limitados, como cambios de canales, roles, emojis, stickers, eventos y servidor, errores, tiempos e identificadores necesarios para operar o diagnosticar el servicio.",
          "Twitch names or identifiers configured by administrators; queries voluntarily sent to search, translation, games, GIF, or chatbot features; and limited technical logs such as channel, role, emoji, sticker, event, and server changes, errors, timing, and identifiers needed to operate or diagnose the service.",
        ),
      ],
    },
    {
      id: "no-recopilamos",
      title: bilingual("3. Datos que no recopilamos", "3. Data we do not collect"),
      blocks: [
        list(
          [
            "Unidad no graba ni almacena audio de los canales de voz.",
            "No almacena de forma general el contenido de todos los mensajes. El contenido puede procesarse transitoriamente para moderación, comandos personalizados y funciones solicitadas.",
            "No solicita contraseñas de Discord, datos bancarios ni información de tarjetas.",
            "No vende datos personales ni crea perfiles publicitarios.",
          ],
          [
            "Unidad does not record or store audio from voice channels.",
            "It does not generally store the content of every message. Content may be processed transiently for moderation, custom commands, and requested features.",
            "It does not request Discord passwords, bank details, or payment-card information.",
            "It does not sell personal data or create advertising profiles.",
          ],
        ),
      ],
    },
    {
      id: "finalidades",
      title: bilingual("4. Cómo y por qué usamos los datos", "4. How and why we use data"),
      blocks: [
        list(
          [
            "Prestar las funciones solicitadas y mantener configuraciones por servidor.",
            "Aplicar permisos, prevenir abuso, moderar contenido y limitar solicitudes excesivas.",
            "Mantener sistemas de XP, economía, roles, tickets, coaching, eventos y voz.",
            "Gestionar perfiles sociales, cumpleaños, invitaciones, sorteos, sugerencias, recordatorios, starboard y juegos comunitarios.",
            "Buscar, reproducir y restaurar música, así como mostrar un historial solicitado por la comunidad.",
            "Enviar al proveedor configurado el contenido escrito en el canal de chatbot para generar una respuesta.",
            "Investigar errores, proteger la infraestructura y mejorar estabilidad y rendimiento.",
          ],
          [
            "Provide requested features and retain per-server settings.",
            "Enforce permissions, prevent abuse, moderate content, and rate-limit excessive requests.",
            "Operate XP, economy, roles, tickets, coaching, events, and voice systems.",
            "Manage social profiles, birthdays, invitations, giveaways, suggestions, reminders, starboard, and community games.",
            "Search, play, and restore music, and display community-requested history.",
            "Send content written in the configured chatbot channel to the configured provider to generate a response.",
            "Investigate errors, protect infrastructure, and improve stability and performance.",
          ],
        ),
        paragraph(
          "El tratamiento se basa en la prestación del servicio solicitado, el consentimiento expresado al ejecutar funciones opcionales y el interés legítimo de operar un servicio seguro. Los administradores deben informar a sus miembros cuando la normativa aplicable lo requiera.",
          "Processing is based on providing the requested service, consent expressed when using optional features, and the legitimate interest in operating a secure service. Administrators must notify members when applicable law requires it.",
        ),
      ],
    },
    {
      id: "terceros",
      title: bilingual("5. Proveedores y divulgación", "5. Providers and disclosure"),
      blocks: [
        paragraph(
          "Unidad utiliza servicios externos únicamente cuando son necesarios para una función. La información enviada se limita a lo requerido por cada integración.",
          "Unidad uses external services only when required for a feature. Information sent is limited to what each integration needs.",
        ),
        list(
          [
            "Discord, para recibir eventos, mostrar respuestas y administrar recursos autorizados.",
            "Proveedores musicales como YouTube, Spotify, SoundCloud y Apple Music, y el servicio Lavalink, para resolver búsquedas y reproducir contenido.",
            "Twitch, cuando un servidor configura avisos de creadores.",
            "El proveedor de chatbot configurado por el operador, de forma predeterminada un endpoint compatible con OpenAI, cuando un administrador habilita el canal y existe una clave de API.",
            "Proveedores de consultas solicitadas: GIPHY, Open Trivia DB, servicios de dilemas, discord.js, GitHub, npm, Apple iTunes, CoinGecko, disease.sh, MyMemory, Open-Meteo, Anagramica e is.gd, según el comando utilizado.",
            "Infraestructura administrada por el operador para PostgreSQL, Redis, registros y copias de seguridad.",
            "GitHub Pages, para publicar este centro legal; sus registros de acceso se rigen por la política de GitHub.",
          ],
          [
            "Discord, to receive events, display responses, and manage authorized resources.",
            "Music providers such as YouTube, Spotify, SoundCloud, and Apple Music, plus Lavalink, to resolve searches and play content.",
            "Twitch, when a server configures creator notifications.",
            "The chatbot provider configured by the operator, by default an OpenAI-compatible endpoint, when an administrator enables the channel and an API key is present.",
            "Providers for requested queries: GIPHY, Open Trivia DB, dilemma services, discord.js, GitHub, npm, Apple iTunes, CoinGecko, disease.sh, MyMemory, Open-Meteo, Anagramica, and is.gd, depending on the command used.",
            "Operator-managed infrastructure for PostgreSQL, Redis, logs, and backups.",
            "GitHub Pages, to publish this legal center; access logs are governed by GitHub’s policy.",
          ],
        ),
        paragraph(
          "Podemos divulgar información si una obligación legal válida lo exige o cuando sea razonablemente necesario para proteger usuarios, el servicio o terceros frente a fraude, abuso o riesgos de seguridad.",
          "We may disclose information when required by a valid legal obligation or when reasonably necessary to protect users, the service, or third parties against fraud, abuse, or security risks.",
        ),
      ],
    },
    {
      id: "retencion",
      title: bilingual("6. Conservación y eliminación", "6. Retention and deletion"),
      blocks: [
        paragraph(
          "La configuración, progresión, economía, historial musical, perfiles, relaciones, invitaciones, sorteos, sugerencias, recordatorios y demás registros funcionales se conservan mientras sean necesarios para operar la característica correspondiente o hasta que un administrador autorizado o el usuario solicite su eliminación. El estado AFK se elimina al volver a escribir; los datos temporales de caché y sesiones interactivas expiran automáticamente. Las copias de seguridad pueden conservar datos durante su ciclo operativo limitado.",
          "Configuration, progression, economy, music history, profiles, relationships, invitations, giveaways, suggestions, reminders, and other functional records are retained while needed for the corresponding feature or until an authorized administrator or user requests deletion. AFK status is removed when the user writes again; temporary cache and interactive-session data expire automatically. Backups may retain data for their limited operational lifecycle.",
        ),
        paragraph(
          "Retirar el bot de un servidor detiene nuevo tratamiento en ese servidor, pero no garantiza la eliminación inmediata de todos los registros existentes. El propietario del servidor puede solicitar la eliminación completa indicando el identificador del servidor.",
          "Removing the bot from a server stops new processing in that server but does not guarantee immediate deletion of every existing record. The server owner may request complete deletion by providing the server identifier.",
        ),
      ],
    },
    {
      id: "seguridad",
      title: bilingual("7. Seguridad", "7. Security"),
      blocks: [
        paragraph(
          "Aplicamos controles técnicos y organizativos razonables: acceso restringido, secretos fuera del código, conexiones autenticadas, aislamiento de servicios, permisos mínimos, límites de solicitudes, validación de entradas, copias de seguridad y registros operativos redactados.",
          "We apply reasonable technical and organizational safeguards: restricted access, secrets kept out of source code, authenticated connections, service isolation, least privilege, rate limits, input validation, backups, and redacted operational logs.",
        ),
        paragraph(
          "Ningún sistema conectado a Internet puede garantizar seguridad absoluta. Si detectamos un incidente material, actuaremos para contenerlo y notificaremos cuando la legislación aplicable lo exija.",
          "No Internet-connected system can guarantee absolute security. If we detect a material incident, we will act to contain it and provide notice where applicable law requires it.",
        ),
      ],
    },
    {
      id: "derechos",
      title: bilingual("8. Tus opciones y derechos", "8. Your choices and rights"),
      blocks: [
        list(
          [
            "Puedes dejar de utilizar comandos opcionales o abandonar el servidor.",
            "Los administradores pueden desactivar módulos y eliminar configuraciones mediante los comandos disponibles.",
            "Puedes solicitar acceso, corrección o eliminación de datos asociados a tu identificador de Discord.",
            "El propietario de un servidor puede solicitar la eliminación de los datos de toda su comunidad.",
          ],
          [
            "You may stop using optional commands or leave the server.",
            "Administrators may disable modules and remove settings using available commands.",
            "You may request access, correction, or deletion of data associated with your Discord identifier.",
            "A server owner may request deletion of their entire community’s data.",
          ],
        ),
        paragraph(
          "Para proteger a la comunidad, podemos pedir información suficiente para verificar tu identidad o autoridad antes de atender una solicitud. Algunas obligaciones legales o necesidades de seguridad pueden exigir conservar registros limitados.",
          "To protect the community, we may request enough information to verify your identity or authority before fulfilling a request. Some legal obligations or security needs may require limited records to be retained.",
        ),
      ],
    },
    {
      id: "menores",
      title: bilingual("9. Edad y transferencias", "9. Age and transfers"),
      blocks: [
        paragraph(
          "Unidad no está dirigido a menores que no tengan la edad mínima exigida para usar Discord en su país. Si crees que se procesaron datos de una persona que no cumple ese requisito, solicita su eliminación.",
          "Unidad is not directed at children below the minimum age required to use Discord in their country. If you believe data from someone below that age was processed, request its deletion.",
        ),
        paragraph(
          "Los proveedores utilizados pueden operar en otros países. Al usar el servicio, la información puede procesarse fuera de tu jurisdicción con las salvaguardas ofrecidas por dichos proveedores y la legislación aplicable.",
          "The providers used may operate in other countries. By using the service, information may be processed outside your jurisdiction under the safeguards offered by those providers and applicable law.",
        ),
      ],
    },
    {
      id: "contacto",
      title: bilingual("10. Cambios y contacto", "10. Changes and contact"),
      blocks: [
        paragraph(
          "Podemos actualizar esta política para reflejar cambios en el servicio, proveedores o requisitos legales. Publicaremos la nueva versión en esta página y actualizaremos la fecha indicada al inicio.",
          "We may update this policy to reflect changes to the service, providers, or legal requirements. We will publish the new version on this page and update the date shown above.",
        ),
        paragraph(
          "Para consultas de privacidad o solicitudes de datos, contacta al propietario de la aplicación en Discord: @bryanjosue_17. Incluye únicamente tu identificador de usuario o servidor y una descripción de la solicitud; nunca envíes contraseñas ni tokens.",
          "For privacy questions or data requests, contact the application owner on Discord: @bryanjosue_17. Include only your user or server identifier and a description of the request; never send passwords or tokens.",
        ),
      ],
    },
  ],
});

