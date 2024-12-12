# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark/light theme toggle, smooth animations, and a clean, professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80)

## ✨ Features

- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast and optimized performance
- 🔄 Interactive 3D card animations
- 🎯 Smooth scrolling navigation
- 💻 Clean and maintainable code structure

## 🚀 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/        # React components
│   ├── common/       # Shared components
│   └── sections/     # Page sections
├── context/          # React context providers
├── styles/           # CSS and Tailwind styles
└── types/           # TypeScript type definitions
```

## 🎨 Customization

### Themes

The website supports both light and dark themes. Theme preferences are automatically saved to localStorage.

### Colors

You can customize the color scheme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      }
    }
  }
}
```

### Content

Update your personal information in the respective component files:

- Basic info: `src/components/Hero.tsx`
- About section: `src/components/About.tsx`
- Portfolio items: `src/components/Portfolio.tsx`
- Services: `src/components/Services.tsx`
- Contact info: `src/components/Contact.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ⚡ Performance Optimization

- Lazy loading of images
- Code splitting
- Optimized asset delivery
- Minimal dependencies
- Efficient re-renders

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name

- GitHub: [@Sk70249](https://github.com/Sk70249)
- LinkedIn: [Samyak Kala](https://www.linkedin.com/in/samyak-kala-933a77169/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

For support, email sam2452344@gmail.com or create an issue in this repository.
