const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMwMzk4ODIwODI1NzE4Nzg1.Yd1TbA.xTRt18I0gt-WJz5QhEC4kIe88_k"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)