"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked', message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'ようこそ'));
}
//# sourceMappingURL=analytics.js.map