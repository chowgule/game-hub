Game Hub

Game Hub is a web application that provides a central platform to explore games. Users can filter games based on genres, platforms, and other criteria. The app fetches data from an external API and dynamically renders game information.

Features:

Browse and search games
Filter games by genre, platform, and critic scores
Responsive design
Dynamic data fetching with custom hooks


Folder Structure:

src/

components/: Contains all the reusable UI components such as GameCard, NavBar, GameGrid, etc.

hooks/: Contains custom React hooks like useGames, usePlatforms, and useGenres to handle data fetching.

services/: Holds services responsible for API calls.

data/: Contains any local data or configurations.

assets/: Holds static assets like images and icons.

App.tsx: The main component that initializes the app.

vite-env.d.ts: TypeScript declaration file for Vite.

Technologies Used:

React.js: Frontend framework

TypeScript: Superset of JavaScript for type safety

Vite: Fast build tool for frontend applications

API: External API for game data

Chakra-UI - Library used for styling the compoenents

Installation:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/game-hub.git


Navigate to the project folder:
bash
Copy code
cd game-hub


Install dependencies:
bash
Copy code
npm install


Create a .env file and add the following:
makefile
Copy code
VITE_APP_API_URL=<your-api-url>
VITE_APP_ID=<your-api-key>

Start the development server:
bash
Copy code
npm run dev

Visit the app at http://localhost:3000.

Usage:
Browse games by scrolling through the list.
Use the search bar to find specific games.
Filter games by genre or platform using the dropdown options.


