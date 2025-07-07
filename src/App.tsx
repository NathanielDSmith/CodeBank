import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import JavaScriptBasics from './pages/JavaScriptBasics';
import ReactCommonTasks from './pages/ReactCommonTasks';
import CSSLayoutTricks from './pages/CSSLayoutTricks';
import GitDailyCommands from './pages/GitDailyCommands';
import RailsPage from './pages/RailsPage';
import PythonPage from './pages/PythonPage';
import TypeScriptPage from './pages/TypeScriptPage';
import VuePage from './pages/VuePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/javascript-basics" element={<JavaScriptBasics />} />
        <Route path="/react-common-tasks" element={<ReactCommonTasks />} />
        <Route path="/css-layout-tricks" element={<CSSLayoutTricks />} />
        <Route path="/git-daily-commands" element={<GitDailyCommands />} />
        <Route path="/rails" element={<RailsPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/typescript" element={<TypeScriptPage />} />
        <Route path="/vue" element={<VuePage />} />
      </Routes>
    </Router>
  );
}

export default App;
