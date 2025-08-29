// src/App.jsx
import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Notification from './components/Notification/Notification';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'; // Import a spinner
import './styles/global.css';

function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([
    { id: count, title: "Welcome Message", text: "Welcome to my portfolio", isShow: true },
  ]);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  // Simulate a data-fetching delay with useEffect
  useEffect(() => {
    // In a real application, you would put your API call here.
    // The setState would be called after the data is fetched.
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Wait for 2 seconds before showing the content
  }, []);

  useEffect(() => {
    setCount(count + 1);
  }, [messages]);

  // Conditional rendering of the loading screen
  if (isLoading) {
    return (
      <div className="loading-screen">
        <ClimbingBoxLoader
          color="#36d7b7" // Customize the spinner's color
          size={20}
        />
      </div>
    );
  }

  // Render the main app content once loading is complete
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          <Contact setMessages={setMessages} count={count} setCount={setCount} />
        </main>
      </div>

      <Notification messages={messages} setMessages={setMessages} />
    </ThemeProvider>
  );
}

export default App;