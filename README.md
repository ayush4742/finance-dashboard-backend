# 🚀 Finance Dashboard Backend API

A **Finance Dashboard Backend API** built using **Node.js, Express, MongoDB, JWT Authentication, Role-Based Access Control, and Swagger Documentation**.

This backend provides APIs for **User Management, Financial Transactions, and Dashboard Analytics**.

---

# 📘 API Documentation

Swagger Documentation:

🔗 https://finance-dashboard-backend-wu1m.onrender.com/api-docs/

---

# 📂 GitHub Repository

🔗 https://github.com/ayush4742/finance-dashboard-backend

---

# ✨ Features

* JWT Authentication
* Role-Based Access Control
* User Management
* Transaction Management
* Dashboard Analytics APIs
* MongoDB Database
* Swagger Documentation
* Production Deployment (Render)
* Secure Environment Variables

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Swagger UI
* Render
* dotenv

---

# 👥 User Roles

| Role    | Permissions   |
| ------- | ------------- |
| Admin   | Full Access   |
| Analyst | Create & View |
| Viewer  | Read Only     |

---

# 🔐 Authentication

JWT-based Authentication is used to secure APIs.

### Login API

**POST** `/api/users/login`

Example Request:

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "jwt_token"
}
```

---

# 👤 User APIs

| Method | Endpoint         | Access         |
| ------ | ---------------- | -------------- |
| POST   | /api/users       | Admin          |
| GET    | /api/users       | Admin, Analyst |
| PUT    | /api/users/:id   | Admin          |
| DELETE | /api/users/:id   | Admin          |
| POST   | /api/users/login | Public         |

---

# 💰 Transaction APIs

| Method | Endpoint              | Access                 |
| ------ | --------------------- | ---------------------- |
| POST   | /api/transactions     | Admin, Analyst         |
| GET    | /api/transactions     | Admin, Analyst, Viewer |
| DELETE | /api/transactions/:id | Admin                  |

---

# 📊 Dashboard APIs

These APIs provide analytics for the finance dashboard.

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| GET    | /api/dashboard/summary  | Total income, expense, balance |
| GET    | /api/dashboard/category | Category wise summary          |
| GET    | /api/dashboard/monthly  | Monthly trends                 |
| GET    | /api/dashboard/recent   | Recent transactions            |

---

# 📈 Dashboard Example

### GET /api/dashboard/summary

Response:

```json
{
  "success": true,
  "data": {
    "totalIncome": 25000,
    "totalExpense": 5000,
    "balance": 20000
  }
}
```

---

# 🔧 Installation

Clone the repository

```bash
git clone https://github.com/ayush4742/finance-dashboard-backend.git
```

Install dependencies

```bash
npm install
```

Create `.env` file

```
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=5000
```

Run server

```bash
npm run dev
```

---

# 📁 Project Structure

```
finance-backend
│
├── controllers
│   ├── userController.js
│   ├── transactionController.js
│   └── dashboardController.js
│
├── routes
│   ├── userRoutes.js
│   ├── transactionRoutes.js
│   └── dashboardRoutes.js
│
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models
│   ├── User.js
│   └── Transaction.js
│
├── swagger.js
├── app.js
└── package.json
```

---

# 🔒 Environment Variables

Create `.env`

```
MONGO_URI=
JWT_SECRET=
PORT=
```

---

# 🧪 Testing

APIs can be tested using:

* Swagger UI
* Postman
* Curl

---

# 📘 API Documentation

Swagger Documentation:

https://finance-dashboard-backend-wu1m.onrender.com/api-docs/

---

# 👨‍💻 Author

**Ayush Samrat**

GitHub
https://github.com/ayush4742

---

# 🎯 Project Highlights

* JWT Authentication
* Role Based Authorization
* Dashboard Analytics
* MongoDB Aggregation
* Swagger Documentation
* Production Deployment

---

# ✅ Project Status

* Fully Functional
* Production Ready
* Deployed
* Tested

---

# 📌 Conclusion

This Finance Dashboard Backend provides a scalable and secure backend architecture with role-based access control, analytics APIs, and complete Swagger documentation.

---
