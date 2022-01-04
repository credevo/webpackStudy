import {sum} from './math.js';
import './app.css';
import webpackLogo from './webpack.png';

window.addEventListener('DOMContentLoaded',()=>{
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1>1 + 2 = ${sum(1,2)} </h1>
        <div>
            <img src="${webpackLogo}" />
        </div>
    `
});
