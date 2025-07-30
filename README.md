# Figma Replicate Test

A modern React TypeScript project with Tailwind CSS and comprehensive CSS variables for theming.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for consistent theming
- **Dark Mode** support with automatic detection
- **Vite** for lightning-fast development
- **Responsive Design** with mobile-first approach
- **Component Library** with pre-built UI components

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- PostCSS
- Autoprefixer

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd figma-replicate-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 CSS Variables

The project uses CSS custom properties for consistent theming:

### Colors
```css
--color-primary: #3b82f6
--color-secondary: #64748b
--color-accent: #f59e0b
--color-background: #ffffff
--color-surface: #f8fafc
--color-text: #1e293b
--color-text-secondary: #64748b
--color-border: #e2e8f0
--color-error: #ef4444
--color-success: #22c55e
--color-warning: #f59e0b
```

### Spacing
```css
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem
```

### Border Radius
```css
--border-radius-sm: 0.25rem
--border-radius-md: 0.375rem
--border-radius-lg: 0.5rem
--border-radius-xl: 0.75rem
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## 🧩 Component Classes

The project includes pre-built component classes:

### Buttons
```html
<button class="btn btn-primary btn-md">Primary Button</button>
<button class="btn btn-secondary btn-sm">Secondary Button</button>
<button class="btn btn-accent btn-lg">Accent Button</button>
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-ghost">Ghost Button</button>
```

### Cards
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description</p>
  </div>
  <div class="card-content">
    <!-- Card content -->
  </div>
  <div class="card-footer">
    <!-- Card footer -->
  </div>
</div>
```

### Form Elements
```html
<input class="input" type="text" placeholder="Enter text" />
<label class="label">Form Label</label>
```

## 🌙 Dark Mode

The project automatically supports dark mode using CSS media queries. The CSS variables automatically switch to dark theme values when the user's system preference is set to dark mode.

## 📱 Responsive Design

The project uses Tailwind's responsive prefixes for mobile-first design:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
figma-replicate-test/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## 🎯 Usage Examples

### Using CSS Variables in Components
```tsx
function MyComponent() {
  return (
    <div className="bg-background text-text p-md rounded-md">
      <h2 className="text-primary font-bold">Title</h2>
      <p className="text-text-secondary">Description</p>
    </div>
  )
}
```

### Custom Styling with CSS Variables
```css
.my-custom-component {
  background-color: var(--color-surface);
  color: var(--color-text);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
