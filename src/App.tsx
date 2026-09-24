import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <h1>React State Management</h1>
      </main>
    </ThemeProvider>
  );
}

export default App;