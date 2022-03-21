import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import ShowReportList from "./Pages/ShowReportList";
import NewReport from "./Pages/NewReport";

function App() {
  return (
    <div className="App">
      <Header className="header" pageName="" />
      {/* <HomePage /> */}
      {/* <ShowReportList /> */}
      <NewReport />
      <Navbar />
    </div>
  );
}

export default App;
