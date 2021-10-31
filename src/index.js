import React from 'react';
//ядро реакта
import ReactDOM from 'react-dom';
import App from './App';

//Вызываем ф-цию рендер потом передаем компонент который необходимо отрисовать
// В рут мы помещаем блок в который мы будем монтировать этот компонент --App
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

