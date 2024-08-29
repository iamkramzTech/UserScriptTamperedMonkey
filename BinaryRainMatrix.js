// ==UserScript==
// @name         Binary Matrix Rain Effect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a Matrix-style rain effect with binary digits to any website without hiding content
// @author       iamkramzTech
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log('Binary Matrix Rain Script is running');

    // Create and append the canvas element
    var canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none'; // Let clicks pass through the canvas
    document.body.appendChild(canvas);
    console.log('Canvas element added to the page');

    var ctx = canvas.getContext('2d');

    // Set the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log('Canvas dimensions set: ', canvas.width, canvas.height);

    // Handle window resize
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        console.log('Canvas resized');
    });

    // Set up the binary digits and expressions
    var binaryDigits = '01';
    var expressions = ['0', '1', '10', '11', '101', '110']; // Example binary expressions
    var characters = binaryDigits.split('').concat(expressions);

    // Set up the columns
    var fontSize = 10,
        columns = canvas.width / fontSize;

    // Set up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Draw function
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas to avoid smudging
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Use a very light background for transparency
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';
        for (var i = 0; i < drops.length; i++) {
            var text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Green color for text with reduced opacity
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
        }
    }

    // Loop the animation
    setInterval(draw, 33);
    console.log('Animation started');
})();
