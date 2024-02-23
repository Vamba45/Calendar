import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import './styles/style.scss';
import { createDate } from './utils/helpers/date/createDate';
import { createMonth } from './utils/helpers/date/createMonth';

const rootNode: HTMLElement | any = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

console.log(createDate());
console.log(createMonth());

root.render(
    <Router>
        <Routes>
        </Routes>
    </Router>
);