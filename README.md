# Mini Live Class Scheduler

A full-stack LMS (Learning Management System) application that allows teachers to schedule online classes using Google Calendar and automatically generate Google Meet links.

## Features

- Google OAuth Login
- Google Calendar Integration
- Automatic Google Meet Link Generation
- Create Online Classes/Sessions
- Invite Students via Email
- View Scheduled Classes
- Delete/Cancel Classes
- MongoDB Database Integration
- REST API Backend
- React Frontend

---

## Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- Passport.js
- Google APIs

### Database
- MongoDB
- Mongoose

### APIs Used
- Google OAuth 2.0
- Google Calendar API
- Google Meet Integration

---

## Project Structure

MiniLiveClassScheduler/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── public/
│
└── README.md

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/mini-live-class-scheduler.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI

GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback
```

Start backend:

```bash
node server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

Backend runs on:

```text
http://localhost:5000
```

---

## Application Flow

1. Teacher logs in using Google OAuth
2. Teacher creates a class/session
3. Google Calendar event is created
4. Google Meet link is generated automatically
5. Students receive invitations
6. Teacher can view or delete scheduled classes

---

## Screenshots

Add screenshots here after uploading images.

---

## Future Improvements

- JWT Authentication
- Protected Routes
- Student Dashboard
- Email Notifications
- Responsive UI
- Deployment Support

---

## Author

Uppara Uday
