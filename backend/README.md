🛒 E-Commerce Backend API Documentation
🌐 Base URL
http://127.0.0.1:8000/api/

1️⃣ Authentication APIs
1.1 Register User

Endpoint

POST /users/register/


Body

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "test12345"
}


Response

{
  "id": 1,
  "username": "testuser",
  "email": "test@example.com"
}


Permissions: Public (no auth required)

1.2 Login User

Endpoint

POST /users/login/


Body

{
  "username": "testuser",
  "password": "test12345"
}


Response

{
  "token": "abc123xyz",
  "user_id": 1,
  "username": "testuser"
}


Notes:

Save the token for authenticated requests.

1.3 Logout User

Endpoint

POST /users/logout/


Headers

Authorization: Token <your-token>


Body: Empty

Response

{
  "message": "Logged out successfully"
}


Permissions: Authenticated users only

2️⃣ Product APIs
2.1 List Products

Endpoint

GET /products/


Response Example

[
  {
    "id": 1,
    "name": "Sunscreen",
    "description": "SPF 30 sunscreen",
    "price": 550,
    "category": 3,
    "variants": [
      {
        "id": 1,
        "size": "100ml",
        "color": "White",
        "stock": 50
      }
    ]
  }
]


Permissions: Public

2.2 Create Product (Admin Only)

Endpoint

POST /products/create/


Headers

Authorization: Token <admin-token>


Body

{
  "name": "Sunscreen",
  "description": "SPF 30 sunscreen",
  "price": 550,
  "category": 3,
  "variants": [
    {
      "size": "100ml",
      "color": "White",
      "stock": 50
    },
    {
      "size": "200ml",
      "color": "Yellow",
      "stock": 30
    }
  ]
}


Response

{
  "id": 1,
  "name": "Sunscreen",
  "description": "SPF 30 sunscreen",
  "price": 550,
  "category": 3,
  "variants": [
    {
      "id": 1,
      "size": "100ml",
      "color": "White",
      "stock": 50
    }
  ]
}

2.3 List Categories

Endpoint

GET /products/categories/


Response

[
  {
    "id": 3,
    "name": "Skincare"
  }
]


Permissions: Public

2.4 Create Category (Admin Only)

Endpoint

POST /products/categories/create/


Headers

Authorization: Token <admin-token>


Body

{
  "name": "Skincare"
}


Response

{
  "id": 3,
  "name": "Skincare"
}

3️⃣ Order APIs
3.1 Create Order

Endpoint

POST /orders/


Headers

Authorization: Token <user-token>


Body

{
  "items": [
    {
      "product": 1,
      "variant": 2,
      "quantity": 2
    },
    {
      "product": 3,
      "quantity": 1
    }
  ]
}


Response

{
  "id": 1,
  "user": 1,
  "user_name": "testuser",
  "status": "created",
  "items": [
    {
      "id": 1,
      "product": 1,
      "variant": 2,
      "quantity": 2,
      "price": 550
    },
    {
      "id": 2,
      "product": 3,
      "variant": null,
      "quantity": 1,
      "price": 300
    }
  ],
  "created_at": "2026-01-14T05:07:06.527149Z",
  "updated_at": "2026-01-14T05:07:06.527149Z"
}


Permissions: Authenticated users only

3.2 List Orders

Endpoint

GET /orders/


Headers

Authorization: Token <token>


Notes:

Users see only their own orders

Admin sees all orders

3.3 Update Order Status (Admin Only)

Endpoint

PATCH /orders/<id>/update-status/


Headers

Authorization: Token <admin-token>


Body

{
  "status": "shipped"
}


Response

{
  "id": 1,
  "status": "shipped"
}

4️⃣ Authentication Rules

Public APIs: /users/register, /users/login, /products/, /products/categories/

Protected APIs: /users/logout, /products/create, /categories/create, /orders/

Header Format:

Authorization: Token <token>