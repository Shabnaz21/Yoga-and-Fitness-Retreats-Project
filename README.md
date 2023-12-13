# ZenFitEscapes - Yoga and Fitness Retreats

ZenFitEscapes is an event management platform designed for rejuvenation and learning, curating unforgettable yoga and fitness retreats.


[Live Link](https://yoga-and-fitness-retreat-e3434.web.app) | [Server Link](https://github.com/Shabnaz21/Yoga-and-Fitness-Retreats-server)

## Project Overview

### Home Page Design
- <strong>Navbar</strong>
- <strong>Slider</strong>
- <strong>About Us</strong>
- <strong>Services</strong>
- <strong>Why You Should Choose Us</strong>
- <strong>FAQs</strong>

### Services Section
- Displays at least 6 event services.
- Each service includes a name, image, price, short description, and a specific button.
- Clicking the button directs users to the service detail route.

### Service Detail 
- A private/protected route accessible only when logged in.
- Displays detailed information about the selected service.
- User redirected to login page if not logged in.

### Authentication
- Implements Email and Password-based Authentication.
- Registration and Login pages with toggle functionality.
- Displays errors on Registration page for password conditions.
- Displays errors on Login page for password and email mismatches.
- Toast/alert for successful login or registration.
- Additional login option (GitHub, Google).

### Private Routes
- Private routes accessible only when logged in.
- No redirection to login page after page reload.
- User information, profile picture, and logout button on the header.

### Custom 404 Route 
For error handling.

### Responsive 
Desktop, Tablet, Mobile

### Database
Connect MongoDB server

## Technologies Used
- React
- Firebase
- React Router
- Axios
- React Toastify
- Swiper
