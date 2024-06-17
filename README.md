# ClaroVideo EPG App

Esta aplicación es parte de una prueba técnica para ClaroVideo. Permite a los usuarios ver la programación de una lista de canales de televisión.

## Live Demo
[EPG App](https://epg-app-clarovideo.vercel.app/)

## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

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

1. **Clonar el repositorio:**
   ```sh
   npm run dev
2. **Instalar dependencias**
   ```sh
   npm run test

## Características

- Lazy loading al obtener la lista de canales
- Configuracion persistente a través del localStorage
- Configuracion de busqueda utilizando fecha y region
- Línea vertical que indica la hora actual

## Tecnologías Utilizada

- Vite
- React
- Tailwind
- @testing-library/react: Utilizado para pruebas de componentes de React.
- Vitest: Framework de pruebas unitarias.
