# ClaroVideo EPG App

Esta aplicación es parte de una prueba técnica para Global Hitts y ClaroVideo. Permite a los usuarios ver la programación de una lista de canales de televisión y configurar la búsqueda a su gusto.

## Live Demo
[EPG App](https://epg-app-clarovideo.vercel.app/)

## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Consideraciones](#Consideraciones)

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/Tavoleglise/epg-app-clarovideo.git
   cd epg-app-clarovideo
2. **Instalar dependencias**
   ```sh
   npm install

## Uso

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. **Correr ambiente de desarrollo:**
   ```sh
   npm run dev
2. **Correr pruebas**
   ```sh
   npm run test

## Características

- Lazy loading al obtener la lista de canales
- Configuración persistente a través del localStorage
- Configuración de búsqueda utilizando fecha y regiún
- Línea vertical que indica la hora actual

## Tecnologías Utilizada

- Vite
- React
- Tailwind
- @testing-library/react: Utilizado para pruebas de componentes de React.
- Vitest: Framework de pruebas unitarias.

## Consideraciones

Por cuestión de UX y performance se cambió el hover de los eventos por un click
