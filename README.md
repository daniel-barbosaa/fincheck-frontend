<img src="src/assets/Logo.svg" width="300px" height="300px" align="right"/>

# Fincheck

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radixui&logoColor=white)

_Aplicativo de controle de finanças 360° que permite o controle total sobre contas bancárias, investimentos, despesas, receitas e planejamento financeiro._

## Sobre o projeto

O **Fincheck** é um aplicativo de controle financeiro completo, desenvolvido para oferecer
uma visão clara e centralizada da vida financeira do usuário.

A aplicação permite gerenciar contas bancárias, registrar despesas e receitas,
acompanhar investimentos e planejar financeiramente de forma simples,
com foco em performance e boa experiência do usuário.

🔗 **Acesse a aplicação em produção:** 

[![Fincheck](https://img.shields.io/badge/Fincheck-Production-087F5B?style=for-the-badge)](https://fincheck-service.vercel.app)

> ⚠️ A aplicação requer autenticação para acesso completo.

## Funcionalidades

- Cadastro e autenticação de usuários
- Gerenciamento de contas bancárias
- Registro de despesas e receitas
- Dashboard com visão geral financeira
- Filtro por tipo de transação
- Filtro por período
- Interface responsiva e acessível

## Tecnologias utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Radix UI**
- **React Query**
- **Zod**
- **Axios**
- **Sentry** (monitoramento de erros)
- **Microsoft Clarity** (análise de uso)
- **CI/CD** com GitHub Actions

## Como rodar o projeto

### Pré-requisitos
- Node.js 20+
- Yarn ou npm

### Passos

```bash
# Clone o repositório
git clone https://github.com/daniel-barbosaa/fincheck-frontend

# Acesse a pasta
cd fincheck-frontend
```
### Variáveis de ambiente

Este projeto consome uma API já publicada em produção,  
portanto **não é necessário rodar o backend localmente**.

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
VITE_API_URL=https://fincheckapi-1.onrender.com
```
> ⚠️ A URL acima aponta para a API oficial do projeto, hospedada em produção.

#### Backend
> O backend do Fincheck é uma aplicação separada.

No momento, o repositório não está público.

### Executando a aplicação

```bash
# Instale as dependências
yarn install

# Inicie a aplicação
yarn dev
```

## Estrutura de pastas

A estrutura do projeto foi pensada para separar claramente
a lógica de negócio da camada de apresentação, facilitando
a manutenção, escalabilidade e reutilização de código.

```txt
src/
├─ app/
│  ├─ constants/   # Constantes globais
│  ├─ contexts/    # Contextos React
│  ├─ helpers/     # Funções auxiliares
│  ├─ hooks/       # Hooks customizados
│  ├─ lib/         # Configurações e libs externas
│  ├─ services/    # Integração com APIs
│  ├─ types/       # Tipagens globais
│  └─ utils/       # Utilitários reutilizáveis
│
├─ assets/         # Imagens, ícones e arquivos estáticos
├─ router/         # Configuração de rotas
└─ view/
   ├─ components/  # Componentes reutilizáveis da UI
   ├─ layouts/     # Layouts da aplicação
   └─ pages/       # Páginas da aplicação

