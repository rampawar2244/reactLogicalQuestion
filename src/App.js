// import "./App.css";
// import TodoList from "./components/ToDo/TodoList";
// function App() {
 
//   return (
//     <div className="App">
//      <TodoList />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import LanguageSelector from './components/LanguageSelectors';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <LanguageSelector />
      <h1>{t('greeting')}</h1>
      <Home />
      <About />
    </div>
  );
}

export default App;

