const { Client, Collection } = require("discord.js");
const fs = require('fs');
require('dotenv').config();
require('colors');

const client = new Client({
    intents: 3276543
});


global.colors = {
    default: 16777215,
    success: 10025880,
    error: 13458524,
};
global.emoji = {
    success: '✅',
    danger: '⚠️',
    error: '❌',
}

client.commands = new Collection();
client.commands_array = [];

require('./handlers/events').init(client);

client.login("");

module.exports = client;

// Введи это в консоль:
// npm i dotenv
// npm i discord.js
// npm i colors
// npm i ytdl-core

// Последнее действие в консоли:
// node .
