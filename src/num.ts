const a: number = 42;
const b: number = 69;

export function getFoo() {
  return `foo: ${a} + ${b} = ${a + b} | ${new Date().toISOString()}`;
  // return (
  //   'foo: ' + a + ' + ' + b + ' = ' + (a + b) + ' | ' + new Date().toISOString()
  // );
}
