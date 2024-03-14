const messages = {
	es: {
		translations: {
			signup: {
				title: "Regístrate",
				toasts: {
					success: "¡Usuario creado exitosamente! ¡Inicia sesión ahora!",
					fail: "Error al crear usuario. Verifica los datos ingresados.",
				},
				form: {
					name: "Nombre",
					email: "Correo electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Registrarse",
					login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
				},
			},
			login: {
				title: "Iniciar sesión",
				form: {
					email: "Correo electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Iniciar sesión",
					register: "¡Regístrate ahora!",
				},
			},

			plans: {
				form: {
					name: "Nombre",
					users: "Usuarios",
					connections: "Conexiones",
					campaigns: "Campañas",
					schedules: "Horarios",
					enabled: "Habilitadas",
					disabled: "Deshabilitadas",
					clear: "Cancelar",
					delete: "Eliminar",
					save: "Guardar",
					yes: "Sí",
					no: "No",
					money: "R$",
				},
			},
			companies: {
				title: "Registrar Empresa",
				form: {
					name: "Nombre de la Empresa",
					plan: "Plan",
					token: "Token",
					submit: "Registrar",
					success: "¡Empresa creada exitosamente!",
				},
			},
			auth: {
				toasts: {
					success: "¡Inicio de sesión exitoso!",
				},
				token: "Token",
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Atenciones de hoy: ",
					},
				},
			},
			connections: {
				title: "Conexiones",
				toasts: {
					deleted: "¡Conexión con WhatsApp eliminada exitosamente!",
				},
				confirmationModal: {
					deleteTitle: "Eliminar",
					deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
					disconnectTitle: "Desconectar",
					disconnectMessage:
						"¿Estás seguro? Tendrás que escanear el código QR nuevamente.",
				},
				buttons: {
					add: "Agregar WhatsApp",
					disconnect: "Desconectar",
					tryAgain: "Intentar nuevamente",
					qrcode: "CÓDIGO QR",
					newQr: "Nuevo CÓDIGO QR",
					connecting: "Conectando",
				},
				toolTips: {
					disconnected: {
						title: "Error al iniciar sesión en WhatsApp",
						content:
							"Asegúrate de que tu teléfono esté conectado a internet e inténtalo de nuevo, o solicita un nuevo código QR",
					},
					qrcode: {
						title: "Esperando lectura del código QR",
						content:
							"Haz clic en el botón 'CÓDIGO QR' y escanea el código QR con tu teléfono para iniciar la sesión",
					},
					connected: {
						title: "¡Conexión establecida!",
					},
					timeout: {
						title: "Se perdió la conexión con el teléfono",
						content:
							"Asegúrate de que tu teléfono esté conectado a internet y WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR",
					},
				},
				table: {
					name: "Nombre",
					status: "Estado",
					lastUpdate: "Última actualización",
					default: "Predeterminado",
					actions: "Acciones",
					session: "Sesión",
				},
			},

			whatsappModal: {
				title: {
					add: "Agregar WhatsApp",
					edit: "Editar WhatsApp",
				},
				form: {
					name: "Nombre",
					default: "Predeterminado",
					sendIdQueue: "Enviar a cola",
					timeSendQueue: "Redirigir a la cola en X minutos",
					queueRedirection: "Redirección de cola",
					queueRedirectionDesc: "Selecciona una Fila & Departamento para redirigir a los contactos que no tienen una cola asignada",
					prompt: "Mensaje",
					maxUseBotQueues: "Enviar bot X veces",
					timeUseBotQueues: "Intervalo en minutos entre envíos del bot",
					expiresTicket: "Cerrar chats abiertos después de X minutos",
					expiresInactiveMessage: "Mensaje de cierre por inactividad",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "WhatsApp guardado exitosamente.",
			},
			qrCode: {
				message: "Escanea el código QR para iniciar la sesión",
			},
			contacts: {
				title: "Contactos",
				toasts: {
					deleted: "¡Contacto eliminado exitosamente!",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
					deleteTitle: "Eliminar ",
					importTitlte: "Importar contactos",
					deleteMessage:
						"¿Estás seguro de que deseas eliminar este contacto? Todos los chats relacionados se perderán.",
					importMessage: "¿Deseas importar todos los contactos del teléfono?",
				},
				buttons: {
					import: "Importar Contactos",
					add: "Agregar Contacto",
				},
				table: {
					name: "Nombre",
					whatsapp: "WhatsApp",
					email: "Correo electrónico",
					actions: "Acciones",
				},
			},
			queueIntegrationModal: {
				title: {
					add: "Agregar proyecto",
					edit: "Editar proyecto",
				},
				form: {
					id: "ID",
					type: "Tipo",
					name: "Nombre",
					projectName: "Nombre del proyecto",
					language: "Idioma",
					jsonContent: "Contenido JSON",
					urlN8N: "URL",
					typebotSlug: "Typebot - Slug",
					typebotExpires: "Tiempo en minutos para expirar una conversación",
					typebotKeywordFinish: "Palabra para finalizar el ticket",
					typebotKeywordRestart: "Palabra para reiniciar el flujo",
					typebotRestartMessage: "Mensaje al reiniciar la conversación",
					typebotUnknownMessage: "Mensaje de opción inválida",
					typebotDelayMessage: "Intervalo (ms) entre mensajes",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
					test: "Probar Bot",
				},
				messages: {
					testSuccess: "¡Integración probada exitosamente!",
					addSuccess: "¡Integración agregada exitosamente!",
					editSuccess: "¡Integración editada exitosamente!",
				},
			},
			promptModal: {
				form: {
					name: "Nombre",
					prompt: "Mensaje",
					voice: "Voz",
					max_tokens: "Máximo de tokens en la respuesta",
					temperature: "Temperatura",
					apikey: "Clave API",
					max_messages: "Máximo de mensajes en el historial",
					voiceKey: "Clave de la API de voz",
					voiceRegion: "Región de voz",
				},
				success: "Mensaje guardado exitosamente.",
				title: {
					add: "Agregar Mensaje",
					edit: "Editar Mensaje",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
			},
			prompts: {
				title: "Mensajes",
				table: {
					name: "Nombre",
					queue: "Cola",
					max_tokens: "Máximo Tokens Respuesta",
					actions: "Acciones",
				},
				confirmationModal: {
					deleteTitle: "Eliminar",
					deleteMessage: "¿Estás seguro? ¡Esta acción no se puede deshacer!",
				},
				buttons: {
					add: "Agregar Mensaje",
				},
			},
			contactModal: {
				title: {
					add: "Agregar contacto",
					edit: "Editar contacto",
				},
				form: {
					mainInfo: "Información principal del contacto",
					extraInfo: "Información adicional",
					name: "Nombre",
					number: "Número de WhatsApp",
					email: "Correo electrónico",
					extraName: "Nombre del campo",
					extraValue: "Valor",
					whatsapp: "Conexión Origen: "
				},
				buttons: {
					addExtraInfo: "Agregar información adicional",
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Contacto guardado exitosamente.",
			},
			queueModal: {
				title: {
					add: "Agregar cola",
					edit: "Editar cola",
				},
				form: {
					name: "Nombre",
					color: "Color",
					greetingMessage: "Mensaje de bienvenida",
					complationMessage: "Mensaje de conclusión",
					outOfHoursMessage: "Mensaje fuera de horario",
					ratingMessage: "Mensaje de evaluación",
					token: "Token",
					orderQueue: "Orden de cola (Bot)",
					integrationId: "Integración",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
			},
			userModal: {
				title: {
					add: "Agregar usuario",
					edit: "Editar usuario",
				},
				form: {
					name: "Nombre",
					email: "Correo electrónico",
					password: "Contraseña",
					profile: "Perfil",
					whatsapp: "Conexión Predeterminada"
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Usuario guardado exitosamente.",
			},
			scheduleModal: {
				title: {
					add: "Nuevo Agendamiento",
					edit: "Editar Agendamiento",
				},
				form: {
					body: "Mensaje",
					contact: "Contacto",
					sendAt: "Fecha de Programación",
					sentAt: "Fecha de Envío",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Agendamiento guardado exitosamente.",
			},
			
			tagModal: {
				title: {
					add: "Nueva Etiqueta",
					edit: "Editar Etiqueta",
				},
				form: {
					name: "Nombre",
					color: "Color",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Etiqueta guardada exitosamente.",
			},
			chat: {
				noTicketMessage: "Selecciona un ticket para empezar a conversar.",
			},
			uploads: {
				titles: {
					titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO ABAJO",
					titleFileList: "Lista de archivo(s)"
				},
			},
			ticketsManager: {
				buttons: {
					newTicket: "Nuevo",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Filas",
			},
			tickets: {
				toasts: {
					deleted: "La atención que estabas siguiendo ha sido eliminada.",
				},
				notification: {
					message: "Mensaje de",
				},
				tabs: {
					open: { title: "Abiertas" },
					closed: { title: "Resueltos" },
					search: { title: "Buscar" },
				},
				search: {
					placeholder: "Buscar atención y mensajes",
				},
				buttons: {
					showAll: "Todos",
				},
			},
			transferTicketModal: {
				title: "Transferir Ticket",
				fieldLabel: "Escribe para buscar usuarios",
				fieldQueueLabel: "Transferir a la fila",
				fieldQueuePlaceholder: "Selecciona una fila",
				noOptions: "No se encontraron usuarios con ese nombre",
				buttons: {
					ok: "Transferir",
					cancel: "Cancelar",
				},
			},
			ticketsList: {
				pendingHeader: "Pendientes",
				assignedHeader: "En Atención",
				noTicketsTitle: "¡Nada aquí!",
				noTicketsMessage: "No se encontraron tickets con ese estado o término de búsqueda",
				buttons: {
					accept: "Aceptar",
					closed: "Finalizar",
					reopen: "Reabrir"
				},
			},
			newTicketModal: {
				title: "Crear Ticket",
				fieldLabel: "Escribe para buscar el contacto",
				add: "Agregar",
				buttons: {
					ok: "Guardar",
					cancel: "Cancelar",
				},
			},
			
			tags: {
				title: "Etiquetas",
				confirmationModal: {
					deleteTitle: "¿Estás seguro de que quieres eliminar esta etiqueta?",
					deleteMessage: "Esta acción no se puede deshacer.",
				},
				table: {
					name: "Nombre",
					color: "Color",
					tickets: "Registros etiquetados",
					actions: "Acciones",
				},
				buttons: {
					add: "Nueva etiqueta",
				},
				toasts: {
					deleted: "Etiqueta eliminada con éxito.",
				},
			},
			settings: {
				success: "Configuraciones guardadas con éxito.",
				title: "Configuraciones",
				settings: {
					userCreation: {
						name: "Creación de usuario",
						options: {
							enabled: "Activado",
							disabled: "Desactivado",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "Asignado a:",
					buttons: {
						return: "Volver",
						resolve: "Resolver",
						reopen: "Reabrir",
						accept: "Aceptar",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Escribe un mensaje",
				placeholderClosed: "Reabra o acepte este ticket para enviar un mensaje.",
				signMessage: "Firmar",
			},
			contactDrawer: {
				header: "Datos del contacto",
				buttons: {
					edit: "Editar contacto",
				},
				extraInfo: "Otra información",
			},
			fileModal: {
				title: {
					add: "Agregar lista de archivos",
					edit: "Editar lista de archivos",
				},
				buttons: {
					okAdd: "Guardar",
					okEdit: "Editar",
					cancel: "Cancelar",
					fileOptions: "Agregar archivo",
				},
				form: {
					name: "Nombre de la lista de archivos",
					message: "Detalles de la lista",
					fileOptions: "Lista de archivos",
					extraName: "Mensaje para enviar con archivo",
					extraValue: "Valor de la opción",
				},
				success: "Lista de archivos guardada con éxito.",
			},
			ticketOptionsMenu: {
				schedule: "Agendar",
				delete: "Eliminar",
				transfer: "Transferir",
				registerAppointment: "Observaciones del Contacto",
				appointmentsModal: {
					title: "Observaciones del Contacto",
					textarea: "Observación",
					placeholder: "Inserta aquí la información que deseas registrar",
				},
				confirmationModal: {
					title: "Eliminar el ticket del contacto",
					message: "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
				},
				buttons: {
					delete: "Eliminar",
					cancel: "Cancelar",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Aceptar",
					cancel: "Cancelar",
				},
			},
			messageOptionsMenu: {
				delete: "Eliminar",
				reply: "Responder",
				confirmationModal: {
					title: "¿Eliminar mensaje?",
					message: "Esta acción no se puede deshacer.",
				},
			},
			
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
				ERR_NO_DEF_WAPP_FOUND: "No se encontró ningún WhatsApp predeterminado. Verifique la página de conexiones.",
				ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de conexiones.",
				ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
				ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
				ERR_WAPP_DOWNLOAD_MEDIA: "No se pudo descargar multimedia de WhatsApp. Verifique la página de conexiones.",
				ERR_INVALID_CREDENTIALS: "Error de autenticación. Por favor, inténtelo de nuevo.",
				ERR_SENDING_WAPP_MSG: "Error al enviar mensaje de WhatsApp. Verifique la página de conexiones.",
				ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
				ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
				ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicie sesión de nuevo.",
				ERR_USER_CREATION_DISABLED: "La creación de usuarios ha sido desactivada por el administrador.",
				ERR_NO_PERMISSION: "No tiene permiso para acceder a este recurso.",
				ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
				ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
				ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
				ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
				ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
				ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
				ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
				ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
				ERR_FETCH_WAPP_MSG: "Error al buscar el mensaje en WhatsApp, puede ser demasiado antiguo.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elija otro.",
				ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una fila.",
			},
			
		},
	},
};

export { messages };