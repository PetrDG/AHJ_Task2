export default class Goblin {
  constructor(img) {
    this.element = img;
  }

  set element(value) {
    this._element = document.createElement('img');
    this._element.src = value;
    this._element.classList.add('goblin');
  }

  get element() {
    return this._element;
  }

  move(box) {
    const lastIndex = box.findIndex((el) => el.querySelector('.goblin'));
    const index = Math.round(Math.random() * (box.length - 1));
    if (index === lastIndex) {
      this.move(box);
      return;
    }

    box[index].append(this.element);
  }
}
