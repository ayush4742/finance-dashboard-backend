# 💰 Finance Dashboard Backend API

A **Role-Based Finance Dashboard Backend** built using **Node.js, Express, MongoDB** with **JWT Authentication**, **RBAC**, **Swagger Documentation**, and **Dashboard Analytics APIs**.

This project provides a secure and scalable backend for managing financial transactions and generating dashboard analytics.

---
# 🎯 Assignment Objective

This project was built to demonstrate:

* Backend Architecture Design
* Role-Based Access Control
* Financial Data Processing
* Dashboard Analytics
* API Design & Documentation
* Data Validation & Error Handling

---

# 🚀 Live API Documentation

Swagger UI
👉 [https://finance-dashboard-backend-wu1m.onrender.com/api-docs/](https://finance-dashboard-backend-wu1m.onrender.com/api-docs/)

GitHub Repository
👉 [https://github.com/ayush4742/finance-dashboard-backend](https://github.com/ayush4742/finance-dashboard-backend)


Watch live project demo here 👉 https://drive.google.com/file/d/1m6ojhoxk5rxobaRmBlBSCSDzJMp6OPmN/view?usp=drivesdk

---

# ✨ Features

* 🔐 JWT Authentication
* 👥 Role Based Access Control (RBAC)
* 💰 Transaction Management
* 📊 Dashboard Analytics APIs
* 📚 Swagger API Documentation
* 🌐 Deployed on Render
* 🔒 Secure Middleware Architecture
* 🧠 Clean Backend Architecture

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

# 🏗️ Backend Architecture

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
  "password": "123456"
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
# 💰 Transaction Fields Guide

- *title* → Transaction name (Salary, Grocery, Rent)
- *amount* → Transaction amount (5000)
- *type* → income | expense
- *category* → salary | food | rent

  ---

---

# 🔑 Demo Credentials

## Admin

```
email: admin@gmail.com
password: 123456
```

---

## Analyst

```
email: analyst@gmail.com
password: 123456
```

---

## Viewer

```
email: viewer@gmail.com
password: 123456
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

# 📄 Pagination

Transactions API supports pagination.

Example:

GET /api/transactions?page=1&limit=5

Query Parameters:

- page → Page number
- limit → Records per page

- ---

# 🔎 Filtering

You can filter transactions using query parameters.

Example:

GET /api/transactions?type=expense

Supported Filters:

- type (income / expense)
- category
- date range

---

# 🔐 Authorization

All protected APIs require JWT Token.
  
Authorization Header:
  
Authorization: Bearer <your_token>

---

# 🔒 Protected Routes

  These routes require authentication:
  
  - Users APIs
  - Transactions APIs
  - Dashboard APIs

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

# 🧪 Validation & Error Handling
* Input validation
* Proper status codes
* Error responses
* Role restriction validation

---

# 💾 Data Persistence
* MongoDB
* Mongoose Schema
* Structured Models

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

# 🚀 Future Improvements

- Frontend Dashboard Integration
- Export Reports
- Advanced Analytics
- User Profile Management

  ---


# 👨‍💻 Author

**Ayush**

GitHub
[https://github.com/ayush4742](https://github.com/ayush4742)


