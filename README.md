# 🍲 Recipe App

This is a full-stack recipe management app built using **Node.js**, **Express**, **MongoDB**, and **React**. It allows users to search for recipes using the **Spoonacular API**, view details, save favorite recipes, and reorder them.

---

## 🧰 Technologies Used

### 🔙 Backend (Node.js + Express)

- Express.js
- MongoDB (with Mongoose)
- Axios (for API requests)
- CORS
- Cookie-parser
- dotenv
- JWT (for authentication)

### 🔜 Frontend (React + Tailwind CSS)

- React.js
- Axios
- React Router DOM
- Tailwind CSS
- react-beautiful-dnd (for drag-and-drop reorder)

---

## 🗂 Folder Structure

### 📁 Backend

backend/ │ ├── config/ # MongoDB connection setup ├── controllers/ # Business logic (e.g., recipes, auth) ├── models/ # Mongoose models (User, Recipe) ├── routes/ # API route files ├── middleware/ # Auth middleware (JWT) ├── .env # Secrets & keys ├── server.js # Entry point └── package.json # Backend dependencies

### 📁 Frontend

frontend/ │ ├── src/ │ ├── components/ # Navbar, Footer, RecipeCard │ ├── pages/ # Home, Favorites, Login/Register │ ├── App.jsx │ └── main.jsx ├── .env # Frontend variables ├── index.html └── package.json # Frontend dependencies

---

## 🔑 .env Configuration

### Backend `.env`

```env
PORT=8080
MONGO_URI=mongodb://127.0.0.1:27017/recipe-app
SPOONACULAR_API_KEY= cf95bc346704420e9c53ea8e6a7c77b4
JWT_SECRET= zxcvbnm
```

Frontend .env

VITE_BACKEND_URL=http://localhost:8080

🌐 API Endpoints
🧾 Recipes (from Spoonacular API)
GET /recipes/search?query=pasta
→ Fetches recipes from Spoonacular API using keyword

❤️ Favorites
POST /recipes/favorites
→ Save a recipe to user's favorites

GET /recipes/favorites
→ Get user's saved recipes

DELETE /recipes/favorites/:id
→ Delete a saved recipe

PUT /recipes/favorites/reorder
→ Reorder saved recipes

👤 Authentication
POST /user/register

POST /user/login

All favorites routes are protected using JWT via middleware.

🖥 How to Run the Project
🧩 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Divyesh-Thakur45/Recipe-App
cd recipe-app
🔙 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
npm start
🔜 3. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
🔐 Authentication with JWT
After login/register, the backend issues a JWT token which is stored in cookies or localStorage. Authenticated routes require the token in the Authorization header.

💡 Features
🔍 Search recipes using keywords

📄 View recipe details (summary, ingredients, instructions)

❤️ Save and manage favorite recipes

🔁 Reorder saved recipes with drag-and-drop

🧠 Authentication system (register/login)

💻 Fully responsive and clean UI (Tailwind CSS)

🚀 Future Improvements
Add filters by diet, type, or nutrition

Add pagination or infinite scroll

Add dark mode

Deploy to Render (backend) and Vercel/Netlify (frontend)

📬 Contact
Developer: Divyesh Thakur
📧 Email: divyeshthakur@gmail.com
📱 Phone: (+91) 8511827576
