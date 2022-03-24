import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // Pages
// import HomePage from "./Pages/HomePage";
// import AboutPage from "./Pages/AboutPage";
// import ArticlesListPage from "./Pages/ArticlesListPage";
// import ArticlePage from "./Pages/ArticlePage";
// import NotFoundPage from "./Pages/NotFoundPage";

// // Components
// import NavBar from "./Components/NavBar";

// import "./App.css";

import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

import Navbar from "./Components/Navbar";
import ShowReportList from "./Pages/ShowReportList";
import NewReport from "./Pages/NewReport";
import ToDoListPage from "./Pages/ToDoListPage";

import LogboekListPage from "./Pages/LogboekListPage";
import NewLogPage from "./Pages/NewLogPage";

function App() {
  const [currentPageName, setCurrentPageName] = useState("Logboek");

  return (
    <Router>
      <div className="App">
        <Header className="header" pageName={currentPageName} />
        <div id="page-body">
          <Routes>
            <Route path="/report/new" element={<NewReport />} />
            <Route path="/report" element={<ShowReportList />} />
            <Route path="/logboek/nieuw" element={<NewLogPage />} />
            <Route path="/logboek/zoek" element={<NewLogPage />} />
            <Route path="/logboek" element={<LogboekListPage />} />
            <Route path="/todo" element={<ToDoListPage />} />
            <Route exact path="/" element={<LogboekListPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Navbar setCurrentPageName={setCurrentPageName} />
      </div>
    </Router>
  );
}

export default App;
