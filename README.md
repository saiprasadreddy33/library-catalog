# Library Catalog

Library Catalog is a full-stack web application for managing a library catalog. 
It allows users to browse books, search for books by title or author, add new books to the catalog, edit existing book details, and delete books from the catalog.

## Table of Contents
1. [Development Environment Setup](#development-environment-setup)
2. [Running the Application](#running-the-application)
3. [Functionality](#functionality)
4. [Technologies Used](#technologies-used)
5. [Implementation Details](#implementation-details)


## Development Environment Setup

### Prerequisites
- Node.js
- Docker

### Backend Setup
1. Navigate to the `backend` directory:
cd backend

2. Install dependencies:
npm install

3. Create a `.env` file and configure MongoDB connection:

4. Start the backend server:
   npm start
 
## Running the Application

### Using Docker Compose
1. Ensure Docker is installed and running on your system.
2. Navigate to the root directory of the project.
3. Run the following command:
docker-compose up
4. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Functionality

- Users can view a list of books with pagination and search functionality.
- Users can add new books to the catalog using a form.
- Users can edit existing book details.
- Users can delete books from the catalog.
- The application uses the Google Books API to seed initial book data. 

## Technologies Used

- Frontend: React, Redux, Vite
- Backend: Node.js, Express.js
- Database: MongoDB
- Containerization: Docker

## Implementation Details

- Frontend: The frontend is built using React with Redux for state management. Components are organized into reusable modules for displaying the book list, book form, and search bar. Styles are applied using CSS modules.
- Backend: The backend is developed using Node.js and Express.js framework. It provides RESTful API endpoints for managing book data, including CRUD operations. MongoDB is used as the database to store book information.
- Docker: The application is containerized using Docker for easy deployment. Dockerfiles are provided for both frontend and backend components. Docker Compose is used to orchestrate the containers and define services.


