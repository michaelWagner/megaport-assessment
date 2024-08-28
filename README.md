# Megaport Assessment

## Project Overview

Welcome to Mikey Wagner's Megaport assessment! This project is a straightforward Vue 3 application built with Vite and plain CSS. The main feature is a dynamic data table that showcases a list of baked goods, complete with sorting, filtering, and a form for adding new entries. This project is as a demonstration of my ability to quickly build efficient, user-friendly interfaces with modern tools.

## Core Features

- **Interactive Data Table**: View and interact with a list of baked goods. Includes sorting and filtering functionality.
- **Add New Baked Goods**: A form to easily add new items to the list.
- **Responsive Design**: Ensures usability across various devices and screen sizes.

## Getting Started

### Prerequisites

Before you dive in, make sure you have:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Instructions

1. **Clone the Repo**

   ```bash
   git clone https://github.com/michaelWagner/megaport-assessment.git
   cd megaport-assessment
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **Open the App**

   Visit `http://localhost:5173` in your browser to see the app in action.

### Running Tests

To ensure everything is working as expected, run the tests with:

```bash
npm run test
```

## Project Structure

- `src/`
  - `components/`
    - `BakedGoodsTable.vue` - The heart of the application where data is displayed and managed.
  - `App.vue` - The main component that ties everything together.
  - `main.js` - The entry point for initializing the Vue application.
- `public/` - Contains static assets.
- `vite.config.js` - Configuration for Vite.

### Next Steps

- **Form Validation**: Add validation to ensure new entries are correctly submitted.
- **Data Persistence**: Implement a way to save data persistently, perhaps using localStorage or a backend service.
- **UI/UX Enhancements**: Refine styling and interactions for a more polished user experience.

## Checklist

- [x] Initialize project with Vue 3 and Vite.
- [x] Set up Vitest for testing.
- [x] Develop `BakedGoodsTable` component.
- [x] Implement sorting feature.
- [x] Implement filtering feature.
- [x] Create form for new baked goods.
- [x] Apply basic CSS styling.
- [ ] Add form validation.
- [ ] Implement data persistence.
- [ ] Enhance UI/UX.

## Known Issues

- **Form Validation**: Not yet implemented but planned for future updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
