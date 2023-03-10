// В index.js импортируем библиотеки/модули, подключаем(импортируем) новые страницы 

// Маршрутизация проекта !(Установить npm i react-router-dom) 6 Версия используется
//<BrowserRouter>
//    <Routes>
//      <Route path='/' element={<App/>}/> Ниже пойдет добавление новых страниц
//      <Route path='/about' element={<About/>}/>
//      <Route path='/blog' element={<Blog/>}/>
//    </Routes>
//</BrowserRouter>

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';

console.log('Версия React: ' + React.version);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
