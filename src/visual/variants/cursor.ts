import { IVisual } from '../manager';

export class Cursor implements IVisual {
  mouseX = 0;
  mouseY = 0;

  text = `(${this.mouseX}, ${this.mouseY})`;

  constructor(private target: HTMLElement) {
    this.target.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  draw(): string {
    return this.text;
  }

  update(): IVisual {
    this.text = `(${this.mouseX}, ${this.mouseY})`;
    return this;
  }
}
