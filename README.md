# Sistema de Autenticação e Autorização

Este é um sistema de autenticação e autorização desenvolvido com [Next.js](https://nextjs.org) e Prisma, oferecendo controle granular de permissões baseado em roles.

## Funcionalidades

- **Autenticação**: Sistema de login/logout com sessões seguras
- **Autorização**: Controle de acesso baseado em roles (USER, STAFF, COORD, CONCELHO, ADMIN)
- **Gerenciamento de Usuários**: Interface administrativa para gerenciar usuários
- **Dashboard**: Interface personalizada baseada no role do usuário
- **Sessões**: Gerenciamento de sessões com expiração automática

## Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **Prisma**: ORM para banco de dados PostgreSQL
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Componentes de interface

## Getting Started

### 1. Instalação das Dependências

```bash
npm install
# ou
yarn install
```

### 2. Configuração do Banco de Dados

O sistema requer um banco de dados PostgreSQL. Você pode usar:

#### Opção A: Neon (Recomendado - Gratuito)
1. Acesse [neon.tech](https://neon.tech)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie as URLs de conexão fornecidas

#### Opção B: Supabase (Gratuito)
1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Vá em Settings > Database para obter as URLs de conexão

#### Opção C: PostgreSQL Local
1. Instale PostgreSQL em sua máquina
2. Crie um banco de dados
3. Configure as credenciais

### 3. Configuração das Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```bash
# URL principal do banco de dados
POSTGRES_URL="sua_url_do_postgresql"

# URL para conexões não-pooling (necessário para Vercel)
POSTGRES_URL_NON_POOLING="sua_url_do_postgresql_non_pooling"

# Configurações adicionais
NODE_ENV="development"
```

**Exemplo para Neon:**
```bash
POSTGRES_URL="postgresql://[user]:[password]@[host]/[database]?sslmode=require"
POSTGRES_URL_NON_POOLING="postgresql://[user]:[password]@[host]/[database]?sslmode=require&connect_timeout=300"
```

**Exemplo para Supabase:**
```bash
POSTGRES_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"
POSTGRES_URL_NON_POOLING="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"
```

### 4. Configuração do Banco de Dados

Execute as migrações do Prisma para criar as tabelas:

```bash
npx prisma migrate dev
```

### 5. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura de Roles

- **USER**: Usuário básico do sistema
- **STAFF**: Funcionário com permissões limitadas
- **COORD**: Coordenador com permissões intermediárias
- **CONCELHO**: Membro do conselho com permissões elevadas
- **ADMIN**: Administrador com acesso total ao sistema

## Solução de Problemas

### Erro de Conexão com Banco de Dados
Se você receber o erro "You must provide a nonempty URL", verifique se:

1. O arquivo `.env.local` existe na raiz do projeto
2. As variáveis `POSTGRES_URL` e `POSTGRES_URL_NON_POOLING` estão configuradas corretamente
3. As credenciais do banco de dados estão corretas
4. O banco de dados está acessível

### Erro de Migração
Se houver problemas com as migrações:

```bash
# Resetar o banco de dados (CUIDADO: apaga todos os dados)
npx prisma migrate reset

# Ou criar uma nova migração
npx prisma migrate dev --name init
```

## Deploy

O projeto está configurado para deploy na [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Configuração no Vercel
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel:
   - `POSTGRES_URL`
   - `POSTGRES_URL_NON_POOLING`
3. Deploy automático será executado

## Licença

© 2025 Projeto Mais Vida
