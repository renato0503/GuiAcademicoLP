## Coleções do Firestore - Guia Acadêmico

### users
- **id**: cpf (string, 11 dígitos, único)
- **nome**: string
- **whatsapp**: string (formato internacional)
- **email**: string (opcional)
- **nivel**: "graduacao" | "mestrado" | "doutorado" | "pos-doc"
- **role**: "client" | "admin" (Admin: 05930662193)
- **createdAt**: timestamp
- **lastLogin**: timestamp

### projects
- **id**: auto-generated
- **clientId**: cpf (string, chave estrangeira para users)
- **titulo**: string
- **servicoInteresse**: string
- **nivelPesquisa**: string
- **prazoEntrega**: string (ou timestamp)
- **resumoDesafio**: string
- **status**: "triagem" | "proposta" | "em-andamento" | "concluido" | "cancelado"
- **createdAt**: timestamp
- **updatedAt**: timestamp

### documents
- **id**: auto-generated
- **projectId**: string (referência ao projeto)
- **clientId**: cpf (string)
- **fileName**: string
- **filePath**: string (Caminho no Firebase Storage)
- **fileType**: "tcc" | "artigo" | "dados" | "outros"
- **uploadedAt**: timestamp
- **fileSize**: number (bytes)

### proposals
- **id**: auto-generated
- **projectId**: string (referência ao projeto)
- **valor**: number
- **parcelas**: number
- **escopo**: string
- **validade**: timestamp
- **status**: "pendente" | "aceita" | "recusada"
- **createdAt**: timestamp
