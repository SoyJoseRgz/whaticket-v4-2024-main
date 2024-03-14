const messages = {
  pt: {
    translations: {
      signup: {
        title: "Cadastre-se",
        toasts: {
          success: "Usuário criado com sucesso! Faça seu login!!!.",
          fail: "Erro ao criar usuário. Verifique os dados informados.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Senha",
        },
        buttons: {
          submit: "Cadastrar",
          login: "Já tem uma conta? Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "Senha",
        },
        buttons: {
          submit: "Entrar",
          register: "Registre-se, agora mesmo!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuários",
          connections: "Conexões",
          campaigns: "Campanhas",
          schedules: "Agenda",
          enabled: "Habilitadas",
          disabled: "Desabilitadas",
          clear: "Cancelar",
          delete: "Excluir",
          save: "Salvar",
          yes: "Sim",
          no: "Não",
          money: "R$",
        },
      },
      companies: {
        title: "Cadastrar Empresa",
        form: {
          name: "Nome da Empresa",
          plan: "Plano",
          token: "Token",
          submit: "Cadastrar",
          success: "Empresa criada com sucesso!",
        },
      },
      auth: {
        toasts: {
          success: "Login efetuado com sucesso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atendimentos hoje: ",
          },
        },
      },
      connections: {
        title: "Conexões",
        toasts: {
          deleted: "Conexão com o WhatsApp excluída com sucesso!",
        },
        confirmationModal: {
          deleteTitle: "Deletar",
          deleteMessage: "Você tem certeza? Essa ação não pode ser revertida.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "Tem certeza? Você precisará ler o QR Code novamente.",
        },
        buttons: {
          add: "Adicionar WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Tentar novamente",
          qrcode: "QR CODE",
          newQr: "Novo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Falha ao iniciar sessão do WhatsApp",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e tente novamente, ou solicite um novo QR Code",
          },
          qrcode: {
            title: "Esperando leitura do QR Code",
            content:
              "Clique no botão 'QR CODE' e leia o QR Code com o seu celular para iniciar a sessão",
          },
          connected: {
            title: "Conexão estabelecida!",
          },
          timeout: {
            title: "A conexão com o celular foi perdida",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: "Nombre",
          status: "Status",
          lastUpdate: "Última atualização",
          default: "Padrão",
          actions: "Acción",
          session: "Sessão",
        },
      },
      whatsappModal: {
        title: {
          add: "Adicionar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Padrão",
          sendIdQueue: "Fila",
          timeSendQueue: "Redirecionar para fila em X minutos",
          queueRedirection: "Redirecionamento de Fila",
          queueRedirectionDesc: "Selecione uma fila para os contatos que não possuem fila serem redirecionados",
          prompt: "Prompt",
          maxUseBotQueues: "Enviar bot x vezes",
          timeUseBotQueues: "Intervalo em minutos entre envio de bot",
          expiresTicket: "Encerrar chats abertos após x minutos",
          expiresInactiveMessage: "Mensagem de encerramento por inatividade",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "WhatsApp salvo com sucesso.",
      },
      qrCode: {
        message: "Leia o QrCode para iniciar a sessão",
      },
      contacts: {
        title: "Contatos",
        toasts: {
          deleted: "Contato excluído com sucesso!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Deletar ",
          importTitlte: "Importar contatos",
          deleteMessage:
            "Tem certeza que deseja deletar este contato? Todos os atendimentos relacionados serão perdidos.",
          importMessage: "Deseja importar todos os contatos do telefone?",
        },
        buttons: {
          import: "Importar Contatos",
          add: "Adicionar Contato",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acción",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Adicionar projeto",
          edit: "Editar projeto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nome do Projeto",
          language: "Linguagem",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tempo em minutos para expirar uma conversa",
          typebotKeywordFinish: "Palavra para finalizar o ticket",
          typebotKeywordRestart: "Palavra para reiniciar o fluxo",
          typebotRestartMessage: "Mensagem ao reiniciar a conversa",
          typebotUnknownMessage: "Mensagem de opção inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensagens",   
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Salvar",
          cancel: "Cancelar",
          test: "Testar Bot",
        },
        messages: {
          testSuccess: "Integração testada com sucesso!",
          addSuccess: "Integração adicionada com sucesso.",
          editSuccess: "Integração editada com sucesso.",
        },
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens na resposta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensagens no Histórico",
          voiceKey: "Chave da API de Voz",
          voiceRegion: "Região de Voz",
        },
        success: "Prompt salvo com sucesso!",
        title: {
          add: "Adicionar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Setor/Fila",
          max_tokens: "Máximo Tokens Resposta",
          actions: "Acción",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Você tem certeza? Essa ação não pode ser revertida!",
        },
        buttons: {
          add: "Adicionar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Adicionar contato",
          edit: "Editar contato",
        },
        form: {
          mainInfo: "Dados do contato",
          extraInfo: "Informações adicionais",
          name: "Nombre",
          number: "Número do Whatsapp",
          email: "Email",
          extraName: "Nome do campo",
          extraValue: "Valor",
          whatsapp: "Conexão Origem: "
        },
        buttons: {
          addExtraInfo: "Adicionar informação",
          okAdd: "Agregar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Contato salvo com sucesso.",
      },
      queueModal: {
        title: {
          add: "Adicionar fila",
          edit: "Editar fila",
        },
        form: {
          name: "Nombre",
          color: "Cor",
          greetingMessage: "Mensagem de saudação",
          complationMessage: "Mensagem de conclusão",
          outOfHoursMessage: "Mensagem de fora de expediente",
          ratingMessage: "Mensagem de avaliação",
          token: "Token",
          orderQueue: "Ordem da fila (Bot)",
          integrationId: "Integração",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Adicionar usuário",
          edit: "Editar usuário",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Senha",
          profile: "Perfil",
          whatsapp: "Conexão Padrão"
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Usuário salvo com sucesso.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo horario",
          edit: "Editar Agendamento",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de programacion",
          sentAt: "Fecha de envío",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Agendamento salvo com sucesso.",
      },
      tagModal: {
        title: {
          add: "Nova Tag",
          edit: "Editar Tag",
        },
        form: {
          name: "Nombre",
          color: "Cor",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Tag salvo com sucesso.",
      },
      chat: {
        noTicketMessage: "Selecione um ticket para começar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTE E SOLTE ARQUIVOS NO CAMPO ABAIXO",
          titleFileList: "Lista de arquivo(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Novo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        toasts: {
          deleted: "O atendimento que você estava foi deletado.",
        },
        notification: {
          message: "Mensagem de",
        },
        tabs: {
          open: { title: "Abertas" },
          closed: { title: "Resolvidos" },
          search: { title: "Busca" },
        },
        search: {
          placeholder: "Buscar atendimento e mensagens",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Digite para buscar usuários",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Selecione uma fila",
        noOptions: "Nenhum usuário encontrado com esse nome",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Aguardando",
        assignedHeader: "Atendendo",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "Nenhum atendimento encontrado com esse status ou termo pesquisado",
        buttons: {
          accept: "Aceitar",
          closed: "Finalizar",
          reopen: "Reabrir"
        },
      },
      newTicketModal: {
        title: "Criar Ticket",
        fieldLabel: "Digite para Buscar o contato",
        add: "Adicionar",
        buttons: {
          ok: "Salvar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexões",
          tickets: "Atendimentos",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contatos",
          queues: "Filas & Chatbot",
          tags: "Tags",
          administration: "Administración",
          users: "Usuários",
          settings: "Configurações",
          helps: "Ajuda",
          messagesAPI: "API",
          schedules: "Agenda",
          campaigns: "Campanhas",
          annoucements: "Informativos",
          chats: "Chat Interno",
          financeiro: "Financeiro",
          files: "Lista de arquivos",
          prompts: "Open.Ai",
          queueIntegration: "Integrações",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Sair",
          },
        },
      },
      queueIntegration: {
        title: "Integrações",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nome",
          projectName: "Nome do Projeto",
          language: "Linguagem",
          lastUpdate: "Ultima atualização",
          actions: "Acción",
        },
        buttons: {
          add: "Adicionar Projeto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Você tem certeza? Essa ação não pode ser revertida! e será removida das filas e conexões vinculadas",
        },
      },
      files: {
        title: "Lista de archivos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciónes",
        },
        toasts: {
          deleted: "Lista excluída com sucesso!",
          deletedAll: "Todas as listas foram excluídas com sucesso!",
        },
        buttons: {
          add: "Agregar Archivo",
          deleteAll: "Deletar Todos",
        },
        confirmationModal: {
          deleteTitle: "Deletar",
          deleteAllTitle: "Deletar Todos",
          deleteMessage: "Tem certeza que deseja deletar esta lista?",
          deleteAllMessage: "Tem certeza que deseja deletar todas as listas?",
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensagem",
          token: "Token cadastrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Arquivo",
          token: "Token cadastrado",
        },
      },
      notifications: {
        noTickets: "Nenhuma notificação.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        searchPlaceholder: "Buscar...",
        noAttachment: "Sem anexo",
        confirmationModal: {
          deleteTitle: "Exclusão",
          deleteMessage: "Esta ação é irreversível! Deseja prosseguir?",
        },
        buttons: {
          add: "Agregar Respuesta",
          attach: "Anexar Archivo",
          cancel: "Cancelar",
          edit: "Editar",
        },
        toasts: {
          success: "Atalho adicionado com sucesso!",
          deleted: "Atalho removido com sucesso!",
        },
        dialog: {
          title: "Mensagem Rápida",
          shortcode: "Atajo",
          message: "Resposta",
          save: "Salvar",
          cancel: "Cancelar",
          geral: "Permitir editar",
          add: "Adicionar",
          edit: "Editar",
          visao: "Permitir visão",
        },
        table: {
          shortcode: "Atajo",
          message: "Mensagem",
          actions: "Acción",
          mediaName: "Nombre del archivo",
          status: "Status",
        },
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
          contactFirstName: "Primer nombre",
          contactName: "Nombre completo",
          greeting: "Saludo",
          protocolNumber: "Protocolo",
          date: "Data",
          hour: "Hora",
        },
      },
      contactLists: {
        title: "Listas de Contatos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acción",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      contactListItems: {
        title: "Contatos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Novo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Acción",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no puede ser revertida",
          importMessage: "Deseja importar os contatos desta planilha? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      campaigns: {
        title: "Campaña",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Crear Campaña",
          contactLists: "Listas de Contatos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexion",
          contactList: "Lista de Contactos",
          status: "Estatus",
          scheduledAt: "Programado",
          completedAt: "terminado",
          confirmation: "Confirmacion",
          actions: "Acción",
        },
        dialog: {
          new: "Nueva campaña",
          update: "Editar Campaña",
          readonly: "Sólo vista",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexion",
            status: "Estatus",
            scheduledAt: "Programado",
            confirmation: "Confirmación",
            contactList: "Lista de Contacto",
            tagList: "Lista de etiquetas",
            fileList: "Lista de Archivos"
          },
          buttons: {
            add: "Agregar",
            edit: "Actualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparo",
            restart: "Reiniciar Disparo",
            close: "Salir",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          cancel: "Campanha cancelada",
          restart: "Campanha reiniciada",
          deleted: "Registro excluído",
        },
      },
      announcements: {
        active: 'Ativo',
        inactive: 'Inativo',
        title: "Informativos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Novo Informativo",
          contactLists: "Listas de Informativos",
        },
        table: {
          priority: "Prioridade",
          title: "Title",
          text: "Texto",
          mediaName: "Archivo",
          status: "Status",
          actions: "Acción",
        },
        dialog: {
          edit: "Edição de Informativo",
          add: "Novo Informativo",
          update: "Editar Informativo",
          readonly: "Apenas Visualização",
          form: {
            priority: "Prioridade",
            title: "Title",
            text: "Texto",
            mediaPath: "Arquivo",
            status: "Status",
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Fechar",
            attach: "Anexar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          deleted: "Registro excluído",
        },
      },
      campaignsConfig: {
        title: "Configuración de campañas",
      },
      queues: {
        title: "Filas & Departamentos",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          actions: "Acciones",
          orderQueue: "Ordenación de filas & departamentos",
        },
        buttons: {
          add: "Agregar fila & departamento",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Filas",
      },
      users: {
        title: "Usuários",
        table: {
          name: "Nombre",
          email: "Email",
          profile: "Perfil",
          actions: "Acción",
        },
        buttons: {
          add: "Adicionar usuário",
        },
        toasts: {
          deleted: "Usuário excluído com sucesso.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todos os dados do usuário serão perdidos. Os atendimento abertos deste usuário serão movidos para a fila.",
        },
      },
      helps: {
        title: "Central de Ajuda",
      },
      schedules: {
        title: "Agenda",
        confirmationModal: {
          deleteTitle: "Você tem certeza que quer excluir este Agendamento?",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        table: {
          contact: "Contato",
          body: "Mensagem",
          sendAt: "Data de Agendamento",
          sentAt: "Data de Envio",
          status: "Status",
          actions: "Acción",
        },
        buttons: {
          add: "Agregar agenda",
        },
        toasts: {
          deleted: "Agendamento excluído com sucesso.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "Você tem certeza que quer excluir esta Tag?",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        table: {
          name: "Nombre",
          color: "Cor",
          tickets: "Registros Tagdos",
          actions: "Acción",
        },
        buttons: {
          add: "Nova Tag",
        },
        toasts: {
          deleted: "Tag excluído com sucesso.",
        },
      },
      settings: {
        success: "Configurações salvas com sucesso.",
        title: "Configurações",
        settings: {
          userCreation: {
            name: "Criação de usuário",
            options: {
              enabled: "Ativado",
              disabled: "Desativado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído à:",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceitar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Digite uma mensagem",
        placeholderClosed:
          "Reabra ou aceite esse ticket para enviar uma mensagem.",
        signMessage: "Assinar",
      },
      contactDrawer: {
        header: "Dados do contato",
        buttons: {
          edit: "Editar contato",
        },
        extraInfo: "Outras informações",
      },
      fileModal: {
        title: {
          add: "Adicionar lista de arquivos",
          edit: "Editar lista de arquivos",
        },
        buttons: {
          okAdd: "Salvar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Adicionar arquivo",
        },
        form: {
          name: "Nome da lista de arquivos",
          message: "Detalhes da lista",
          fileOptions: "Lista de arquivos",
          extraName: "Mensagem para enviar com arquivo",
          extraValue: "Valor da opção",
        },
        success: "Lista de arquivos salva com sucesso!",
      },
      ticketOptionsMenu: {
        schedule: "Agendamento",
        delete: "Deletar",
        transfer: "Transferir",
        registerAppointment: "Observações do Contato",
        appointmentsModal: {
          title: "Observações do Contato",
          textarea: "Observação",
          placeholder: "Insira aqui a informação que deseja registrar",
        },
        confirmationModal: {
          title: "Deletar o ticket do contato",
          message:
            "Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.",
        },
        buttons: {
          delete: "Excluir",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Deletar",
        reply: "Responder",
        confirmationModal: {
          title: "Apagar mensagem?",
          message: "Esta acción no puede ser revertida",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Deve haver pelo menos um WhatsApp padrão.",
        ERR_NO_DEF_WAPP_FOUND:
          "Nenhum WhatsApp padrão encontrado. Verifique a página de conexões.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sessão do WhatsApp não foi inicializada. Verifique a página de conexões.",
        ERR_WAPP_CHECK_CONTACT:
          "Não foi possível verificar o contato do WhatsApp. Verifique a página de conexões",
        ERR_WAPP_INVALID_CONTACT: "Este não é um número de Whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Não foi possível baixar mídia do WhatsApp. Verifique a página de conexões.",
        ERR_INVALID_CREDENTIALS:
          "Erro de autenticação. Por favor, tente novamente.",
        ERR_SENDING_WAPP_MSG:
          "Erro ao enviar mensagem do WhatsApp. Verifique a página de conexões.",
        ERR_DELETE_WAPP_MSG: "Não foi possível excluir a mensagem do WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Já existe um tíquete aberto para este contato.",
        ERR_SESSION_EXPIRED: "Sessão expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED:
          "A criação do usuário foi desabilitada pelo administrador.",
        ERR_NO_PERMISSION: "Você não tem permissão para acessar este recurso.",
        ERR_DUPLICATED_CONTACT: "Já existe um contato com este número.",
        ERR_NO_SETTING_FOUND: "Nenhuma configuração encontrada com este ID.",
        ERR_NO_CONTACT_FOUND: "Nenhum contato encontrado com este ID.",
        ERR_NO_TICKET_FOUND: "Nenhum tíquete encontrado com este ID.",
        ERR_NO_USER_FOUND: "Nenhum usuário encontrado com este ID.",
        ERR_NO_WAPP_FOUND: "Nenhum WhatsApp encontrado com este ID.",
        ERR_CREATING_MESSAGE: "Erro ao criar mensagem no banco de dados.",
        ERR_CREATING_TICKET: "Erro ao criar tíquete no banco de dados.",
        ERR_FETCH_WAPP_MSG:
          "Erro ao buscar a mensagem no WhtasApp, talvez ela seja muito antiga.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Esta cor já está em uso, escolha outra.",
        ERR_WAPP_GREETING_REQUIRED:
          "A mensagem de saudação é obrigatório quando há mais de uma fila.",
      },
    },
  },
};

export { messages };
