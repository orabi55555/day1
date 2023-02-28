const http = require("http");

 http.createServer((req,res)=>{
 
  if(req.url !== "/favicon.ico")
  {
    
    let operationArray = req.url.split("/");

    let num1 = Number(operationArray[2]);
    let num2 = Number(operationArray[3]);
    let op = operationArray[1];

    switch (op) {
      case "+":
        res.write(`<h1>The sum of ${num1} + ${num2} = ${num1 + num2}</h1>`);
        break;
      case "-":
        res.write(`<h1>The subtract of ${num1} - ${num2} = ${num1 - num2}</h1>`);
        break;
      case "divide":
        if(num2 !== 0)
          res.write(`<h1>The division of ${num1} / ${num2} = ${num1 / num2}</h1>`);
        break;
      case "*":
        res.write(`<h1>The multiplication of ${num1} * ${num2} = ${num1 * num2}</h1>`);
        break;    
      default:
        res.write("invalid operation");
        break;
    }
  }
  res.end();
}).listen("5000",()=> {
  console.log(`Listening to port 5000`);
})