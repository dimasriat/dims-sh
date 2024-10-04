import { getFoo } from './num';
import { HelloWorld, VisualManager } from './visual';

const dims = document.getElementById('dims');

const vm = new VisualManager([new HelloWorld()]);

dims.innerText = vm.getCurrentVisual().draw();

document.getElementById('dims-button').addEventListener('click', async () => {
  dims.innerText = vm.getCurrentVisual().update().draw();
});
