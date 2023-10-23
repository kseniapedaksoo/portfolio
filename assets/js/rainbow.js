'use strict'
/* 
   This code applies a colour animation effect to the text inside a div HTML element
   with the ID 'delighted-text.' The effect splits the text into individual
   characters, wraps them in <span> elements, and continuously changing their colour
   in a rainbow-like pattern
*/
document.addEventListener("DOMContentLoaded", () => {
    (function () {
        //Initialise  variables
        let angle = 0;
        let selectedElement = document.getElementById('delighted-text');
        let textLength;
        let phaseJump;
        let spans;

        // Function to wrap text in <span> elements
        function wrapTextInSpans(element) {
            let text = element.textContent.split('');
            textLength = text.length;
            phaseJump = 360 / textLength;

            // Replace the element's innerHTML with <span> elements for each character
            element.innerHTML = text.map(function (char) {
                return '<span>' + char + '</span>';
            }).join('');

            // Return an array of the created <span> elements
            return element.children;
        }

        // Function to update the color of individual characters
        function updateColors() {
            for (var i = 0; i < textLength; i++) {
                // Calculate and set the color of each character using HSL values
                spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 37%, 73%)';
            }
            angle++;
            requestAnimationFrame(updateColors);
        }

        //Call the wrapTextInSpans function to prepare the text for the animation
        //and initiate the colour animation by calling the updateColors function
        spans = wrapTextInSpans(selectedElement);
        updateColors();
    })();

})