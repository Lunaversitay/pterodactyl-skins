// ==UserScript==
// @name         Discord Theme
// @namespace    https://lunaversity.me
// @version      0.2
// @description  Easiest way to use the theme (noticiations are exclusive to gamepanel.co)
// @author       Luna
// @match        https://dino.gg/*
// @grant        none
// ==/UserScript==


var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];
var link = document.createElement('link');
link.id = "better_panel";
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://avasdemon.rocks/betterpanel.css';
link.media = 'all';
head.appendChild(link);
document.getElementById('notifications-markallread').children[0].style = "";
document.getElementsByName("query")[0].style.width = "100%"; // drizzy thing he did on gamepanel.co
