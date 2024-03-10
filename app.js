const { exec } = require("child_process");

exec("ls", (err, outPut) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(outPut);
});
