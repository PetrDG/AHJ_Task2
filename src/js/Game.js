export default class Game {
  constructor(element) {
    this.element = element;
    this.hitPoints = document.querySelector('.hit-points');
    this.missPoints = document.querySelector('.miss-points');
    this.board = document.querySelector('.container');
    this.boardItems = Array.from(this.board.querySelectorAll('.item'));
    this.start = this.start.bind(this);
    this.onClick = this.onClick.bind(this);
    this.intervalId = null;
    this.toggle = false;
  }

  start() {
    this.board.addEventListener('click', this.onClick);
    this.intervalId = setInterval(this.run.bind(this), 1000);
  }

  run() {
    if (this.toggle) this.miss();
    this.toggle = true;
    this.element.move(this.boardItems);
  }

  onClick(e) {
    e.preventDefault();
    if (e.target.closest('.goblin') !== null) {
      this.hit();
      this.toggle = false;
    }
  }

  hit() {
    this.hitPoints.textContent = +this.hitPoints.textContent + 1;
  }

  miss() {
    this.missPoints.textContent = +this.missPoints.textContent + 1;
    if (+this.missPoints.textContent === 5) this.gameOver();
  }

  gameOver() {
    clearInterval(this.intervalId);
    alert(`Конец игры! \n Удачных попаданий ${this.hitPoints.textContent}`);
    this.hitPoints.textContent = 0;
    this.missPoints.textContent = 0;
    this.toggle = false;
    this.start();
  }
}
