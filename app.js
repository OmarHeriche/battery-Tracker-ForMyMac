const { exec } = require("child_process");

exec("pmset -g ps", (err, outPut) => {
  if (err) {
    console.log(err);
    return;
  }
outPut=outPut.split('\t')[1].split(';')[0];
  console.log(outPut);
});
