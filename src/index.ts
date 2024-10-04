import { HelloWorld, VisualManager } from './visual';

const dims = document.getElementById('dims');

const vm = new VisualManager([
  new HelloWorld(),
  new HelloWorld('dimas riatmodjo'),
]);

setInterval(() => {
  dims.innerText = vm.getCurrentVisual().update().draw();
}, 100);

document.getElementById('dims-button').addEventListener('click', async () => {
  vm.next();
});
