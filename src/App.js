import "./App.css";
import HeaderTabs from "./Header/HeaderTabs";

function App() {
  return (
    // наш основной контейнер с содержимым
    <div className="container">
      <div className={"App"}>
        <HeaderTabs />
      </div>
    </div>
  );
}

export default App;
