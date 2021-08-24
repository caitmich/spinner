process.stdout.write('hello from spinner2.js... \rheyyy\n');

let spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100

for(const items of spinnerArr){
setTimeout(
  () => {
    process.stdout.write('\r' + items + '   ');
  }, delay += 200);
  setTimeout( () => {
    process.stdout.write('\n')}, 3000)

}
