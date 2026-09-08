// Generated from bot-unidad command builders. Update together with the parity tests.
export const commandCatalogSnapshot = {
  "sourceCommit": "20fd09e2b3d969c91cd7a205126c86b22a5e897f",
  "referenceCommit": "125b0311bdd0ba7e95a12804e31f6ba626e6f407",
  "commands": [
    {
      "name": "activities",
      "description": "Inicia una actividad de Discord en voz.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [],
          "description": "Inicia una actividad de Discord en voz.",
          "parameters": [
            {
              "name": "activity",
              "description": "Actividad",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Betrayal.io",
                  "value": "betrayal"
                },
                {
                  "name": "Checkers in the Park",
                  "value": "checkers"
                },
                {
                  "name": "Chess in the Park",
                  "value": "chess"
                },
                {
                  "name": "Doodle Crew",
                  "value": "doodlecrew"
                },
                {
                  "name": "Fishington.io",
                  "value": "fishington"
                },
                {
                  "name": "Letter League",
                  "value": "letterleague"
                },
                {
                  "name": "Ocho",
                  "value": "ocho"
                },
                {
                  "name": "Poker Night",
                  "value": "poker"
                },
                {
                  "name": "Sketch Heads",
                  "value": "sketchheads"
                },
                {
                  "name": "Spell Cast",
                  "value": "spellcast"
                },
                {
                  "name": "Word Snacks",
                  "value": "wordsnacks"
                },
                {
                  "name": "Watch Together",
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
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "setwelcomechannel"
          ],
          "description": "Canal donde se publican las bienvenidas",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
            "setlevelchannel"
          ],
          "description": "Canal donde se anuncian las subidas de nivel",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
            "setroleschannel"
          ],
          "description": "Canal donde se publica el panel de selección de roles",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
            "setlobbychannel"
          ],
          "description": "Canal de voz lobby para canales temporales",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de voz",
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
            "setverifychannel"
          ],
          "description": "Canal donde se publica el panel de verificación",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
            "setverifyrole"
          ],
          "description": "Rol que se asigna al verificarse",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol verificado",
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
            "sendverifypanel"
          ],
          "description": "Envía el panel de verificación al canal configurado",
          "parameters": []
        },
        {
          "path": [
            "setticketscategory"
          ],
          "description": "Categoría donde se crearán los tickets",
          "parameters": [
            {
              "name": "categoria",
              "description": "Categoría de Discord",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de Staff",
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
            "sendticketspanel"
          ],
          "description": "Envía el panel de tickets al canal especificado",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
            "sendembedpanel"
          ],
          "description": "Envía el panel del Creador de Embeds al canal especificado",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "nombre",
              "description": "Nombre de la moneda",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji de la moneda",
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
            "shop-add"
          ],
          "description": "Agrega un artículo a la tienda.",
          "parameters": [
            {
              "name": "nombre",
              "description": "Nombre del artículo",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "precio",
              "description": "Precio del artículo",
              "type": 4,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "rol",
              "description": "Rol que otorgará (opcional)",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "descripcion",
              "description": "Descripción del artículo",
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
            "eco-give"
          ],
          "description": "Otorga dinero a un usuario.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Cantidad",
              "type": 4,
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
          "parameters": [
            {
              "name": "tipo",
              "description": "Tipo de log",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Moderación (palabras, mensajes)",
                  "value": "mod"
                },
                {
                  "name": "Voz (salas temporales)",
                  "value": "voice"
                },
                {
                  "name": "Tickets (abiertos/cerrados)",
                  "value": "tickets"
                },
                {
                  "name": "General (todos los demás eventos)",
                  "value": "general"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "canal",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "color",
              "description": "Color hex, ej: #FF6B35",
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
          "parameters": [
            {
              "name": "url",
              "description": "URL de la imagen",
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
          "parameters": [
            {
              "name": "color",
              "description": "Color hex, ej: #2ECC71",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de economía",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol del juego principal del panel",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de coach general",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de administrador",
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
            "setvcpanelchannel"
          ],
          "description": "Canal de texto donde se publican los paneles de control de canales de voz temporales",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
      "name": "afk",
      "description": "Gestiona tu estado ausente.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "set"
          ],
          "description": "Marca tu estado como ausente.",
          "parameters": [
            {
              "name": "reason",
              "description": "Motivo",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "announcement",
      "description": "Crea y edita anuncios.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "create"
          ],
          "description": "Publica un anuncio.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Nuevo contenido",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "antiinvite"
          ],
          "description": "Bloquea invitaciones de Discord.",
          "parameters": [
            {
              "name": "active",
              "description": "Activar o desactivar",
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
          "parameters": [
            {
              "name": "active",
              "description": "Activar o desactivar",
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
          "parameters": [
            {
              "name": "active",
              "description": "Activar o desactivar",
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
          "parameters": [
            {
              "name": "type",
              "description": "Acción",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Añadir",
                  "value": "add"
                },
                {
                  "name": "Quitar",
                  "value": "remove"
                },
                {
                  "name": "Listar",
                  "value": "list"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal permitido",
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
          "parameters": []
        },
        {
          "path": [
            "blacklist",
            "add"
          ],
          "description": "Añade una palabra.",
          "parameters": [
            {
              "name": "word",
              "description": "Palabra",
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
          "parameters": [
            {
              "name": "word",
              "description": "Palabra",
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
      "defaultMemberPermissions": "32",
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "logs"
          ],
          "description": "Crea y configura logs.",
          "parameters": []
        },
        {
          "path": [
            "fun"
          ],
          "description": "Crea el canal comunitario.",
          "parameters": []
        },
        {
          "path": [
            "games"
          ],
          "description": "Crea el canal de juegos/eventos.",
          "parameters": []
        },
        {
          "path": [
            "welcome"
          ],
          "description": "Crea el canal de bienvenida.",
          "parameters": []
        },
        {
          "path": [
            "customvoice"
          ],
          "description": "Crea el lobby de voz temporal.",
          "parameters": []
        },
        {
          "path": [
            "ticketpanel"
          ],
          "description": "Crea el sistema y panel de tickets.",
          "parameters": []
        }
      ]
    },
    {
      "name": "banword",
      "description": "Gestiona la lista de palabras prohibidas",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade una palabra a la lista de prohibidas",
          "parameters": [
            {
              "name": "palabra",
              "description": "Palabra a prohibir",
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
          "description": "Elimina una palabra de la lista de prohibidas",
          "parameters": [
            {
              "name": "palabra",
              "description": "Palabra a eliminar",
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
          "description": "Lista todas las palabras prohibidas",
          "parameters": []
        }
      ]
    },
    {
      "name": "birthdays",
      "description": "Cumpleaños del servidor.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "check"
          ],
          "description": "Consulta tu cumpleaños.",
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina tu cumpleaños.",
          "parameters": []
        },
        {
          "path": [
            "list"
          ],
          "description": "Lista los cumpleaños configurados.",
          "parameters": []
        },
        {
          "path": [
            "set"
          ],
          "description": "Guarda tu cumpleaños.",
          "parameters": [
            {
              "name": "day",
              "description": "Día",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "info"
          ],
          "description": "Información de Unidad.",
          "parameters": []
        },
        {
          "path": [
            "ping"
          ],
          "description": "Latencia del bot.",
          "parameters": []
        },
        {
          "path": [
            "changelogs"
          ],
          "description": "Cambios recientes.",
          "parameters": []
        },
        {
          "path": [
            "donate"
          ],
          "description": "Enlace de apoyo.",
          "parameters": []
        },
        {
          "path": [
            "links"
          ],
          "description": "Enlaces oficiales.",
          "parameters": []
        },
        {
          "path": [
            "owner"
          ],
          "description": "Propietarios configurados.",
          "parameters": []
        },
        {
          "path": [
            "socials"
          ],
          "description": "Redes oficiales.",
          "parameters": []
        },
        {
          "path": [
            "support"
          ],
          "description": "Servidor de soporte.",
          "parameters": []
        },
        {
          "path": [
            "uptime"
          ],
          "description": "Tiempo activo.",
          "parameters": []
        },
        {
          "path": [
            "vote"
          ],
          "description": "Consulta tu voto en top.gg.",
          "parameters": []
        },
        {
          "path": [
            "feedback"
          ],
          "description": "Envía comentarios al equipo.",
          "parameters": [
            {
              "name": "feedback",
              "description": "Comentario",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "blackjack"
          ],
          "description": "Partida de blackjack con cartas reales.",
          "parameters": [
            {
              "name": "amount",
              "description": "Apuesta",
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
          "parameters": [
            {
              "name": "amount",
              "description": "Apuesta",
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
          "parameters": [
            {
              "name": "color",
              "description": "Color",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Rojo",
                  "value": "red"
                },
                {
                  "name": "Negro",
                  "value": "black"
                },
                {
                  "name": "Verde",
                  "value": "green"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Apuesta",
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
          "parameters": [
            {
              "name": "amount",
              "description": "Apuesta",
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
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Crea o actualiza un comando personalizado",
          "parameters": [
            {
              "name": "trigger",
              "description": "Nombre del comando (sin !)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "respuesta",
              "description": "Texto que responderá el bot",
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
          "parameters": [
            {
              "name": "trigger",
              "description": "Nombre del comando a eliminar",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "coaching",
      "description": "Sistema de coaching",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "solicitar"
          ],
          "description": "Solicita una sesión de coaching con un mentor",
          "parameters": []
        },
        {
          "path": [
            "disponible"
          ],
          "description": "Activa o desactiva tu disponibilidad como coach",
          "parameters": [
            {
              "name": "estado",
              "description": "¿Estás disponible?",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "✅ Disponible",
                  "value": "on"
                },
                {
                  "name": "⏸️ No disponible",
                  "value": "off"
                }
              ],
              "channelTypes": []
            }
          ]
        },
        {
          "path": [
            "registrar"
          ],
          "description": "(Staff) Registra a un usuario como coach",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "posicion",
              "description": "Clave de posición (ej: tank, dps) o 'all'",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "posicion",
              "description": "Filtrar por posición (clave, opcional)",
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
          "parameters": []
        },
        {
          "path": [
            "setcanal"
          ],
          "description": "(Admin) Canal donde se crean los hilos",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "clave",
              "description": "Clave interna única (ej: tank, dps)",
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
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición",
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
          "parameters": [
            {
              "name": "clave",
              "description": "Clave de la posición",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "config",
      "description": "Gestiona la configuración del bot en este servidor",
      "defaultMemberPermissions": "32",
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "show"
          ],
          "description": "Muestra la configuración actual",
          "parameters": []
        },
        {
          "path": [
            "set"
          ],
          "description": "Cambia una opción de configuración",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave a modificar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "xp.enabled",
                  "value": "xp.enabled"
                },
                {
                  "name": "xp.cooldown",
                  "value": "xp.cooldown"
                },
                {
                  "name": "xp.permessage",
                  "value": "xp.permessage"
                },
                {
                  "name": "xp.reactions.enabled",
                  "value": "xp.reactions.enabled"
                },
                {
                  "name": "xp.interactions.enabled",
                  "value": "xp.interactions.enabled"
                },
                {
                  "name": "xp.voice_join.enabled",
                  "value": "xp.voice_join.enabled"
                },
                {
                  "name": "xp.voice_time.enabled",
                  "value": "xp.voice_time.enabled"
                },
                {
                  "name": "xp.reactions.multiplier",
                  "value": "xp.reactions.multiplier"
                },
                {
                  "name": "xp.interactions.multiplier",
                  "value": "xp.interactions.multiplier"
                },
                {
                  "name": "xp.voice_join.multiplier",
                  "value": "xp.voice_join.multiplier"
                },
                {
                  "name": "xp.voice_time.multiplier",
                  "value": "xp.voice_time.multiplier"
                },
                {
                  "name": "xp.voice_time.interval_minutes",
                  "value": "xp.voice_time.interval_minutes"
                },
                {
                  "name": "mod.enabled",
                  "value": "mod.enabled"
                },
                {
                  "name": "welcome.message",
                  "value": "welcome.message"
                },
                {
                  "name": "social.scope",
                  "value": "social.scope"
                },
                {
                  "name": "boost.message",
                  "value": "boost.message"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "valor",
              "description": "Nuevo valor para la clave",
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
            "levels"
          ],
          "description": "Activa o desactiva niveles.",
          "parameters": [
            {
              "name": "boolean",
              "description": "Estado",
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
            "setcolor"
          ],
          "description": "Configura el color general de embeds.",
          "parameters": [
            {
              "name": "color",
              "description": "Color hexadecimal",
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
          "parameters": [
            {
              "name": "enable",
              "description": "Estado",
              "type": 5,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal",
              "type": 7,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": [
                0
              ]
            },
            {
              "name": "role",
              "description": "Rol",
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
            "setchannelname"
          ],
          "description": "Plantilla para canales de voz; usa {user}.",
          "parameters": [
            {
              "name": "name",
              "description": "Plantilla",
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
          "parameters": [
            {
              "name": "message",
              "description": "Usa {user} y {level}",
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
          "parameters": [
            {
              "name": "message",
              "description": "Usa variables de bienvenida",
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
          "parameters": [
            {
              "name": "message",
              "description": "Usa {user} y {server}",
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
          "parameters": [
            {
              "name": "type",
              "description": "Tipo",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Apertura",
                  "value": "open"
                },
                {
                  "name": "Cierre por DM",
                  "value": "close"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Mensaje",
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
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "registrar"
          ],
          "description": "(Staff) Vincula un canal de Twitch a un miembro del servidor",
          "parameters": [
            {
              "name": "usuario",
              "description": "Nombre de usuario en Twitch del canal",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "dueno",
              "description": "Miembro de Discord al que pertenece el stream. Vacío = tú",
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
          "parameters": []
        },
        {
          "path": [
            "lista"
          ],
          "description": "Lista los streamers registrados del servidor",
          "parameters": []
        },
        {
          "path": [
            "canal"
          ],
          "description": "(Admin) Canal donde se publican las notificaciones de streams",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol a mencionar (dejar vacío para quitar)",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol de creador",
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
      "name": "eco",
      "description": "Comandos del sistema de economía.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "balance"
          ],
          "description": "Muestra tu saldo o el de otro usuario.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario a consultar",
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
          "description": "Transfiere dinero a otro usuario.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario a transferir",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Cantidad a enviar",
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
            "daily"
          ],
          "description": "Reclama tu recompensa diaria.",
          "parameters": []
        },
        {
          "path": [
            "work"
          ],
          "description": "Trabaja para ganar algo de dinero extra.",
          "parameters": []
        }
      ]
    },
    {
      "name": "economy",
      "description": "Economía completa del servidor.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "beg"
          ],
          "description": "Obtén la recompensa de beg.",
          "parameters": []
        },
        {
          "path": [
            "crime"
          ],
          "description": "Obtén la recompensa de crime.",
          "parameters": []
        },
        {
          "path": [
            "daily"
          ],
          "description": "Obtén la recompensa de daily.",
          "parameters": []
        },
        {
          "path": [
            "fish"
          ],
          "description": "Obtén la recompensa de fish.",
          "parameters": []
        },
        {
          "path": [
            "hourly"
          ],
          "description": "Obtén la recompensa de hourly.",
          "parameters": []
        },
        {
          "path": [
            "hunt"
          ],
          "description": "Obtén la recompensa de hunt.",
          "parameters": []
        },
        {
          "path": [
            "monthly"
          ],
          "description": "Obtén la recompensa de monthly.",
          "parameters": []
        },
        {
          "path": [
            "present"
          ],
          "description": "Obtén la recompensa de present.",
          "parameters": []
        },
        {
          "path": [
            "store"
          ],
          "description": "Muestra la tienda.",
          "parameters": []
        },
        {
          "path": [
            "weekly"
          ],
          "description": "Obtén la recompensa de weekly.",
          "parameters": []
        },
        {
          "path": [
            "work"
          ],
          "description": "Obtén la recompensa de work.",
          "parameters": []
        },
        {
          "path": [
            "yearly"
          ],
          "description": "Obtén la recompensa de yearly.",
          "parameters": []
        },
        {
          "path": [
            "balance"
          ],
          "description": "Consulta cartera y banco.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "type",
              "description": "Tipo",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Dinero",
                  "value": "money"
                },
                {
                  "name": "Banco",
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
          "parameters": [
            {
              "name": "id",
              "description": "ID mostrado en la tienda",
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
          "description": "Añade un rol a la tienda.",
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Precio",
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
            "deleteitem"
          ],
          "description": "Elimina de la tienda el artículo de un rol.",
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirma la eliminación",
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
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "crear"
          ],
          "description": "Crea un nuevo evento en el servidor",
          "parameters": []
        },
        {
          "path": [
            "lista"
          ],
          "description": "Muestra los próximos eventos",
          "parameters": []
        },
        {
          "path": [
            "cancelar"
          ],
          "description": "(Staff) Cancela un evento",
          "parameters": [
            {
              "name": "id",
              "description": "ID del evento a cancelar",
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
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de texto",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "adopt"
          ],
          "description": "Solicita adoptar a un usuario.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": []
        },
        {
          "path": [
            "family"
          ],
          "description": "Muestra una familia.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario; por defecto tú",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "meme",
            "confused"
          ],
          "description": "Ejecuta confused.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "cleverrate"
          ],
          "description": "Ejecuta cleverrate.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "dinochrome"
          ],
          "description": "Ejecuta dinochrome.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "epicgamerrate"
          ],
          "description": "Ejecuta epicgamerrate.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "howgay"
          ],
          "description": "Ejecuta howgay.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "roast"
          ],
          "description": "Ejecuta roast.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Ejecuta simprate.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "stankrate"
          ],
          "description": "Ejecuta stankrate.",
          "parameters": []
        },
        {
          "path": [
            "meme",
            "rickroll"
          ],
          "description": "Ejecuta rickroll.",
          "parameters": []
        },
        {
          "path": [
            "user",
            "hack"
          ],
          "description": "Ejecuta hack.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Ejecuta hug.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Ejecuta kill.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Ejecuta lovemeter.",
          "parameters": [
            {
              "name": "user1",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "user2",
              "description": "Usuario",
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
          "description": "Ejecuta sudo.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Ejecuta ascii.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Ejecuta gif.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Ejecuta reverse.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Ejecuta say.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Ejecuta birdfact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "catfact"
          ],
          "description": "Ejecuta catfact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "dogfact"
          ],
          "description": "Ejecuta dogfact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "fact"
          ],
          "description": "Ejecuta fact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "koalafact"
          ],
          "description": "Ejecuta koalafact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "pandafact"
          ],
          "description": "Ejecuta pandafact.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "token"
          ],
          "description": "Ejecuta token.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "worldclock"
          ],
          "description": "Ejecuta worldclock.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "xmas"
          ],
          "description": "Ejecuta xmas.",
          "parameters": []
        }
      ]
    },
    {
      "name": "games",
      "description": "Minijuegos.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "8ball"
          ],
          "description": "Pregunta a la bola ocho.",
          "parameters": [
            {
              "name": "question",
              "description": "Pregunta",
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
          "parameters": []
        },
        {
          "path": [
            "roll"
          ],
          "description": "Lanza un dado.",
          "parameters": []
        },
        {
          "path": [
            "rps"
          ],
          "description": "Piedra, papel o tijera.",
          "parameters": [
            {
              "name": "option",
              "description": "Elección",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Piedra",
                  "value": "rock"
                },
                {
                  "name": "Papel",
                  "value": "paper"
                },
                {
                  "name": "Tijera",
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
          "parameters": []
        },
        {
          "path": [
            "snake"
          ],
          "description": "Juega a la serpiente con botones.",
          "parameters": []
        },
        {
          "path": [
            "trivia"
          ],
          "description": "Pregunta de trivia con opciones.",
          "parameters": []
        },
        {
          "path": [
            "willyoupressthebutton"
          ],
          "description": "Dilema del botón, con votos.",
          "parameters": []
        },
        {
          "path": [
            "wouldyourather"
          ],
          "description": "Qué preferirías, con votos.",
          "parameters": []
        }
      ]
    },
    {
      "name": "giveaway",
      "description": "Sorteos persistentes.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "start"
          ],
          "description": "Inicia un sorteo.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "winners",
              "description": "Ganadores",
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
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "winners",
              "description": "Ganadores",
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
          "description": "Gestiona un sorteo: reroll.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
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
          "description": "Gestiona un sorteo: end.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
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
          "description": "Gestiona un sorteo: delete.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
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
          "description": "Gestiona un sorteo: pause.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
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
          "description": "Gestiona un sorteo: unpause.",
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
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
          "parameters": [
            {
              "name": "message",
              "description": "ID del mensaje o UUID",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "duration",
              "description": "Nueva duración",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "prize",
              "description": "Nuevo premio",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "channelinfo"
          ],
          "description": "Información de un canal.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
          "parameters": []
        },
        {
          "path": [
            "oldestmember"
          ],
          "description": "Miembro con mayor antigüedad.",
          "parameters": []
        },
        {
          "path": [
            "roleinfo"
          ],
          "description": "Información de un rol.",
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
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
          "parameters": []
        },
        {
          "path": [
            "stealemoji"
          ],
          "description": "Añade un emoji externo.",
          "parameters": [
            {
              "name": "emoji",
              "description": "Emoji personalizado o URL",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "role",
              "description": "Rol autorizado",
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
          "parameters": []
        },
        {
          "path": [
            "userinfo"
          ],
          "description": "Información de un usuario.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "invite",
              "description": "Código o URL",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "help",
      "description": "Consulta los comandos disponibles y sus opciones.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Consulta los comandos disponibles y sus opciones.",
          "parameters": [
            {
              "name": "comando",
              "description": "Nombre del comando, por ejemplo skip o notepad.",
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
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Muestra el historial reciente de música reproducida.",
          "parameters": [
            {
              "name": "limite",
              "description": "Cantidad de pistas (1-25).",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "memes",
            "clyde"
          ],
          "description": "Genera clyde.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Genera drake.",
          "parameters": [
            {
              "name": "text1",
              "description": "Texto",
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
          "description": "Genera meme.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "pooh"
          ],
          "description": "Genera pooh.",
          "parameters": [
            {
              "name": "text1",
              "description": "Texto",
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
          "description": "Genera trumptweet.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Genera tweet.",
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "description": "Genera wasted.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "bird"
          ],
          "description": "Muestra bird.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "cat"
          ],
          "description": "Muestra cat.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "dog"
          ],
          "description": "Muestra dog.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "fox"
          ],
          "description": "Muestra fox.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "koala"
          ],
          "description": "Muestra koala.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "panda"
          ],
          "description": "Muestra panda.",
          "parameters": []
        },
        {
          "path": [
            "animals",
            "redpanda"
          ],
          "description": "Muestra redpanda.",
          "parameters": []
        },
        {
          "path": [
            "user",
            "ad"
          ],
          "description": "Genera ad.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera avatar.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera banner.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera bed.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera blur.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera burn.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera clown.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera colorify.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera darkness.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera facepalm.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera greyscale.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera invert.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera kiss.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera podium.",
          "parameters": [
            {
              "name": "user1",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "user2",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "user3",
              "description": "Usuario",
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
          "description": "Genera spank.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "description": "Genera wanted.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": []
        },
        {
          "path": [
            "extra",
            "glass"
          ],
          "description": "Genera efecto vidrio.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "image"
          ],
          "description": "Publica una URL de imagen sin descargarla.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
          "description": "Genera reacción triggered.",
          "parameters": []
        },
        {
          "path": [
            "extra",
            "wallpaper"
          ],
          "description": "Busca un fondo temático.",
          "parameters": [
            {
              "name": "name",
              "description": "Tema",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [],
          "description": "Obtén enlaces para instalar y apoyar a Unidad.",
          "parameters": []
        }
      ]
    },
    {
      "name": "invites",
      "description": "Estadísticas de invitaciones.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade invitaciones manuales.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "amount",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": []
        },
        {
          "path": [
            "rewards"
          ],
          "description": "Lista las recompensas por invitaciones.",
          "parameters": []
        },
        {
          "path": [
            "createreward"
          ],
          "description": "Otorga un rol al alcanzar N invitaciones.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Invitaciones necesarias",
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
          "parameters": [
            {
              "name": "cantidad",
              "description": "Invitaciones de la recompensa",
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
      "name": "levels",
      "description": "Niveles, XP y recompensas.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "rank"
          ],
          "description": "Consulta el progreso de un usuario.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario; por defecto tú.",
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
          "parameters": []
        },
        {
          "path": [
            "rewards"
          ],
          "description": "Lista las recompensas configuradas.",
          "parameters": []
        },
        {
          "path": [
            "createreward"
          ],
          "description": "Crea o reemplaza una recompensa.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Nivel requerido",
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
          "parameters": [
            {
              "name": "cantidad",
              "description": "Nivel",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Nuevo valor",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Nuevo valor",
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
      "name": "lobby",
      "description": "Gestiona los lobbies de voz temporales del servidor",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "create"
          ],
          "description": "Registra un canal de voz como lobby de salas temporales",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal de voz que actuará como lobby",
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
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji para el nombre de la sala (ej: 🎮)",
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
          "parameters": [
            {
              "name": "canal",
              "description": "Canal lobby a editar",
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
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Nuevo emoji",
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
          "parameters": [
            {
              "name": "canal",
              "description": "Canal lobby a desregistrar",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "messages",
      "description": "Contador de mensajes y recompensas.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "show"
          ],
          "description": "Consulta el progreso de un usuario.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario; por defecto tú.",
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
          "parameters": []
        },
        {
          "path": [
            "rewards"
          ],
          "description": "Lista las recompensas configuradas.",
          "parameters": []
        },
        {
          "path": [
            "createreward"
          ],
          "description": "Crea o reemplaza una recompensa.",
          "parameters": [
            {
              "name": "cantidad",
              "description": "Mensajes requeridos",
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
          "parameters": [
            {
              "name": "cantidad",
              "description": "Mensajes",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Cantidad",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario objetivo",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "cantidad",
              "description": "Cantidad",
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
      "name": "moderation",
      "description": "Sanciones y advertencias de moderación.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "kick"
          ],
          "description": "Expulsa a un miembro.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "minutos",
              "description": "Duración de 1 minuto a 28 días.",
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
          "parameters": [
            {
              "name": "id",
              "description": "ID de usuario de Discord.",
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
          "parameters": [
            {
              "name": "cantidad",
              "description": "Cantidad de mensajes (1–100).",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "pagina",
              "description": "Página de diez advertencias.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "id",
              "description": "Número de caso o UUID de la advertencia.",
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
          "parameters": []
        },
        {
          "path": [
            "clearuser"
          ],
          "description": "Borra mensajes recientes de un usuario en este canal.",
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
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
          "parameters": [
            {
              "name": "canal",
              "description": "Canal; por defecto el actual.",
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
          "parameters": [
            {
              "name": "canal",
              "description": "Canal; por defecto el actual.",
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
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirmación",
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
          "parameters": [
            {
              "name": "confirmar",
              "description": "Confirmación",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo de la acción.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Miembro objetivo.",
              "type": 6,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "minutos",
              "description": "Duración",
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
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "toggle"
          ],
          "description": "Activa o desactiva un módulo",
          "parameters": [
            {
              "name": "modulo",
              "description": "Módulo a configurar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "🎫 Tickets",
                  "value": "tickets"
                },
                {
                  "name": "🎵 Música",
                  "value": "music"
                },
                {
                  "name": "💰 Economía",
                  "value": "economy"
                },
                {
                  "name": "⚔️ XP/Niveles",
                  "value": "xp"
                },
                {
                  "name": "🔒 Moderación",
                  "value": "moderation"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "estado",
              "description": "Activar o desactivar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "✅ Activar",
                  "value": "on"
                },
                {
                  "name": "❌ Desactivar",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "music",
      "description": "Reproductor musical completo.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "playing"
          ],
          "description": "Muestra lo que se está reproduciendo.",
          "parameters": []
        },
        {
          "path": [
            "queue"
          ],
          "description": "Muestra la cola.",
          "parameters": []
        },
        {
          "path": [
            "pause"
          ],
          "description": "Pausa la reproducción.",
          "parameters": []
        },
        {
          "path": [
            "resume"
          ],
          "description": "Reanuda la reproducción.",
          "parameters": []
        },
        {
          "path": [
            "previous"
          ],
          "description": "Vuelve a la pista anterior.",
          "parameters": []
        },
        {
          "path": [
            "clear"
          ],
          "description": "Limpia canciones pendientes.",
          "parameters": []
        },
        {
          "path": [
            "loop"
          ],
          "description": "Cambia el modo de repetición.",
          "parameters": []
        },
        {
          "path": [
            "shuffle"
          ],
          "description": "Mezcla la cola.",
          "parameters": []
        },
        {
          "path": [
            "skip"
          ],
          "description": "Salta la pista actual.",
          "parameters": []
        },
        {
          "path": [
            "stop"
          ],
          "description": "Detiene y limpia el reproductor.",
          "parameters": []
        },
        {
          "path": [
            "lyrics"
          ],
          "description": "Muestra la letra disponible.",
          "parameters": []
        },
        {
          "path": [
            "play"
          ],
          "description": "Busca o agrega una canción.",
          "parameters": [
            {
              "name": "cancion",
              "description": "Nombre o URL",
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
          "parameters": [
            {
              "name": "posicion",
              "description": "Posición",
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
          "parameters": [
            {
              "name": "posicion",
              "description": "Posición",
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
          "parameters": [
            {
              "name": "segundos",
              "description": "Segundos",
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
          "parameters": [
            {
              "name": "nivel",
              "description": "Volumen 1–100",
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
          "parameters": [
            {
              "name": "nivel",
              "description": "Intensidad 0–3 como en la fuente, o extremo",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "0 · Desactivado",
                  "value": "0"
                },
                {
                  "name": "1 · Bajo",
                  "value": "1"
                },
                {
                  "name": "2 · Medio",
                  "value": "2"
                },
                {
                  "name": "3 · Alto",
                  "value": "3"
                },
                {
                  "name": "Extremo",
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
      "description": "Muestra tu XP y nivel actual en el servidor",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Muestra tu XP y nivel actual en el servidor",
          "parameters": [
            {
              "name": "usuario",
              "description": "Usuario del que quieres ver el nivel (opcional)",
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
      "name": "notepad",
      "description": "Notas personales, separadas por usuario y servidor.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Guarda una nota personal.",
          "parameters": [
            {
              "name": "texto",
              "description": "Contenido de tu nota personal.",
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
          "parameters": [
            {
              "name": "pagina",
              "description": "Página de dos notas.",
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
          "parameters": [
            {
              "name": "pagina",
              "description": "Página de dos notas.",
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
          "parameters": [
            {
              "name": "id",
              "description": "Identificador mostrado en /notepad list.",
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
          "parameters": [
            {
              "name": "id",
              "description": "Identificador mostrado en /notepad list.",
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
      "description": "Comprueba que el bot está activo",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Comprueba que el bot está activo",
          "parameters": []
        }
      ]
    },
    {
      "name": "play",
      "description": "Reproduce una cancion de YouTube, Spotify o SoundCloud.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Reproduce una cancion de YouTube, Spotify o SoundCloud.",
          "parameters": [
            {
              "name": "cancion",
              "description": "Nombre de la cancion o URL",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "create"
          ],
          "description": "Crea tu perfil.",
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina tu perfil.",
          "parameters": []
        },
        {
          "path": [
            "profile"
          ],
          "description": "Muestra un perfil.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "parameters": [
            {
              "name": "number",
              "description": "Edad",
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
          "parameters": [
            {
              "name": "bday",
              "description": "Fecha",
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
          "parameters": [
            {
              "name": "actor",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "actor",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "artist",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "artist",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "food",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "food",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "movie",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "movie",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "pet",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "pet",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "song",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "song",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "hobby",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "hobby",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "color",
              "description": "#RRGGBB",
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
          "parameters": [
            {
              "name": "value",
              "description": "Valor",
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
          "parameters": [
            {
              "name": "country",
              "description": "País",
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
          "parameters": [
            {
              "name": "text",
              "description": "Estado",
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
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Muestra la cola o elimina una canción pendiente.",
          "parameters": [
            {
              "name": "quitar",
              "description": "Posición pendiente que quieres eliminar (desde 1).",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "play"
          ],
          "description": "Inicia Radio 538.",
          "parameters": []
        },
        {
          "path": [
            "stop"
          ],
          "description": "Detiene la radio y la sesión.",
          "parameters": []
        },
        {
          "path": [
            "playing"
          ],
          "description": "Muestra la radio activa.",
          "parameters": []
        }
      ]
    },
    {
      "name": "rank",
      "description": "Gestiona rangos de juego y lobbies de voz por rango",
      "defaultMemberPermissions": "32",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade o actualiza un rango de juego",
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego (ej: overwatch, fortnite)",
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
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego",
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
          "parameters": [
            {
              "name": "game",
              "description": "Filtrar por juego (opcional)",
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
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego",
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
          "parameters": [
            {
              "name": "game",
              "description": "Clave del juego",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [],
          "description": "Reporta un error o usuario al equipo del servidor.",
          "parameters": [
            {
              "name": "type",
              "description": "Tipo",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Error",
                  "value": "bug"
                },
                {
                  "name": "Usuario",
                  "value": "user"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "description",
              "description": "Descripción",
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
      "name": "search",
      "description": "Búsquedas y consultas externas.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "bing"
          ],
          "description": "Busca con bing.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
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
          "description": "Busca con ddg.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
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
          "description": "Busca con google.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
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
          "description": "Busca con youtube.",
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
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
          "parameters": [
            {
              "name": "country",
              "description": "País",
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
          "parameters": [
            {
              "name": "coin",
              "description": "ID, por ejemplo bitcoin",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "currency",
              "description": "Moneda, por ejemplo usd",
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
          "parameters": [
            {
              "name": "name",
              "description": "Consulta",
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
          "parameters": [
            {
              "name": "name",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "color",
              "description": "Hexadecimal",
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
          "parameters": [
            {
              "name": "song",
              "description": "Canción",
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
          "parameters": [
            {
              "name": "name",
              "description": "Paquete",
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
          "parameters": [
            {
              "name": "name",
              "description": "Juego",
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
          "parameters": [
            {
              "name": "language",
              "description": "Código destino, ej. en",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "text",
              "description": "Texto",
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
          "parameters": [
            {
              "name": "location",
              "description": "Ubicación",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [],
          "description": "Cambia la posición de la canción actual.",
          "parameters": [
            {
              "name": "segundos",
              "description": "Segundos desde el inicio.",
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
      "defaultMemberPermissions": "268435456",
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "add"
          ],
          "description": "Añade un rol al panel de autoasignación",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol a añadir",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "etiqueta",
              "description": "Etiqueta visible en el panel (opcional)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "categoria",
              "description": "Categoría libre, ej: color, game, coaching, region...",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición dentro de la sección (0, 1, 2...)",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol a eliminar",
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
          "parameters": []
        },
        {
          "path": [
            "panel"
          ],
          "description": "Publica el panel de selección de roles en el canal indicado",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal donde publicar el panel",
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
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Menús",
                  "value": "menu"
                },
                {
                  "name": "Botones",
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
          "parameters": [
            {
              "name": "titulo",
              "description": "Nombre de la sección",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "categorias",
              "description": "Categorías incluidas separadas por coma (ej: color,notification)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji de la sección (ej: 🎨)",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición (1, 2, 3...)",
              "type": 4,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "rolgate",
              "description": "Rol requerido para usar esta sección (opcional)",
              "type": 8,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "nota",
              "description": "Nota mostrada bajo el título de la sección",
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
          "parameters": [
            {
              "name": "titulo",
              "description": "Nombre exacto de la sección",
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
          "parameters": []
        },
        {
          "path": [
            "cascade-add"
          ],
          "description": "Configura qué categorías se piden al seleccionar un rol",
          "parameters": [
            {
              "name": "rol",
              "description": "Rol que dispara la cascada",
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "categorias",
              "description": "Categorías separadas por coma (ej: competitive_rank,position,platform)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "titulo",
              "description": "Título del mensaje de cascada (opcional)",
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
          "parameters": [
            {
              "name": "rol",
              "description": "Rol cuya cascada eliminar",
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
          "parameters": []
        }
      ]
    },
    {
      "name": "serverstats",
      "description": "Canales contadores con estadísticas del servidor.",
      "defaultMemberPermissions": "16",
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "boosts"
          ],
          "description": "Crea el contador de boosts.",
          "parameters": []
        },
        {
          "path": [
            "tier"
          ],
          "description": "Crea el contador de nivel.",
          "parameters": []
        },
        {
          "path": [
            "channels"
          ],
          "description": "Crea el contador de canales.",
          "parameters": []
        },
        {
          "path": [
            "stage-channels"
          ],
          "description": "Crea el contador de escenarios.",
          "parameters": []
        },
        {
          "path": [
            "text-channels"
          ],
          "description": "Crea el contador de texto.",
          "parameters": []
        },
        {
          "path": [
            "voice-channels"
          ],
          "description": "Crea el contador de voz.",
          "parameters": []
        },
        {
          "path": [
            "news-channels"
          ],
          "description": "Crea el contador de anuncios.",
          "parameters": []
        },
        {
          "path": [
            "members"
          ],
          "description": "Crea el contador de miembros.",
          "parameters": []
        },
        {
          "path": [
            "bots"
          ],
          "description": "Crea el contador de bots.",
          "parameters": []
        },
        {
          "path": [
            "roles"
          ],
          "description": "Crea el contador de roles.",
          "parameters": []
        },
        {
          "path": [
            "emoji"
          ],
          "description": "Crea el contador de emojis.",
          "parameters": []
        },
        {
          "path": [
            "static-emoji"
          ],
          "description": "Crea el contador de emojis estáticos.",
          "parameters": []
        },
        {
          "path": [
            "animated-emoji"
          ],
          "description": "Crea el contador de emojis animados.",
          "parameters": []
        },
        {
          "path": [
            "time"
          ],
          "description": "Crea un reloj con una zona horaria.",
          "parameters": [
            {
              "name": "timezone",
              "description": "Zona IANA, por ejemplo America/Guatemala",
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
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina un contador.",
          "parameters": [
            {
              "name": "tipo",
              "description": "Contador",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "boosts",
                  "value": "boosts"
                },
                {
                  "name": "tier",
                  "value": "tier"
                },
                {
                  "name": "channels",
                  "value": "channels"
                },
                {
                  "name": "stage-channels",
                  "value": "stage-channels"
                },
                {
                  "name": "text-channels",
                  "value": "text-channels"
                },
                {
                  "name": "voice-channels",
                  "value": "voice-channels"
                },
                {
                  "name": "news-channels",
                  "value": "news-channels"
                },
                {
                  "name": "members",
                  "value": "members"
                },
                {
                  "name": "bots",
                  "value": "bots"
                },
                {
                  "name": "roles",
                  "value": "roles"
                },
                {
                  "name": "emoji",
                  "value": "emoji"
                },
                {
                  "name": "static-emoji",
                  "value": "static-emoji"
                },
                {
                  "name": "animated-emoji",
                  "value": "animated-emoji"
                },
                {
                  "name": "time",
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
      "defaultMemberPermissions": "8",
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "wizard"
          ],
          "description": "Inicia el wizard de configuración paso a paso",
          "parameters": []
        },
        {
          "path": [
            "status"
          ],
          "description": "Muestra el estado actual de la configuración del bot",
          "parameters": []
        },
        {
          "path": [
            "logs"
          ],
          "description": "Configura los canales de logs, niveles o boosts.",
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Logs del servidor",
                  "value": "serverlogs"
                },
                {
                  "name": "Logs de niveles",
                  "value": "levellogs"
                },
                {
                  "name": "Logs de boosts",
                  "value": "boostlogs"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Cumpleaños",
                  "value": "birthdays"
                },
                {
                  "name": "Chatbot",
                  "value": "chatbot"
                },
                {
                  "name": "Reseñas",
                  "value": "reviews"
                },
                {
                  "name": "Sugerencias",
                  "value": "suggestions"
                },
                {
                  "name": "Starboard",
                  "value": "starboard"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Contar",
                  "value": "counting"
                },
                {
                  "name": "Adivina el número",
                  "value": "gtn"
                },
                {
                  "name": "Adivina la palabra",
                  "value": "gtw"
                },
                {
                  "name": "Cadena de palabras",
                  "value": "wordsnake"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "setup",
              "description": "Función a configurar",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Canal de bienvenida",
                  "value": "welcomechannel"
                },
                {
                  "name": "Canal de despedidas",
                  "value": "leavechannel"
                }
              ],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal de texto",
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
          "parameters": [
            {
              "name": "category",
              "description": "Categoría",
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
              "type": 8,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "channel",
              "description": "Canal del panel",
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
          "parameters": [
            {
              "name": "channel",
              "description": "Canal de voz",
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
          "parameters": [
            {
              "name": "role",
              "description": "Rol",
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
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
          "parameters": [
            {
              "name": "setup",
              "description": "Configuración",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [
                {
                  "name": "Tickets",
                  "value": "tickets"
                },
                {
                  "name": "Custom voice",
                  "value": "customvoice"
                },
                {
                  "name": "Server logs",
                  "value": "serverlogs"
                },
                {
                  "name": "Level logs",
                  "value": "levellogs"
                },
                {
                  "name": "Boost logs",
                  "value": "boostlogs"
                },
                {
                  "name": "Birthdays",
                  "value": "birthdays"
                },
                {
                  "name": "Chatbot",
                  "value": "chatbot"
                },
                {
                  "name": "Reviews",
                  "value": "reviews"
                },
                {
                  "name": "Suggestions",
                  "value": "suggestions"
                },
                {
                  "name": "Starboard",
                  "value": "starboard"
                },
                {
                  "name": "Counting",
                  "value": "counting"
                },
                {
                  "name": "Guess the number",
                  "value": "gtn"
                },
                {
                  "name": "Guess the word",
                  "value": "gtw"
                },
                {
                  "name": "Word snake",
                  "value": "wordsnake"
                },
                {
                  "name": "Welcome channel",
                  "value": "welcomechannel"
                },
                {
                  "name": "Leave channel",
                  "value": "leavechannel"
                },
                {
                  "name": "Welcome role",
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
      "name": "shop",
      "description": "Tienda del servidor.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [
            "list"
          ],
          "description": "Muestra los artículos disponibles en la tienda.",
          "parameters": []
        },
        {
          "path": [
            "buy"
          ],
          "description": "Compra un artículo de la tienda usando su ID.",
          "parameters": [
            {
              "name": "id",
              "description": "El ID del artículo a comprar",
              "type": 4,
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
      "name": "skip",
      "description": "Salta la canción actual o avanza a una posición de /queue.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Salta la canción actual o avanza a una posición de /queue.",
          "parameters": [
            {
              "name": "posicion",
              "description": "Posición de la cola pendiente, comenzando en 1.",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "windows",
            "windowserror"
          ],
          "description": "Reproduce windowserror.",
          "parameters": []
        },
        {
          "path": [
            "windows",
            "windowsshutdown"
          ],
          "description": "Reproduce windowsshutdown.",
          "parameters": []
        },
        {
          "path": [
            "windows",
            "windowsstartup"
          ],
          "description": "Reproduce windowsstartup.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "reee"
          ],
          "description": "Reproduce reee.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "defaultdance"
          ],
          "description": "Reproduce defaultdance.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "startup"
          ],
          "description": "Reproduce startup.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "thomas"
          ],
          "description": "Reproduce thomas.",
          "parameters": []
        },
        {
          "path": [
            "earrape",
            "wegothim"
          ],
          "description": "Reproduce wegothim.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "dancememe"
          ],
          "description": "Reproduce dancememe.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "despacito"
          ],
          "description": "Reproduce despacito.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "elevator"
          ],
          "description": "Reproduce elevator.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "rickastley"
          ],
          "description": "Reproduce rickastley.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "running"
          ],
          "description": "Reproduce running.",
          "parameters": []
        },
        {
          "path": [
            "songs",
            "tobecontinued"
          ],
          "description": "Reproduce tobecontinued.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordcall"
          ],
          "description": "Reproduce discordcall.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordjoin"
          ],
          "description": "Reproduce discordjoin.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordleave"
          ],
          "description": "Reproduce discordleave.",
          "parameters": []
        },
        {
          "path": [
            "discord",
            "discordnotification"
          ],
          "description": "Reproduce discordnotification.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "fbi"
          ],
          "description": "Reproduce fbi.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "jeff"
          ],
          "description": "Reproduce jeff.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "lambo"
          ],
          "description": "Reproduce lambo.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "missionfailed"
          ],
          "description": "Reproduce missionfailed.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "moaning"
          ],
          "description": "Reproduce moaning.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "nani"
          ],
          "description": "Reproduce nani.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "nyancat"
          ],
          "description": "Reproduce nyancat.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "ohh"
          ],
          "description": "Reproduce ohh.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "rimshot"
          ],
          "description": "Reproduce rimshot.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "roblox"
          ],
          "description": "Reproduce roblox.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "shotdown"
          ],
          "description": "Reproduce shotdown.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "spongebob"
          ],
          "description": "Reproduce spongebob.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "wow"
          ],
          "description": "Reproduce wow.",
          "parameters": []
        },
        {
          "path": [
            "memes",
            "yeet"
          ],
          "description": "Reproduce yeet.",
          "parameters": []
        }
      ]
    },
    {
      "name": "stickymessages",
      "description": "Mensajes fijados dinámicamente.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "stick"
          ],
          "description": "Configura un sticky.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
          "parameters": []
        },
        {
          "path": [
            "unstick"
          ],
          "description": "Elimina un sticky.",
          "parameters": [
            {
              "name": "channel",
              "description": "Canal",
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
      "description": "Detiene la musica y vacia la cola.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Detiene la musica y vacia la cola.",
          "parameters": []
        }
      ]
    },
    {
      "name": "suggestions",
      "description": "Sugerencias comunitarias.",
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "send"
          ],
          "description": "Publica una sugerencia.",
          "parameters": [
            {
              "name": "suggestion",
              "description": "Sugerencia",
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
          "parameters": [
            {
              "name": "id",
              "description": "UUID o ID del mensaje",
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
          "parameters": [
            {
              "name": "id",
              "description": "UUID o ID del mensaje",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "check"
          ],
          "description": "Consulta agradecimientos.",
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
          "parameters": [
            {
              "name": "user",
              "description": "Usuario",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "category-add"
          ],
          "description": "(Admin) Añade o edita una categoría de ticket",
          "parameters": [
            {
              "name": "clave",
              "description": "Clave interna (ej: soporte, admin)",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "nombre",
              "description": "Nombre visible",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "emoji",
              "description": "Emoji",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "descripcion",
              "description": "Descripción corta",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "orden",
              "description": "Orden de aparición",
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
          "parameters": [
            {
              "name": "clave",
              "description": "Clave de la categoría",
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
          "parameters": []
        },
        {
          "path": [
            "panel"
          ],
          "description": "Envía el panel de apertura de tickets en un canal",
          "parameters": [
            {
              "name": "canal",
              "description": "Canal destino",
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
          "parameters": [
            {
              "name": "categoria",
              "description": "Clave de categoría; por defecto soporte",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "motivo",
              "description": "Motivo del ticket",
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
          "parameters": []
        },
        {
          "path": [
            "unclaim"
          ],
          "description": "Libera el ticket que tienes asignado.",
          "parameters": []
        },
        {
          "path": [
            "information"
          ],
          "description": "Consulta los datos de este ticket.",
          "parameters": []
        },
        {
          "path": [
            "rename"
          ],
          "description": "Cambia el nombre de este ticket.",
          "parameters": [
            {
              "name": "nombre",
              "description": "Nuevo nombre del canal.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Participante del ticket.",
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
          "parameters": [
            {
              "name": "usuario",
              "description": "Participante del ticket.",
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
          "parameters": [
            {
              "name": "limite",
              "description": "Máximo de mensajes: 1–1000; por defecto 200.",
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
              "description": "HTML como en la fuente (por defecto) o texto plano.",
              "type": 3,
              "required": false,
              "autocomplete": false,
              "choices": [
                {
                  "name": "HTML",
                  "value": "html"
                },
                {
                  "name": "Texto",
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
          "parameters": []
        },
        {
          "path": [
            "delete"
          ],
          "description": "Elimina definitivamente este ticket.",
          "parameters": []
        },
        {
          "path": [
            "open"
          ],
          "description": "Reabre un ticket cerrado.",
          "parameters": []
        },
        {
          "path": [
            "lower"
          ],
          "description": "Oculta el ticket al rol Staff.",
          "parameters": []
        },
        {
          "path": [
            "raise"
          ],
          "description": "Vuelve a mostrar el ticket al rol Staff.",
          "parameters": []
        },
        {
          "path": [
            "notice"
          ],
          "description": "Envía un aviso privado al creador.",
          "parameters": [
            {
              "name": "mensaje",
              "description": "Aviso",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "anagram"
          ],
          "description": "Mezcla una palabra.",
          "parameters": [
            {
              "name": "word",
              "description": "Palabra",
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
          "parameters": [
            {
              "name": "url",
              "description": "URL HTTPS",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "text",
              "description": "Etiqueta",
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
          "parameters": []
        },
        {
          "path": [
            "decode"
          ],
          "description": "Decodifica Base64.",
          "parameters": [
            {
              "name": "code",
              "description": "Base64",
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
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "parameters": [
            {
              "name": "text",
              "description": "Texto",
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
          "parameters": [
            {
              "name": "emoji",
              "description": "Emoji",
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
          "parameters": [
            {
              "name": "name",
              "description": "Jugador",
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
          "parameters": [
            {
              "name": "ip",
              "description": "Host",
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
          "parameters": []
        },
        {
          "path": [
            "qrcode"
          ],
          "description": "Genera un QR.",
          "parameters": [
            {
              "name": "text",
              "description": "Contenido",
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
          "parameters": [
            {
              "name": "time",
              "description": "10s, 5m, 2h, 7d o 1w",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "message",
              "description": "Mensaje",
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
          "parameters": [
            {
              "name": "stars",
              "description": "Estrellas",
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
          "parameters": [
            {
              "name": "language",
              "description": "Extensión",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "code",
              "description": "Código",
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
          "parameters": [
            {
              "name": "site",
              "description": "URL HTTPS",
              "type": 3,
              "required": true,
              "autocomplete": false,
              "choices": [],
              "channelTypes": []
            },
            {
              "name": "code",
              "description": "Alias corto deseado",
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
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Ejecuta un comando de texto personalizado de este servidor",
          "parameters": [
            {
              "name": "nombre",
              "description": "Nombre del comando personalizado",
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
      "defaultMemberPermissions": null,
      "dmPermission": false,
      "usages": [
        {
          "path": [
            "limit"
          ],
          "description": "Cambia el límite de miembros.",
          "parameters": [
            {
              "name": "limit",
              "description": "0 para sin límite, hasta 99",
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
          "parameters": []
        },
        {
          "path": [
            "unlock"
          ],
          "description": "Vuelve a abrir la sala.",
          "parameters": []
        },
        {
          "path": [
            "rename"
          ],
          "description": "Renombra la sala si el lobby lo permite.",
          "parameters": [
            {
              "name": "name",
              "description": "Nuevo nombre",
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
      "description": "Ajusta el volumen de la musica.",
      "defaultMemberPermissions": null,
      "dmPermission": null,
      "usages": [
        {
          "path": [],
          "description": "Ajusta el volumen de la musica.",
          "parameters": [
            {
              "name": "nivel",
              "description": "Nivel de volumen (1-100)",
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
