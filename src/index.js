import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const img = document.getElementById('img');
img.src = laughing;

console.log(generateJoke());
