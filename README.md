# José Galdámez - Fullstack Developer Portfolio

Welcome to the repository of my personal website and blog. This project is a modern, high-performance web application built with **Next.js 14** and **Firebase**, designed to showcase my skills, projects, and share knowledge through a custom-built blogging platform.

🔗 **Live Website:** [josegaldamez.dev](https://josegaldamez.dev/)

## 🚀 Overview

This application serves as my digital portfolio and content hub. It features a fully dynamic blog system with a custom content management system (CMS) that allows me to write and publish articles directly from the browser.

### Key Features

-   **🎨 Modern UI/UX:** Built with **Tailwind CSS** and **Framer Motion** for smooth animations and a responsive design.
-   **📝 Custom Blog Engine:** A WordPress-style block editor created from scratch, supporting rich text, code blocks, and images.
-   **🔐 Secure Admin Panel:** Protected routes and authentication via **Firebase Auth** for managing content.
-   **⚡ High Performance:** Utilizes Next.js App Router and Server Components for optimal speed and SEO.
-   **📬 Contact Integration:** Integrated contact forms for easy communication.

## 🛠️ Tech Stack

This project leverages a robust stack of modern web technologies:

-   **Core:** [Next.js 14](https://nextjs.org/), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Headless UI](https://headlessui.com/)
-   **Backend & Database:** [Firebase](https://firebase.google.com/) (Firestore, Auth, Storage)
-   **State & Forms:** React Hook Form, Sonner (Toast notifications)
-   **Animation:** Framer Motion
-   **Utilities:** `date-fns`, `clsx`, `tailwind-merge`

## 📂 Project Structure

The project follows the Next.js App Router structure:

```bash
src/
├── app/                # Application routes (Pages & Layouts)
│   ├── admin/          # CMS & Admin Dashboard
│   ├── blog/           # Public Blog Pages
│   ├── contact/        # Contact Page
│   └── ...
├── components/         # Reusable UI Components
│   ├── admin/          # Editor & Dashboard Components
│   ├── blog/           # Blog Renderers & Cards
│   └── ui/             # Base Design System
├── lib/                # Firebase & Utility configurations
└── hooks/              # Custom React Hooks
```

## 🏁 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/josegaldamez.git
    cd josegaldamez
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory with your Firebase credentials:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📬 Contact & Socials

Feel free to reach out for collaborations or just to say hi!

-   **Website:** [josegaldamez.dev](https://josegaldamez.dev/)
-   **YouTube:** [Código Correcto](https://www.youtube.com/c/CódigoCorrecto)
-   **Blog:** [Read my articles](https://josegaldamez.dev/blog)

---

*Built with ❤️ by José Galdámez*
