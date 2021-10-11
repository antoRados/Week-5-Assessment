const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["There is good luck in your future!",
					 "You shall do well on this assessment!",
					 "DevMountain will help you land a great job!",
           "The Texans will win on Sunday!",
           "The Browns will lose this week",
           "You stock investments will take off!",
           "You will finally dunk a basketball!"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});

app.get("/api/request", (req, res) => {
  const request = ["Do 100 pushups!",
					 "Do 50 pullups!",
					 "Stand while working on lab!",
           "Stay hydrated!",
           "Get another drink of water!",
  ];
  let randomIndex = Math.floor(Math.random() * request.length);
  let randomRequest = fortunes[randomIndex];

  res.status(200).send(randomRequest);
});

app.get("/api/facts", (req, res) => {
  const facts = ["I am 31 years old",
					 "I speak 3 languages",
					 "I'm 6'0 tall",
           "I was born in Bosnia",
           "I studied Computer Science at BGSU",
  ];
  let randomIndex = Math.floor(Math.random() * facts.length);
  let randomFacts = facts[randomIndex];

  res.status(200).send(randomFacts);
});

app.listen(4000, () => console.log("Server running on 4000"));
