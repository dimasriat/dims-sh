export class VisualManager {
  visuals: IVisual[];
  currentIndex = 0;

  constructor(visuals: IVisual[]) {
    this.visuals = visuals;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.visuals.length;
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.visuals.length) % this.visuals.length;
  }

  getCurrentVisual() {
    return this.visuals[this.currentIndex];
  }
}

export interface IVisual {
  update(): IVisual;
  draw(): string;
}
