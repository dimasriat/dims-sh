import { getFoo } from './num';
import figlet from 'figlet';

import standard from 'figlet/importable-fonts/Standard.js';

console.log('Hello, World!');

const dims = document.getElementById('dims');

dims.innerText = 'fck webpack';

figlet.parseFont('Standard', standard);
dims.innerText = figlet.textSync('dims . sh');

document.getElementById('dims-button').addEventListener('click', async () => {
  dims.innerText = 'loading...';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  dims.innerText = getFoo();
});
