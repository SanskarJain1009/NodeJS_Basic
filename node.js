const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Box shadow and text shadow</title>
  </head>
  <style>
  .container{
      display: flex;
  }
  .card{
      padding: 23px 12px;
      margin: 23px 12px;
      /* border: 2px solid red; */
      background-color: burlywood;
      /* box-shadow: offset-x offset-y color; */
      /* box-shadow: offset-x offset-y blur-radius color; */
      /* box-shadow: offset-x offset-y blur-radius spread-radius color; */
  
      /* box-shadow: 10px 13px green; */
      /* box-shadow: -10px -13px green; */
      /* box-shadow: 7px 5px 10px green;
      box-shadow: -7px -5px 10px green; */
      /* box-shadow: -7px -5px 10px 34px green; */
      /* box-shadow: -7px -5px 10px 34px rgba(71, 172, 172, 0.5); */
      box-shadow: inset 3px 5px green;
  
      box-shadow: 3px 5px green, 4px 6px red;
  }
  .card h2{
      /* text-shadow: 3px 4px red; */
      /* text-shadow: 3px 2px 2px white; */
      text-shadow: -3px -2px 2px white;
  }
  </style>
  <body>
      <div class="container">
          <div class="card" id="card-1">
             <h2>This is C++ Course</h2>
             <p>I have started C++ course which does not mean that we will stop this course. We will continue this course to completion. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium, doloremque enim repellat impedit autem nostrum facilis odio omnis optio voluptates beatae mollitia temporibus voluptas consequuntur harum animi totam molestiae labore architecto ratione qui!</p>
          </div>
          <div class="card" id="card-2">
              <h2>This is HTML Course</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat doloribus molestiae velit ipsum, aliquam officia ratione excepturi in officiis, incidunt quo est pariatur tempore ex, distinctio nostrum! Sint non doloribus rem obcaecati sunt.</p>
          </div>
          <div class="card" id="card-3">
             <h2>Card3</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur molestiae, placeat quas perferendis quibusdam atque omnis distinctio obcaecati dolor, tempora unde deserunt iure nam. Iste labore eveniet esse deserunt?</p>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
