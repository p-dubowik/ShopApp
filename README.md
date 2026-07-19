* * Live demo
https://proffee-bm1j.onrender.com/

__________________________
PROFFEE - web coffee shop.

* Purpose

PROFFEE is a web service allowing users to browse products and place orders.

The application offers:

  -rendering products list
  -displaying featured products in 'Featured Products' section
  -browsing product details
  -adding products to cart
  -managing cart items details
  -placing orders via order form

PROFFEE is a fullstack application consisting of React frontend and Nest API server backend.
__________________

* * Launching Project

* Requirements

To run the project you will need:

  -Node.js (18.0.0 or newer)
  -npm or yarn
  -PostgreSQL database access

* Installation

1. clone the repository --- git clone https://github.com/p-dubowik/ShopApp ---

2. Navigate to the project directory --- cd shop-app ---

3. Install dependencies ---  yarn install ---

4. Create a .env file
  4.1 Create environment variable DATABASE_URL="database-connection-string"

5. Apply db migarations --- npx prisma migrate deploy ---

6. (Optional) Populate database --- npx prisma db seed ---

7. Start the application --- yarn start ---
  -At launch app will be availaible on http://localhost:8000

* Technical Information

Technology Stack:
  Frontend:
    -React
    -Redux
    -React Router
    -Bootstrap
    -SCSS Modules
  Backend:
    -NestJS
    -Prisma ORM
    -PostgreSQL

Database:
  The project uses a PostgreSQL database. To connect the application with the database, configure the DATABASE_URL environment variable with a valid PostgreSQL connection string.
  After configuring the database, the application can access all availaible features like loading products and placing orders.

* Project Structure

src - NestJS backend

client - frontend React app

prisma - ORM configuration and database schema