import '../styles/index.css';
import '../styles/exercise1.scss';
import '../styles/exercise2.scss';

import './Exercise2.js';

import ReactDOM from "react-dom";
import { Exercise2 } from "./Exercise2";

const app = document.getElementById("exercise2");
ReactDOM.render(<Exercise2 />, app);

console.log('App Ready');
