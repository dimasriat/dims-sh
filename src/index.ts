import { Cursor, HelloWorld, VisualManager } from './visual';

const dims = document.getElementById('dims');

const vm = new VisualManager([
  new HelloWorld('dims.sh\n.:-+*=%@#'),
  new Cursor(document.documentElement),
]);

setInterval(() => {
  dims.innerText = vm.getCurrentVisual().update().draw();
}, 100);

document.getElementById('dims-button').addEventListener('click', () => {
  vm.next();
});
