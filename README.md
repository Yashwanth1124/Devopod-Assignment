### Custom ERP System Development

#### Introduction
The objective of this project is to develop a custom Enterprise Resource Planning (ERP) system tailored for industries such as construction, retail, and manufacturing. The system incorporates AI features to automate data entry and provide predictive insights, enhancing efficiency and decision-making. This documentation focuses on the "User Accounts Management and Role-Based Access Control (RBAC)" module to ensure secure and efficient management of user accounts and roles.

---

### Technology Stack

- **Frontend**: React (JavaScript)
- **Backend**: Express (Node.js)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS

---

### Project Structure
```
project-root
│   .env
│   .gitignore
│   package.json
│   README.md
├── config
│   └── db.js
├── controllers
│   └── authController.js
├── middlewares
│   └── authMiddleware.js
├── models
│   └── user.js
├── routes
│   └── authRoutes.js
└── frontend
    ├── src
    │   ├── components
    │   │   ├── Dashboard
    │   │   │   ├── index.js
    │   │   │   └── index.css
    │   │   ├── Login
    │   │   │   ├── index.js
    │   │   │   └── index.css
    │   │   └── Register
    │   │       ├── index.js
    │   │       └── index.css
    │   ├── services
    │   │   └── api.js
    │   ├── App.js
    │   └── index.js
    └── public
        └── index.html
```
#### Root Directory
- **`.env`**: Stores sensitive information like database URI, JWT secret, and port number.

#### Backend Directory (`backend`)

- **`config`**
  - **`db.js`**: Database configuration file to connect to MongoDB using mongoose.

- **`controllers`**
  - **`authController.js`**: Handles user authentication, including registration and login. Utilizes bcrypt for password hashing and JWT for token generation.

- **`middlewares`**
  - **`authMiddleware.js`**: Middleware for JWT validation and enforcing role-based access control.

- **`models`**
  - **`user.js`**: Mongoose schema for user data, including fields for name, email, password, and role. Includes a pre-save hook for password hashing.

- **`routes`**
  - **`authRoutes.js`**: Defines routes for user registration and login. Uses express-validator for input validation.

- **`server.js`**: Entry point for the backend application. Sets up the Express server, connects to the database, and defines routes and middleware.

#### Frontend Directory (`frontend`)

- **`src`**
  - **`components`**
    - **`Dashboard`**
      - **`index.js`**: React component for the dashboard. Fetches and displays protected data and includes a logout button.
      - **`index.css`**: Styles for the Dashboard component.
    - **`Login`**
      - **`index.js`**: React component for the login page. Handles user login and redirects to the dashboard.
      - **`index.css`**: Styles for the Login component.
    - **`Register`**
      - **`index.js`**: React component for the registration page. Handles user registration and redirects to the login page.
      - **`index.css`**: Styles for the Register component.
  - **`services`**
    - **`api.js`**: API service file containing functions for HTTP requests to the backend.
  - **`App.js`**: Main React component that sets up routes and navigation.
  - **`index.js`**: Entry point for the frontend application.

---

### Backend File Descriptions

1. **`.env`**
   - Stores environment variables such as:
     ```
     MONGO_URI=mongodb+srv://devopod:devopod123@cluster0.3z7y8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     JWT_SECRET=supersecretkey
     PORT=5000
     ```

2. **`config/db.js`**
   - Establishes a connection to the MongoDB database and logs success messages.

3. **`controllers/authController.js`**
   - **`registerUser`**: Validates input, hashes passwords, generates JWT tokens, and saves new users to the database.
   - **`loginUser`**: Validates credentials, compares passwords, and generates JWT tokens for valid users.

4. **`middlewares/authMiddleware.js`**
   - Verifies JWT tokens in request headers and enforces role-based access permissions.

5. **`models/user.js`**
   - Defines the User schema with pre-save hooks for password hashing using bcrypt.

6. **`routes/authRoutes.js`**
   - **`POST /register`**: Handles user registration.
   - **`POST /login`**: Handles user login.

7. **`server.js`**
   - Initializes the Express server, connects to MongoDB, and sets up middleware and routes.

---

### Frontend File Descriptions

1. **`src/components/Dashboard/index.js`**
   - React component to display protected data. Includes logout functionality.

2. **`src/components/Dashboard/index.css`**
   - Provides responsive styling for the Dashboard component.

3. **`src/components/Login/index.js`**
   - Handles user login requests and redirects to the dashboard on success.

4. **`src/components/Login/index.css`**
   - Responsive design for the login page.

5. **`src/components/Register/index.js`**
   - Handles user registration requests and redirects to the login page on success.

6. **`src/components/Register/index.css`**
   - Styles for the registration page.

7. **`src/services/api.js`**
   - Provides HTTP request functions for user registration, login, and fetching protected data.

8. **`src/App.js`**
   - Configures routes and navigation for the application, with conditional rendering based on authentication status.

9. **`src/index.js`**
   - Renders the App component into the DOM.

---

### Deployment Guide

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Set Up the Backend**:
   - Create a `.env` file with your MongoDB URI and JWT secret.
   - Install dependencies and start the server:
     ```
     npm install
     npm run dev
     ```

3. **Set Up the Frontend**:
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies and start the development server:
     ```
     npm install
     npm start
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

### Evaluation Criteria

1. **Code Quality and Documentation**:
   - Clean, well-structured, and commented code.
   - Comprehensive and clear documentation.

2. **Functionality and Responsiveness**:
   - Fully functional user registration, login, and dashboard.
   - Responsive design for all components.

3. **API Integration and Data Flow**:
   - Seamless communication between frontend and backend.
   - Secure and efficient data management.

4. **Testing and Debugging**:
   - Proper testing of all components and error handling.
