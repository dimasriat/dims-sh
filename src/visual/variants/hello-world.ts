import { IVisual } from '../manager';

export class HelloWorld implements IVisual {
  fullText: string;
  currentIndex = 0;

  constructor(fullText?: string) {
    this.fullText = fullText ?? 'hello world';
  }

  draw(): string {
    return this.modifyText(this.fullText);
  }

  update(): IVisual {
    this.currentIndex = (this.currentIndex + 1) % this.fullText.length;

    return this;
  }

  private modifyText(textOriginal: string) {
    const text = textOriginal.split('');
    text[this.currentIndex] = `(${text[this.currentIndex].toUpperCase()})`;
    return text.join('');
  }
}
