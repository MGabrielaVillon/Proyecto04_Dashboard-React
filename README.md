# Proyecto 04: Dashboard - React

Este proyecto usa React + TypeScript + Vite y MUI para crear un dashboard básico.

## Estructura del proyecto

- `index.html`: punto de entrada del navegador. Carga el bundle generado por Vite y contiene el elemento `<div id="root"></div>` donde React monta la aplicación.
- `src/main.tsx`: inicializa React y renderiza `<App />` dentro de `#root`.
- `src/App.tsx`: define el componente principal de la aplicación. Aquí se construye la interfaz del dashboard con una estructura de cuadrícula de MUI.

## Ramas del repositorio

- `main`: debe contener solo `README.md` y `.gitignore` para mantener el repositorio limpio.
- `develop`: contiene el código de desarrollo del proyecto React.
- `gh-pages`: se usará para desplegar el sitio web en GitHub Pages.

## Comandos principales

```bash
npm install
npm run dev
npm run build
```

## Cómo funciona este proyecto

1. `npm create vite@latest . -- --template react-ts` genera la plantilla de React + TypeScript.
2. `npm install` instala dependencias.
3. `npm run dev` inicia el servidor de desarrollo.
4. `src/App.tsx` se actualizó para mostrar un dashboard básico con `Grid` de MUI.

## Detalle de componentes

- `Grid`: se utiliza como contenedor y para organizar secciones del dashboard.
- `Paper`: envuelve cada área de contenido para producir una tarjeta visual.
- `Typography`: muestra el título de bienvenida.
