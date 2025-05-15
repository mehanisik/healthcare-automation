# Healthcare Appointment & Management System Website

A modern web application for healthcare appointment scheduling and patient management built with Next.js and TypeScript.

## Project Structure

```
├── app/
│   ├── actions/         # Server actions and API handlers
│   ├── constants/       # Application constants
│   ├── hooks/          # Custom React hooks
│   ├── schema/         # Data validation schemas
│   ├── types/          # TypeScript type definitions
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
│
├── components/
│   ├── ui/             # Reusable UI components
│   ├── header.tsx      # Navigation header
│   ├── hero-section.tsx # Landing page hero
│   ├── about.tsx       # About section
│   ├── contact.tsx     # Contact form
│   ├── appointment-calendar.tsx # Appointment scheduling
│   ├── testimonial.tsx # User testimonials
│   └── footer.tsx      # Site footer
```

## Features

- Modern, responsive UI with dark/light theme support
- Appointment scheduling system
- Contact form with validation
- Testimonials showcase
- About section
- Trust badges and feature highlights
- Star rating system

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Server Actions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

The project follows a component-based architecture with clear separation of concerns:

- `app/` directory contains the main application logic and routing
- `components/` directory houses reusable UI components
- Server actions are implemented in the `actions/` directory
- Type definitions and schemas are organized in their respective directories

## License

MIT
