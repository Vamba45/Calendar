import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import './styles/style.scss';
import { createDate } from './utils/helpers/date/createDate';
import { createMonth } from './utils/helpers/date/createMonth';
import { createYear } from './utils/helpers/date/createYear';
import { Calendar } from './components/Calendar/Calenar';
import { App } from './App';

const rootNode: HTMLElement | any = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
 
root.render(
    <App/>
);