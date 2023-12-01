# IPANGRAM-MERN-TEST


TeamSync Pro is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to streamline employee and department management. It offers a range of features for both employees and managers, facilitating efficient collaboration and organization within a team.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication**
   - Sign up and login pages for employees and managers.

2. **Department Management**
   - Create, update, and delete departments (only accessible by managers).

3. **Employee Directory**
   - View all employees in a well-organized directory.

4. **Employee Details Page/Model**
   - Managers and employees can view detailed information about themselves and their team members.

5. **Employee Filtering**
   - Filter employees based on location and name in ascending and descending order using API endpoints.

6. **Department Assignment**
   - Managers can assign departments to employees.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/TeamSync-Pro.git
   cd TeamSync-Pro
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
#Set up environment variables:

Create .env file in the backend directory and configure MongoDB connection.
# Start the backend server
cd backend
npm start

# Start the frontend application
cd ../frontend
npm start

Usage
Access the application in your web browser: http://localhost:3000

Explore the various features available for both employees and managers.

Backend
The backend is built with Node.js and Express.js, using MongoDB as the database. The API routes handle user authentication, department, and employee management.

Frontend
The frontend is developed using React.js, providing an intuitive user interface for employees and managers. It interacts with the backend API to fetch and update data.

Contributing
Contributions are welcome! Feel free to submit issues or pull requests.
