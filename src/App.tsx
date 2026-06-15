import JuegosCard from "./components/JuegosCard";
import { NavBar } from "./components/NavBar";
import { ChatWidget } from "./components/ChatWidget";

const App = () => {
  return (
    <div>
      <NavBar />
      <JuegosCard />
      <ChatWidget />
    </div>
  );
};

export default App;
