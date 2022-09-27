let cowsay = require("cowsay");
const userInfo = require("./information");

console.log(
  cowsay.say({
    text: `Hi! I'm ${userInfo["name"]} and I ${userInfo["campus"]}`,
  })
);
