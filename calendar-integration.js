// calendar-integration.js

/**
 * Solicita um agendamento de diagnóstico.
 * Para o MVP, retorna um link do Calendly como fallback e envia os dados para o Firestore.
 */
export async function scheduleDiagnostic(clientName, clientEmail, preferredDate) {
    // TODO: Em produção, esta função deve chamar uma Firebase Cloud Function
    // que utilize a Google Calendar API com uma Service Account.
    
    console.log("Agendando diagnóstico para:", clientName, preferredDate);
    
    // Fallback do Calendly (Substituir pelo link real do usuário)
    const calendlyLink = 'https://calendly.com/renatorosa'; 

    return { 
        success: true, 
        message: 'Solicitação de agendamento recebida! Você receberá o link da reunião por e-mail em até 24h.',
        fallbackLink: calendlyLink 
    };
}

/**
 * Inicializa os ouvintes de evento para os botões de diagnóstico.
 */
export function initCalendar() {
    document.querySelectorAll('a[href="#diagnostico"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log("Iniciando fluxo de diagnóstico...");
            // O formulário de diagnóstico já lida com isso, mas podemos adicionar lógica extra aqui se necessário.
        });
    });
}
