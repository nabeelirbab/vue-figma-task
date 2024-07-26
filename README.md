
# search-box-component

This project aims to develop a search box component for searching programming tools used at Digital Creative (DC). The search box handles various states including successful requests with and without results, pending requests, and error states.

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Overview

This project aims to develop a search box component for searching programming tools used at Digital Creative (DC). The search box should handle various states including successful requests with and without results, pending requests, and error states.

## Features

1. **Search Box Component**
2. **Tag Component**
3. **Result Item Component**
4. **Loader Component**

## Materials

- **Design Templates**: [Figma Design Templates](https://figma.com)
- **API Endpoint**: `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=flutter`

## Requirements

The search box should cover four states:

1. **Successful request without any result**
2. **Successful request with results**
3. **Pending request**
4. **Error while requesting**


## Project Structure

```plaintext
SEARCH-BOX-COMPONENT
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── ResultItem.vue
│   │   ├── SearchBar.vue
│   │   ├── SearchLoader.vue
│   │   ├── SearchTag.vue
│   ├── store
│   │   └── store.js
│   ├── App.vue
│   ├── main.js
│   └── tailwind.config.js
├── .gitignore
├── babel.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind-formkit-theme.js
└── vue.config.js
```

### Components Overview

1. **SearchBar Component (SearchBar.vue)**
   - Handles the input and submission of search queries.
   - Manages the search state and triggers API calls.

2. **Tag Component (SearchTag.vue)**
   - Displays tags for categorizing or filtering search results.

3. **Result Item Component (ResultItem.vue)**
   - Displays individual search results.

4. **Loader Component (SearchLoader.vue)**
   - Displays a loading indicator during pending requests.

### API Integration

The search queries are handled by making GET requests to the provided API endpoint. The API responses are used to manage the various states of the search box (successful with/without results, pending, and error).

### Error Handling

To simulate error states, change the `no-throttling` parameter to `false` in the API request URL.

## Design Considerations

- **Architecture**: The code is structured in a way that promotes reusability and modularity. Components are isolated and can be easily reused.
- **UI Composition**: The UI is built according to the provided design templates from Figma, ensuring a pixel-perfect implementation.
- **State Management**: State is managed locally within components, with a clear data flow between components.



