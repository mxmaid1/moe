// server.js
// where your node app starts

// Credit to: Stratiz X Kensizo for helping me out with this.
// By: NuIlVoid.

// init project
// This project has some default code that glitch likes to throw in.
const express = require('express');
const app = express();
const axios = require('axios');
const {
    Client,
    RichEmbed
} = require('discord.js');
let client = new Client();
let token = "ODMwMjMxMTUzMjAxMzgxMzg3.YHDrAw.ziZ3orjNfBd0WFMP_hEEATVNhsA" //Your token here (Discord bot)
let scriptID = "AKfycby5kmtlE0hasbxSbgBEZAAR7sFzwmdElin3TPZnCXQzQk5cIQkIrn0N2qB79O_Mr-ab4Q" + "/exec" //Your scriptID for your google sheets
let BOTID = 1 // Prevents bot from talking to itself, make sure to put your bots ID there.
async function startApp() {
    client.login(token)
    console.log("Successfully logged Discord bot in");
}
startApp();
client.on("ready", () => {
    console.log("Ready");
})

let prefix = ';';

function isCommand(command, message) {
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
client.on("message", message => {
const usermsg = message.content.split(' ');
  if (message.author.id != BOTID) {
    if (message.guild.roles.cache.find(role => role.name === "cmdsAccess")) {
      const args = message.content.slice(prefix.length).split(" ");
      if (isCommand("gmessage", message)) {
        message.channel.send("Sending message: " + usermsg.slice(1).join(' '));
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=Global2&key=" +
            "test" +
            "&value=" +
            [usermsg.slice(1).join(' ')],
          {}
        );
        setTimeout(function(){ 
        message.channel.send("GoogleSheet Timeout, 5000 millisecond.");
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=Global2&key=" +
            "test" +
            "&value=" +
            false,
          {}
        );
       }, 5000);
      } else if (isCommand("load", message)) {
        message.channel.send("sending");
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=load&key=" +
            "test" +
            "&value=" +
            [usermsg.slice(1).join(' ')],
          {}
        );
        setTimeout(function(){ 
        message.channel.send("GoogleSheet Timeout, 5000 millisecond.");
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=load&key=" +
            "test" +
            "&value=" +
            false,
          {}
        );
       }, 5000);
      } else if (isCommand("gthun", message)) {
        message.channel.send("thunder command ranned!!");
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=smite&key=" +
            "test" +
            "&value=" +
            [usermsg.slice(1).join(' ')],
          {}
        );
        setTimeout(function(){ 
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=smite&key=" +
            "test" +
            "&value=" +
            false,
          {}
        );
       }, 5000);
      } else if (isCommand("server", message)) {
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=servers&key=" +
            "test" +
            "&value=" +
            [usermsg.slice(1).join(' ')],
          {}
        );
        setTimeout(function(){ 
        message.channel.send("GoogleSheet Timeout, 5000 millisecond.");
        axios.post(
          "https://script.google.com/macros/s/" +
            scriptID +
            "?sheet=servers&key=" +
            "test" +
            "&value=" +
            false,
          {}
        );
       }, 5000);
      }
    }
  }


  app.use(express.static("public"));

  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
  });

  client.on("error", console.error);
});


