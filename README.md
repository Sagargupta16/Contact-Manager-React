# Contact Manager (React)

A client-side contact management application built with React -- featuring localStorage persistence, dark/light mode, and zero-refresh navigation.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=githubpages&logoColor=white)

## Live Demo

[sagargupta.life/Contact-Manager-React](https://sagargupta.life/Contact-Manager-React/)

## Overview

A standalone React frontend contact manager that stores all data in the browser's localStorage. No backend server required -- all CRUD operations happen client-side with persistent storage. Features include search/filter, dark/light mode, and individual contact detail views.

## Features

- **Full CRUD Operations** -- Add, edit, delete contacts
- **Search & Filter** -- Find contacts by name or email
- **Contact Details** -- View individual contact information
- **Dark/Light Mode** -- Persistent theme preference via localStorage
- **Data Persistence** -- All contacts stored in localStorage
- **Zero-Refresh Navigation** -- React Router for SPA experience
- **Responsive Design** -- Works on all screen sizes
- **Pre-loaded Data** -- Sample contacts included for demo

## Tech Stack

| Technology | Version |
|-----------|---------|
| React | 18.3.1 |
| React Router DOM | 6.30.1 |
| Redux | State management |
| UUID | Unique contact IDs |
| CSS | Custom styling |

## Project Structure

```
Contact-Manager-React/
├── public/
│   └── index.html
├── src/
│   └── components/
│       ├── App.js              # Root with routing
│       ├── App.css             # All styling
│       ├── AddContact.js       # Add contact form
│       ├── EditContact.js      # Edit contact form
│       ├── ContactList.js      # Contact list display
│       ├── ContactCart.js      # Individual contact card
│       ├── ContactDetail.js    # Contact detail view
│       ├── Header.js           # App header
│       ├── darkmode.js         # Theme toggle
│       └── predata.js          # Sample seed data
├── images/                     # Screenshots
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
git clone https://github.com/Sagargupta16/Contact-Manager-React.git
cd Contact-Manager-React
npm install
```

### Running

```bash
npm start
# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## Screenshots

<img src="images/1_1.png" alt="Contact Manager" width="100%">
<img src="images/1_2.png" alt="Contact Manager" width="100%">

## Related

- [Contact-Manager-Mern](https://github.com/Sagargupta16/Contact-Manager-Mern) -- Full-stack version with MongoDB backend

## License

MIT
