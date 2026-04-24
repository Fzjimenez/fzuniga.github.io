# Franki Zúñiga Jiménez - Portfolio v2.0

Versión 2.0 del portafolio profesional estilo hacker cyber.

## Qué trae esta versión

- Diseño cyber premium
- Filtros por categoría de proyectos
- Sección de certificaciones
- Timeline profesional
- Botón ES/EN
- Botón para imprimir / PDF
- Proyectos dinámicos desde `data.js`
- Responsive para celular
- Listo para GitHub Pages

## Cómo agregar proyectos

Abre `data.js` y copia este bloque dentro de `projects`:

```js
{
  category: "Cloud Security",
  title: "Nuevo proyecto",
  problem: "Describe el problema.",
  solution: "Describe la solución.",
  impact: "Describe el impacto.",
  tech: ["Azure", "Security", "PowerShell"]
}
```

## Cómo publicar

Sube estos archivos al repo `fzuniga.github.io`:

- `index.html`
- `styles.css`
- `script.js`
- `data.js`
- carpeta `assets`

Luego GitHub Pages publicará en:

https://fzuniga.github.io
