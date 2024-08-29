// ==UserScript==
// @name         iamkramztech Running Dogs Animation
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  Adds running dogs to any website
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to create the dog element
    function createDog() {
        var dog = document.createElement('img');
        dog.src = 'https://media.tenor.com/ePjGbe3qxbYAAAAi/golden-retriever-walking.gif'; // Replace with the URL of a running dog GIF
        dog.style.width = '100px';
        dog.style.position = 'fixed';
        dog.style.bottom = `${Math.random() * 100}px`; // Random vertical position
        dog.style.left = `-${Math.random() * 300}px`; // Random horizontal starting position
        dog.style.zIndex = '1000';
        dog.style.animation = `run-dog ${5 + Math.random() * 5}s linear infinite`;
        dog.style.animationDelay = `-${Math.random() * 10}s`; // Random delay for staggering
        document.body.appendChild(dog);
    }

    // Create multiple dogs
    for (var i = 0; i < 10; i++) { // Increased the number of dogs
        createDog();
    }

    // CSS for the dog animation
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes run-dog {
            0% { left: -200px; } /* Adjusted to start further off-screen */
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(style);

})();
