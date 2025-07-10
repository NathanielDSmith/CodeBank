import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import JavaScriptBasics from './pages/JavaScriptBasics';
import ReactCommonTasks from './pages/ReactCommonTasks';
import CSSLayoutTricks from './pages/CSSLayoutTricks';
import HTMLStructure from './pages/HTMLStructure';
import StringManipulation from './pages/StringManipulation';
import ArrayOperations from './pages/ArrayOperations';
import GitDailyCommands from './pages/GitDailyCommands';
import RailsPage from './pages/RailsPage';
import PythonPage from './pages/PythonPage';
import TypeScriptPage from './pages/TypeScriptPage';
import VuePage from './pages/VuePage';
import ObjectManipulation from './pages/ObjectManipulation';
import DockerPage from './pages/DockerPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/javascript-basics/*" element={<JavaScriptBasics />} />
        <Route path="/react-common-tasks/*" element={<ReactCommonTasks />} />
        <Route path="/css-layout-tricks/*" element={<CSSLayoutTricks />} />
        <Route path="/html-structure/*" element={<HTMLStructure />} />
        <Route path="/string-manipulation/*" element={<StringManipulation />} />
        <Route path="/array-operations/*" element={<ArrayOperations />} />
        <Route path="/git-daily-commands/*" element={<GitDailyCommands />} />
        <Route path="/rails/*" element={<RailsPage />} />
        <Route path="/python/*" element={<PythonPage />} />
        <Route path="/typescript/*" element={<TypeScriptPage />} />
        <Route path="/vue/*" element={<VuePage />} />
        <Route path="/object-manipulation/*" element={<ObjectManipulation />} />
        <Route path="/docker-basics/*" element={<DockerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
