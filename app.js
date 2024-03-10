const { exec } = require("child_process");
const { spawn } = require("node:child_process");

const percentageOfBattery = (callBack) => {
  exec("pmset -g ps", (err, outPut) => {
    if (err) {
      console.log(err);
      return;
    }
    outPut = outPut.split("\t")[1].split(";")[0]; //!this have to change
    callBack(outPut);
  });
};
const stopToUse = () => {
  percentageOfBattery((fromeCallBack) => {
    const percentage = parseInt(fromeCallBack);
    if(percentage<=20 || percentage>=80){
        spawn("afplay", ["./ma_soundsbyjw_knock_at_the_door_1.wav"]);
    }
    console.log(fromeCallBack);
  });
};

const interval = 1000;
setInterval(stopToUse, interval);
