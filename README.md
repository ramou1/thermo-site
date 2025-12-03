# 🌡️ Thermo Service Climatização LTDA - Site Institucional

Site institucional para a Thermo Service Climatização LTDA, empresa especializada em soluções de climatização, elétrica, hidráulica e tecnologia da informação.

## 📋 Sobre o Projeto

A Thermo Service Climatização LTDA é uma empresa fundada em 10 de fevereiro de 2012, com sede em São José, SC. O site apresenta uma página única (landing page) com design moderno e responsivo, utilizando as cores corporativas da empresa: **#d91e26** (vermelho) e **#1b2e51** (azul).

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.4** - Framework React para produção
- **React 19.1.0** - Biblioteca de interface de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Geist Font** - Família de fontes moderna da Vercel

## 🎨 Design e Características

- **Design Responsivo**: Adaptável para desktop, tablet e mobile
- **Cores Corporativas**: Vermelho (#d91e26) e Azul (#1b2e51)
- **Animações Suaves**: Transições e efeitos hover elegantes
- **Navegação Fluida**: Scroll suave entre seções
- **SEO Otimizado**: Metadados e estrutura otimizada para mecanismos de busca

## 📁 Estrutura do Projeto

```
thermo-site/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais e variáveis CSS
│   │   ├── layout.tsx          # Layout principal com metadados
│   │   ├── page.tsx           # Página principal
│   │   └── favicon.ico        # Ícone do site
│   └── components/
│       ├── Header.tsx         # Cabeçalho com navegação
│       ├── Hero.tsx          # Seção principal de apresentação
│       ├── About.tsx         # Quem somos (missão, visão, valores)
│       ├── Services.tsx     # Nossos serviços
│       ├── Differential.tsx # Nosso diferencial
│       ├── AdditionalInfo.tsx # Informações adicionais
│       ├── Contact.tsx      # Formulário de contato
│       └── Footer.tsx      # Rodapé
├── public/                   # Arquivos estáticos
├── package.json            # Dependências do projeto
├── tsconfig.json          # Configuração TypeScript
├── tailwind.config.js     # Configuração Tailwind CSS
└── README.md             # Este arquivo
```

## 🏗️ Seções do Site

### 1. **Header**
- Logo da empresa (placeholder "TS")
- Menu de navegação responsivo
- Efeito de transparência no scroll

### 2. **Hero**
- Apresentação principal da empresa
- Informações básicas (CNPJ, porte, fundação)
- Botões de ação para serviços e contato

### 3. **Quem Somos**
- Missão, visão e valores
- Estatísticas da empresa
- Cards informativos com ícones

### 4. **Nossos Serviços**
- **Climatização**: Ar condicionado e sistemas centrais
- **Instalações Elétricas**: Projetos e instalações
- **Comércio Atacadista**: Distribuição de equipamentos
- **Tecnologia da Informação**: Soluções em TI

### 5. **Nosso Diferencial**
- Soluções Integradas
- Experiência (12+ anos)
- Compromisso com Qualidade
- Sustentabilidade

### 6. **Informações Adicionais**
- Timeline da empresa
- Setores de atuação (residencial, comercial, industrial, público)
- Parcerias estratégicas
- Dados oficiais da empresa

### 7. **Contato**
- Formulário de orçamento
- Informações de contato completas
- Horário de funcionamento
- Mapa de localização (placeholder)

### 8. **Footer**
- Informações da empresa
- Links para serviços
- Redes sociais (placeholders)
- Dados de contato

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]
cd thermo-site

# Instale as dependências
npm install
# ou
yarn install
```

### Execução em Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o site.

### Build para Produção (Export Estático)
```bash
npm run build
# ou
yarn build
```

O build irá gerar uma pasta `out/` com todos os arquivos estáticos do site prontos para hospedagem.

**⚠️ IMPORTANTE**: Este projeto está configurado para export estático (`output: 'export'`), o que significa que gera arquivos HTML estáticos que podem ser hospedados em qualquer servidor web estático.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção (gera pasta `out/`)
- `npm run start` - Inicia o servidor de produção (não necessário para export estático)
- `npm run lint` - Executa o linter ESLint

## 🚀 Deploy e Hospedagem

### Como Compilar o Projeto

1. **Instale as dependências** (se ainda não fez):
```bash
npm install
```

2. **Compile o projeto**:
```bash
npm run build
```

3. **A pasta `out/` será criada** com todos os arquivos estáticos do site.

### Como Fazer Upload para Hospedagem

#### Opção 1: Hospedagem Compartilhada (cPanel, FTP, etc.)

1. **Acesse a pasta `out/`** após o build
2. **Selecione todos os arquivos e pastas** dentro de `out/`
3. **Faça upload via FTP/cPanel** para a **raiz do seu domínio** (pasta `public_html`, `www`, ou similar)
4. **Certifique-se de que o arquivo `index.html` está na raiz**

#### Opção 2: Hospedagem em Servidor (SSH)

1. **Acesse o servidor via SSH**
2. **Navegue até a pasta do site** (geralmente `/var/www/html` ou similar)
3. **Faça backup dos arquivos antigos** (se houver)
4. **Copie o conteúdo da pasta `out/`** para a pasta do servidor:
```bash
# Exemplo (ajuste os caminhos conforme necessário)
scp -r out/* usuario@servidor:/var/www/html/
```

#### Opção 3: Hospedagem Estática (Netlify, Vercel, GitHub Pages)

- **Netlify**: Arraste a pasta `out/` para o Netlify Drop ou configure o build command como `npm run build` e publish directory como `out`
- **Vercel**: Configure o output directory como `out` nas configurações
- **GitHub Pages**: Faça upload da pasta `out/` para o branch `gh-pages` ou configure GitHub Actions

### Estrutura Após o Build

Após executar `npm run build`, a estrutura será:
```
out/
├── _next/          # Assets do Next.js (JS, CSS, etc.)
├── images/         # Imagens do site
├── index.html      # Página principal
├── 404.html        # Página de erro
├── favicon.ico     # Ícone do site
└── ...             # Outros arquivos estáticos
```

**⚠️ Lembre-se**: Todos os arquivos da pasta `out/` devem estar na **raiz do seu domínio** (não em uma subpasta como `/site`).

## 🎯 Próximos Passos

### Melhorias Pendentes
1. **Logo Real**: Substituir placeholder "TS" pelo logo oficial da empresa
2. **Imagens**: Adicionar imagens reais nos cards do diferencial
3. **Mapa Interativo**: Implementar mapa do Google Maps na seção de contato
4. **Backend**: Configurar processamento do formulário de contato
5. **Analytics**: Implementar Google Analytics ou similar
6. **PWA**: Transformar em Progressive Web App

### Funcionalidades Futuras
- Blog/Notícias da empresa
- Galeria de projetos realizados
- Sistema de agendamento online
- Chat de atendimento
- Área do cliente

## 📞 Informações da Empresa

- **Razão Social**: Thermo Service Climatização LTDA
- **CNPJ**: 15.041.926/0001-00
- **Fundação**: 10 de fevereiro de 2012
- **Endereço**: Rua São Ludgero, 1006, Sala 02, Barreiros, São José, SC, 88117-270
- **Telefone**: (48) 3035-7355
- **E-mail**: thermoservice@thermoservice.srv.br

## 🤝 Contribuição

Este é um projeto proprietário da Thermo Service Climatização LTDA. Para sugestões ou melhorias, entre em contato através dos canais oficiais da empresa.

## 📄 Licença

Todos os direitos reservados © 2024 Thermo Service Climatização LTDA.

---

**Desenvolvido com ❤️ para a Thermo Service Climatização LTDA**
