## 🗺️ Roadmap de Implementação - Firebase

### 📋 Backlog Prioritário
- [ ] Testar fluxo completo de login CPF -> Triagem -> Upload [Prioridade: Crítica]
- [ ] Implementar feedback visual (loader) durante login e uploads [Prioridade: Alta]
- [ ] Aplicar máscara de CPF e telefone nos formulários [Prioridade: Alta]
- [ ] Validar tamanho dos arquivos no upload (máx 25MB) [Prioridade: Média]
- [ ] Criar página de erro 404 personalizada no Firebase Hosting [Prioridade: Baixa]

### 🔌 Integrações Pendentes
- [ ] `[LINK_CHECKOUT]` → Integrar link de pagamento após aceite da proposta.
- [ ] `[LINK_CALENDLY]` → Substituir o link no `calendar-integration.js`.
- [ ] `[LINK_AREA_CLIENTE]` → Apontar para `/dashboard.html`.

### 🧪 Testes & Validação
- [ ] Teste de Segurança: Verificar se cliente consegue acessar projeto de outro cliente.
- [ ] Teste Admin: Confirmar se CPF 05930662193 vê todos os leads.
- [ ] Teste Mobile: Garantir que as tabelas de dashboard não quebrem em telas pequenas.

### 📦 Deploy Checklist
1. `firebase login`
2. `firebase use guiacademicostorage`
3. `firebase deploy`
4. Verificar logs no console do Firebase para erros de segurança.
