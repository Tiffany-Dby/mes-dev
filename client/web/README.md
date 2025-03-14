# Cyna - Web

A modern e-commerce web application built with React, TypeScript, and ShadCN UI components.

---

## Table of contents

1. [Technologies](#)
2. [Installation]
3. [Project structure]
4. [Usage]
5. [Collaborators]
6. [License]

---

## Technologies

- [React v19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/) ([Radix UI](https://www.radix-ui.com/))
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Tiffany-Dby/mes-dev.git
```

2. Navigate to the project directory:

```bash
cd mes-dev
cd client/web
```

3. Install dependencies:

```bash
npm install
```

---

## Project structure

```
web/
├── public/
├── src/
│   ├── lib/                     # Shared UI components and utilities
│   ├── shared/                  # Shared hooks, types, and tools
│   │   ├── assets/
│   │   ├── images/
│   │   └── styles/             # Global Tailwind CSS
│   ├── hooks/                  # Custom hooks (useFetch, useCustomForm, IntersectionObserver)
│   ├── tools/                  # API manager
│   ├── types/                  # Global types
│   ├── ui/components/          # Reusable interface components (Layout, Card, Menu, etc.)
│   └── views/                  # Pages
├── users/                      # User management (login, signup, dashboard)
│   ├── context/                # Authentication context
│   ├── schemas/                # Form validation schemas
│   ├── types/                  # User-specific types
│   └── ui/components/          # User components
├── App.tsx                     # Router and main layout
└── main.tsx                    # Main entry of the app
```

---

## Usage

### Running the development server

After installing dependencies, start the development server:

```bash
npm run dev
```

This will start the app in development mode and it will be available at `http://localhost:5173/`

### Building the project for production

To create a production build of the application:

```bash
npm run build
```

This will create a `dist` folder with the optimized production files.

Once build, you can preview:

```bash
npm run preview
```

## Collaborators

This project was created as part of a school assignment.

Contributors:

[![GITHUB](https://img.shields.io/badge/Owen-expert?style=&logo=GITHUB&logoColor=fefefe&labelColor=222529&color=222529)](https://github.com/kant1-18)
[![GITHUB](https://img.shields.io/badge/Mehmet-expert?style=&logo=GITHUB&logoColor=fefefe&labelColor=222529&color=222529)](https://github.com/matheo-dlvt)
[![GITHUB](https://img.shields.io/badge/Tiffany-expert?style=&logo=GITHUB&logoColor=fefefe&labelColor=222529&color=222529)](https://github.com/Tiffany-Dby)
