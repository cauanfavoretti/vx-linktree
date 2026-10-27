# VX · Fábio Castello

Página de links em React + TypeScript + Vite, baseada nas referências fornecidas. Paleta preto, branco e laranja (#ff6b1a). Layout responsivo, cards com CTA sobreposto, ícones Lucide e animações Motion com respeito à preferência por movimento reduzido.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

`npm run build` verifica os tipos e gera `dist/`. `npm run preview` serve a compilação local.

## Editar

- `src/content.ts`: identidade, biografia, fotografia e os destinos.
- `src/App.tsx`: cards e destaques.
- `src/styles.css`: identidade e responsividade.
- `public/vx-logo.png`: logo oficial fornecido pelo usuário, aplicado também como favicon e apple-touch-icon.
- `public/fabio.png`: foto reaproveitada do projeto local VX, substituir se necessário.

Os endereços estão como `null` até receber os links oficiais. Nessa situação, os botões abrem os conteúdos locais de VX e Método X. Sobre mim apresenta a biografia profissional do Fábio. Para ativar um botão, substitua `null` pela URL completa. O compartilhamento usa o recurso nativo ou copia a URL.

Conteúdo aprovado pela referência: Fábio Castello | Vendas & CRM; especialista em performance comercial; Método X; dois caminhos (aprender a vender / estruturar a empresa); destaques Cursos (curso Método X), VX (implantação, treinamento, reestruturação e processos comerciais) e Sobre mim. Cases removido. Textos de apoio são propostas para revisão.

Nenhum serviço externo de analytics, formulário ou backend foi adicionado. Google Fonts carrega DM Sans e Barlow Condensed, com fallback local.

## Navegação animada

Os CTAs principais e os destaques VX e Cursos exibem faixas branca e laranja com Motion e redirecionam automaticamente na mesma aba. Nenhum painel de detalhes é exibido nesses caminhos. A preferência de movimento reduzido elimina as faixas e abre o destino diretamente. Cliques com teclas modificadoras nos links preservam a navegação nativa.

O primeiro card apresenta a VX com foto de Fábio e título “Seu comercial em outro nível”, apontando para `content.vxWebsite` (https://www.vxconsultoria.com/). O segundo apresenta o curso Método X com o título “Vender mais começa em você” e X em SVG animado.

O link oficial do curso está configurado em `content.methodXWhatsappUrl`, com o número 5592981681693 e a mensagem “quero aprender a vender mais”. Como alternativa, `content.whatsappNumber` aceita código do país, DDD e número (apenas dígitos), com mensagem definida em `whatsappMessages.courses`. Sem link ou número, o curso exibe somente a transição e um aviso discreto de canal em preparação, sem abrir painel.

Sobre mim apresenta a biografia em primeira pessoa. O painel fecha pelo botão, clique fora ou Escape e devolve o foco ao acionador.

## Deploy na Vercel

Envie o conteúdo deste projeto para a raiz do repositório, incluindo `package.json`, `package-lock.json`, `index.html`, `src/`, `public/` e `vercel.json`. Não envie `node_modules` nem `dist`.

Na Vercel, o Root Directory deve ser a pasta que contém `package.json` (raiz do repositório neste projeto). O `vercel.json` define Vite, instalação com `npm ci`, build com `npm run build` e saída `dist`. Nenhuma variável de ambiente é necessária.

Biografia: baseada na apresentação pública de https://www.instagram.com/fabiocastello_vx/ (vendas, CRM e aprendizado de vendas por processo), complementada com as informações fornecidas pelo usuário sobre a VX e o curso Método X.
