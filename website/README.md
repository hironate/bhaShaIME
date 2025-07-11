# BhaSha IME Website

This directory contains the official website for BhaSha IME, a React plugin for Indian language transliteration.

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   cd website
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
website/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── docs/             # Documentation pages
│       └── page.tsx      # Main docs page
├── components/           # React components
│   ├── Navigation.tsx    # Site navigation
│   ├── Footer.tsx       # Site footer
│   ├── LiveDemo.tsx     # Interactive demos
│   ├── CodeExample.tsx  # Code examples
│   ├── DocsNavigation.tsx # Docs sidebar
│   └── docs/            # Documentation components
│       ├── InstallationGuide.tsx
│       ├── QuickStartGuide.tsx
│       ├── HookDocumentation.tsx
│       └── ...
├── package.json         # Dependencies
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🛠 Technology Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Syntax Highlighting:** React Syntax Highlighter
- **Demo Plugin:** @bhashaime/core (npm package)

## 🎨 Design System

The website follows Linear's design principles:

- **Typography:** Inter font family with smaller font sizes (14px base)
- **Colors:** Neutral grays with blue/purple accent gradients
- **Layout:** Clean, minimal with lots of whitespace
- **Components:** Small, focused components with subtle borders
- **Animation:** Subtle hover effects and transitions

## 📖 Content Sections

### Homepage (`app/page.tsx`)

- Hero section with gradient text
- Feature cards highlighting key benefits
- Live demo with tabbed interface
- Code examples with syntax highlighting
- Call-to-action sections

### Documentation (`app/docs/page.tsx`)

- Installation guide with copy-to-clipboard
- Quick start tutorial with live demos
- Comprehensive hook documentation
- Component API reference
- Transliteration rules and examples
- Advanced usage patterns

## 🔧 Development

### Adding New Documentation

1. Create a new component in `components/docs/`
2. Import and add it to `app/docs/page.tsx`
3. Update navigation in `components/DocsNavigation.tsx`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the existing color scheme
- Keep components small and focused
- Use semantic HTML elements
- Ensure responsive design

### Live Demos

All demos use the published npm package `@bhashaime/core` instead of local files. This ensures:

- Real-world usage examples
- Version consistency
- Better user experience

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Set up custom domain if needed

## 📝 SEO Optimization

The website includes:

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card meta tags
- Semantic HTML structure
- Proper heading hierarchy
- Fast loading with Next.js optimizations

## 🎯 Performance

- Tree-shaking with ES modules
- Next.js automatic code splitting
- Optimized images and fonts
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## 🤝 Contributing

1. Follow the existing code style
2. Test your changes locally
3. Ensure responsive design works
4. Update documentation if needed
5. Submit a pull request

## 📄 License

This website is part of the BhaSha IME project and is licensed under the MIT License.
