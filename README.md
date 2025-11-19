# Node.js Microservice – CRUD API with MongoDB

This project is a Node.js microservice built using Express.js and MongoDB.  
It includes CRUD operations for an `Item` model and a health check endpoint as required in the practical task.

---

## 📦 Dependencies

The service uses the following main dependencies:

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- Docker / Docker Compose


Setup Instructions:
1️⃣ Clone the Repository:

git clone https://github.com/<your-username>/nodejs-microservice.git

cd nodejs-microservice

2️⃣ Install Dependencies:

npm install

3️⃣ Configure Environment Variables:

Create a .env file in the root directory:

PORT=3000
MONGO_URI=mongodb://localhost:27017/microserviceDB

4️⃣ Start MongoDB Locally:

Make sure MongoDB is running on your system.

▶️ How to Run the Service:

Development Mode (with auto-reload):

npm run dev

Production Mode:

npm start

Service will be available at:

http://localhost:3000

▶️ API Endpoints:

Create Item:

POST /api/items

Get All Items:

GET /api/items

Get Item by ID:

GET /api/items/:id

Update Item:

PUT /api/items/:id

Delete Item:

DELETE /api/items/:id

❤️ Health Check

GET /health

Example:

{
  "status": "UP",
  "dbStatus": "Connected",
  "uptime": "30s"
}


