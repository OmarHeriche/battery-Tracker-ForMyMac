const { exec } = require("child_process");

const percentageOfBattery = (callBack) => {
  exec("pmset -g ps", (err, outPut) => {
    if (err) {
      console.log(err);
      return;
    }
    outPut = outPut.split("\t")[1].split(";")[0];
    // console.log(outPut);
    callBack(outPut);
  });
};
const stopToUse = () => {
    percentageOfBattery((fromeCallBack) => {
        console.log(fromeCallBack);
    });
};

const interval = 1000;
setInterval(stopToUse, interval);
