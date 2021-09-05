import "./App.scss";
import Header from "./components/Header";
import NavBar from "./components/shared/NavBar";
import UserButtonContainer from "./components/UserButtonsContainer";

function App() {
  return (
    <div className="App">
      <section className="app-header">
        <NavBar />
      </section>
      <section className="app-body">
        <Header />
        <UserButtonContainer />
      </section>
    </div>
  );
}

export default App;
