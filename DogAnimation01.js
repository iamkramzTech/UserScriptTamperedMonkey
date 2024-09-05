// ==UserScript==
// @name         iamkramztech Running Dogs Animation-02
// @namespace    http://tampermonkey.net/
// @version      0.2.2
// @description  Adds running dogs to any website and changes the color scheme
// @author       iamkramzTech
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to create the dog element
    function CreateDogs() {
        const dog = document.createElement('img');
        dog.src = 'https://media.tenor.com/fvKZ5D_wAOcAAAAi/wheelchair-dog-wheelchair.gif';
        // dog.src = 'https://media.tenor.com/ePjGbe3qxbYAAAAi/golden-retriever-walking.gif'; // Replace with the URL of a running dog GIF
        dog.style.width = '100px';
        dog.style.position = 'fixed';
        dog.style.top = `${Math.random() * 100}vh`; // Random vertical position across the viewport height
        dog.style.left = `-${Math.random() * 300}px`; // Random horizontal starting position
        dog.style.zIndex = '1000';
        dog.style.animation = `run-dog ${5 + Math.random() * 5}s linear infinite`;
        dog.style.animationDelay = `-${Math.random() * 10}s`; // Random delay for staggering
        document.body.appendChild(dog);
    }

    // Create multiple dogs
    for (let i = 0; i < 10; i++) { // Increased the number of dogs
        CreateDogs();
    }

    // Function to create snowflakes
    function CreateSnowFlakes() {
        var snowflake = document.createElement('div');
        snowflake.innerHTML = '❄'; // Snowflake symbol
        snowflake.style.position = 'fixed';
        snowflake.style.top = `-${Math.random() * 20}px`; // Random starting position above the viewport
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position across the viewport width
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
        snowflake.style.opacity = Math.random(); // Random opacity
        snowflake.style.color = '#ffffff'; // Snowflake color
        snowflake.style.zIndex = '1000';
        snowflake.style.pointerEvents = 'none'; // Prevent interaction with snowflakes
        snowflake.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`; // Fall animation
        document.body.appendChild(snowflake);

        // Remove snowflake after animation ends to avoid clutter
        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    // Create multiple snowflakes
    setInterval(CreateSnowFlakes, 200); // Generate a new snowflake every 200ms

    // CSS for the dog animation
    const styles = document.createElement('style');
    styles.innerHTML = `
        @keyframes run-dog {
            0% { left: -200px; } /* Adjusted to start further off-screen */
            100% { left: 100%; }
        }
          @keyframes fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); } /* Fall from top to bottom */
        }
        /* Change color scheme */
        body {
             background-color: #1b1b1b !important;
            color: #ffffff !important;
        }
         a {
            color: #ffa31a !important;
        }
         a .pHiOh {
            color: #ffa31a !important;
        }
         div,header, nav, span,footer {
            //background-color: #1b1b1b !important; /* Darker background for headers, navigation, and footers */
            color: 	#ffa31a !important
        }
        button,input {
            background-color: #1b1b1b !important;
            color: 	#ffa31a !important;

        }
        button:hover {
            background-color: #ffa31a !important;
        }

        /* End of styles*/
    `;
    document.head.appendChild(styles);

})();

