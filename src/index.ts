// import * as http from "http";
import memwatch from "@airbnb/node-memwatch";
// import url from "url";

function LeakingClass() {
}

// memwatch.gc();
var arr = [];
var hd = new memwatch.HeapDiff();

for (var i = 0; i < 10000; i++) arr.push(new LeakingClass);

var hde = hd.end();
console.log(JSON.stringify(hde, null, 2));

// var obj = {};
// http
//   .createServer(function (req, res) {
//     for (var i = 0; i < 1000; i++) {
//       obj[Math.random()] = Math.random();
//     }

//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World\n");
//   })
//   .listen(1337);

// console.log("Server running at http://127.0.0.1:1337/");
// console.log(process.pid);
