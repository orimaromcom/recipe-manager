# Recipe Management Application

## Overview

This is a full-stack Recipe Management application built with Node.js, Express, React, and Tailwind CSS. It allows users to create, read, update, and delete recipes, as well as search and sort through their recipe collection.

## Features

- Create new recipes with details like name, category, area, instructions, image URL, and YouTube link
- View a list of all recipes
- Edit existing recipes
- Delete recipes
- Search recipes by name or instructions
- Sort recipes alphabetically
- Responsive design for both desktop and mobile viewing

## Tech Stack

- Backend: Node.js with Express
- Frontend: React with Vite
- Styling: Tailwind CSS
- Database: JSON file (simulated database)
- HTTP Client: Axios

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/orimaromcom/recipe-management-app.git
   cd recipe-management-app
   ```

2. Install backend dependencies:

   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```
   cd backend
   node server.js
   ```

   The server will start on `http://localhost:3000`.

2. In a new terminal, start the frontend development server:

   ```
   cd frontend
   npm run dev
   ```

   The frontend will be available on `http://localhost:5173`.

3. Open your browser and navigate to `http://localhost:5173` to use the application.

## API Endpoints

- `GET /recipes` - Fetch all recipes
- `POST /recipes` - Create a new recipe
- `PUT /recipes/:id` - Update an existing recipe
- `DELETE /recipes/:id` - Delete a recipe

@The app was written by Ori Marom Enjoy 😎😋
