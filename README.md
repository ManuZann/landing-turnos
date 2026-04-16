# Landing de Turnos - Centro Medico Nova

Landing page moderna para un centro medico/estetico enfocada en conversion de turnos: presenta servicios, beneficios, proceso de reserva, testimonios, FAQ y un formulario de solicitud.

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS Modules
- ESLint

## Funcionalidades principales

- Estructura de landing orientada a conversion con secciones completas.
- Navegacion responsive con menu mobile.
- Scroll suave entre secciones.
- Formulario de solicitud de turno con feedback de envio exitoso (simulado en frontend).
- Boton flotante de WhatsApp para contacto directo.
- Componentizacion reutilizable (`Button`, `Section`, `Reveal`, etc.).

## Estructura del proyecto

```text
src/
  components/
    layout/        # Header y Footer
    sections/      # Secciones principales de la landing
    ui/            # Componentes reutilizables
  styles/          # Variables globales de estilo
  App.tsx          # Composicion de la pagina
  main.tsx         # Punto de entrada
```

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Instalacion y ejecucion

```bash
npm install
npm run dev
```

La app quedara disponible en la URL que indique Vite (normalmente `http://localhost:5173`).

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: compila TypeScript y genera build de produccion.
- `npm run preview`: levanta una vista previa del build.
- `npm run lint`: ejecuta ESLint.

## Build de produccion

```bash
npm run build
npm run preview
```

El resultado se genera en `dist/`.

## Personalizacion rapida

- Marca y textos:
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/sections/*.tsx`
- WhatsApp del boton flotante:
  - `src/components/ui/FloatingWhatsApp.tsx` (propiedad `href`).
- Especialidades del formulario:
  - `src/components/sections/BookingForm.tsx` (constante `specialties`).
- Colores y variables globales:
  - `src/styles/variables.css`
  - estilos `*.module.css` por componente.

## Nota importante sobre el formulario

Actualmente el formulario simula el envio con `setTimeout` y no conecta con backend/API. Si queres pasarlo a produccion real, hay que integrar un endpoint (por ejemplo, API REST o servicio de automatizacion) y validaciones de servidor.

