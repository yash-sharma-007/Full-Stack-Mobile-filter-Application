# Full Stack Mobile Filter Application

The Full Stack Mobile Filter Application is a responsive web platform allowing users to search, sort, and filter mobile devices. The frontend, built with React.js, interfaces with a Node.js and Express.js backend, using MongoDB for data storage. Users can refine results based on device type, operating system, price, and more.

- [Preview](https://mobile-full-stack-app-frontend.onrender.com/)
  
## Getting Started

### Prerequisites
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

  
### Clone the repository
```bash
git clone https://github.com/yash-sharma-007/Full-Stack-Mobile-filter-Application.git
```

### Navigate to the client directory
```bash
cd Full-Stack-Mobile-filter-Application/client
```

### Install frontend dependencies
```bash
npm install
```

### Navigate to the server directory
```bash
cd ../server
```
### Install backend dependencies
```bash
npm install
```

### Start the server using nodemon
```bash
nodemon index.js
```

### Navigate back to the client directory
```bash
cd ../client
```

### Start the React development server
```bash
npm start
```

### Access the application at [http://localhost:3000/](http://localhost:3000/)

### Create a .env file inside the client folder and add the following line
```bash
REACT_APP_BACKEND_API=http://localhost:5000
```
### Create a .env file inside the server folder and add the following lines
```bash
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.0qepvhg.mongodb.net/Mobile_App
FRONTEND_URL=http://localhost:3000
PORT=5000
```
### Dataset
```bash
mobiles.json
```
