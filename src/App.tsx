import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));
const JavaScriptBasics = lazy(() => import('./pages/JavaScriptBasics'));
const ReactCommonTasks = lazy(() => import('./pages/ReactCommonTasks'));
const CSSLayoutTricks = lazy(() => import('./pages/CSSLayoutTricks'));
const HTMLStructure = lazy(() => import('./pages/HTMLStructure'));
const StringManipulation = lazy(() => import('./pages/StringManipulation'));
const ArrayOperations = lazy(() => import('./pages/ArrayOperations'));
const GitDailyCommands = lazy(() => import('./pages/GitDailyCommands'));
const RailsPage = lazy(() => import('./pages/RailsPage'));
const PythonPage = lazy(() => import('./pages/PythonPage'));
const TypeScriptPage = lazy(() => import('./pages/TypeScriptPage'));
const VuePage = lazy(() => import('./pages/VuePage'));
const ObjectManipulation = lazy(() => import('./pages/ObjectManipulation'));
const DockerPage = lazy(() => import('./pages/DockerPage'));
const SQLBasics = lazy(() => import('./pages/SQLBasics'));
const AsyncProgramming = lazy(() => import('./pages/AsyncProgramming'));
const JavaPage = lazy(() => import('./pages/JavaPage'));
const CSharpPage = lazy(() => import('./pages/CSharpPage'));
const GoPage = lazy(() => import('./pages/GoPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
          <Route path="/sql-basics/*" element={<SQLBasics />} />
          <Route path="/async-programming/*" element={<AsyncProgramming />} />
          <Route path="/java/*" element={<JavaPage />} />
          <Route path="/csharp/*" element={<CSharpPage />} />
          <Route path="/go/*" element={<GoPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
