const http = require("http");


http.createServer((req,res)=>{

  if(req.url !== "/favicon.ico")
  {
    let operationArray = req.url.split("/");

    let op = operationArray[1];
    let numbers = [];
    
      for (var i = 2; i < operationArray.length; i++) {
        numbers.push(parseInt(operationArray[i]));
      }

    switch (op) {
      case "+":
        var result = 0;
        numbers.forEach(num => {result+= num});
        res.write(`<h1>The sum = ${result}</h1>`);
        break;
      case "-":
        var result = 0;
        numbers.forEach(num => {result -= num});
        res.write(`<h1>The subtraction = ${result}</h1>`);
        break;
      case "divide":
        
        var result = 1;
        numbers.forEach(num => {result /= num});
        res.write(`<h1>The division = ${result}</h1>`);
    
        break;
      case "*":
        var result = 1;
        numbers.forEach(num => {result *= num});
        res.write(`<h1>the multiplication = ${result}</h1>`);
        break;    
      default:
        res.write("invalid operation");
        break;
    }
  }
  res.end();
}).listen("7000",function () {
  console.log(`Listening to port 7000`);
})