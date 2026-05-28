import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, transformWithEsbuild, type Plugin, type PreviewServer, type ViteDevServer } from "vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

const pageInputs = {
  index: resolve(rootDir, "index.html"),
  atendimentoAdulto: resolve(rootDir, "Atendimento-Adulto.html"),
  atendimentoInfantil: resolve(rootDir, "Atendimento-Infantil.html"),
  equipe: resolve(rootDir, "Equipe.html"),
  fonoaudiologia: resolve(rootDir, "Fonoaudiologia.html"),
  lgpd: resolve(rootDir, "LGPD.html"),
  neuropsicologia: resolve(rootDir, "Neuropsicologia.html"),
  nutricao: resolve(rootDir, "Nutricao.html"),
  politicaPrivacidade: resolve(rootDir, "Politica-de-Privacidade.html"),
  psicologia: resolve(rootDir, "Psicologia.html"),
  psiquiatria: resolve(rootDir, "Psiquiatria.html"),
  sobre: resolve(rootDir, "Sobre.html"),
  termosUso: resolve(rootDir, "Termos-de-Uso.html")
};

const cleanRoutes: Record<string, string> = {
  "/atendimento-adulto": "Atendimento-Adulto.html",
  "/atendimento-infantil": "Atendimento-Infantil.html",
  "/equipe": "Equipe.html",
  "/fonoaudiologia": "Fonoaudiologia.html",
  "/lgpd": "LGPD.html",
  "/neuropsicologia": "Neuropsicologia.html",
  "/nutricao": "Nutricao.html",
  "/politica-de-privacidade": "Politica-de-Privacidade.html",
  "/psicologia": "Psicologia.html",
  "/psiquiatria": "Psiquiatria.html",
  "/sobre": "Sobre.html",
  "/termos-de-uso": "Termos-de-Uso.html"
};

const htmlRedirects: Record<string, string> = {
  "/index.html": "/",
  "/atendimento-adulto.html": "/atendimento-adulto",
  "/atendimento-infantil.html": "/atendimento-infantil",
  "/equipe.html": "/equipe",
  "/fonoaudiologia.html": "/fonoaudiologia",
  "/lgpd.html": "/lgpd",
  "/neuropsicologia.html": "/neuropsicologia",
  "/nutricao.html": "/nutricao",
  "/politica-de-privacidade.html": "/politica-de-privacidade",
  "/psicologia.html": "/psicologia",
  "/psiquiatria.html": "/psiquiatria",
  "/sobre.html": "/sobre",
  "/termos-de-uso.html": "/termos-de-uso"
};

const staticFiles = [
  "src/core/common.jsx",
  "src/core/shared.jsx",
  "src/home/App.jsx",
  "src/home/sections-a.jsx",
  "src/home/sections-b.jsx",
  "src/home/sections-c.jsx",
  "src/pages/adulto-page.jsx",
  "src/pages/equipe-page.jsx",
  "src/pages/especialidade-template.jsx",
  "src/pages/infantil-page.jsx",
  "src/pages/legal-template.jsx",
  "src/pages/sobre-page.jsx",
  "assets/images/avaliação.png",
  "assets/images/hero-semep.jpg",
  "assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
  "assets/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  "assets/fonts/Raleway-Italic-VariableFont_wght.ttf",
  "assets/fonts/Raleway-VariableFont_wght.ttf",
  "assets/logos/LOGOTIPO SEMEP SAÚDE.png",
  "assets/logos/bradesco.png",
  "assets/logos/favico.png",
  "assets/logos/geap.png",
  "assets/logos/logo-semep-horizontal.png",
  "assets/logos/sulamerica.png",
  "assets/logos/unimed.png"
];

const cleanRouteIndexPages: Record<string, string> = {
  "atendimento-adulto": "Atendimento-Adulto.html",
  "atendimento-infantil": "Atendimento-Infantil.html",
  "equipe": "Equipe.html",
  "fonoaudiologia": "Fonoaudiologia.html",
  "lgpd": "LGPD.html",
  "neuropsicologia": "Neuropsicologia.html",
  "nutricao": "Nutricao.html",
  "politica-de-privacidade": "Politica-de-Privacidade.html",
  "psicologia": "Psicologia.html",
  "psiquiatria": "Psiquiatria.html",
  "sobre": "Sobre.html",
  "termos-de-uso": "Termos-de-Uso.html"
};

function rewriteRequest(req: { url?: string }, res: { statusCode: number; setHeader(name: string, value: string): void; end(): void }, next: () => void) {
  const currentUrl = new URL(req.url || "/", "http://localhost");
  const rawPath = decodeURIComponent(currentUrl.pathname);
  const withoutTrailingSlash = rawPath.length > 1 ? rawPath.replace(/\/$/, "") : rawPath;
  const normalizedPath = withoutTrailingSlash.toLowerCase();
  const suffix = `${currentUrl.search}${currentUrl.hash}`;

  if (rawPath.length > 1 && rawPath.endsWith("/") && cleanRoutes[normalizedPath]) {
    res.statusCode = 301;
    res.setHeader("Location", `${withoutTrailingSlash}${suffix}`);
    res.end();
    return;
  }

  const redirectTarget = htmlRedirects[normalizedPath];
  if (redirectTarget) {
    res.statusCode = 301;
    res.setHeader("Location", `${redirectTarget}${suffix}`);
    res.end();
    return;
  }

  const htmlFile = cleanRoutes[normalizedPath];
  if (htmlFile) {
    req.url = `/${htmlFile}${currentUrl.search}`;
  }

  next();
}

async function copyStaticFiles(outDir: string) {
  for (const file of staticFiles) {
    const source = resolve(rootDir, file);
    if (!existsSync(source) || !statSync(source).isFile()) continue;

    const target = resolve(outDir, file.replace(/\.jsx$/, ".js"));
    mkdirSync(dirname(target), { recursive: true });

    if (extname(source) === ".jsx") {
      const result = await transformWithEsbuild(readFileSync(source, "utf8"), source, {
        format: "iife",
        loader: "jsx",
        target: "es2018"
      });
      writeFileSync(target, result.code);
    } else {
      copyFileSync(source, target);
    }
  }
}

function optimizeBuiltHtml(outDir: string) {
  for (const entry of readdirSync(outDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;

    const file = resolve(outDir, entry.name);
    let html = readFileSync(file, "utf8");
    html = html
      .replace(/react\.development\.js/g, "react.production.min.js")
      .replace(/react-dom\.development\.js/g, "react-dom.production.min.js")
      .replace(/(<script src="https:\/\/unpkg\.com\/react(?:-dom)?@18\.3\.1\/umd\/[^"]+") integrity="[^"]*"/g, "$1")
      .replace(/\n\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone@[^"]+"[^>]*><\/script>/g, "")
      .replace(/<script type="text\/babel" src="(\/src\/[^"]+)\.jsx"><\/script>/g, '<script src="$1.js"></script>');
    writeFileSync(file, html);
  }
}

function copyCleanRoutePages(outDir: string) {
  for (const [route, htmlFile] of Object.entries(cleanRouteIndexPages)) {
    const source = resolve(outDir, htmlFile);
    const destinationDir = resolve(outDir, route);
    if (existsSync(source)) {
      mkdirSync(destinationDir, { recursive: true });
      copyFileSync(source, resolve(destinationDir, "index.html"));
    }
  }
}

function semepRoutesPlugin(): Plugin {
  return {
    name: "semep-clean-routes",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(rewriteRequest);
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use(rewriteRequest);
    },
    async closeBundle() {
      const outDir = resolve(rootDir, "dist");
      await copyStaticFiles(outDir);
      optimizeBuiltHtml(outDir);
      copyCleanRoutePages(outDir);
    }
  };
}

export default defineConfig(({ command }) => ({
  appType: "mpa",
  logLevel: command === "build" ? "error" : "info",
  plugins: [semepRoutesPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: pageInputs
    }
  },
  server: {
    port: 5173
  },
  preview: {
    port: 4173
  }
}));
