import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />

      <main>
        <TaskManager />
      </main>
    </ThemeProvider>
  );
}

export default App;