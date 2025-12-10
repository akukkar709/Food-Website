<<<<<<< HEAD
# Pizza-Genie
=======
# Food App - React Vite

A modern food application built with React and Vite featuring a beautiful login and signup interface.

## Features

- ✨ Modern, responsive UI with gradient design
- 🔐 Login and Sign Up modals
- 📱 Mobile-friendly design
- ⚡ Fast development with Vite
- 🎨 Beautiful animations and transitions

## Project Structure

```
Food/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Main header with login/signup buttons
│   │   ├── LoginModal.jsx      # Login form modal
│   │   └── SignupModal.jsx     # Sign up form modal
│   ├── styles/
│   │   ├── Header.css          # Header styles
│   │   └── Modal.css           # Modal and form styles
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Food
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Features Breakdown

### Header Component
- Sticky header with gradient background
- Login button (outlined style)
- Sign Up button (filled style)
- Responsive navigation

### Login Modal
- Email and password fields
- Form validation
- Error handling
- Link to switch to Sign Up
- Loading state

### Sign Up Modal
- Full name, email, password, and confirm password fields
- Comprehensive form validation
- Password matching validation
- Error handling
- Link to switch to Login
- Loading state

## Styling

The app uses a modern color scheme:
- Primary gradient: `#667eea` to `#764ba2`
- Clean white modals with subtle shadows
- Smooth animations and transitions
- Mobile-responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration
- User authentication with Firebase/Auth0
- Password reset functionality
- Social login (Google, GitHub, etc.)
- User profile management
- Food listing and search
- Recipe details and reviews

## License

MIT
>>>>>>> 36fb86c (Initial commit)
