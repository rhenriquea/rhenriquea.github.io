import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "build/index.html");
const ssrEntry = path.join(root, "build-ssr/entry-server.js");

let template = fs.readFileSync(indexPath, "utf-8");
const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

template = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

const cssLinkRe = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g;
template = template.replace(cssLinkRe, (_match, href) => {
  const cssPath = path.join(root, "build", href);
  const css = fs.readFileSync(cssPath, "utf-8");
  fs.unlinkSync(cssPath);
  return `<style>${css}</style>`;
});

fs.writeFileSync(indexPath, template);
fs.rmSync(path.join(root, "build-ssr"), { recursive: true, force: true });

console.log("prerendered + inlined CSS → build/index.html");
