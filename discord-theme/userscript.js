// ==UserScript==
// @name         Discord Theme
// @namespace    https://lunaversity.dev
// @version      0.3
// @description  Clients can use this theme on any default pterodactyl build
// @author       Luna
// @match        https://demo.pterodactyl.io/*
// @grant        none
// ==/UserScript==


var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];
var link = document.createElement('link');
link.id = "lunar_discord_theme";
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://lunaversity.dev/discord_theme.css';
link.media = 'all';
head.appendChild(link);
