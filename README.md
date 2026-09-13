# DevStack 🚀

DevStack is an interactive web platform designed for software engineers and architects to explore, select, and organize standard web technologies, frameworks, and databases into a unified tech stack.

## 🛠️ Built With
- **React.js** (Component architecture)
- **TypeScript** (Static typing and `verbatimModuleSyntax`)
- **Tailwind CSS & DaisyUI** (Responsive styling and utility-first design)
- **Vite** (Next-generation frontend tooling)
- **React-Toastify** (Dynamic user action notifications)

## ✨ Core Features
1. **Interactive Stack Builder:** Add tools and frameworks to a real-time sidebar with duplicate prevention and instant card state synchronization.
2. **Unified Gradient Theming:** Single-point CSS custom variable configuration controlling the brand identity across buttons, text highlights, and decorative badges.
3. **Responsive Grid & Sticky Drawer:** Fully responsive 3-column, 2-column, and 1-column layout with an ergonomic mobile hamburger menu and sticky sidebar.

---

## ❓ React Conceptual Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that looks like HTML. It allows developers to write UI markup directly inside JavaScript files. React uses JSX because it combines template logic and UI design together, making components easier to read, write, and maintain.

### 2. What is the difference between props and state?
- **Props** (short for properties) are read-only arguments passed from a parent component down to a child component. They cannot be changed by the receiving child.
- **State** is dynamic, local memory managed within the component itself. When state changes (via updater functions), the component re-renders to display the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook adds reactive state to a functional component. It returns the current state value and a function to update it. In this project, `useState` is used to store:
- The loaded list of tools (`technologies`).
- The user's selected items (`stack`).
- The loading spinner status (`isLoading`).
- The mobile navbar drawer state (`isMobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook lets components perform side effects like fetching data, modifying the DOM, or setting timers. In this project, `useEffect` with an empty dependency array (`[]`) runs on initial mount to fetch the local `technologies.json` file asynchronously and populate the state without freezing the UI.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on the `key` prop to identify which items have changed, been added, or been deleted during re-renders. Using unique keys (like `tech.id`) prevents unnecessary DOM operations and preserves component state stability across list mutations.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the process of displaying different UI elements based on specific logical conditions (such as boolean flags or data length). 

**Example used in the Stack Sidebar (`StackSidebar.tsx`):**
```tsx
{stack.length === 0 ? (
  <div className="py-12 text-center">Your stack is empty</div>
) : (
  stack.map((item) =>
)}