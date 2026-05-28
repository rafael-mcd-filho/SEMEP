# SEMEP Site

Site estatico multipagina com Vite para desenvolvimento, build e deploy na Vercel.

## Estrutura

```text
.
├── *.html              # Entradas multipagina usadas pelo Vite
├── src/
│   ├── core/           # Componentes e utilitarios compartilhados
│   ├── home/           # Seções e app da home
│   ├── pages/          # Scripts das páginas internas
│   └── tools/          # Painel de ajustes visuais
├── assets/
│   ├── images/         # Fotos e imagens de conteúdo
│   ├── logos/          # Logo SEMEP, favicon e logos de convênios
│   ├── fonts/          # Fontes locais
│   └── archive/        # Arquivos antigos/recebidos preservados
├── public/             # Arquivos públicos na raiz do deploy (OG, robots, sitemap)
├── vite.config.ts      # Build, rotas limpas e cópia de assets
└── vercel.json         # Rewrites/redirects para deploy
```

## Rodar localmente

```powershell
npm install
npm run dev
```

Abra:

```text
http://localhost:5173/
```

Rotas limpas disponiveis no dev:

```text
/atendimento-infantil
/atendimento-adulto
/psiquiatria
/psicologia
/fonoaudiologia
/nutricao
/neuropsicologia
/equipe
/sobre
/politica-de-privacidade
/termos-de-uso
/lgpd
```

## Gerar build

```powershell
npm run build
```

O resultado fica em `dist/`.

## Conferir o build localmente

```powershell
npm run preview
```

Abra:

```text
http://localhost:4173/
```

## Deploy na Vercel

Suba o projeto para um repositorio GitHub e importe na Vercel.

A Vercel vai usar:

- Build Command: `npm run build`
- Output Directory: `dist`

As URLs limpas estao configuradas em `vercel.json`.

## Deploy em hospedagem comum

Se for subir manualmente por FTP/painel, envie o conteudo da pasta `dist/` para a raiz publica do site.

O build gera duas formas para URLs limpas funcionarem:

- pastas como `atendimento-infantil/index.html`, para servidores estaticos comuns;
- `.htaccess`, para Apache redirecionar `.html` para URLs limpas.

Se o servidor usar Nginx/aaPanel e as URLs limpas ainda derem 404, use as regras em `dist/nginx-rewrites.conf` na configuracao do site.
