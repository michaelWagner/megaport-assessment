# Megaport Assessment

## Project Overview

Welcome to Mikey Wagner's Megaport assessment! This project is a straightforward Vue 3 application built with Vite and plain CSS. The main feature is a dynamic data table that showcases a list of baked goods, complete with sorting, filtering, and a form for adding new entries. This project is as a demonstration of my ability to quickly build efficient, user-friendly interfaces with modern tools.

### Core Features

- **Interactive Data Table**: View and interact with a list of baked goods. Includes pagination, sorting and filtering functionality.
- **Add New Baked Goods**: A form to easily add new items to the list.
- **Code Sandbox**: A fun place to test out functions.
- **Responsive Design**: Ensures usability across various devices and screen sizes.

### Getting Started

#### Prerequisites

Before you dive in, make sure you have:

- Node.js (v14 or higher)
- npm (v6 or higher)

#### Setup Instructions

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

   Visit `http://localhost:3000/megaport-assessment` in your browser to see the app in action.

#### Running Tests

To ensure everything is working as expected, run the tests with:

```bash
npm run test
```

## Requirements

### Activity 1
What we'll be looking at is how you approach the following:
- Use of Git
- Knowledge of JavaScript API
- Component composition knowledge
- CSS knowledge

#### Specifications:
For this activity you can use React, Vue or Angular or similar framework
- Do not use any CSS precompilers; plain CSS only
- Do not use any UI component libraries
- Do not use any reactive stores
- Do not add any other dependencies (e.g Lodash)

##### What we'd like you to do:
- [x] Take the following data and format it into a table
- [x] Add toggles to sort by id, type and topping (both ascending and descending)
- [x] Add a text input to filter the data
- [x] Add a form to collect new baked goods
- [x] Make the elements look nice using CSS
- [x] Once you have completed the task, please push the repository into a public Git host (Bitbucket/Github/Gitlab) with a README.md with instructions on how to build and run the application locally.

#### The data:

See [baked-goods.js](https://github.com/michaelWagner/megaport-assessment/blob/main/src/constants/baked-goods.js) for more details.

### Activity 2

## See [objectService](https://github.com/michaelWagner/megaport-assessment/blob/main/src/services/objectService.js) for solution.
### Also navigate to the [Code Sandbox](http://localhost:3000/megaport-assessment/code-sandbox) to see it in action

Given a path to a property of an object, write a function that returns the value of the property. The function should accept a parameter of the path and optionally the object you are searching in, for example:

```js
/**
 * Get the value of the data at the specified path in the supplied object.
 *
 * @param {String} path - the object path e.g. 'address.office.state'
 * @obj {Object} the object
 */
function getValue(path, obj) {
...
}
```

Use the following object and illustrate how you would retrieve values for the following properties: suburb, asxListed

```js
{
  name: 'Megaport',
  address: {
    office: {
      unit: 'Level 3',
      street: '825 Ann Street',
      suburb: 'Fortitude Valley',
      city: 'Brisbane',
      state: 'Queensland',
      postcode: 4006,
    },
  },
  industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
  },
}
```

### Activity 3

Write a reusable fetch function that GETs the list of Megaport enabled locations from the following endpoint: [https://api.megaport.com/v2/locations](https://api.megaport.com/v2/locations)

### Project Structure

- `src/`
  - `assets/`
    - `megaport.svg` - Any images.
  - `components/`
    - `DataTable.vue` - Reusable component where data is displayed and sorted.
  - `pages/`
    - `Splash.vue` - The heart of the application where users land on page load.
  - `router/`
    - `index.js`
  - `constants/` - Any reusable data or constant variables.
    - `index.js`
  - `services/`
    - `objectService.js` - Reusable functions that interacting with object data.
  - `App.vue` - The main component that ties the layout together.
  - `main.js` - The entry point for initializing the Vue application.
- `public/` - Contains the static assets.
- `vite.config.js` - Configuration for Vite.

#### Next Steps
- **Data Persistence**: Implement a way to save data persistently, perhaps using localStorage or a backend service.

### TODO Checklist

- [x] Initialize project with Vue 3 and Vite.
- [x] Set up Vitest for testing.
- [x] Develop `DataTable` component.
- [x] Implement sorting feature.
- [x] Implement filtering feature.
- [x] Create form for new baked goods.
- [x] Apply basic CSS styling.
- [x] Add form validation.
- [x] Enhance UI/UX.
- [x] Add pagination to DataTable.
- [x] Add Splash page.
