# 💰 Finance Dashboard Backend API

A **Role-Based Finance Dashboard Backend** built using **Node.js, Express, MongoDB** with **JWT Authentication**, **RBAC**, **Swagger Documentation**, and **Dashboard Analytics APIs**.

This project provides a secure and scalable backend for managing financial transactions and generating dashboard analytics.

---

# 🚀 Live API Documentation

Swagger UI
👉 [https://finance-dashboard-backend-wu1m.onrender.com/api-docs/](https://finance-dashboard-backend-wu1m.onrender.com/api-docs/)

GitHub Repository
👉 [https://github.com/ayush4742/finance-dashboard-backend](https://github.com/ayush4742/finance-dashboard-backend)

---

# ✨ Features

* 🔐 JWT Authentication
* 👥 Role Based Access Control (RBAC)
* 💰 Transaction Management
* 📊 Dashboard Analytics APIs
* 📚 Swagger API Documentation
* 🌐 Deployed on Render
* 🔒 Secure Middleware Architecture

---

# 👤 User Roles & Permissions

| Role    | Access                     |
| ------- | -------------------------- |
| Admin   | Full Access                |
| Analyst | Read + Create Transactions |
| Viewer  | Read Only                  |

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Swagger (OpenAPI 3.0)
* Render (Deployment)

---

# 📁 Project Structure

```
finance-dashboard-backend
│
├── config
│   ├── db.js
│   └── swagger.js
│
├── controllers
│   ├── userController.js
│   ├── transactionController.js
│   └── dashboardController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── routes
│   ├── userRoutes.js
│   ├── transactionRoutes.js
│   └── dashboardRoutes.js
│
├── .env
├── app.js
└── package.json
```

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/ayush4742/finance-dashboard-backend.git
cd finance-dashboard-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create `.env` file in root directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 4️⃣ Run Server

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

Swagger Documentation:

```
http://localhost:5000/api-docs
```

---

# 🔐 Authentication Flow

### Step 1 — Create Demo Users

POST

```
/api/users/seed
```

This creates:

* Admin
* Analyst
* Viewer

---

### Step 2 — Login

POST

```
/api/users/login
```

Example:

```json
{
  "email": "admin@gmail.com",
  "password": "admin123"
}
```

---

### Step 3 — Copy JWT Token

Response:

```json
{
  "token": "your_jwt_token"
}
```

---

### Step 4 — Authorize

Click **Authorize** button in Swagger UI

Paste:

```
Bearer your_token
```

---

### Step 5 — Test APIs

Now you can test:

* Users APIs
* Transactions APIs
* Dashboard APIs

---

# 🔑 Demo Credentials

## Admin

```
email: admin@gmail.com
password: admin123
```

---

## Analyst

```
email: analyst@gmail.com
password: analyst123
```

---

## Viewer

```
email: viewer@gmail.com
password: viewer123
```

---

# 📊 Dashboard APIs

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| GET    | /api/dashboard/summary  | Dashboard Summary   |
| GET    | /api/dashboard/category | Category Summary    |
| GET    | /api/dashboard/monthly  | Monthly Trends      |
| GET    | /api/dashboard/recent   | Recent Transactions |

---

# 💰 Transactions APIs

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| POST   | /api/transactions     | Create Transaction   |
| GET    | /api/transactions     | Get All Transactions |
| DELETE | /api/transactions/:id | Delete Transaction   |

---

# 👥 Users APIs

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/users/seed  | Create Demo Users |
| POST   | /api/users/login | Login User        |
| POST   | /api/users       | Create User       |
| GET    | /api/users       | Get Users         |
| PUT    | /api/users/:id   | Update User       |
| DELETE | /api/users/:id   | Delete User       |

---

# 🌍 Deployment

Hosted on **Render**

Base URL:

```
https://finance-dashboard-backend-wu1m.onrender.com
```

Swagger:

```
https://finance-dashboard-backend-wu1m.onrender.com/api-docs
```

---

# 🔒 Security

* JWT Authentication
* Role-Based Authorization
* Protected Routes
* Secure Middleware

---

# 📌 API Testing

You can test APIs using:

* Swagger UI
* Postman
* Thunder Client

---

# 🧠 Architecture

```
Client
  ↓
Routes
  ↓
Controllers
  ↓
Middleware (Auth + Roles)
  ↓
MongoDB Database
```

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Ayush**

GitHub
[https://github.com/ayush4742](https://github.com/ayush4742)


