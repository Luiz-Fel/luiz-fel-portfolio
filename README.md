# Luiz Fel Portfolio

Personal portfolio built with Astro, focused on performance and user experience.

## 🚀 Technologies Used

- **Astro 5**: Modern framework for high-performance websites.
- **TypeScript**: Static typing for better code maintenance.
- **Tailwind CSS 4**: Utility-first CSS framework for fast and responsive styling.
- **Simple Icons Astro**: Technology icon library for Companies logos and tech stack representation.
- **Lucide Icons**: Open-Source icons for various UI elements.

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── ButtonLink.astro
│   ├── ExperienceItem.astro
│   ├── Footer.astro
│   ├── Home.astro
│   ├── Navigation.astro
│   ├── PageTransition.astro
│   └── ProjectCard.astro
├── i18n/               # Internationalization configuration
│   └── ui.ts
├── layouts/            # Base layouts
│   └── Layout.astro
├── pages/              # Site pages (automatic routing)
│   ├── index.astro
│   ├── contact.astro
│   ├── experience.astro
│   ├── projects.astro
│   └── pt-br/         # Portuguese pages
├── styles/            # Global styles
├── assets/            # Images and resources
└── constants.ts       # Portfolio constants and data
public/                # Static files
```

## 🌐 Internationalization

The project supports multiple languages:
- **English (en)**: Default language
- **Brazilian Portuguese (pt-br)**: Alternative language

Astro automatically manages i18n routes, with fallback to English when needed.

## 🛠️ Available Scripts

- `npm run dev` or `npm start`: Starts the development server.
- `npm run build`: Generates the optimized production build.
- `npm run preview`: Previews the production build locally.
- `npm run astro`: Accesses Astro CLI commands.

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <REPOSITORY_URL>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access `http://localhost:4321` in your browser.

## 📦 Build and Deploy

To generate the production build:

```bash
npm run build
```

The optimized site will be generated in the `dist/` directory and will be ready for deployment on any static hosting platform (Netlify, Vercel, GitHub Pages, etc.).

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Developed by Luiz-Fel

