# XMRT Test Stack

A modern, full-stack web application built with cutting-edge technologies for testing and development within the XMRT ecosystem.

## 🚀 Overview

The XMRT Test Stack is a comprehensive development environment designed to showcase and test various components of the XMRT.io ecosystem. This project serves as a foundation for building decentralized applications, smart contracts, and blockchain integrations.

## ✨ Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type-safe development
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component Library**: Comprehensive UI components powered by shadcn/ui and Radix UI
- **Blockchain Integration**: Web3 wallet connectivity with MetaMask SDK
- **State Management**: Efficient state handling with React Query
- **Development Tools**: Hot reload, ESLint, and modern build tooling with Vite

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible component library
- **Radix UI** - Low-level UI primitives

### Blockchain & Web3
- **Ethers.js** - Ethereum library for blockchain interactions
- **MetaMask SDK** - Wallet connectivity and Web3 integration

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **React Router** - Client-side routing
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevGruGold/xmrt-test-stack.git
   cd xmrt-test-stack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📁 Project Structure

```
xmrt-test-stack/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Application pages/routes
│   └── main.tsx          # Application entry point
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite build configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel
1. Import project from GitHub
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure custom domain if needed

## 🤝 Contributing

We welcome contributions to the XMRT Test Stack! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all tests pass before submitting
- Update documentation for new features

## 📄 License

Copyright © 2024 Joseph Andrew Lee (DevGruGold). All rights reserved.

This project is proprietary software developed for the XMRT.io ecosystem. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without explicit written permission from the copyright holder.

## 👨‍💻 Author

**Joseph Andrew Lee** (DevGruGold)
- **Company**: XMRT.io
- **GitHub**: [@DevGruGold](https://github.com/DevGruGold)
- **Website**: [XMRT.io](https://xmrt.io)

## 🔗 Related Projects

- [XMRT.io](https://xmrt.io) - Main XMRT ecosystem platform
- [XMRT Documentation](https://docs.xmrt.io) - Comprehensive documentation
- [XMRT SDK](https://github.com/DevGruGold/xmrt-sdk) - Development toolkit

## 📞 Support

For support, questions, or collaboration opportunities:

- **Website**: [XMRT.io](https://xmrt.io)
- **Email**: Contact through XMRT.io
- **Issues**: [GitHub Issues](https://github.com/DevGruGold/xmrt-test-stack/issues)

---

**Built with ❤️ by Joseph Andrew Lee for the XMRT ecosystem**
