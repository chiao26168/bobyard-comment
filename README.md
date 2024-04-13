# Bobyard Comment System
This is a full-stack application that demonstrates basic CRUD operations on comments.
- Frontend: React (not started yet)
- Backend: Node.js, Express, and PostgreSQL

## Features

- Edit text of existing comments
- Add a comment, with new text (from “Admin” user)
- Delete existing comments
- List comments with pagination

## Usage
- Set Up a PostgreSQL Database
### Env Variables
Rename the `.env.example` file to `.env` and add the following

```
PORT=5001
NODE_ENV=development
USER=ADD_YOUR_USER
HOST=ADD_YOUR_HOST
DATABASE=ADD_YOUR_DATABASE
PASSWORD=ADD_YOUR_PASSWORD
PG_PORT=ADD_YOUR_PG_PORT
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5001)
npm run dev

# Run backend only
npm run server
```

### Seed Database

You can use the following commands to seed the database with some comments as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
## Testing Backend APIs

Get list of comments with pagination
```
curl --location 'http://localhost:5001/api/comments?page_num=1&page_size=10'
```

Get a comment by id
```
curl --location 'http://localhost:5001/api/comments/1'
```

Create a new comment
```
curl --location 'http://localhost:5001/api/comments' \
--header 'Content-Type: application/json' \
--data '{
    "text": "New Comment",
    "image": ""
}'
```

Update a comment by id
```
curl --location --request PUT 'http://localhost:5001/api/comments/1' \
--header 'Content-Type: application/json' \
--data '{
    "text": "Updated text"
}'
```

Delete a comment by id
```
curl --location --request DELETE 'http://localhost:5001/api/comments/2'

```

## Next Steps

The backend functionality is nearly complete, and the focus will now shift towards developing the frontend. I will add a post as a place holder and below the post would have a "Add a comment" textbox for users to add comments. Next, I'll create a comments component to display the comments. It will support pagination, allowing users to view a limited number of comments at a time. Each comment will have options to update or delete it by clicking the respective buttons. At the bottom of the comments section, I'll add a pagination component. This will allow users to navigate through different pages of comments.
