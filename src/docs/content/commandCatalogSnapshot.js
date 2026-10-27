// Generated from bot-unidad command builders. Run npm run docs:sync to update.
export const commandCatalogSnapshot = {
  "sourceCommit": "e85b3e8a8a5159aaee89d7bc965b27fcb231fd5a",
  "referenceCommit": "125b0311bdd0ba7e95a12804e31f6ba626e6f407",
  "categories": [
    {
      "id": "inicio",
      "title": {
        "es": "Primeros pasos",
        "en": "Getting started"
      },
      "description": {
        "es": "Ayuda, estado, información del servidor, instalación y notas personales.",
        "en": "Help, status, server information, installation, and personal notes."
      },
      "commands": [
        "help",
        "ping",
        "bot",
        "invite",
        "guild",
        "notepad"
      ]
    },
    {
      "id": "configuracion",
      "title": {
        "es": "Configuración",
        "en": "Configuration"
      },
      "description": {
        "es": "Asistentes, módulos y configuración operativa del servidor.",
        "en": "Setup assistants, modules, and operational server configuration."
      },
      "commands": [
        "setup",
        "autosetup",
        "admin",
        "config",
        "module"
      ]
    },
    {
      "id": "moderacion",
      "title": {
        "es": "Moderación y seguridad",
        "en": "Moderation and security"
      },
      "description": {
        "es": "Sanciones, AutoMod, anuncios y canales de reporte.",
        "en": "Sanctions, AutoMod, announcements, and report channels."
      },
      "commands": [
        "moderation",
        "automod",
        "announcement",
        "report"
      ]
    },
    {
      "id": "comunidad",
      "title": {
        "es": "Comunidad",
        "en": "Community"
      },
      "description": {
        "es": "Identidad social, eventos, invitaciones, soporte y contenido persistente.",
        "en": "Social identity, events, invitations, support, and persistent community content."
      },
      "commands": [
        "afk",
        "birthdays",
        "family",
        "profile",
        "thanks",
        "suggestions",
        "stickymessages",
        "giveaway",
        "invites",
        "event",
        "creator",
        "coaching",
        "scrim",
        "ticket"
      ]
    },
    {
      "id": "progresion",
      "title": {
        "es": "Progresión y economía",
        "en": "Progression and economy"
      },
      "description": {
        "es": "XP, mensajes, recompensas, saldos, tienda y casino transaccional.",
        "en": "XP, messages, rewards, balances, shop, and transactional casino."
      },
      "commands": [
        "nivel",
        "messages",
        "misiones",
        "economy",
        "casino"
      ]
    },
    {
      "id": "musica",
      "title": {
        "es": "Música y voz",
        "en": "Music and voice"
      },
      "description": {
        "es": "Lavalink, cola durable, radio, sonidos y actividades de voz.",
        "en": "Lavalink, durable queue, radio, sounds, and voice activities."
      },
      "commands": [
        "play",
        "music",
        "queue",
        "history",
        "seek",
        "skip",
        "stop",
        "volume",
        "radio",
        "soundboard",
        "activities"
      ]
    },
    {
      "id": "contenido",
      "title": {
        "es": "Juegos, imágenes y herramientas",
        "en": "Games, images, and tools"
      },
      "description": {
        "es": "Minijuegos interactivos, servidor de Minecraft, plantillas visuales, búsqueda y utilidades.",
        "en": "Interactive minigames, Minecraft server, visual templates, search, and utilities."
      },
      "commands": [
        "fun",
        "games",
        "minecraft",
        "images",
        "search",
        "tools"
      ]
    },
    {
      "id": "roles-voz",
      "title": {
        "es": "Roles, salas y contadores",
        "en": "Roles, rooms, and counters"
      },
      "description": {
        "es": "Autoasignación, comandos personalizados, lobbies y estadísticas visibles.",
        "en": "Self-assignment, custom commands, lobbies, and visible statistics."
      },
      "commands": [
        "selfrole",
        "cmd",
        "trigger",
        "lobby",
        "rank",
        "voice",
        "serverstats"
      ]
    }
  ],
  "access": {
    "admin": {
      "es": "Administrador interno + Administrar servidor.",
      "en": "Internal Admin + Manage Server."
    },
    "autosetup": {
      "es": "Administrador interno + Administrar servidor.",
      "en": "Internal Admin + Manage Server."
    },
    "cmd": {
      "es": "Staff + Administrar servidor.",
      "en": "Staff + Manage Server."
    },
    "config": {
      "es": "Administrador interno + Administrar servidor.",
      "en": "Internal Admin + Manage Server."
    },
    "lobby": {
      "es": "Administrador interno + Administrar servidor.",
      "en": "Internal Admin + Manage Server."
    },
    "module": {
      "es": "Administrador interno + Administrar servidor.",
      "en": "Internal Admin + Manage Server."
    },
    "nivel": {
      "es": "Consulta pública; cambios de XP y recompensas requieren Staff + Administrar servidor.",
      "en": "Public viewing; XP and reward changes require Staff + Manage Server."
    },
    "rank": {
      "es": "Administrador interno + Administrar servidor.",
      "en": "Internal Admin + Manage Server."
    },
    "selfrole": {
      "es": "Administrador interno + Gestionar roles.",
      "en": "Internal Admin + Manage Roles."
    },
    "serverstats": {
      "es": "Administrador interno + Gestionar canales.",
      "en": "Internal Admin + Manage Channels."
    },
    "setup": {
      "es": "Permiso Administrador de Discord.",
      "en": "Discord Administrator permission."
    },
    "minecraft": {
      "es": "estado, ip y jugadores: todos. config: Administrador interno. gestionar: Administrador interno o el rol configurado; comando solo Administrador.",
      "en": "status, ip and players: everyone. config: Internal Admin. manage: Internal Admin or the configured role; console command Admin only."
    },
    "moderation": {
      "es": "Staff y permiso nativo correspondiente; respeta jerarquías.",
      "en": "Staff and the matching native permission; role hierarchy is enforced."
    },
    "automod": {
      "es": "Staff; configurar requiere permisos de moderación.",
      "en": "Staff; configuration requires moderation permissions."
    },
    "announcement": {
      "es": "Staff + Gestionar mensajes.",
      "en": "Staff + Manage Messages."
    },
    "giveaway": {
      "es": "Staff + Gestionar eventos.",
      "en": "Staff + Manage Events."
    },
    "stickymessages": {
      "es": "Staff + Gestionar mensajes.",
      "en": "Staff + Manage Messages."
    },
    "activities": {
      "es": "Miembro en un canal de voz; Unidad necesita Crear invitaciones.",
      "en": "Member in voice; Unidad needs Create Invite."
    },
    "play": {
      "es": "Miembro en voz; módulo musical activo.",
      "en": "Member in voice; music module enabled."
    },
    "music": {
      "es": "Mismo canal de voz + miembro verificado, DJ, Staff o Admin.",
      "en": "Same voice channel + verified member, DJ, Staff, or Admin."
    },
    "queue": {
      "es": "Consulta pública; modificar exige acceso musical y mismo canal.",
      "en": "Public viewing; changes require music access and the same voice channel."
    },
    "radio": {
      "es": "Mismo canal de voz y reglas del reproductor musical.",
      "en": "Same voice channel and music-player rules."
    },
    "soundboard": {
      "es": "Mismo canal de voz y reglas del reproductor musical.",
      "en": "Same voice channel and music-player rules."
    },
    "seek": {
      "es": "Mismo canal de voz + acceso musical.",
      "en": "Same voice channel + music access."
    },
    "skip": {
      "es": "Mismo canal de voz + acceso musical.",
      "en": "Same voice channel + music access."
    },
    "stop": {
      "es": "Mismo canal de voz + acceso musical.",
      "en": "Same voice channel + music access."
    },
    "volume": {
      "es": "Mismo canal de voz + acceso musical.",
      "en": "Same voice channel + music access."
    }
  },
  "defaultAccess": {
    "es": "Todos los miembros; las acciones sensibles vuelven a validar permisos y roles.",
    "en": "All members; sensitive actions revalidate permissions and roles."
  },
  "commands": [
    {
      "name": "activities",
      "description": "Inicia una actividad de Discord en voz.",
      "descriptionEn": "Starts a Discord activity in voice.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Inicia una actividad de Discord en voz.",
          "descriptionEn": "Starts a Discord activity in voice.",
          "parameters": [
            {
              "name": "activity",
              "description": "Actividad",
              "descriptionEn": "Activity",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Betrayal.io",
                  "nameEn": "Betrayal.io",
                  "value": "betrayal"
                },
                {
                  "name": "Checkers in the Park",
                  "nameEn": "Checkers in the Park",
                  "value": "checkers"
                },
                {
                  "name": "Chess in the Park",
                  "nameEn": "Chess in the Park",
                  "value": "chess"
                },
                {
                  "name": "Doodle Crew",
                  "nameEn": "Doodle Crew",
                  "value": "doodlecrew"
                },
                {
                  "name": "Fishington.io",
                  "nameEn": "Fishington.io",
                  "value": "fishington"
                },
                {
                  "name": "Letter League",
                  "nameEn": "Letter League",
                  "value": "letterleague"
                },
                {
                  "name": "Ocho",
                  "nameEn": "Ocho",
                  "value": "ocho"
                },
                {
                  "name": "Poker Night",
                  "nameEn": "Poker Night",
                  "value": "poker"
                },
                {
                  "name": "Sketch Heads",
                  "nameEn": "Sketch Heads",
                  "value": "sketchheads"
                },
                {
                  "name": "Spell Cast",
                  "nameEn": "Spell Cast",
                  "value": "spellcast"
                },
                {
                  "name": "Word Snacks",
                  "nameEn": "Word Snacks",
                  "value": "wordsnacks"
                },
                {
                  "name": "Watch Together",
                  "nameEn": "Watch Together",
                  "value": "watchtogether"
                }
              ],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "admin",
      "description": "Comandos de administración del servidor",
      "descriptionEn": "Server administration commands",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "setroleschannel"
          ],
          "description": "Canal donde se publica el panel de selección de roles",
          "descriptionEn": "Channel where the role selection panel is posted",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "sendverifypanel"
          ],
          "description": "Envía el panel de verificación al canal configurado",
          "descriptionEn": "Sends the verification panel to the configured channel",
          "parameters": []
        },
        {
          "path": [
            "setticketscategory"
          ],
          "description": "Categoría donde se crearán los tickets",
          "descriptionEn": "Category where tickets will be created",
          "parameters": [
            {
              "name": "categoria",
              "description": "Categoría de Discord",
              "descriptionEn": "Discord category",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                4
              ]
            }
          ]
        },
        {
          "path": [
            "setstaffrole"
          ],
          "description": "Rol que atiende los tickets (Staff)",
          "descriptionEn": "Role that handles tickets (Staff)",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de Staff",
              "descriptionEn": "Staff role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "sendembedpanel"
          ],
          "description": "Envía el panel del Creador de Embeds al canal especificado",
          "descriptionEn": "Sends the Embed Builder panel to the specified channel",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "eco-config"
          ],
          "description": "Configura el nombre y emoji de la moneda del servidor.",
          "descriptionEn": "Sets the name and emoji of the server currency.",
          "parameters": [
            {
              "name": "nombre",
              "description": "Nombre de la moneda",
              "descriptionEn": "Currency name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji de la moneda",
              "descriptionEn": "Currency emoji",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setlogchannel"
          ],
          "description": "Configura un canal de logs del bot",
          "descriptionEn": "Sets a bot log channel",
          "parameters": [
            {
              "name": "tipo",
              "description": "Tipo de log",
              "descriptionEn": "Log type",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Moderación (palabras, mensajes)",
                  "nameEn": "Moderation (words, messages)",
                  "value": "mod"
                },
                {
                  "name": "Tickets (abiertos/cerrados)",
                  "nameEn": "Tickets (opened/closed)",
                  "value": "tickets"
                },
                {
                  "name": "General (todos los demás eventos)",
                  "nameEn": "General (all other events)",
                  "value": "general"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "canal",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "setwelcomecolor"
          ],
          "description": "Color del embed de bienvenida (hex)",
          "descriptionEn": "Welcome embed color (hex)",
          "parameters": [
            {
              "name": "color",
              "description": "Color hex, ej: #FF6B35",
              "descriptionEn": "Hex color, e.g. #FF6B35",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 7,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setwelcomeimage"
          ],
          "description": "Imagen o GIF del embed de bienvenida (URL)",
          "descriptionEn": "Welcome embed image or GIF (URL)",
          "parameters": [
            {
              "name": "url",
              "description": "URL de la imagen",
              "descriptionEn": "Image URL",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setxpcolor"
          ],
          "description": "Color del embed de subida de nivel (hex)",
          "descriptionEn": "Level-up embed color (hex)",
          "parameters": [
            {
              "name": "color",
              "description": "Color hex, ej: #2ECC71",
              "descriptionEn": "Hex color, e.g. #2ECC71",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 7,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "seteconomyrole"
          ],
          "description": "Rol que puede gestionar la economía (addbalance, tienda)",
          "descriptionEn": "Role that can manage the economy (addbalance, shop)",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de economía",
              "descriptionEn": "Economy role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setrolespanelgame"
          ],
          "description": "Rol del juego principal que activa el panel de perfil avanzado",
          "descriptionEn": "Main game role that enables the advanced profile panel",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol del juego principal del panel",
              "descriptionEn": "Panel's main game role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setcoachingcorerole"
          ],
          "description": "Rol \"Coach general\" que dispara el menú de posiciones de coaching",
          "descriptionEn": "\"General coach\" role that triggers the coaching positions menu",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de coach general",
              "descriptionEn": "General coach role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setadminrole"
          ],
          "description": "Rol que otorga acceso de administrador al bot",
          "descriptionEn": "Role that grants admin access to the bot",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de administrador",
              "descriptionEn": "Admin role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "afk",
      "description": "Gestiona tu estado ausente.",
      "descriptionEn": "Manages your away status.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "set"
          ],
          "description": "Marca tu estado como ausente.",
          "descriptionEn": "Sets your status as away.",
          "parameters": [
            {
              "name": "reason",
              "description": "Motivo",
              "descriptionEn": "Reason",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista miembros ausentes.",
          "descriptionEn": "Lists away members.",
          "parameters": []
        }
      ]
    },
    {
      "name": "announcement",
      "description": "Crea y edita anuncios.",
      "descriptionEn": "Creates and edits announcements.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "create"
          ],
          "description": "Publica un anuncio.",
          "descriptionEn": "Posts an announcement.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            },
            {
              "name": "message",
              "description": "Contenido",
              "descriptionEn": "Content",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 4000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "edit"
          ],
          "description": "Edita un anuncio publicado por el bot.",
          "descriptionEn": "Edits an announcement posted by the bot.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            },
            {
              "name": "id",
              "description": "ID del mensaje",
              "descriptionEn": "Message ID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Nuevo contenido",
              "descriptionEn": "New content",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 4000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "automod",
      "description": "Configura la moderación automática.",
      "descriptionEn": "Configures automatic moderation.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "antiinvite"
          ],
          "description": "Bloquea invitaciones de Discord.",
          "descriptionEn": "Blocks Discord invites.",
          "parameters": [
            {
              "name": "active",
              "description": "Activar o desactivar",
              "descriptionEn": "Enable or disable",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "antilinks"
          ],
          "description": "Bloquea enlaces externos.",
          "descriptionEn": "Blocks external links.",
          "parameters": [
            {
              "name": "active",
              "description": "Activar o desactivar",
              "descriptionEn": "Enable or disable",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "antispam"
          ],
          "description": "Bloquea ráfagas de mensajes.",
          "descriptionEn": "Blocks message bursts.",
          "parameters": [
            {
              "name": "active",
              "description": "Activar o desactivar",
              "descriptionEn": "Enable or disable",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "linkschannel"
          ],
          "description": "Gestiona los canales exentos de antiinvite y antilinks.",
          "descriptionEn": "Manages the channels exempt from antiinvite and antilinks.",
          "parameters": [
            {
              "name": "type",
              "description": "Acción",
              "descriptionEn": "Action",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Añadir",
                  "nameEn": "Add",
                  "value": "add"
                },
                {
                  "name": "Quitar",
                  "nameEn": "Remove",
                  "value": "remove"
                },
                {
                  "name": "Listar",
                  "nameEn": "List",
                  "value": "list"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal permitido",
              "descriptionEn": "Allowed channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "blacklist",
            "display"
          ],
          "description": "Muestra la lista.",
          "descriptionEn": "Shows the list.",
          "parameters": []
        },
        {
          "path": [
            "blacklist",
            "add"
          ],
          "description": "Añade una palabra.",
          "descriptionEn": "Adds a word.",
          "parameters": [
            {
              "name": "word",
              "description": "Palabra",
              "descriptionEn": "Word",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "blacklist",
            "remove"
          ],
          "description": "Elimina una palabra.",
          "descriptionEn": "Removes a word.",
          "parameters": [
            {
              "name": "word",
              "description": "Palabra",
              "descriptionEn": "Word",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "autosetup",
      "description": "Crea configuraciones predeterminadas de Unidad.",
      "descriptionEn": "Creates Unidad's default configurations.",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "logs"
          ],
          "description": "Crea y configura logs.",
          "descriptionEn": "Creates and configures logs.",
          "parameters": []
        },
        {
          "path": [
            "fun"
          ],
          "description": "Crea el canal comunitario.",
          "descriptionEn": "Creates the community channel.",
          "parameters": []
        },
        {
          "path": [
            "games"
          ],
          "description": "Crea el canal de juegos/eventos.",
          "descriptionEn": "Creates the games/events channel.",
          "parameters": []
        },
        {
          "path": [
            "welcome"
          ],
          "description": "Crea el canal de bienvenida.",
          "descriptionEn": "Creates the welcome channel.",
          "parameters": []
        },
        {
          "path": [
            "customvoice"
          ],
          "description": "Crea el lobby de voz temporal.",
          "descriptionEn": "Creates the temporary voice lobby.",
          "parameters": []
        },
        {
          "path": [
            "ticketpanel"
          ],
          "description": "Crea el sistema y panel de tickets.",
          "descriptionEn": "Creates the ticket system and panel.",
          "parameters": []
        }
      ]
    },
    {
      "name": "birthdays",
      "description": "Cumpleaños del servidor.",
      "descriptionEn": "Server birthdays.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "check"
          ],
          "description": "Consulta tu cumpleaños.",
          "descriptionEn": "Checks your birthday.",
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina tu cumpleaños.",
          "descriptionEn": "Deletes your birthday.",
          "parameters": []
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista los cumpleaños configurados.",
          "descriptionEn": "Lists the configured birthdays.",
          "parameters": []
        },
        {
          "path": [
            "set"
          ],
          "description": "Guarda tu cumpleaños.",
          "descriptionEn": "Saves your birthday.",
          "parameters": [
            {
              "name": "day",
              "description": "Día",
              "descriptionEn": "Day",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 31,
              "channelTypes": []
            },
            {
              "name": "month",
              "description": "Mes",
              "descriptionEn": "Month",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 12,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "bot",
      "description": "Información, enlaces y soporte de Unidad.",
      "descriptionEn": "Unidad info, links and support.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "info"
          ],
          "description": "Información de Unidad.",
          "descriptionEn": "Information about Unidad.",
          "parameters": []
        },
        {
          "path": [
            "ping"
          ],
          "description": "Latencia del bot.",
          "descriptionEn": "Bot latency.",
          "parameters": []
        },
        {
          "path": [
            "changelogs"
          ],
          "description": "Cambios recientes.",
          "descriptionEn": "Recent changes.",
          "parameters": []
        },
        {
          "path": [
            "donate"
          ],
          "description": "Enlace de apoyo.",
          "descriptionEn": "Support link.",
          "parameters": []
        },
        {
          "path": [
            "links"
          ],
          "description": "Enlaces oficiales.",
          "descriptionEn": "Official links.",
          "parameters": []
        },
        {
          "path": [
            "owner"
          ],
          "description": "Propietarios configurados.",
          "descriptionEn": "Configured owners.",
          "parameters": []
        },
        {
          "path": [
            "socials"
          ],
          "description": "Redes oficiales.",
          "descriptionEn": "Official social media.",
          "parameters": []
        },
        {
          "path": [
            "support"
          ],
          "description": "Servidor de soporte.",
          "descriptionEn": "Support server.",
          "parameters": []
        },
        {
          "path": [
            "uptime"
          ],
          "description": "Tiempo activo.",
          "descriptionEn": "Uptime.",
          "parameters": []
        },
        {
          "path": [
            "vote"
          ],
          "description": "Consulta tu voto en top.gg.",
          "descriptionEn": "Check your vote on top.gg.",
          "parameters": []
        },
        {
          "path": [
            "feedback"
          ],
          "description": "Envía comentarios al equipo.",
          "descriptionEn": "Sends feedback to the team.",
          "parameters": [
            {
              "name": "feedback",
              "description": "Comentario",
              "descriptionEn": "Feedback",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 3,
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "casino",
      "description": "Juegos de azar con la economía del servidor.",
      "descriptionEn": "Games of chance using the server economy.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "blackjack"
          ],
          "description": "Partida de blackjack con cartas reales.",
          "descriptionEn": "Blackjack game with real cards.",
          "parameters": [
            {
              "name": "amount",
              "description": "Apuesta",
              "descriptionEn": "Bet",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "crash"
          ],
          "description": "Retírate antes de que reviente el multiplicador.",
          "descriptionEn": "Cash out before the multiplier crashes.",
          "parameters": [
            {
              "name": "amount",
              "description": "Apuesta",
              "descriptionEn": "Bet",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "roulette"
          ],
          "description": "Apuesta a un color.",
          "descriptionEn": "Bet on a color.",
          "parameters": [
            {
              "name": "color",
              "description": "Color",
              "descriptionEn": "Color",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Rojo",
                  "nameEn": "Red",
                  "value": "red"
                },
                {
                  "name": "Negro",
                  "nameEn": "Black",
                  "value": "black"
                },
                {
                  "name": "Verde",
                  "nameEn": "Green",
                  "value": "green"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Apuesta",
              "descriptionEn": "Bet",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "slots"
          ],
          "description": "Máquina tragamonedas.",
          "descriptionEn": "Slot machine.",
          "parameters": [
            {
              "name": "amount",
              "description": "Apuesta",
              "descriptionEn": "Bet",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "cmd",
      "description": "Gestiona los comandos personalizados de texto",
      "descriptionEn": "Manages custom text commands",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Crea o actualiza un comando personalizado",
          "descriptionEn": "Creates or updates a custom command",
          "parameters": [
            {
              "name": "trigger",
              "description": "Nombre del comando (sin !)",
              "descriptionEn": "Command name (without !)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "respuesta",
              "description": "Texto que responderá el bot",
              "descriptionEn": "Text the bot will reply with",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina un comando personalizado",
          "descriptionEn": "Deletes a custom command",
          "parameters": [
            {
              "name": "trigger",
              "description": "Nombre del comando a eliminar",
              "descriptionEn": "Name of the command to delete",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista todos los comandos personalizados",
          "descriptionEn": "Lists all custom commands",
          "parameters": []
        }
      ]
    },
    {
      "name": "coaching",
      "description": "Sistema de coaching",
      "descriptionEn": "Coaching system",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "solicitar"
          ],
          "description": "Solicita una sesión de coaching con un mentor",
          "descriptionEn": "Requests a coaching session with a mentor",
          "parameters": []
        },
        {
          "path": [
            "disponible"
          ],
          "description": "Activa o desactiva tu disponibilidad como coach",
          "descriptionEn": "Turns your availability as a coach on or off",
          "parameters": [
            {
              "name": "estado",
              "description": "¿Estás disponible?",
              "descriptionEn": "Are you available?",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "✅ Disponible",
                  "nameEn": "✅ Available",
                  "value": "on"
                },
                {
                  "name": "⏸️ No disponible",
                  "nameEn": "⏸️ Unavailable",
                  "value": "off"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "posiciones"
          ],
          "description": "Configura tus especializaciones como coach",
          "descriptionEn": "Sets your coaching specializations",
          "parameters": []
        },
        {
          "path": [
            "registrar"
          ],
          "description": "(Staff) Registra a un usuario como coach",
          "descriptionEn": "(Staff) Registers a user as a coach",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "posicion",
              "description": "Clave de posición (ej: tank, dps) o 'all'",
              "descriptionEn": "Position key (e.g. tank, dps) or 'all'",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "quitar"
          ],
          "description": "(Staff) Elimina a un usuario como coach",
          "descriptionEn": "(Staff) Removes a user as a coach",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "lista"
          ],
          "description": "Lista los coaches disponibles",
          "descriptionEn": "Lists the available coaches",
          "parameters": [
            {
              "name": "posicion",
              "description": "Filtrar por posición (clave, opcional)",
              "descriptionEn": "Filter by position (key, optional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "cerrar"
          ],
          "description": "Cierra la sesión de coaching activa en este hilo",
          "descriptionEn": "Closes the active coaching session in this thread",
          "parameters": []
        },
        {
          "path": [
            "setcanal"
          ],
          "description": "(Admin) Canal donde se crean los hilos",
          "descriptionEn": "(Admin) Channel where threads are created",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "posicion-add"
          ],
          "description": "(Admin) Añade o edita una posición de coaching",
          "descriptionEn": "(Admin) Adds or edits a coaching position",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave interna única (ej: tank, dps)",
              "descriptionEn": "Unique internal key (e.g. tank, dps)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "nombre",
              "description": "Nombre visible (ej: Tank)",
              "descriptionEn": "Display name (e.g. Tank)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji de la posición",
              "descriptionEn": "Position emoji",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Rol de Discord para coaches de esta posición",
              "descriptionEn": "Discord role for coaches of this position",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición",
              "descriptionEn": "Display order",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "posicion-delete"
          ],
          "description": "(Admin) Elimina una posición de coaching",
          "descriptionEn": "(Admin) Deletes a coaching position",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave de la posición",
              "descriptionEn": "Position key",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "posicion-list"
          ],
          "description": "Lista las posiciones de coaching configuradas",
          "descriptionEn": "Lists the configured coaching positions",
          "parameters": []
        }
      ]
    },
    {
      "name": "config",
      "description": "Gestiona la configuración del bot en este servidor",
      "descriptionEn": "Manages the bot's configuration on this server",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "show"
          ],
          "description": "Muestra la configuración actual",
          "descriptionEn": "Shows the current configuration",
          "parameters": []
        },
        {
          "path": [
            "set"
          ],
          "description": "Cambia una opción de configuración",
          "descriptionEn": "Changes a configuration option",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave a modificar",
              "descriptionEn": "Key to modify",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "XP: espera entre mensajes",
                  "nameEn": "XP: cooldown between messages",
                  "value": "xp.cooldown"
                },
                {
                  "name": "XP: base por mensaje",
                  "nameEn": "XP: base per message",
                  "value": "xp.permessage"
                },
                {
                  "name": "XP por reacciones: activado",
                  "nameEn": "XP for reactions: enabled",
                  "value": "xp.reactions.enabled"
                },
                {
                  "name": "XP por interacciones: activado",
                  "nameEn": "XP for interactions: enabled",
                  "value": "xp.interactions.enabled"
                },
                {
                  "name": "XP por crear canal de voz: activado",
                  "nameEn": "XP for creating a voice channel: enabled",
                  "value": "xp.voice_join.enabled"
                },
                {
                  "name": "XP por tiempo en voz: activado",
                  "nameEn": "XP for time in voice: enabled",
                  "value": "xp.voice_time.enabled"
                },
                {
                  "name": "XP por reacciones: multiplicador",
                  "nameEn": "XP for reactions: multiplier",
                  "value": "xp.reactions.multiplier"
                },
                {
                  "name": "XP por interacciones: multiplicador",
                  "nameEn": "XP for interactions: multiplier",
                  "value": "xp.interactions.multiplier"
                },
                {
                  "name": "XP por crear canal de voz: multiplicador",
                  "nameEn": "XP for creating a voice channel: multiplier",
                  "value": "xp.voice_join.multiplier"
                },
                {
                  "name": "XP por tiempo en voz: multiplicador",
                  "nameEn": "XP for time in voice: multiplier",
                  "value": "xp.voice_time.multiplier"
                },
                {
                  "name": "XP por tiempo en voz: intervalo (min)",
                  "nameEn": "XP for time in voice: interval (min)",
                  "value": "xp.voice_time.interval_minutes"
                },
                {
                  "name": "Alcance de perfiles y agradecimientos",
                  "nameEn": "Scope of profiles and thanks",
                  "value": "social.scope"
                },
                {
                  "name": "Mensaje de boost",
                  "nameEn": "Boost message",
                  "value": "boost.message"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "valor",
              "description": "Nuevo valor para la clave",
              "descriptionEn": "New value for the key",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setcolor"
          ],
          "description": "Configura el color general de embeds.",
          "descriptionEn": "Sets the general embed color.",
          "parameters": [
            {
              "name": "color",
              "description": "Color hexadecimal",
              "descriptionEn": "Hex color",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setverify"
          ],
          "description": "Configura la verificación.",
          "descriptionEn": "Configures verification.",
          "parameters": [
            {
              "name": "enable",
              "description": "Activar o desactivar la verificación",
              "descriptionEn": "Enable or disable verification",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal del panel",
              "descriptionEn": "Panel channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            },
            {
              "name": "role",
              "description": "Rol que se asigna al verificarse",
              "descriptionEn": "Role assigned upon verification",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setchannelname"
          ],
          "description": "Plantilla para canales de voz; usa {user}.",
          "descriptionEn": "Template for voice channels; use {user}.",
          "parameters": [
            {
              "name": "name",
              "description": "Plantilla",
              "descriptionEn": "Template",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "levelmessage"
          ],
          "description": "Mensaje al subir de nivel.",
          "descriptionEn": "Level-up message.",
          "parameters": [
            {
              "name": "message",
              "description": "Usa {user} y {level}",
              "descriptionEn": "Use {user} and {level}",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "welcomemessage"
          ],
          "description": "Mensaje de bienvenida.",
          "descriptionEn": "Welcome message.",
          "parameters": [
            {
              "name": "message",
              "description": "Usa variables de bienvenida",
              "descriptionEn": "Use welcome variables",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "leavemessage"
          ],
          "description": "Mensaje de despedida.",
          "descriptionEn": "Goodbye message.",
          "parameters": [
            {
              "name": "message",
              "description": "Usa {user} y {server}",
              "descriptionEn": "Use {user} and {server}",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "ticketmessage"
          ],
          "description": "Mensaje de apertura o cierre de ticket.",
          "descriptionEn": "Ticket opening or closing message.",
          "parameters": [
            {
              "name": "type",
              "description": "Tipo",
              "descriptionEn": "Type",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Apertura",
                  "nameEn": "Opening",
                  "value": "open"
                },
                {
                  "name": "Cierre por DM",
                  "nameEn": "Closing via DM",
                  "value": "close"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Mensaje",
              "descriptionEn": "Message",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "creator",
      "description": "Gestión de creadores de contenido",
      "descriptionEn": "Content creator management",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "registrar"
          ],
          "description": "(Staff) Vincula un canal de Twitch a un miembro del servidor",
          "descriptionEn": "(Staff) Links a Twitch channel to a server member",
          "parameters": [
            {
              "name": "usuario",
              "description": "Nombre de usuario en Twitch del canal",
              "descriptionEn": "The channel's Twitch username",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "dueno",
              "description": "Miembro de Discord al que pertenece el stream. Vacío = tú",
              "descriptionEn": "Discord member who owns the stream. Empty = you",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "quitar"
          ],
          "description": "Desvincula tu cuenta de Twitch",
          "descriptionEn": "Unlinks your Twitch account",
          "parameters": []
        },
        {
          "path": [
            "lista"
          ],
          "description": "Lista los streamers registrados del servidor",
          "descriptionEn": "Lists the server's registered streamers",
          "parameters": []
        },
        {
          "path": [
            "canal"
          ],
          "description": "(Admin) Canal donde se publican las notificaciones de streams",
          "descriptionEn": "(Admin) Channel where stream notifications are posted",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "rolnotif"
          ],
          "description": "(Admin) Rol que se menciona cuando alguien está en vivo",
          "descriptionEn": "(Admin) Role mentioned when someone goes live",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol a mencionar (dejar vacío para quitar)",
              "descriptionEn": "Role to mention (leave empty to remove)",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setrole"
          ],
          "description": "(Admin) Rol que identifica a los creadores de contenido",
          "descriptionEn": "(Admin) Role that identifies content creators",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de creador",
              "descriptionEn": "Creator role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "economy",
      "description": "Economía completa del servidor.",
      "descriptionEn": "Full server economy.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "beg"
          ],
          "description": "Pide unas monedas.",
          "descriptionEn": "Beg for some coins.",
          "parameters": []
        },
        {
          "path": [
            "crime"
          ],
          "description": "Comete un crimen y arriésgate a que te atrapen.",
          "descriptionEn": "Commit a crime and risk getting caught.",
          "parameters": []
        },
        {
          "path": [
            "daily"
          ],
          "description": "Reclama tu recompensa diaria.",
          "descriptionEn": "Claim your daily reward.",
          "parameters": []
        },
        {
          "path": [
            "fish"
          ],
          "description": "Sal a pescar (necesitas una caña).",
          "descriptionEn": "Go fishing (you need a rod).",
          "parameters": []
        },
        {
          "path": [
            "hourly"
          ],
          "description": "Reclama tu recompensa de cada hora.",
          "descriptionEn": "Claim your hourly reward.",
          "parameters": []
        },
        {
          "path": [
            "hunt"
          ],
          "description": "Sal de cacería.",
          "descriptionEn": "Go hunting.",
          "parameters": []
        },
        {
          "path": [
            "monthly"
          ],
          "description": "Reclama tu recompensa mensual.",
          "descriptionEn": "Claim your monthly reward.",
          "parameters": []
        },
        {
          "path": [
            "present"
          ],
          "description": "Abre tu regalo semanal.",
          "descriptionEn": "Open your weekly present.",
          "parameters": []
        },
        {
          "path": [
            "store"
          ],
          "description": "Muestra la tienda.",
          "descriptionEn": "Shows the shop.",
          "parameters": []
        },
        {
          "path": [
            "weekly"
          ],
          "description": "Reclama tu recompensa semanal.",
          "descriptionEn": "Claim your weekly reward.",
          "parameters": []
        },
        {
          "path": [
            "work"
          ],
          "description": "Trabaja para ganar monedas.",
          "descriptionEn": "Work to earn coins.",
          "parameters": []
        },
        {
          "path": [
            "yearly"
          ],
          "description": "Reclama tu recompensa anual.",
          "descriptionEn": "Claim your yearly reward.",
          "parameters": []
        },
        {
          "path": [
            "balance"
          ],
          "description": "Consulta cartera y banco.",
          "descriptionEn": "Check wallet and bank.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "pay"
          ],
          "description": "Paga a otro usuario.",
          "descriptionEn": "Pay another user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "deposit"
          ],
          "description": "Deposita en el banco.",
          "descriptionEn": "Deposit into the bank.",
          "parameters": [
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "withdraw"
          ],
          "description": "Retira del banco.",
          "descriptionEn": "Withdraw from the bank.",
          "parameters": [
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "rob"
          ],
          "description": "Intenta robar a otro usuario.",
          "descriptionEn": "Try to rob another user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "leaderboard"
          ],
          "description": "Clasificación económica.",
          "descriptionEn": "Economy leaderboard.",
          "parameters": [
            {
              "name": "type",
              "description": "Tipo",
              "descriptionEn": "Type",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Dinero",
                  "nameEn": "Money",
                  "value": "money"
                },
                {
                  "name": "Banco",
                  "nameEn": "Bank",
                  "value": "bank"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "buy"
          ],
          "description": "Compra en la tienda; sin ID abre el selector.",
          "descriptionEn": "Buy from the shop; without an ID it opens the picker.",
          "parameters": [
            {
              "name": "id",
              "description": "ID mostrado en la tienda",
              "descriptionEn": "ID shown in the shop",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "additem"
          ],
          "description": "Añade un artículo a la tienda.",
          "descriptionEn": "Adds an item to the shop.",
          "parameters": [
            {
              "name": "amount",
              "description": "Precio",
              "descriptionEn": "Price",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            },
            {
              "name": "role",
              "description": "Rol que otorga la compra",
              "descriptionEn": "Role granted by the purchase",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "nombre",
              "description": "Nombre visible; por defecto el del rol",
              "descriptionEn": "Display name; defaults to the role's name",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            },
            {
              "name": "descripcion",
              "description": "Descripción del artículo",
              "descriptionEn": "Item description",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 200,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "deleteitem"
          ],
          "description": "Elimina de la tienda el artículo de un rol.",
          "descriptionEn": "Removes a role's item from the shop.",
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
              "descriptionEn": "Role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "addmoney"
          ],
          "description": "Añade dinero a un usuario.",
          "descriptionEn": "Adds money to a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "removemoney"
          ],
          "description": "Retira dinero a un usuario.",
          "descriptionEn": "Removes money from a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "clear"
          ],
          "description": "Reinicia toda la economía del servidor.",
          "descriptionEn": "Resets the entire server economy.",
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirma la eliminación",
              "descriptionEn": "Confirm the deletion",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "event",
      "description": "Gestión de eventos del servidor",
      "descriptionEn": "Server event management",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "crear"
          ],
          "description": "Crea un nuevo evento en el servidor",
          "descriptionEn": "Creates a new event in the server",
          "parameters": []
        },
        {
          "path": [
            "lista"
          ],
          "description": "Muestra los próximos eventos",
          "descriptionEn": "Shows upcoming events",
          "parameters": []
        },
        {
          "path": [
            "cancelar"
          ],
          "description": "(Staff) Cancela un evento",
          "descriptionEn": "(Staff) Cancels an event",
          "parameters": [
            {
              "name": "id",
              "description": "ID del evento a cancelar",
              "descriptionEn": "ID of the event to cancel",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setcanal"
          ],
          "description": "(Admin) Canal donde el bot publica los eventos creados",
          "descriptionEn": "(Admin) Channel where the bot posts created events",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "family",
      "description": "Familia social del servidor.",
      "descriptionEn": "The server's social family.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "adopt"
          ],
          "description": "Solicita adoptar a un usuario.",
          "descriptionEn": "Requests to adopt a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "disown"
          ],
          "description": "Retira a un hijo.",
          "descriptionEn": "Removes a child.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "divorce"
          ],
          "description": "Finaliza una pareja.",
          "descriptionEn": "Ends a partnership.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "propose"
          ],
          "description": "Propone matrimonio.",
          "descriptionEn": "Proposes marriage.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina todas tus relaciones familiares.",
          "descriptionEn": "Deletes all your family relationships.",
          "parameters": []
        },
        {
          "path": [
            "family"
          ],
          "description": "Muestra una familia.",
          "descriptionEn": "Shows a family.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario; por defecto tú",
              "descriptionEn": "User; defaults to you",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "fun",
      "description": "Diversión y contenido ligero.",
      "descriptionEn": "Fun and lighthearted content.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "meme",
            "confused"
          ],
          "description": "Muestra tu confusión.",
          "descriptionEn": "Show your confusion.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "cleverrate"
          ],
          "description": "Calcula qué tan listo eres.",
          "descriptionEn": "Calculates how clever you are.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "dinochrome"
          ],
          "description": "El dinosaurio de Chrome.",
          "descriptionEn": "The Chrome dinosaur.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "epicgamerrate"
          ],
          "description": "Calcula qué tan gamer épico eres.",
          "descriptionEn": "Calculates how much of an epic gamer you are.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "howgay"
          ],
          "description": "Calcula un porcentaje gay al azar.",
          "descriptionEn": "Calculates a random gay percentage.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "roast"
          ],
          "description": "Lanza una broma a un usuario.",
          "descriptionEn": "Roast a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "meme",
            "simprate"
          ],
          "description": "Calcula qué tan simp eres.",
          "descriptionEn": "Calculates how much of a simp you are.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "stankrate"
          ],
          "description": "Calcula qué tan apestoso eres.",
          "descriptionEn": "Calculates how stinky you are.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "rickroll"
          ],
          "description": "Envía un rickroll.",
          "descriptionEn": "Sends a rickroll.",
          "parameters": []
        },
        {
          "path": [
            "user",
            "hack"
          ],
          "description": "Simula hackear a un usuario.",
          "descriptionEn": "Pretend to hack a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "hug"
          ],
          "description": "Abraza a un usuario.",
          "descriptionEn": "Hug a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "kill"
          ],
          "description": "Derrota a un usuario en una batalla ficticia.",
          "descriptionEn": "Defeat a user in a fictional battle.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "lovemeter"
          ],
          "description": "Mide la compatibilidad entre dos usuarios.",
          "descriptionEn": "Measures the compatibility between two users.",
          "parameters": [
            {
              "name": "user1",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "user2",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "sudo"
          ],
          "description": "Simula un mensaje de otro usuario.",
          "descriptionEn": "Fakes a message from another user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "text",
            "ascii"
          ],
          "description": "Escribe el texto en mayúsculas espaciadas.",
          "descriptionEn": "Writes the text in spaced-out capitals.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "text",
            "gif"
          ],
          "description": "Busca un GIF.",
          "descriptionEn": "Searches for a GIF.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "text",
            "reverse"
          ],
          "description": "Invierte el texto.",
          "descriptionEn": "Reverses the text.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "text",
            "say"
          ],
          "description": "Repito el texto que escribas.",
          "descriptionEn": "I repeat the text you write.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "extra",
            "birdfact"
          ],
          "description": "Un dato curioso sobre aves.",
          "descriptionEn": "A fun fact about birds.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "catfact"
          ],
          "description": "Un dato curioso sobre gatos.",
          "descriptionEn": "A fun fact about cats.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "dogfact"
          ],
          "description": "Un dato curioso sobre perros.",
          "descriptionEn": "A fun fact about dogs.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "fact"
          ],
          "description": "Un dato curioso al azar.",
          "descriptionEn": "A random fun fact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "koalafact"
          ],
          "description": "Un dato curioso sobre koalas.",
          "descriptionEn": "A fun fact about koalas.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "pandafact"
          ],
          "description": "Un dato curioso sobre pandas.",
          "descriptionEn": "A fun fact about pandas.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "token"
          ],
          "description": "Genera un token ficticio para pruebas.",
          "descriptionEn": "Generates a fake token for testing.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "worldclock"
          ],
          "description": "Muestra la fecha y hora UTC.",
          "descriptionEn": "Shows the UTC date and time.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "xmas"
          ],
          "description": "Cuenta los días que faltan para Navidad.",
          "descriptionEn": "Counts the days left until Christmas.",
          "parameters": []
        }
      ]
    },
    {
      "name": "games",
      "description": "Minijuegos.",
      "descriptionEn": "Minigames.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "8ball"
          ],
          "description": "Pregunta a la bola ocho.",
          "descriptionEn": "Ask the magic 8-ball.",
          "parameters": [
            {
              "name": "question",
              "description": "Pregunta",
              "descriptionEn": "Question",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "fasttype"
          ],
          "description": "Reto de escritura rápida.",
          "descriptionEn": "Fast typing challenge.",
          "parameters": []
        },
        {
          "path": [
            "roll"
          ],
          "description": "Lanza un dado.",
          "descriptionEn": "Rolls a die.",
          "parameters": []
        },
        {
          "path": [
            "rps"
          ],
          "description": "Piedra, papel o tijera.",
          "descriptionEn": "Rock, paper, scissors.",
          "parameters": [
            {
              "name": "option",
              "description": "Elección",
              "descriptionEn": "Choice",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Piedra",
                  "nameEn": "Rock",
                  "value": "rock"
                },
                {
                  "name": "Papel",
                  "nameEn": "Paper",
                  "value": "paper"
                },
                {
                  "name": "Tijera",
                  "nameEn": "Scissors",
                  "value": "scissors"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "skipword"
          ],
          "description": "Cambia la palabra del canal de adivinanzas.",
          "descriptionEn": "Changes the word in the guessing channel.",
          "parameters": []
        },
        {
          "path": [
            "snake"
          ],
          "description": "Juega a la serpiente con botones.",
          "descriptionEn": "Play snake with buttons.",
          "parameters": []
        },
        {
          "path": [
            "trivia"
          ],
          "description": "Pregunta de trivia con opciones.",
          "descriptionEn": "Multiple-choice trivia question.",
          "parameters": []
        },
        {
          "path": [
            "willyoupressthebutton"
          ],
          "description": "Dilema del botón, con votos.",
          "descriptionEn": "Button dilemma, with votes.",
          "parameters": []
        },
        {
          "path": [
            "wouldyourather"
          ],
          "description": "Qué preferirías, con votos.",
          "descriptionEn": "Would you rather, with votes.",
          "parameters": []
        }
      ]
    },
    {
      "name": "giveaway",
      "description": "Sorteos persistentes.",
      "descriptionEn": "Persistent giveaways.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "start"
          ],
          "description": "Inicia un sorteo.",
          "descriptionEn": "Starts a giveaway.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            },
            {
              "name": "duration",
              "description": "Ej. 10m, 2h",
              "descriptionEn": "E.g. 10m, 2h",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "winners",
              "description": "Ganadores",
              "descriptionEn": "Winners",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 20,
              "channelTypes": []
            },
            {
              "name": "prize",
              "description": "Premio",
              "descriptionEn": "Prize",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "drop"
          ],
          "description": "Inicia un sorteo.",
          "descriptionEn": "Starts a giveaway.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            },
            {
              "name": "duration",
              "description": "Ej. 10m, 2h",
              "descriptionEn": "E.g. 10m, 2h",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "winners",
              "description": "Ganadores",
              "descriptionEn": "Winners",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 20,
              "channelTypes": []
            },
            {
              "name": "prize",
              "description": "Premio",
              "descriptionEn": "Prize",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "reroll"
          ],
          "description": "Elige nuevos ganadores de un sorteo finalizado.",
          "descriptionEn": "Picks new winners for an ended giveaway.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "descriptionEn": "Message ID or UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "end"
          ],
          "description": "Finaliza un sorteo ahora.",
          "descriptionEn": "Ends a giveaway now.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "descriptionEn": "Message ID or UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina un sorteo.",
          "descriptionEn": "Deletes a giveaway.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "descriptionEn": "Message ID or UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "pause"
          ],
          "description": "Pausa un sorteo activo.",
          "descriptionEn": "Pauses an active giveaway.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "descriptionEn": "Message ID or UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "unpause"
          ],
          "description": "Reanuda un sorteo pausado.",
          "descriptionEn": "Resumes a paused giveaway.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "descriptionEn": "Message ID or UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "edit"
          ],
          "description": "Edita premio o duración.",
          "descriptionEn": "Edits the prize or duration.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "descriptionEn": "Message ID or UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "duration",
              "description": "Nueva duración",
              "descriptionEn": "New duration",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "prize",
              "description": "Nuevo premio",
              "descriptionEn": "New prize",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "guild",
      "description": "Información del servidor.",
      "descriptionEn": "Server information.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "channelinfo"
          ],
          "description": "Información de un canal.",
          "descriptionEn": "Information about a channel.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "members"
          ],
          "description": "Conteo de miembros.",
          "descriptionEn": "Member count.",
          "parameters": []
        },
        {
          "path": [
            "oldestmember"
          ],
          "description": "Miembro con mayor antigüedad.",
          "descriptionEn": "Longest-standing member.",
          "parameters": []
        },
        {
          "path": [
            "roleinfo"
          ],
          "description": "Información de un rol.",
          "descriptionEn": "Information about a role.",
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
              "descriptionEn": "Role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "info"
          ],
          "description": "Información general.",
          "descriptionEn": "General information.",
          "parameters": []
        },
        {
          "path": [
            "stealemoji"
          ],
          "description": "Añade un emoji externo.",
          "descriptionEn": "Adds an external emoji.",
          "parameters": [
            {
              "name": "emoji",
              "description": "Emoji personalizado o URL",
              "descriptionEn": "Custom emoji or URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "role",
              "description": "Rol autorizado",
              "descriptionEn": "Authorized role",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "youngestmember"
          ],
          "description": "Miembro más reciente.",
          "descriptionEn": "Most recent member.",
          "parameters": []
        },
        {
          "path": [
            "userinfo"
          ],
          "description": "Información de un usuario.",
          "descriptionEn": "Information about a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "inviteinfo"
          ],
          "description": "Información de una invitación.",
          "descriptionEn": "Information about an invite.",
          "parameters": [
            {
              "name": "invite",
              "description": "Código o URL",
              "descriptionEn": "Code or URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "emojis"
          ],
          "description": "Lista emojis del servidor.",
          "descriptionEn": "Lists the server's emojis.",
          "parameters": []
        }
      ]
    },
    {
      "name": "help",
      "description": "Consulta los comandos disponibles y sus opciones.",
      "descriptionEn": "Shows the available commands and their options.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Consulta los comandos disponibles y sus opciones.",
          "descriptionEn": "Shows the available commands and their options.",
          "parameters": [
            {
              "name": "comando",
              "description": "Nombre del comando, por ejemplo skip o notepad.",
              "descriptionEn": "Command name, for example skip or notepad.",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 32,
              "channelTypes": []
            },
            {
              "name": "pagina",
              "description": "Página de resultados.",
              "descriptionEn": "Results page.",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "history",
      "description": "Muestra el historial reciente de música reproducida.",
      "descriptionEn": "Shows the recent history of played music.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Muestra el historial reciente de música reproducida.",
          "descriptionEn": "Shows the recent history of played music.",
          "parameters": [
            {
              "name": "limite",
              "description": "Cantidad de pistas (1-25).",
              "descriptionEn": "Number of tracks (1-25).",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 25,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "images",
      "description": "Imágenes, avatares y tarjetas.",
      "descriptionEn": "Images, avatars and cards.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "memes",
            "clyde"
          ],
          "description": "Mensaje al estilo de Clyde.",
          "descriptionEn": "Message in Clyde's style.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "memes",
            "drake"
          ],
          "description": "Meme de Drake con dos textos.",
          "descriptionEn": "Drake meme with two texts.",
          "parameters": [
            {
              "name": "text1",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            },
            {
              "name": "text2",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "memes",
            "meme"
          ],
          "description": "Meme al azar.",
          "descriptionEn": "Random meme.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "pooh"
          ],
          "description": "Meme de Winnie Pooh con dos textos.",
          "descriptionEn": "Winnie the Pooh meme with two texts.",
          "parameters": [
            {
              "name": "text1",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            },
            {
              "name": "text2",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "memes",
            "trumptweet"
          ],
          "description": "Tuit al estilo de Trump.",
          "descriptionEn": "Tweet in Trump's style.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "memes",
            "tweet"
          ],
          "description": "Tuit con tu nombre.",
          "descriptionEn": "Tweet with your name.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "memes",
            "wasted"
          ],
          "description": "Tu avatar con el efecto WASTED.",
          "descriptionEn": "Your avatar with the WASTED effect.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "bird"
          ],
          "description": "Imagen de un ave.",
          "descriptionEn": "Image of a bird.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "cat"
          ],
          "description": "Imagen de un gato.",
          "descriptionEn": "Image of a cat.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "dog"
          ],
          "description": "Imagen de un perro.",
          "descriptionEn": "Image of a dog.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "fox"
          ],
          "description": "Imagen de un zorro.",
          "descriptionEn": "Image of a fox.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "koala"
          ],
          "description": "Imagen de un koala.",
          "descriptionEn": "Image of a koala.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "panda"
          ],
          "description": "Imagen de un panda.",
          "descriptionEn": "Image of a panda.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "redpanda"
          ],
          "description": "Imagen de un panda rojo.",
          "descriptionEn": "Image of a red panda.",
          "parameters": []
        },
        {
          "path": [
            "user",
            "ad"
          ],
          "description": "Anuncio con el nombre de un usuario.",
          "descriptionEn": "Ad with a user's name.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "avatar"
          ],
          "description": "Muestra el avatar de un usuario.",
          "descriptionEn": "Shows a user's avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "banner"
          ],
          "description": "Muestra el banner de un usuario.",
          "descriptionEn": "Shows a user's banner.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "bed"
          ],
          "description": "Avatar mandado a la cama.",
          "descriptionEn": "Avatar sent to bed.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "blur"
          ],
          "description": "Avatar desenfocado.",
          "descriptionEn": "Blurred avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "burn"
          ],
          "description": "Avatar en llamas.",
          "descriptionEn": "Avatar on fire.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "clown"
          ],
          "description": "Avatar de payaso.",
          "descriptionEn": "Clown avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "colorify"
          ],
          "description": "Avatar con colores intensos.",
          "descriptionEn": "Avatar with intense colors.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "darkness"
          ],
          "description": "Avatar oscurecido.",
          "descriptionEn": "Darkened avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "facepalm"
          ],
          "description": "Avatar con facepalm.",
          "descriptionEn": "Avatar with a facepalm.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "greyscale"
          ],
          "description": "Avatar en escala de grises.",
          "descriptionEn": "Greyscale avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "invert"
          ],
          "description": "Avatar con colores invertidos.",
          "descriptionEn": "Avatar with inverted colors.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "kiss"
          ],
          "description": "Beso entre tú y un usuario.",
          "descriptionEn": "A kiss between you and a user.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "podium"
          ],
          "description": "Podio con tres usuarios.",
          "descriptionEn": "Podium with three users.",
          "parameters": [
            {
              "name": "user1",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "user2",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "user3",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "spank"
          ],
          "description": "Avatar con un BONK.",
          "descriptionEn": "Avatar with a BONK.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "user",
            "wanted"
          ],
          "description": "Cartel de se busca con un avatar.",
          "descriptionEn": "Wanted poster with an avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "extra",
            "car"
          ],
          "description": "Muestra un automóvil.",
          "descriptionEn": "Shows a car.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "glass"
          ],
          "description": "Genera efecto vidrio.",
          "descriptionEn": "Generates a glass effect.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "image"
          ],
          "description": "Publica una URL de imagen sin descargarla.",
          "descriptionEn": "Posts an image URL without downloading it.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            },
            {
              "name": "image-url",
              "description": "URL HTTPS",
              "descriptionEn": "HTTPS URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "extra",
            "triggered"
          ],
          "description": "Tu avatar con el efecto TRIGGERED.",
          "descriptionEn": "Your avatar with the TRIGGERED effect.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "wallpaper"
          ],
          "description": "Busca un fondo temático.",
          "descriptionEn": "Searches for a themed wallpaper.",
          "parameters": [
            {
              "name": "name",
              "description": "Tema",
              "descriptionEn": "Theme",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "invite",
      "description": "Obtén enlaces para instalar y apoyar a Unidad.",
      "descriptionEn": "Get links to install and support Unidad.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Obtén enlaces para instalar y apoyar a Unidad.",
          "descriptionEn": "Get links to install and support Unidad.",
          "parameters": []
        }
      ]
    },
    {
      "name": "invites",
      "description": "Estadísticas de invitaciones.",
      "descriptionEn": "Invite statistics.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade invitaciones manuales.",
          "descriptionEn": "Adds manual invites.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "remove"
          ],
          "description": "Retira invitaciones manuales.",
          "descriptionEn": "Removes manual invites.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "show"
          ],
          "description": "Muestra invitaciones.",
          "descriptionEn": "Shows invites.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "leaderboard"
          ],
          "description": "Clasificación de invitaciones.",
          "descriptionEn": "Invite leaderboard.",
          "parameters": []
        },
        {
          "path": [
            "rewards"
          ],
          "description": "Lista las recompensas por invitaciones.",
          "descriptionEn": "Lists the invite rewards.",
          "parameters": []
        },
        {
          "path": [
            "createreward"
          ],
          "description": "Otorga un rol al alcanzar N invitaciones.",
          "descriptionEn": "Grants a role upon reaching N invites.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Invitaciones necesarias",
              "descriptionEn": "Required invites",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100000,
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Rol a otorgar",
              "descriptionEn": "Role to grant",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "deletereward"
          ],
          "description": "Elimina una recompensa por invitaciones.",
          "descriptionEn": "Deletes an invite reward.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Invitaciones de la recompensa",
              "descriptionEn": "Invites for the reward",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "lobby",
      "description": "Gestiona los lobbies de voz temporales del servidor",
      "descriptionEn": "Manages the server's temporary voice lobbies",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "create"
          ],
          "description": "Registra un canal de voz como lobby de salas temporales",
          "descriptionEn": "Registers a voice channel as a lobby for temporary rooms",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de voz que actuará como lobby",
              "descriptionEn": "Voice channel that will act as the lobby",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                2
              ]
            },
            {
              "name": "nombre",
              "description": "Nombre base para las salas creadas (ej: 'Casual', 'Ranked')",
              "descriptionEn": "Base name for created rooms (e.g. 'Casual', 'Ranked')",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "limite",
              "description": "Límite de usuarios por sala (0 = sin límite)",
              "descriptionEn": "User limit per room (0 = no limit)",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "maxValue": 99,
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Rol requerido para entrar al lobby (opcional)",
              "descriptionEn": "Role required to join the lobby (optional)",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji para el nombre de la sala (ej: 🎮)",
              "descriptionEn": "Emoji for the room name (e.g. 🎮)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 4,
              "channelTypes": []
            },
            {
              "name": "requiere_perfil",
              "description": "¿Requiere plataforma+región configurados? (default: false)",
              "descriptionEn": "Requires platform+region to be set? (default: false)",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "edit"
          ],
          "description": "Modifica la configuración de un lobby existente",
          "descriptionEn": "Changes the settings of an existing lobby",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal lobby a editar",
              "descriptionEn": "Lobby channel to edit",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                2
              ]
            },
            {
              "name": "nombre",
              "description": "Nuevo nombre base",
              "descriptionEn": "New base name",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "limite",
              "description": "Nuevo límite (0 = sin límite)",
              "descriptionEn": "New limit (0 = no limit)",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "maxValue": 99,
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Nuevo rol requerido (usa @everyone para quitar el requisito)",
              "descriptionEn": "New required role (use @everyone to remove the requirement)",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Nuevo emoji",
              "descriptionEn": "New emoji",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 4,
              "channelTypes": []
            },
            {
              "name": "requiere_perfil",
              "description": "¿Requiere plataforma+región?",
              "descriptionEn": "Requires platform+region?",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina el registro de un lobby (no borra el canal de Discord)",
          "descriptionEn": "Removes a lobby's registration (does not delete the Discord channel)",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal lobby a desregistrar",
              "descriptionEn": "Lobby channel to unregister",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                2
              ]
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista todos los lobbies configurados en este servidor",
          "descriptionEn": "Lists all lobbies configured on this server",
          "parameters": []
        }
      ]
    },
    {
      "name": "messages",
      "description": "Contador de mensajes y recompensas.",
      "descriptionEn": "Message counter and rewards.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "show"
          ],
          "description": "Consulta el progreso de un usuario.",
          "descriptionEn": "Checks a user's progress.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario; por defecto tú.",
              "descriptionEn": "User; defaults to you.",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "leaderboard"
          ],
          "description": "Muestra los diez primeros usuarios.",
          "descriptionEn": "Shows the top ten users.",
          "parameters": []
        },
        {
          "path": [
            "rewards"
          ],
          "description": "Lista las recompensas configuradas.",
          "descriptionEn": "Lists the configured rewards.",
          "parameters": []
        },
        {
          "path": [
            "createreward"
          ],
          "description": "Crea o reemplaza una recompensa.",
          "descriptionEn": "Creates or replaces a reward.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Mensajes requeridos",
              "descriptionEn": "Required messages",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 2000000000,
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Rol de recompensa",
              "descriptionEn": "Reward role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "deletereward"
          ],
          "description": "Elimina una recompensa.",
          "descriptionEn": "Deletes a reward.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Mensajes",
              "descriptionEn": "Messages",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 2000000000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "add"
          ],
          "description": "Añade mensajes del contador.",
          "descriptionEn": "Adds messages to the counter.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "descriptionEn": "Target user",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 2000000000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "remove"
          ],
          "description": "Retira mensajes del contador.",
          "descriptionEn": "Removes messages from the counter.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "descriptionEn": "Target user",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Cantidad",
              "descriptionEn": "Amount",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 2000000000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "minecraft",
      "description": "Servidor de Minecraft de la comunidad",
      "descriptionEn": "The community's Minecraft server",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "estado"
          ],
          "description": "Muestra si el servidor está en línea, la versión y quién juega",
          "descriptionEn": "Shows whether the server is online, its version, and who is playing",
          "parameters": []
        },
        {
          "path": [
            "ip"
          ],
          "description": "Muestra la dirección para entrar al servidor",
          "descriptionEn": "Shows the address to join the server",
          "parameters": []
        },
        {
          "path": [
            "jugadores"
          ],
          "description": "Lista los jugadores conectados",
          "descriptionEn": "Lists the connected players",
          "parameters": []
        },
        {
          "path": [
            "vincular"
          ],
          "description": "Vincula tu cuenta de Minecraft para whitelist y recompensas de logros",
          "descriptionEn": "Links your Minecraft account for whitelist and achievement rewards",
          "parameters": [
            {
              "name": "jugador",
              "description": "Nombre exacto en Minecraft",
              "descriptionEn": "Exact Minecraft name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 16,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "desvincular"
          ],
          "description": "Desvincula tu cuenta de Minecraft (o la de otro miembro si eres admin)",
          "descriptionEn": "Unlinks your Minecraft account (or another member's if you are an admin)",
          "parameters": [
            {
              "name": "usuario",
              "description": "(Admin) Usuario a desvincular",
              "descriptionEn": "(Admin) User to unlink",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "perfil"
          ],
          "description": "Muestra la cuenta de Minecraft vinculada, logros y recompensas",
          "descriptionEn": "Shows the linked Minecraft account, achievements and rewards",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario a consultar (opcional)",
              "descriptionEn": "User to look up (optional)",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "config",
            "servidor"
          ],
          "description": "Asigna la IP o dominio del servidor",
          "descriptionEn": "Sets the server's IP or domain",
          "parameters": [
            {
              "name": "direccion",
              "description": "IP o dominio, con :puerto si no es 25565",
              "descriptionEn": "IP or domain, with :port if not 25565",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 260,
              "channelTypes": []
            },
            {
              "name": "nombre",
              "description": "Nombre que se muestra en el panel",
              "descriptionEn": "Name shown on the panel",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 64,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "config",
            "rcon"
          ],
          "description": "Conecta el bot a la consola del servidor (RCON) para administrarlo",
          "descriptionEn": "Connects the bot to the server console (RCON) to manage it",
          "parameters": [
            {
              "name": "quitar",
              "description": "Elimina la conexión RCON guardada",
              "descriptionEn": "Removes the saved RCON connection",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "config",
            "panel"
          ],
          "description": "Publica el panel de estado en un canal",
          "descriptionEn": "Posts the status panel in a channel",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal del panel",
              "descriptionEn": "Panel channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            }
          ]
        },
        {
          "path": [
            "config",
            "chat"
          ],
          "description": "Canal donde se une el chat de Discord con el del juego",
          "descriptionEn": "Channel where Discord chat is bridged with the in-game chat",
          "parameters": [
            {
              "name": "canal",
              "description": "Vacío para desactivar",
              "descriptionEn": "Leave empty to disable",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            }
          ]
        },
        {
          "path": [
            "config",
            "contador"
          ],
          "description": "Canal de voz que muestra en su nombre los jugadores conectados",
          "descriptionEn": "Voice channel whose name shows the connected players",
          "parameters": [
            {
              "name": "canal",
              "description": "Vacío para desactivar",
              "descriptionEn": "Leave empty to disable",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                2
              ]
            }
          ]
        },
        {
          "path": [
            "config",
            "rol"
          ],
          "description": "Rol que puede usar /minecraft gestionar además de los admins",
          "descriptionEn": "Role that can use /minecraft gestionar in addition to admins",
          "parameters": [
            {
              "name": "rol",
              "description": "Vacío para quitarlo",
              "descriptionEn": "Leave empty to remove it",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "config",
            "avisos"
          ],
          "description": "Elige qué se publica en el canal de chat",
          "descriptionEn": "Choose what gets posted in the chat channel",
          "parameters": [
            {
              "name": "chat",
              "description": "Chat entre Discord y el juego",
              "descriptionEn": "Chat between Discord and the game",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "entradas",
              "description": "Cuando alguien entra o sale",
              "descriptionEn": "When someone joins or leaves",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "muertes",
              "description": "Muertes de jugadores",
              "descriptionEn": "Player deaths",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "logros",
              "description": "Logros, desafíos y metas",
              "descriptionEn": "Advancements, challenges and goals",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "estado",
              "description": "Cuando el servidor se enciende o se apaga",
              "descriptionEn": "When the server starts or stops",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "config",
            "registro"
          ],
          "description": "Usa el registro del servidor para el chat, muertes y logros",
          "descriptionEn": "Uses the server log for chat, deaths and achievements",
          "parameters": [
            {
              "name": "activar",
              "description": "Activar o desactivar",
              "descriptionEn": "Enable or disable",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "config",
            "ver"
          ],
          "description": "Muestra la configuración y prueba la conexión",
          "descriptionEn": "Shows the configuration and tests the connection",
          "parameters": []
        },
        {
          "path": [
            "config",
            "quitar"
          ],
          "description": "Borra la configuración de Minecraft de este servidor",
          "descriptionEn": "Deletes this server's Minecraft configuration",
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirma que quieres borrarla",
              "descriptionEn": "Confirm that you want to delete it",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gestionar",
            "decir"
          ],
          "description": "Envía un mensaje a todos los jugadores",
          "descriptionEn": "Sends a message to all players",
          "parameters": [
            {
              "name": "mensaje",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 200,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gestionar",
            "expulsar"
          ],
          "description": "Saca a un jugador del servidor",
          "descriptionEn": "Kicks a player from the server",
          "parameters": [
            {
              "name": "jugador",
              "description": "Nombre exacto en Minecraft",
              "descriptionEn": "Exact Minecraft name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 16,
              "channelTypes": []
            },
            {
              "name": "razon",
              "description": "Motivo (opcional)",
              "descriptionEn": "Reason (optional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gestionar",
            "banear"
          ],
          "description": "Banea a un jugador",
          "descriptionEn": "Bans a player",
          "parameters": [
            {
              "name": "jugador",
              "description": "Nombre exacto en Minecraft",
              "descriptionEn": "Exact Minecraft name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 16,
              "channelTypes": []
            },
            {
              "name": "razon",
              "description": "Motivo (opcional)",
              "descriptionEn": "Reason (optional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gestionar",
            "desbanear"
          ],
          "description": "Quita el ban a un jugador",
          "descriptionEn": "Unbans a player",
          "parameters": [
            {
              "name": "jugador",
              "description": "Nombre exacto en Minecraft",
              "descriptionEn": "Exact Minecraft name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 16,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gestionar",
            "whitelist"
          ],
          "description": "Gestiona la lista blanca",
          "descriptionEn": "Manages the whitelist",
          "parameters": [
            {
              "name": "accion",
              "description": "Qué hacer",
              "descriptionEn": "What to do",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Agregar jugador",
                  "nameEn": "Add player",
                  "value": "add"
                },
                {
                  "name": "Quitar jugador",
                  "nameEn": "Remove player",
                  "value": "remove"
                },
                {
                  "name": "Ver lista",
                  "nameEn": "View list",
                  "value": "list"
                },
                {
                  "name": "Activar",
                  "nameEn": "Enable",
                  "value": "on"
                },
                {
                  "name": "Desactivar",
                  "nameEn": "Disable",
                  "value": "off"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "jugador",
              "description": "Para agregar o quitar",
              "descriptionEn": "To add or remove",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 16,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gestionar",
            "guardar"
          ],
          "description": "Vuelca y guarda el mundo en disco de forma inmediata (save-all flush)",
          "descriptionEn": "Flushes and saves the world to disk immediately (save-all flush)",
          "parameters": []
        },
        {
          "path": [
            "gestionar",
            "comando"
          ],
          "description": "(Solo admins) Ejecuta un comando de consola",
          "descriptionEn": "(Admins only) Runs a console command",
          "parameters": [
            {
              "name": "comando",
              "description": "Sin la barra inicial, ej: time set day",
              "descriptionEn": "Without the leading slash, e.g. time set day",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "misiones",
      "description": "Misiones semanales de la comunidad con recompensas de Pepinillos y XP",
      "descriptionEn": "Weekly community missions with Pepinillos and XP rewards",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "ver"
          ],
          "description": "Consulta tu progreso en las misiones de la semana",
          "descriptionEn": "Checks your progress on this week's missions",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario a consultar (opcional)",
              "descriptionEn": "User to check (optional)",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "reclamar"
          ],
          "description": "Reclama las recompensas de tus misiones semanales completadas",
          "descriptionEn": "Claims the rewards for your completed weekly missions",
          "parameters": []
        }
      ]
    },
    {
      "name": "moderation",
      "description": "Sanciones y advertencias de moderación.",
      "descriptionEn": "Moderation sanctions and warnings.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "kick"
          ],
          "description": "Expulsa a un miembro.",
          "descriptionEn": "Kicks a member.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "ban"
          ],
          "description": "Banea a un miembro sin borrar mensajes.",
          "descriptionEn": "Bans a member without deleting messages.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "untimeout"
          ],
          "description": "Retira el aislamiento temporal.",
          "descriptionEn": "Removes the timeout.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "warn"
          ],
          "description": "Registra una advertencia.",
          "descriptionEn": "Logs a warning.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "timeout"
          ],
          "description": "Aísla temporalmente a un miembro.",
          "descriptionEn": "Temporarily times out a member.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "minutos",
              "description": "Duración de 1 minuto a 28 días.",
              "descriptionEn": "Duration from 1 minute to 28 days.",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 40320,
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "unban"
          ],
          "description": "Retira un baneo por ID de usuario.",
          "descriptionEn": "Removes a ban by user ID.",
          "parameters": [
            {
              "name": "id",
              "description": "ID de usuario de Discord.",
              "descriptionEn": "Discord user ID.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 20,
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "clear"
          ],
          "description": "Borra hasta 100 mensajes recientes del canal.",
          "descriptionEn": "Deletes up to 100 recent messages from the channel.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Cantidad de mensajes (1–100).",
              "descriptionEn": "Number of messages (1–100).",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "warnings"
          ],
          "description": "Consulta advertencias de un usuario.",
          "descriptionEn": "Views a user's warnings.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "pagina",
              "description": "Página de diez advertencias.",
              "descriptionEn": "Page of ten warnings.",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 10000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "unwarn"
          ],
          "description": "Retira una advertencia específica.",
          "descriptionEn": "Removes a specific warning.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "id",
              "description": "Número de caso o UUID de la advertencia.",
              "descriptionEn": "Case number or UUID of the warning.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 36,
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "banlist"
          ],
          "description": "Lista usuarios baneados.",
          "descriptionEn": "Lists banned users.",
          "parameters": []
        },
        {
          "path": [
            "clearuser"
          ],
          "description": "Borra mensajes recientes de un usuario en este canal.",
          "descriptionEn": "Deletes a user's recent messages in this channel.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "demote"
          ],
          "description": "Retira el rol más alto administrable de un miembro.",
          "descriptionEn": "Removes a member's highest manageable role.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "lock"
          ],
          "description": "Bloquea un canal de texto.",
          "descriptionEn": "Locks a text channel.",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal; por defecto el actual.",
              "descriptionEn": "Channel; defaults to the current one.",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "unlock"
          ],
          "description": "Desbloquea un canal de texto.",
          "descriptionEn": "Unlocks a text channel.",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal; por defecto el actual.",
              "descriptionEn": "Channel; defaults to the current one.",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "lockdown"
          ],
          "description": "Bloquea todos los canales de texto.",
          "descriptionEn": "Locks all text channels.",
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirmación",
              "descriptionEn": "Confirmation",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "nuke"
          ],
          "description": "Recrea el canal actual y elimina el original.",
          "descriptionEn": "Recreates the current channel and deletes the original.",
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirmación",
              "descriptionEn": "Confirmation",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "softban"
          ],
          "description": "Banea y desbanea para eliminar mensajes recientes.",
          "descriptionEn": "Bans and unbans to delete recent messages.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "tempban"
          ],
          "description": "Banea temporalmente a un miembro.",
          "descriptionEn": "Temporarily bans a member.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "descriptionEn": "Target member.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "minutos",
              "description": "Duración",
              "descriptionEn": "Duration",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 525600,
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
              "descriptionEn": "Reason for the action.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 400,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "module",
      "description": "Activa o desactiva módulos del bot",
      "descriptionEn": "Enables or disables bot modules",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "toggle"
          ],
          "description": "Activa o desactiva un módulo",
          "descriptionEn": "Enables or disables a module",
          "parameters": [
            {
              "name": "modulo",
              "description": "Módulo a configurar",
              "descriptionEn": "Module to configure",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "🎫 Tickets",
                  "nameEn": "🎫 Tickets",
                  "value": "tickets"
                },
                {
                  "name": "🎵 Música",
                  "nameEn": "🎵 Music",
                  "value": "music"
                },
                {
                  "name": "💰 Economía",
                  "nameEn": "💰 Economy",
                  "value": "economy"
                },
                {
                  "name": "⚔️ XP/Niveles",
                  "nameEn": "⚔️ XP/Levels",
                  "value": "xp"
                },
                {
                  "name": "🔒 Moderación",
                  "nameEn": "🔒 Moderation",
                  "value": "moderation"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "estado",
              "description": "Activar o desactivar",
              "descriptionEn": "Enable or disable",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "✅ Activar",
                  "nameEn": "✅ Enable",
                  "value": "on"
                },
                {
                  "name": "❌ Desactivar",
                  "nameEn": "❌ Disable",
                  "value": "off"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "status"
          ],
          "description": "Muestra el estado de todos los módulos",
          "descriptionEn": "Shows the status of all modules",
          "parameters": []
        }
      ]
    },
    {
      "name": "music",
      "description": "Reproductor musical completo.",
      "descriptionEn": "Full-featured music player.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "playing"
          ],
          "description": "Muestra lo que se está reproduciendo.",
          "descriptionEn": "Shows what is currently playing.",
          "parameters": []
        },
        {
          "path": [
            "queue"
          ],
          "description": "Muestra la cola.",
          "descriptionEn": "Shows the queue.",
          "parameters": []
        },
        {
          "path": [
            "pause"
          ],
          "description": "Pausa la reproducción.",
          "descriptionEn": "Pauses playback.",
          "parameters": []
        },
        {
          "path": [
            "resume"
          ],
          "description": "Reanuda la reproducción.",
          "descriptionEn": "Resumes playback.",
          "parameters": []
        },
        {
          "path": [
            "previous"
          ],
          "description": "Vuelve a la pista anterior.",
          "descriptionEn": "Goes back to the previous track.",
          "parameters": []
        },
        {
          "path": [
            "clear"
          ],
          "description": "Limpia canciones pendientes.",
          "descriptionEn": "Clears pending songs.",
          "parameters": []
        },
        {
          "path": [
            "loop"
          ],
          "description": "Cambia el modo de repetición.",
          "descriptionEn": "Changes the repeat mode.",
          "parameters": []
        },
        {
          "path": [
            "shuffle"
          ],
          "description": "Mezcla la cola.",
          "descriptionEn": "Shuffles the queue.",
          "parameters": []
        },
        {
          "path": [
            "skip"
          ],
          "description": "Salta la pista actual.",
          "descriptionEn": "Skips the current track.",
          "parameters": []
        },
        {
          "path": [
            "stop"
          ],
          "description": "Detiene y limpia el reproductor.",
          "descriptionEn": "Stops and clears the player.",
          "parameters": []
        },
        {
          "path": [
            "lyrics"
          ],
          "description": "Muestra la letra disponible.",
          "descriptionEn": "Shows the available lyrics.",
          "parameters": []
        },
        {
          "path": [
            "play"
          ],
          "description": "Busca o agrega una canción.",
          "descriptionEn": "Searches for or adds a song.",
          "parameters": [
            {
              "name": "cancion",
              "description": "Nombre o URL",
              "descriptionEn": "Name or URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "remove"
          ],
          "description": "Elimina una canción pendiente.",
          "descriptionEn": "Removes a pending song.",
          "parameters": [
            {
              "name": "posicion",
              "description": "Posición",
              "descriptionEn": "Position",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "skipto"
          ],
          "description": "Salta a una posición pendiente.",
          "descriptionEn": "Skips to a pending position.",
          "parameters": [
            {
              "name": "posicion",
              "description": "Posición",
              "descriptionEn": "Position",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "seek"
          ],
          "description": "Cambia la posición de reproducción.",
          "descriptionEn": "Changes the playback position.",
          "parameters": [
            {
              "name": "segundos",
              "description": "Segundos",
              "descriptionEn": "Seconds",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "volume"
          ],
          "description": "Ajusta el volumen.",
          "descriptionEn": "Adjusts the volume.",
          "parameters": [
            {
              "name": "nivel",
              "description": "Volumen 1–100",
              "descriptionEn": "Volume 1–100",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "bassboost"
          ],
          "description": "Configura el refuerzo de bajos.",
          "descriptionEn": "Sets the bass boost.",
          "parameters": [
            {
              "name": "nivel",
              "description": "Intensidad 0–3, o extremo",
              "descriptionEn": "Intensity 0–3, or extreme",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "0 · Desactivado",
                  "nameEn": "0 · Off",
                  "value": "0"
                },
                {
                  "name": "1 · Bajo",
                  "nameEn": "1 · Low",
                  "value": "1"
                },
                {
                  "name": "2 · Medio",
                  "nameEn": "2 · Medium",
                  "value": "2"
                },
                {
                  "name": "3 · Alto",
                  "nameEn": "3 · High",
                  "value": "3"
                },
                {
                  "name": "Extremo",
                  "nameEn": "Extreme",
                  "value": "earrape"
                }
              ],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "nivel",
      "description": "Niveles, XP y recompensas.",
      "descriptionEn": "Levels, XP and rewards.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "rank"
          ],
          "description": "Consulta el progreso de un usuario.",
          "descriptionEn": "Checks a user's progress.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario; por defecto tú.",
              "descriptionEn": "User; defaults to you.",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "leaderboard"
          ],
          "description": "Muestra los diez primeros usuarios.",
          "descriptionEn": "Shows the top ten users.",
          "parameters": []
        },
        {
          "path": [
            "rewards"
          ],
          "description": "Lista las recompensas configuradas.",
          "descriptionEn": "Lists the configured rewards.",
          "parameters": []
        },
        {
          "path": [
            "createreward"
          ],
          "description": "Crea o reemplaza una recompensa.",
          "descriptionEn": "Creates or replaces a reward.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Nivel requerido",
              "descriptionEn": "Required level",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 2000000000,
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Rol de recompensa",
              "descriptionEn": "Reward role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "deletereward"
          ],
          "description": "Elimina una recompensa.",
          "descriptionEn": "Deletes a reward.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Nivel",
              "descriptionEn": "Level",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 2000000000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setlevel"
          ],
          "description": "Fija el progreso de un usuario.",
          "descriptionEn": "Sets a user's progress.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "descriptionEn": "Target user",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Nuevo valor",
              "descriptionEn": "New value",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "maxValue": 2000000000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "setxp"
          ],
          "description": "Fija el progreso de un usuario.",
          "descriptionEn": "Sets a user's progress.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "descriptionEn": "Target user",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Nuevo valor",
              "descriptionEn": "New value",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "maxValue": 2000000000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "notepad",
      "description": "Notas personales, separadas por usuario y servidor.",
      "descriptionEn": "Personal notes, kept separate per user and server.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Guarda una nota personal.",
          "descriptionEn": "Saves a personal note.",
          "parameters": [
            {
              "name": "texto",
              "description": "Contenido de tu nota personal.",
              "descriptionEn": "Content of your personal note.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 1500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Muestra tus notas de este servidor.",
          "descriptionEn": "Shows your notes in this server.",
          "parameters": [
            {
              "name": "pagina",
              "description": "Página de dos notas.",
              "descriptionEn": "Page of two notes.",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 10000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "notes"
          ],
          "description": "Alias de list: muestra tus notas de este servidor.",
          "descriptionEn": "Alias of list: shows your notes in this server.",
          "parameters": [
            {
              "name": "pagina",
              "description": "Página de dos notas.",
              "descriptionEn": "Page of two notes.",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 10000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "edit"
          ],
          "description": "Edita una nota propia.",
          "descriptionEn": "Edits one of your notes.",
          "parameters": [
            {
              "name": "id",
              "description": "Identificador mostrado en /notepad list.",
              "descriptionEn": "ID shown in /notepad list.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 36,
              "channelTypes": []
            },
            {
              "name": "texto",
              "description": "Contenido de tu nota personal.",
              "descriptionEn": "Content of your personal note.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 1500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina una nota propia.",
          "descriptionEn": "Deletes one of your notes.",
          "parameters": [
            {
              "name": "id",
              "description": "Identificador mostrado en /notepad list.",
              "descriptionEn": "ID shown in /notepad list.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 36,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "ping",
      "description": "Comprueba que el bot está activo.",
      "descriptionEn": "Checks that the bot is online.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Comprueba que el bot está activo.",
          "descriptionEn": "Checks that the bot is online.",
          "parameters": []
        }
      ]
    },
    {
      "name": "play",
      "description": "Reproduce una canción de YouTube, Spotify o SoundCloud.",
      "descriptionEn": "Plays a song from YouTube, Spotify or SoundCloud.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Reproduce una canción de YouTube, Spotify o SoundCloud.",
          "descriptionEn": "Plays a song from YouTube, Spotify or SoundCloud.",
          "parameters": [
            {
              "name": "cancion",
              "description": "Nombre de la canción o URL",
              "descriptionEn": "Song name or URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "profile",
      "description": "Perfil social; por servidor o global según la configuración.",
      "descriptionEn": "Social profile; per server or global depending on the configuration.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "create"
          ],
          "description": "Crea tu perfil.",
          "descriptionEn": "Creates your profile.",
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina tu perfil.",
          "descriptionEn": "Deletes your profile.",
          "parameters": []
        },
        {
          "path": [
            "profile"
          ],
          "description": "Muestra un perfil.",
          "descriptionEn": "Shows a profile.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "aboutme"
          ],
          "description": "Actualiza tu descripción.",
          "descriptionEn": "Updates your description.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "age"
          ],
          "description": "Actualiza tu edad.",
          "descriptionEn": "Updates your age.",
          "parameters": [
            {
              "name": "number",
              "description": "Edad",
              "descriptionEn": "Age",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 13,
              "maxValue": 120,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "bday"
          ],
          "description": "Actualiza la fecha visible.",
          "descriptionEn": "Updates the displayed date.",
          "parameters": [
            {
              "name": "bday",
              "description": "Fecha",
              "descriptionEn": "Date",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 32,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "actor",
            "addactor"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "actor",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "actor",
            "delactor"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "actor",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "artist",
            "addartist"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "artist",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "artist",
            "delartist"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "artist",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "food",
            "addfood"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "food",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "food",
            "delfood"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "food",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "movie",
            "addmovie"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "movie",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "movie",
            "delmovie"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "movie",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "pet",
            "addpet"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "pet",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "pet",
            "delpet"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "pet",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "song",
            "addsong"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "song",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "song",
            "delsong"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "song",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "hobbies",
            "addhobby"
          ],
          "description": "Añade un valor.",
          "descriptionEn": "Adds a value.",
          "parameters": [
            {
              "name": "hobby",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "hobbies",
            "delhobby"
          ],
          "description": "Elimina un valor.",
          "descriptionEn": "Removes a value.",
          "parameters": [
            {
              "name": "hobby",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "color"
          ],
          "description": "Color hexadecimal del perfil.",
          "descriptionEn": "Profile hex color.",
          "parameters": [
            {
              "name": "color",
              "description": "#RRGGBB",
              "descriptionEn": "#RRGGBB",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "gender"
          ],
          "description": "Configura tu género.",
          "descriptionEn": "Sets your gender.",
          "parameters": [
            {
              "name": "value",
              "description": "Valor",
              "descriptionEn": "Value",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 64,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "origin"
          ],
          "description": "Configura tu país de origen.",
          "descriptionEn": "Sets your country of origin.",
          "parameters": [
            {
              "name": "country",
              "description": "País",
              "descriptionEn": "Country",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "status"
          ],
          "description": "Configura tu estado.",
          "descriptionEn": "Sets your status.",
          "parameters": [
            {
              "name": "text",
              "description": "Estado",
              "descriptionEn": "Status",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 200,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "queue",
      "description": "Muestra la cola o elimina una canción pendiente.",
      "descriptionEn": "Shows the queue or removes a pending song.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Muestra la cola o elimina una canción pendiente.",
          "descriptionEn": "Shows the queue or removes a pending song.",
          "parameters": [
            {
              "name": "quitar",
              "description": "Posición pendiente que quieres eliminar (desde 1).",
              "descriptionEn": "Pending position you want to remove (from 1).",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "radio",
      "description": "Radio en vivo mediante Lavalink.",
      "descriptionEn": "Live radio via Lavalink.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "play"
          ],
          "description": "Inicia Radio 538.",
          "descriptionEn": "Starts Radio 538.",
          "parameters": []
        },
        {
          "path": [
            "stop"
          ],
          "description": "Detiene la radio y la sesión.",
          "descriptionEn": "Stops the radio and the session.",
          "parameters": []
        },
        {
          "path": [
            "playing"
          ],
          "description": "Muestra la radio activa.",
          "descriptionEn": "Shows the active radio.",
          "parameters": []
        }
      ]
    },
    {
      "name": "rank",
      "description": "Gestiona rangos de juego y lobbies de voz por rango",
      "descriptionEn": "Manages game ranks and rank-based voice lobbies",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade o actualiza un rango de juego",
          "descriptionEn": "Adds or updates a game rank",
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego (ej: overwatch, fortnite)",
              "descriptionEn": "Game key (e.g. overwatch, fortnite)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "rank",
              "description": "Clave del rango (ej: bronze, gold)",
              "descriptionEn": "Rank key (e.g. bronze, gold)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "label",
              "description": "Etiqueta visible (ej: 🥉 Bronce)",
              "descriptionEn": "Display label (e.g. 🥉 Bronze)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            },
            {
              "name": "tier",
              "description": "Orden del rango (1 = más bajo, 10 = más alto)",
              "descriptionEn": "Rank order (1 = lowest, 10 = highest)",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100,
              "channelTypes": []
            },
            {
              "name": "role_emoji",
              "description": "Emoji para decoración de perfil (default: 🎮)",
              "descriptionEn": "Emoji for profile decoration (default: 🎮)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 8,
              "channelTypes": []
            },
            {
              "name": "channel_emoji",
              "description": "Emoji para el canal de voz (default: 🎮)",
              "descriptionEn": "Emoji for the voice channel (default: 🎮)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 8,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "remove"
          ],
          "description": "Elimina un rango de juego",
          "descriptionEn": "Removes a game rank",
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego",
              "descriptionEn": "Game key",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "rank",
              "description": "Clave del rango a eliminar",
              "descriptionEn": "Key of the rank to remove",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista los rangos configurados",
          "descriptionEn": "Lists the configured ranks",
          "parameters": [
            {
              "name": "game",
              "description": "Filtrar por juego (opcional)",
              "descriptionEn": "Filter by game (optional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "lobbies-setup"
          ],
          "description": "Crea automáticamente los canales de voz lobby para todos los rangos de un juego",
          "descriptionEn": "Automatically creates lobby voice channels for all ranks of a game",
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego",
              "descriptionEn": "Game key",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            },
            {
              "name": "category",
              "description": "Categoría de Discord donde crear los canales",
              "descriptionEn": "Discord category to create the channels in",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                4
              ]
            },
            {
              "name": "user_limit",
              "description": "Límite de la sala temporal (default: 5)",
              "descriptionEn": "Temporary room limit (default: 5)",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 99,
              "channelTypes": []
            },
            {
              "name": "requires_profile",
              "description": "¿Requiere plataforma/región configurada? (default: true)",
              "descriptionEn": "Requires platform/region to be set? (default: true)",
              "type": 5,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "lobbies-teardown"
          ],
          "description": "Elimina los canales de voz lobby de un juego",
          "descriptionEn": "Deletes a game's lobby voice channels",
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego",
              "descriptionEn": "Game key",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 50,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "report",
      "description": "Reporta un error o usuario al equipo del servidor.",
      "descriptionEn": "Reports a bug or user to the server team.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Reporta un error o usuario al equipo del servidor.",
          "descriptionEn": "Reports a bug or user to the server team.",
          "parameters": [
            {
              "name": "type",
              "description": "Tipo",
              "descriptionEn": "Type",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Error",
                  "nameEn": "Bug",
                  "value": "bug"
                },
                {
                  "name": "Usuario",
                  "nameEn": "User",
                  "value": "user"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "description",
              "description": "Descripción",
              "descriptionEn": "Description",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 10,
              "maxLength": 1500,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "scrim",
      "description": "Organizador de scrims y partidas internas con balanceo automático por rango",
      "descriptionEn": "Scrim and internal match organizer with automatic rank balancing",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "crear"
          ],
          "description": "Publica una convocatoria interactiva para armar una scrim o partida interna",
          "descriptionEn": "Posts an interactive call to set up a scrim or internal match",
          "parameters": [
            {
              "name": "titulo",
              "description": "Nombre de la partida (ej: Scrim Interna Overwatch 5v5)",
              "descriptionEn": "Match name (e.g. Internal Overwatch Scrim 5v5)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 80,
              "channelTypes": []
            },
            {
              "name": "modo",
              "description": "Formato de equipos y roles",
              "descriptionEn": "Team and role format",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [
                {
                  "name": "5v5 por Roles (2 Tanques, 4 DPS, 4 Supports)",
                  "nameEn": "5v5 Role Queue (2 Tanks, 4 DPS, 4 Supports)",
                  "value": "ow5v5"
                },
                {
                  "name": "5v5 Abierto (10 jugadores)",
                  "nameEn": "5v5 Open (10 players)",
                  "value": "open10"
                },
                {
                  "name": "4v4 Abierto (8 jugadores)",
                  "nameEn": "4v4 Open (8 players)",
                  "value": "custom8"
                },
                {
                  "name": "3v3 Abierto (6 jugadores)",
                  "nameEn": "3v3 Open (6 players)",
                  "value": "open6"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "hora",
              "description": "Horario o nota (ej: Hoy 21:00 o En 15 minutos)",
              "descriptionEn": "Time or note (e.g. Today 21:00 or In 15 minutes)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 60,
              "channelTypes": []
            },
            {
              "name": "canal",
              "description": "Canal donde publicar la convocatoria (por defecto este canal)",
              "descriptionEn": "Channel to post the call in (defaults to this channel)",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0,
                5
              ]
            }
          ]
        },
        {
          "path": [
            "equilibrar"
          ],
          "description": "Sortea y balancea los equipos (Alfa vs Omega) según el rango de los inscritos",
          "descriptionEn": "Draws and balances the teams (Alfa vs Omega) based on the sign-ups' rank",
          "parameters": []
        },
        {
          "path": [
            "cerrar"
          ],
          "description": "Cierra las inscripciones de la scrim activa en este canal",
          "descriptionEn": "Closes sign-ups for the active scrim in this channel",
          "parameters": []
        }
      ]
    },
    {
      "name": "search",
      "description": "Búsquedas y consultas externas.",
      "descriptionEn": "External searches and lookups.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "bing"
          ],
          "description": "Busca con Bing.",
          "descriptionEn": "Searches with Bing.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
              "descriptionEn": "Query",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "ddg"
          ],
          "description": "Busca con DuckDuckGo.",
          "descriptionEn": "Searches with DuckDuckGo.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
              "descriptionEn": "Query",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "google"
          ],
          "description": "Busca con Google.",
          "descriptionEn": "Searches with Google.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
              "descriptionEn": "Query",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "youtube"
          ],
          "description": "Busca con YouTube.",
          "descriptionEn": "Searches with YouTube.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
              "descriptionEn": "Query",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "corona"
          ],
          "description": "Estadísticas sanitarias públicas.",
          "descriptionEn": "Public health statistics.",
          "parameters": [
            {
              "name": "country",
              "description": "País",
              "descriptionEn": "Country",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "crypto"
          ],
          "description": "Precio de criptomoneda.",
          "descriptionEn": "Cryptocurrency price.",
          "parameters": [
            {
              "name": "coin",
              "description": "ID, por ejemplo bitcoin",
              "descriptionEn": "ID, for example bitcoin",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "currency",
              "description": "Moneda, por ejemplo usd",
              "descriptionEn": "Currency, for example usd",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "docs"
          ],
          "description": "Busca documentación de Discord.",
          "descriptionEn": "Searches Discord documentation.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
              "descriptionEn": "Query",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "github"
          ],
          "description": "Consulta un usuario de GitHub.",
          "descriptionEn": "Looks up a GitHub user.",
          "parameters": [
            {
              "name": "name",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "hexcolour"
          ],
          "description": "Previsualiza un color.",
          "descriptionEn": "Previews a color.",
          "parameters": [
            {
              "name": "color",
              "description": "Hexadecimal",
              "descriptionEn": "Hexadecimal",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "itunes"
          ],
          "description": "Busca una canción en iTunes.",
          "descriptionEn": "Searches for a song on iTunes.",
          "parameters": [
            {
              "name": "song",
              "description": "Canción",
              "descriptionEn": "Song",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "npm"
          ],
          "description": "Consulta un paquete npm.",
          "descriptionEn": "Looks up an npm package.",
          "parameters": [
            {
              "name": "name",
              "description": "Paquete",
              "descriptionEn": "Package",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "steam"
          ],
          "description": "Busca en Steam.",
          "descriptionEn": "Searches on Steam.",
          "parameters": [
            {
              "name": "name",
              "description": "Juego",
              "descriptionEn": "Game",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "translate"
          ],
          "description": "Traduce texto.",
          "descriptionEn": "Translates text.",
          "parameters": [
            {
              "name": "language",
              "description": "Código destino, ej. en",
              "descriptionEn": "Target code, e.g. en",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "weather"
          ],
          "description": "Consulta el clima actual.",
          "descriptionEn": "Checks the current weather.",
          "parameters": [
            {
              "name": "location",
              "description": "Ubicación",
              "descriptionEn": "Location",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "seek",
      "description": "Cambia la posición de la canción actual.",
      "descriptionEn": "Changes the position of the current song.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Cambia la posición de la canción actual.",
          "descriptionEn": "Changes the position of the current song.",
          "parameters": [
            {
              "name": "segundos",
              "description": "Segundos desde el inicio.",
              "descriptionEn": "Seconds from the start.",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "selfrole",
      "description": "Gestiona los roles autoasignables del servidor",
      "descriptionEn": "Manages the server's self-assignable roles",
      "defaultMemberPermissions": "268435456",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade un rol al panel de autoasignación",
          "descriptionEn": "Adds a role to the self-assign panel",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol a añadir",
              "descriptionEn": "Role to add",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "etiqueta",
              "description": "Etiqueta visible en el panel (opcional)",
              "descriptionEn": "Label shown on the panel (optional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "categoria",
              "description": "Categoría libre, ej: color, game, coaching, region...",
              "descriptionEn": "Free-form category, e.g. color, game, coaching, region...",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición dentro de la sección (0, 1, 2...)",
              "descriptionEn": "Display order within the section (0, 1, 2...)",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina un rol del panel de autoasignación",
          "descriptionEn": "Removes a role from the self-assign panel",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol a eliminar",
              "descriptionEn": "Role to remove",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista todos los roles autoasignables configurados",
          "descriptionEn": "Lists all configured self-assignable roles",
          "parameters": []
        },
        {
          "path": [
            "panel"
          ],
          "description": "Publica el panel de selección de roles en el canal indicado",
          "descriptionEn": "Posts the role selection panel in the given channel",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal donde publicar el panel",
              "descriptionEn": "Channel to post the panel in",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            },
            {
              "name": "estilo",
              "description": "Menús desplegables (por defecto) o botones",
              "descriptionEn": "Dropdown menus (default) or buttons",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Menús",
                  "nameEn": "Menus",
                  "value": "menu"
                },
                {
                  "name": "Botones",
                  "nameEn": "Buttons",
                  "value": "buttons"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "section-add"
          ],
          "description": "Añade o edita una sección del panel de roles",
          "descriptionEn": "Adds or edits a section of the role panel",
          "parameters": [
            {
              "name": "titulo",
              "description": "Nombre de la sección",
              "descriptionEn": "Section name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "categorias",
              "description": "Categorías incluidas separadas por coma (ej: color,notification)",
              "descriptionEn": "Included categories, comma-separated (e.g. color,notification)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji de la sección (ej: 🎨)",
              "descriptionEn": "Section emoji (e.g. 🎨)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición (1, 2, 3...)",
              "descriptionEn": "Display order (1, 2, 3...)",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "rolgate",
              "description": "Rol requerido para usar esta sección (opcional)",
              "descriptionEn": "Role required to use this section (optional)",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "nota",
              "description": "Nota mostrada bajo el título de la sección",
              "descriptionEn": "Note shown under the section title",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "section-delete"
          ],
          "description": "Elimina una sección del panel",
          "descriptionEn": "Removes a section from the panel",
          "parameters": [
            {
              "name": "titulo",
              "description": "Nombre exacto de la sección",
              "descriptionEn": "Exact section name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "section-list"
          ],
          "description": "Lista las secciones configuradas del panel",
          "descriptionEn": "Lists the panel's configured sections",
          "parameters": []
        },
        {
          "path": [
            "cascade-add"
          ],
          "description": "Configura qué categorías se piden al seleccionar un rol",
          "descriptionEn": "Sets which categories are asked for when a role is selected",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol que dispara la cascada",
              "descriptionEn": "Role that triggers the cascade",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "categorias",
              "description": "Categorías separadas por coma (ej: competitive_rank,position,platform)",
              "descriptionEn": "Comma-separated categories (e.g. competitive_rank,position,platform)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "titulo",
              "description": "Título del mensaje de cascada (opcional)",
              "descriptionEn": "Cascade message title (optional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "cascade-delete"
          ],
          "description": "Elimina la cascada de un rol",
          "descriptionEn": "Removes a role's cascade",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol cuya cascada eliminar",
              "descriptionEn": "Role whose cascade to remove",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "cascade-list"
          ],
          "description": "Lista todas las cascadas configuradas",
          "descriptionEn": "Lists all configured cascades",
          "parameters": []
        }
      ]
    },
    {
      "name": "serverstats",
      "description": "Canales contadores con estadísticas del servidor.",
      "descriptionEn": "Counter channels with server statistics.",
      "defaultMemberPermissions": "16",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "boosts"
          ],
          "description": "Crea el contador de boosts.",
          "descriptionEn": "Creates the boosts counter.",
          "parameters": []
        },
        {
          "path": [
            "tier"
          ],
          "description": "Crea el contador de nivel.",
          "descriptionEn": "Creates the tier counter.",
          "parameters": []
        },
        {
          "path": [
            "channels"
          ],
          "description": "Crea el contador de canales.",
          "descriptionEn": "Creates the channels counter.",
          "parameters": []
        },
        {
          "path": [
            "stage-channels"
          ],
          "description": "Crea el contador de escenarios.",
          "descriptionEn": "Creates the stage channels counter.",
          "parameters": []
        },
        {
          "path": [
            "text-channels"
          ],
          "description": "Crea el contador de texto.",
          "descriptionEn": "Creates the text channels counter.",
          "parameters": []
        },
        {
          "path": [
            "voice-channels"
          ],
          "description": "Crea el contador de voz.",
          "descriptionEn": "Creates the voice channels counter.",
          "parameters": []
        },
        {
          "path": [
            "news-channels"
          ],
          "description": "Crea el contador de anuncios.",
          "descriptionEn": "Creates the announcement channels counter.",
          "parameters": []
        },
        {
          "path": [
            "members"
          ],
          "description": "Crea el contador de miembros.",
          "descriptionEn": "Creates the members counter.",
          "parameters": []
        },
        {
          "path": [
            "bots"
          ],
          "description": "Crea el contador de bots.",
          "descriptionEn": "Creates the bots counter.",
          "parameters": []
        },
        {
          "path": [
            "roles"
          ],
          "description": "Crea el contador de roles.",
          "descriptionEn": "Creates the roles counter.",
          "parameters": []
        },
        {
          "path": [
            "emoji"
          ],
          "description": "Crea el contador de emojis.",
          "descriptionEn": "Creates the emoji counter.",
          "parameters": []
        },
        {
          "path": [
            "static-emoji"
          ],
          "description": "Crea el contador de emojis estáticos.",
          "descriptionEn": "Creates the static emoji counter.",
          "parameters": []
        },
        {
          "path": [
            "animated-emoji"
          ],
          "description": "Crea el contador de emojis animados.",
          "descriptionEn": "Creates the animated emoji counter.",
          "parameters": []
        },
        {
          "path": [
            "time"
          ],
          "description": "Crea un reloj con una zona horaria.",
          "descriptionEn": "Creates a clock for a time zone.",
          "parameters": [
            {
              "name": "timezone",
              "description": "Zona IANA, por ejemplo America/Guatemala",
              "descriptionEn": "IANA zone, for example America/Guatemala",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista los contadores activos.",
          "descriptionEn": "Lists the active counters.",
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina un contador.",
          "descriptionEn": "Deletes a counter.",
          "parameters": [
            {
              "name": "tipo",
              "description": "Contador",
              "descriptionEn": "Counter",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Boosts",
                  "nameEn": "Boosts",
                  "value": "boosts"
                },
                {
                  "name": "Nivel",
                  "nameEn": "Tier",
                  "value": "tier"
                },
                {
                  "name": "Canales",
                  "nameEn": "Channels",
                  "value": "channels"
                },
                {
                  "name": "Escenarios",
                  "nameEn": "Stages",
                  "value": "stage-channels"
                },
                {
                  "name": "Texto",
                  "nameEn": "Text",
                  "value": "text-channels"
                },
                {
                  "name": "Voz",
                  "nameEn": "Voice",
                  "value": "voice-channels"
                },
                {
                  "name": "Anuncios",
                  "nameEn": "Announcements",
                  "value": "news-channels"
                },
                {
                  "name": "Miembros",
                  "nameEn": "Members",
                  "value": "members"
                },
                {
                  "name": "Bots",
                  "nameEn": "Bots",
                  "value": "bots"
                },
                {
                  "name": "Roles",
                  "nameEn": "Roles",
                  "value": "roles"
                },
                {
                  "name": "Emojis",
                  "nameEn": "Emojis",
                  "value": "emoji"
                },
                {
                  "name": "Emojis estáticos",
                  "nameEn": "Static emojis",
                  "value": "static-emoji"
                },
                {
                  "name": "Emojis animados",
                  "nameEn": "Animated emojis",
                  "value": "animated-emoji"
                },
                {
                  "name": "Hora",
                  "nameEn": "Time",
                  "value": "time"
                }
              ],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "setup",
      "description": "Asistente interactivo para configurar el bot en este servidor",
      "descriptionEn": "Interactive assistant to set up the bot on this server",
      "defaultMemberPermissions": "8",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "wizard"
          ],
          "description": "Inicia el wizard de configuración paso a paso",
          "descriptionEn": "Starts the step-by-step setup wizard",
          "parameters": []
        },
        {
          "path": [
            "status"
          ],
          "description": "Muestra el estado actual de la configuración del bot",
          "descriptionEn": "Shows the bot's current configuration status",
          "parameters": []
        },
        {
          "path": [
            "groupsearch"
          ],
          "description": "Administra los canales para buscar grupo (LFG).",
          "descriptionEn": "Manages the looking-for-group (LFG) channels.",
          "parameters": [
            {
              "name": "accion",
              "description": "Cambio que se aplicará",
              "descriptionEn": "Change to apply",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Agregar canal",
                  "nameEn": "Add channel",
                  "value": "add"
                },
                {
                  "name": "Retirar canal",
                  "nameEn": "Remove channel",
                  "value": "remove"
                },
                {
                  "name": "Listar canales",
                  "nameEn": "List channels",
                  "value": "list"
                },
                {
                  "name": "Restaurar detección automática",
                  "nameEn": "Restore automatic detection",
                  "value": "clear"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal que se agregará o retirará",
              "descriptionEn": "Channel to add or remove",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "logs"
          ],
          "description": "Configura los canales de logs, niveles o boosts.",
          "descriptionEn": "Sets up the log channels for the server, levels or boosts.",
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "descriptionEn": "Feature to configure",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Logs del servidor",
                  "nameEn": "Server logs",
                  "value": "serverlogs"
                },
                {
                  "name": "Logs de niveles",
                  "nameEn": "Level logs",
                  "value": "levellogs"
                },
                {
                  "name": "Logs de boosts",
                  "nameEn": "Boost logs",
                  "value": "boostlogs"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "fun"
          ],
          "description": "Configura cumpleaños, chatbot, reseñas, sugerencias o starboard.",
          "descriptionEn": "Sets up birthdays, chatbot, reviews, suggestions or starboard.",
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "descriptionEn": "Feature to configure",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Cumpleaños",
                  "nameEn": "Birthdays",
                  "value": "birthdays"
                },
                {
                  "name": "Chatbot",
                  "nameEn": "Chatbot",
                  "value": "chatbot"
                },
                {
                  "name": "Reseñas",
                  "nameEn": "Reviews",
                  "value": "reviews"
                },
                {
                  "name": "Sugerencias",
                  "nameEn": "Suggestions",
                  "value": "suggestions"
                },
                {
                  "name": "Starboard",
                  "nameEn": "Starboard",
                  "value": "starboard"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "games"
          ],
          "description": "Configura los juegos de canal: contar, número, palabra o cadena.",
          "descriptionEn": "Sets up channel games: counting, number, word or chain.",
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "descriptionEn": "Feature to configure",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Contar",
                  "nameEn": "Counting",
                  "value": "counting"
                },
                {
                  "name": "Adivina el número",
                  "nameEn": "Guess the number",
                  "value": "gtn"
                },
                {
                  "name": "Adivina la palabra",
                  "nameEn": "Guess the word",
                  "value": "gtw"
                },
                {
                  "name": "Cadena de palabras",
                  "nameEn": "Word chain",
                  "value": "wordsnake"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "welcomechannels"
          ],
          "description": "Configura los canales de bienvenida y despedida.",
          "descriptionEn": "Sets up the welcome and goodbye channels.",
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "descriptionEn": "Feature to configure",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Canal de bienvenida",
                  "nameEn": "Welcome channel",
                  "value": "welcomechannel"
                },
                {
                  "name": "Canal de despedidas",
                  "nameEn": "Goodbye channel",
                  "value": "leavechannel"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
              "descriptionEn": "Text channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "tickets"
          ],
          "description": "Configura categoría, rol y logs de tickets.",
          "descriptionEn": "Sets up the ticket category, role and logs.",
          "parameters": [
            {
              "name": "category",
              "description": "Categoría",
              "descriptionEn": "Category",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                4
              ]
            },
            {
              "name": "role",
              "description": "Rol Staff",
              "descriptionEn": "Staff role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal del panel",
              "descriptionEn": "Panel channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            },
            {
              "name": "logs",
              "description": "Canal de logs",
              "descriptionEn": "Log channel",
              "type": 7,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "customvoice"
          ],
          "description": "Configura el lobby de voz.",
          "descriptionEn": "Sets up the voice lobby.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal de voz",
              "descriptionEn": "Voice channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                2
              ]
            },
            {
              "name": "channelname",
              "description": "Plantilla con {user}",
              "descriptionEn": "Template with {user}",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "welcomerole"
          ],
          "description": "Configura el rol verificado.",
          "descriptionEn": "Sets up the verified role.",
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
              "descriptionEn": "Role",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "ticketpanel"
          ],
          "description": "Publica el panel de tickets.",
          "descriptionEn": "Posts the ticket panel.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        },
        {
          "path": [
            "deletesetup"
          ],
          "description": "Elimina una configuración guardada.",
          "descriptionEn": "Deletes a saved configuration.",
          "parameters": [
            {
              "name": "setup",
              "description": "Configuración",
              "descriptionEn": "Configuration",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Tickets",
                  "nameEn": "Tickets",
                  "value": "tickets"
                },
                {
                  "name": "Voz temporal",
                  "nameEn": "Temporary voice",
                  "value": "customvoice"
                },
                {
                  "name": "Logs del servidor",
                  "nameEn": "Server logs",
                  "value": "serverlogs"
                },
                {
                  "name": "Logs de niveles",
                  "nameEn": "Level logs",
                  "value": "levellogs"
                },
                {
                  "name": "Logs de boosts",
                  "nameEn": "Boost logs",
                  "value": "boostlogs"
                },
                {
                  "name": "Cumpleaños",
                  "nameEn": "Birthdays",
                  "value": "birthdays"
                },
                {
                  "name": "Chatbot",
                  "nameEn": "Chatbot",
                  "value": "chatbot"
                },
                {
                  "name": "Reseñas",
                  "nameEn": "Reviews",
                  "value": "reviews"
                },
                {
                  "name": "Sugerencias",
                  "nameEn": "Suggestions",
                  "value": "suggestions"
                },
                {
                  "name": "Starboard",
                  "nameEn": "Starboard",
                  "value": "starboard"
                },
                {
                  "name": "Buscar grupo (LFG)",
                  "nameEn": "Looking for group (LFG)",
                  "value": "groupsearch"
                },
                {
                  "name": "Contar",
                  "nameEn": "Counting",
                  "value": "counting"
                },
                {
                  "name": "Adivina el número",
                  "nameEn": "Guess the number",
                  "value": "gtn"
                },
                {
                  "name": "Adivina la palabra",
                  "nameEn": "Guess the word",
                  "value": "gtw"
                },
                {
                  "name": "Cadena de palabras",
                  "nameEn": "Word chain",
                  "value": "wordsnake"
                },
                {
                  "name": "Canal de bienvenida",
                  "nameEn": "Welcome channel",
                  "value": "welcomechannel"
                },
                {
                  "name": "Canal de despedidas",
                  "nameEn": "Goodbye channel",
                  "value": "leavechannel"
                },
                {
                  "name": "Rol de bienvenida",
                  "nameEn": "Welcome role",
                  "value": "welcomerole"
                }
              ],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "skip",
      "description": "Salta la canción actual o avanza a una posición de /queue.",
      "descriptionEn": "Skips the current song or jumps to a position in /queue.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Salta la canción actual o avanza a una posición de /queue.",
          "descriptionEn": "Skips the current song or jumps to a position in /queue.",
          "parameters": [
            {
              "name": "posicion",
              "description": "Posición de la cola pendiente, comenzando en 1.",
              "descriptionEn": "Position in the pending queue, starting at 1.",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "soundboard",
      "description": "Efectos de sonido mediante Lavalink.",
      "descriptionEn": "Sound effects via Lavalink.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "windows",
            "windowserror"
          ],
          "description": "Reproduce windowserror.",
          "descriptionEn": "Plays windowserror.",
          "parameters": []
        },
        {
          "path": [
            "windows",
            "windowsshutdown"
          ],
          "description": "Reproduce windowsshutdown.",
          "descriptionEn": "Plays windowsshutdown.",
          "parameters": []
        },
        {
          "path": [
            "windows",
            "windowsstartup"
          ],
          "description": "Reproduce windowsstartup.",
          "descriptionEn": "Plays windowsstartup.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "reee"
          ],
          "description": "Reproduce reee.",
          "descriptionEn": "Plays reee.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "defaultdance"
          ],
          "description": "Reproduce defaultdance.",
          "descriptionEn": "Plays defaultdance.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "startup"
          ],
          "description": "Reproduce startup.",
          "descriptionEn": "Plays startup.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "thomas"
          ],
          "description": "Reproduce thomas.",
          "descriptionEn": "Plays thomas.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "wegothim"
          ],
          "description": "Reproduce wegothim.",
          "descriptionEn": "Plays wegothim.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "dancememe"
          ],
          "description": "Reproduce dancememe.",
          "descriptionEn": "Plays dancememe.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "despacito"
          ],
          "description": "Reproduce despacito.",
          "descriptionEn": "Plays despacito.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "elevator"
          ],
          "description": "Reproduce elevator.",
          "descriptionEn": "Plays elevator.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "rickastley"
          ],
          "description": "Reproduce rickastley.",
          "descriptionEn": "Plays rickastley.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "running"
          ],
          "description": "Reproduce running.",
          "descriptionEn": "Plays running.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "tobecontinued"
          ],
          "description": "Reproduce tobecontinued.",
          "descriptionEn": "Plays tobecontinued.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordcall"
          ],
          "description": "Reproduce discordcall.",
          "descriptionEn": "Plays discordcall.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordjoin"
          ],
          "description": "Reproduce discordjoin.",
          "descriptionEn": "Plays discordjoin.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordleave"
          ],
          "description": "Reproduce discordleave.",
          "descriptionEn": "Plays discordleave.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordnotification"
          ],
          "description": "Reproduce discordnotification.",
          "descriptionEn": "Plays discordnotification.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "fbi"
          ],
          "description": "Reproduce fbi.",
          "descriptionEn": "Plays fbi.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "jeff"
          ],
          "description": "Reproduce jeff.",
          "descriptionEn": "Plays jeff.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "lambo"
          ],
          "description": "Reproduce lambo.",
          "descriptionEn": "Plays lambo.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "missionfailed"
          ],
          "description": "Reproduce missionfailed.",
          "descriptionEn": "Plays missionfailed.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "moaning"
          ],
          "description": "Reproduce moaning.",
          "descriptionEn": "Plays moaning.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "nani"
          ],
          "description": "Reproduce nani.",
          "descriptionEn": "Plays nani.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "nyancat"
          ],
          "description": "Reproduce nyancat.",
          "descriptionEn": "Plays nyancat.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "ohh"
          ],
          "description": "Reproduce ohh.",
          "descriptionEn": "Plays ohh.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "rimshot"
          ],
          "description": "Reproduce rimshot.",
          "descriptionEn": "Plays rimshot.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "roblox"
          ],
          "description": "Reproduce roblox.",
          "descriptionEn": "Plays roblox.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "shotdown"
          ],
          "description": "Reproduce shotdown.",
          "descriptionEn": "Plays shotdown.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "spongebob"
          ],
          "description": "Reproduce spongebob.",
          "descriptionEn": "Plays spongebob.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "wow"
          ],
          "description": "Reproduce wow.",
          "descriptionEn": "Plays wow.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "yeet"
          ],
          "description": "Reproduce yeet.",
          "descriptionEn": "Plays yeet.",
          "parameters": []
        }
      ]
    },
    {
      "name": "stickymessages",
      "description": "Mensajes fijados dinámicamente.",
      "descriptionEn": "Dynamically pinned messages.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "stick"
          ],
          "description": "Configura un sticky.",
          "descriptionEn": "Sets up a sticky.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            },
            {
              "name": "message",
              "description": "Contenido",
              "descriptionEn": "Content",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 2000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "messages"
          ],
          "description": "Lista los sticky messages.",
          "descriptionEn": "Lists the sticky messages.",
          "parameters": []
        },
        {
          "path": [
            "unstick"
          ],
          "description": "Elimina un sticky.",
          "descriptionEn": "Removes a sticky.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
              "descriptionEn": "Channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "stop",
      "description": "Detiene la música y vacía la cola.",
      "descriptionEn": "Stops the music and clears the queue.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Detiene la música y vacía la cola.",
          "descriptionEn": "Stops the music and clears the queue.",
          "parameters": []
        }
      ]
    },
    {
      "name": "suggestions",
      "description": "Sugerencias comunitarias.",
      "descriptionEn": "Community suggestions.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "send"
          ],
          "description": "Publica una sugerencia.",
          "descriptionEn": "Posts a suggestion.",
          "parameters": [
            {
              "name": "suggestion",
              "description": "Sugerencia",
              "descriptionEn": "Suggestion",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 3,
              "maxLength": 1500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "accept"
          ],
          "description": "Acepta una sugerencia.",
          "descriptionEn": "Accepts a suggestion.",
          "parameters": [
            {
              "name": "id",
              "description": "UUID o ID del mensaje",
              "descriptionEn": "UUID or message ID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "deny"
          ],
          "description": "Rechaza una sugerencia.",
          "descriptionEn": "Rejects a suggestion.",
          "parameters": [
            {
              "name": "id",
              "description": "UUID o ID del mensaje",
              "descriptionEn": "UUID or message ID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "thanks",
      "description": "Reconocimientos; por servidor o globales según la configuración.",
      "descriptionEn": "Recognition; per server or global depending on the configuration.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "check"
          ],
          "description": "Consulta agradecimientos.",
          "descriptionEn": "Checks thanks received.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "thanks"
          ],
          "description": "Agradece a un miembro.",
          "descriptionEn": "Thanks a member.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "descriptionEn": "User",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "ticket",
      "description": "Gestión del sistema de tickets",
      "descriptionEn": "Ticket system management",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "category-add"
          ],
          "description": "(Admin) Añade o edita una categoría de ticket",
          "descriptionEn": "(Admin) Adds or edits a ticket category",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave interna (ej: soporte, admin)",
              "descriptionEn": "Internal key (e.g. soporte, admin)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "nombre",
              "description": "Nombre visible",
              "descriptionEn": "Display name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji",
              "descriptionEn": "Emoji",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "descripcion",
              "description": "Descripción corta",
              "descriptionEn": "Short description",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición",
              "descriptionEn": "Display order",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "category-delete"
          ],
          "description": "(Admin) Elimina una categoría de ticket",
          "descriptionEn": "(Admin) Deletes a ticket category",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave de la categoría",
              "descriptionEn": "Category key",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "category-list"
          ],
          "description": "Lista las categorías de ticket configuradas",
          "descriptionEn": "Lists the configured ticket categories",
          "parameters": []
        },
        {
          "path": [
            "panel"
          ],
          "description": "Envía el panel de apertura de tickets en un canal",
          "descriptionEn": "Sends the ticket opening panel to a channel",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal destino",
              "descriptionEn": "Target channel",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "create"
          ],
          "description": "Abre un ticket sin usar el panel.",
          "descriptionEn": "Opens a ticket without using the panel.",
          "parameters": [
            {
              "name": "categoria",
              "description": "Clave de categoría; por defecto soporte",
              "descriptionEn": "Category key; defaults to soporte",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo del ticket",
              "descriptionEn": "Ticket reason",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "claim"
          ],
          "description": "Asigna este ticket a ti.",
          "descriptionEn": "Assigns this ticket to you.",
          "parameters": []
        },
        {
          "path": [
            "unclaim"
          ],
          "description": "Libera el ticket que tienes asignado.",
          "descriptionEn": "Releases the ticket assigned to you.",
          "parameters": []
        },
        {
          "path": [
            "information"
          ],
          "description": "Consulta los datos de este ticket.",
          "descriptionEn": "Shows this ticket's details.",
          "parameters": []
        },
        {
          "path": [
            "rename"
          ],
          "description": "Cambia el nombre de este ticket.",
          "descriptionEn": "Renames this ticket.",
          "parameters": [
            {
              "name": "nombre",
              "description": "Nuevo nombre del canal.",
              "descriptionEn": "New channel name.",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "add"
          ],
          "description": "Da acceso a un participante.",
          "descriptionEn": "Gives a participant access.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Participante del ticket.",
              "descriptionEn": "Ticket participant.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "remove"
          ],
          "description": "Retira el acceso a un participante.",
          "descriptionEn": "Removes a participant's access.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Participante del ticket.",
              "descriptionEn": "Ticket participant.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "transcript"
          ],
          "description": "Exporta un registro de mensajes recientes, sin servicios externos.",
          "descriptionEn": "Exports a log of recent messages, without external services.",
          "parameters": [
            {
              "name": "limite",
              "description": "Máximo de mensajes: 1–1000; por defecto 200.",
              "descriptionEn": "Maximum messages: 1–1000; defaults to 200.",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 1000,
              "channelTypes": []
            },
            {
              "name": "formato",
              "description": "HTML (por defecto) o texto plano.",
              "descriptionEn": "HTML (default) or plain text.",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [
                {
                  "name": "HTML",
                  "nameEn": "HTML",
                  "value": "html"
                },
                {
                  "name": "Texto",
                  "nameEn": "Text",
                  "value": "txt"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "close"
          ],
          "description": "Cierra y bloquea este ticket.",
          "descriptionEn": "Closes and locks this ticket.",
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina definitivamente este ticket.",
          "descriptionEn": "Permanently deletes this ticket.",
          "parameters": []
        },
        {
          "path": [
            "open"
          ],
          "description": "Reabre un ticket cerrado.",
          "descriptionEn": "Reopens a closed ticket.",
          "parameters": []
        },
        {
          "path": [
            "lower"
          ],
          "description": "Oculta el ticket al rol Staff.",
          "descriptionEn": "Hides the ticket from the Staff role.",
          "parameters": []
        },
        {
          "path": [
            "raise"
          ],
          "description": "Vuelve a mostrar el ticket al rol Staff.",
          "descriptionEn": "Shows the ticket to the Staff role again.",
          "parameters": []
        },
        {
          "path": [
            "notice"
          ],
          "description": "Envía un aviso privado al creador.",
          "descriptionEn": "Sends a private notice to the creator.",
          "parameters": [
            {
              "name": "mensaje",
              "description": "Aviso",
              "descriptionEn": "Notice",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "tools",
      "description": "Herramientas prácticas.",
      "descriptionEn": "Handy tools.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "anagram"
          ],
          "description": "Mezcla una palabra.",
          "descriptionEn": "Scrambles a word.",
          "parameters": [
            {
              "name": "word",
              "description": "Palabra",
              "descriptionEn": "Word",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "button"
          ],
          "description": "Crea un botón de enlace.",
          "descriptionEn": "Creates a link button.",
          "parameters": [
            {
              "name": "url",
              "description": "URL HTTPS",
              "descriptionEn": "HTTPS URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "text",
              "description": "Etiqueta",
              "descriptionEn": "Label",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 80,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "calculator"
          ],
          "description": "Abre una calculadora segura.",
          "descriptionEn": "Opens a safe calculator.",
          "parameters": []
        },
        {
          "path": [
            "decode"
          ],
          "description": "Decodifica Base64.",
          "descriptionEn": "Decodes Base64.",
          "parameters": [
            {
              "name": "code",
              "description": "Base64",
              "descriptionEn": "Base64",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1500,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "emojify"
          ],
          "description": "Convierte letras en emojis.",
          "descriptionEn": "Turns letters into emojis.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "encode"
          ],
          "description": "Codifica Base64.",
          "descriptionEn": "Encodes Base64.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
              "descriptionEn": "Text",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "enlarge"
          ],
          "description": "Muestra un emoji personalizado.",
          "descriptionEn": "Shows a custom emoji.",
          "parameters": [
            {
              "name": "emoji",
              "description": "Emoji",
              "descriptionEn": "Emoji",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "mcskin"
          ],
          "description": "Muestra una skin de Minecraft.",
          "descriptionEn": "Shows a Minecraft skin.",
          "parameters": [
            {
              "name": "name",
              "description": "Jugador",
              "descriptionEn": "Player",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "mcstatus"
          ],
          "description": "Estado de un servidor Minecraft.",
          "descriptionEn": "Status of a Minecraft server.",
          "parameters": [
            {
              "name": "ip",
              "description": "Host",
              "descriptionEn": "Host",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "pwdgen"
          ],
          "description": "Genera una contraseña local.",
          "descriptionEn": "Generates a password locally.",
          "parameters": []
        },
        {
          "path": [
            "qrcode"
          ],
          "description": "Genera un QR.",
          "descriptionEn": "Generates a QR code.",
          "parameters": [
            {
              "name": "text",
              "description": "Contenido",
              "descriptionEn": "Content",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "remind"
          ],
          "description": "Programa un recordatorio persistente.",
          "descriptionEn": "Schedules a persistent reminder.",
          "parameters": [
            {
              "name": "time",
              "description": "10s, 5m, 2h, 7d o 1w",
              "descriptionEn": "10s, 5m, 2h, 7d or 1w",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Mensaje",
              "descriptionEn": "Message",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "review"
          ],
          "description": "Envía una reseña.",
          "descriptionEn": "Submits a review.",
          "parameters": [
            {
              "name": "stars",
              "description": "Estrellas",
              "descriptionEn": "Stars",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 5,
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Comentario",
              "descriptionEn": "Comment",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "maxLength": 1000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "sourcebin"
          ],
          "description": "Exporta código como archivo.",
          "descriptionEn": "Exports code as a file.",
          "parameters": [
            {
              "name": "language",
              "description": "Extensión",
              "descriptionEn": "Extension",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "code",
              "description": "Código",
              "descriptionEn": "Code",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "maxLength": 4000,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "url"
          ],
          "description": "Acorta una URL con is.gd.",
          "descriptionEn": "Shortens a URL with is.gd.",
          "parameters": [
            {
              "name": "site",
              "description": "URL HTTPS",
              "descriptionEn": "HTTPS URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "code",
              "description": "Alias corto deseado",
              "descriptionEn": "Desired short alias",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 5,
              "maxLength": 30,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "trigger",
      "description": "Ejecuta un comando de texto personalizado de este servidor",
      "descriptionEn": "Runs a custom text command from this server",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Ejecuta un comando de texto personalizado de este servidor",
          "descriptionEn": "Runs a custom text command from this server",
          "parameters": [
            {
              "name": "nombre",
              "description": "Nombre del comando personalizado",
              "descriptionEn": "Custom command name",
              "type": 3,
              "required": true,
              "autocomplete": true,
              "choices": [],
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "voice",
      "description": "Controla tu sala de voz temporal.",
      "descriptionEn": "Controls your temporary voice room.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "limit"
          ],
          "description": "Cambia el límite de miembros.",
          "descriptionEn": "Changes the member limit.",
          "parameters": [
            {
              "name": "limit",
              "description": "0 para sin límite, hasta 99",
              "descriptionEn": "0 for no limit, up to 99",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 0,
              "maxValue": 99,
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "lock"
          ],
          "description": "Cierra la sala a nuevos miembros.",
          "descriptionEn": "Closes the room to new members.",
          "parameters": []
        },
        {
          "path": [
            "unlock"
          ],
          "description": "Vuelve a abrir la sala.",
          "descriptionEn": "Reopens the room.",
          "parameters": []
        },
        {
          "path": [
            "rename"
          ],
          "description": "Renombra la sala si el lobby lo permite.",
          "descriptionEn": "Renames the room if the lobby allows it.",
          "parameters": [
            {
              "name": "name",
              "description": "Nuevo nombre",
              "descriptionEn": "New name",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minLength": 1,
              "maxLength": 100,
              "channelTypes": []
            }
          ]
        }
      ]
    },
    {
      "name": "volume",
      "description": "Ajusta el volumen de la música.",
      "descriptionEn": "Adjusts the music volume.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Ajusta el volumen de la música.",
          "descriptionEn": "Adjusts the music volume.",
          "parameters": [
            {
              "name": "nivel",
              "description": "Nivel de volumen (1-100)",
              "descriptionEn": "Volume level (1-100)",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "minValue": 1,
              "maxValue": 100,
              "channelTypes": []
            }
          ]
        }
      ]
    }
  ]
};
