import img from '../img/goblin.png';
import Game from './Game';
import Goblin from './Goblin';

const goblin = new Goblin(img);
const game = new Game(goblin);

const button = document.querySelector('.button-start');
button.onclick = function () {
  button.onclick = null;
  button.classList.add('hiden');
  this.start();
}.bind(game);
