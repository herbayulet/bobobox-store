# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## Frontend Engineer Skill Test
This project is a React application that fetches and displays data from the Dummy JSON API (https://dummyjson.com/products). It includes a grid layout for products and a detailed product page.

## Features

- Fetches and displays product data from Dummy JSON API
- Grid layout for product display
- Product detail page
- Wishlist page
- Filter/search functionality
- "Bookmark" or "Wishlist" action button

## Technologies Used

- React (with Vite)
- TypeScript
- Tailwind CSS
- React Router
- Axios
- @heroicons/react

## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v14 or later recommended)
- npm or yarn

## Installation

1. Clone the repository:
```js
git clone this repo
```

2. Navigate to the project directory:
```js
cd [your-project-name]
```

3. Install dependencies:
```js
npm install
or if you're using yarn:
yarn
```


## Running the Application
To start the development server:
```js
npm run dev
or with yarn:
yarn dev
```
The application will be available at http://localhost:5173 (or another port if 5173 is in use).