## Keeper App

Access the live app here: **[Keeper App](https://keeper-notes-app-react-210r.onrender.com)**

Note: It may take up to **60 seconds to load** as the app is hosted on Render's free tier.

---

### Description

**Keeper App** is a React-based note-taking application inspired by Google Keep. It was built to practice handling form input, conditional rendering, component communication through props, and array manipulation using React hooks. The app allows users to create, view, and delete individual notes with a simple and intuitive interface.

In this project, I worked with multiple components such as `CreateArea`, `Note`, `Header`, and `Footer` to break down functionality and UI. The note input expands when clicked, enhancing the user experience through conditional rendering. Notes are stored as an array of objects with unique IDs, and they can be dynamically added or removed. Material UI icons and components like `Fab`, `AddIcon`, `Zoom`, and `DeleteIcon` were used to enhance the visual design and interactivity.

This project strengthened my understanding of `useState`, controlled form inputs, conditional UI behavior, and list rendering using `.map()` in React.

---

### Features

- Create notes with a title and content.
- Expandable note input area for a cleaner interface.
- Add notes by clicking the floating "+" button.
- Delete individual notes with a trash icon.
- Responsive and minimal design inspired by Google Keep.
- Built using React and enhanced with Material UI components.

---

### Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **React Hooks (useState)**: For managing input and notes state.
- **Material UI**: For modern icons, animations, and UI components.
- **JSX**: For writing structured UI code in React.
- **CSS**: For styling the application layout.

---

### How It Works

- **App Component**: Manages the state for form data and the array of notes. Handles adding and deleting notes.
- **CreateArea Component**: A form that allows users to input the note's title and content. It expands when clicked.
- **Note Component**: Displays each note along with a delete button that removes it from the list.
- **Header & Footer Components**: Provide a clean header and dynamic copyright.

---

### Installation

To run this app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/keeper-notes-app.git
   ```

2. Navigate into the project directory:
   ```bash
   cd keeper-notes-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173)
