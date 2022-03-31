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

import LogboekListPage from "./Pages/LogboekListPage";
import NewLogPage from "./Pages/NewLogPage";
import SingleLogPage from "./Pages/SingleLogPage";

import LayoutPage from "./Pages/LayoutPage";

function App() {
  const [currentPageName, setCurrentPageName] = useState("LOGBOEK");

  return (
    <Router>
      <Header className="header" pageName={currentPageName} />
      <div className="App">
        {/* <div id="page-body"> */}
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<LogboekListPage />} />
            <Route path="/logboek" element={<LogboekListPage />} />
            <Route path="/logboek/nieuw" element={<NewLogPage />} />
            <Route path="/logboek/zoek" element={<NewLogPage />} />
            <Route path="/log" element={<SingleLogPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
