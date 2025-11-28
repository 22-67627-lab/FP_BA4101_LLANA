const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Final Project</title>
        <style>
          body {
            margin: 0;
            font-family: "Segoe UI", Arial, sans-serif;
            background: linear-gradient(135deg, #0a3d91, #1d70f7);
            display: flex;
            justify-content: center;S
            align-items: center;
            height: 100vh;
            color: #003366;
          }

          .card {
            background: white;
            width: 600px;
            padding: 40px;
            border-radius: 18px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.25);
            text-align: center;
            animation: fadeIn 1s ease;
          }

          h1 {
            margin: 0;
            font-size: 50px;
            color: #043674;
          }

          p {
            margin: 8px 0 20px;
            font-size: 25px;
            color: #0a4fa3;
          }

          blockquote {
            font-size: 25px;
            padding: 10px 20px;
            /* border-left: 5px solid #1d70f7; */
            color: #1d70f7;
            font-style: italic;
            background: #eef5ff;
            border-radius: 10px;
            display: inline-block;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>IVAN ZAKI B. LLANA</h1>
          <p>BSIT BA-4101</p>
          <blockquote>“I walk by faith, not by sight”<br>- The Book of Eli (2010)</blockquote>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
