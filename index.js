//console.log("HELLO BALI");

//Step 1

//console.log(process.argv);
/*
const params = process.argv;
let count = 0;
let sum = 0;

params.forEach(function(i) {
  if(count > 1) {
    sum += parseInt(i);
  }

  count++;
});

for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
*/


// STEP 2
/*
const fs = require('fs');

const filename = process.argv[2];

const lineSum = fs.readFileSync(filename)
                  .toString()
                  .split('\n')
                  .length-1;

//console.log(fs.readFileSync(filename));

console.log(lineSum);
*/
// Step 3
/*
const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, function(err, data) {

  const lineSum = data.toString()
                      .split('\n')
                      .length-1;

  console.log(lineSum);
});
*/
// Step 4
const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];

fs.readdir(dirPath, function(err, data) {
  const ext = "."+process.argv[3];


  data.forEach(function(i) {
    if(ext == path.extname(i)) {
      console.log(i);
    }
  });
});
