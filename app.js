// Question 3: Why does the counter start at NaN?
let count = parseInt(document.getElementById('counter-value').innerText);

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// ANSWER: if parseInt fails (returns NaN), ensure that the HTML element with id counter-value contains a valid integer text

// Question 4: What happens to the counter value in the HTML when increment is clicked?
incrementButton.addEventListener('click', function() {
  debugger
    count++;
    document.getElementById('counter-value').innerText = count;
});

// ANSWER: it should increase the count variable by 1 and update the HTML text to display the new count

// Question 5: Why does the decrement button not work?
decrementButton.addEventListener('click', function() {
    count--;
    document.getElementById('count-value').innerText = count;
});

// ANSWER: decrement button isnt updating the correct HTML element ('count-value' instead of 'counter-value')

// Question 6: Why does the reset function set the count to '0' as a string?
resetButton.addEventListener('click', function() {
    count = '0';
    document.getElementById('counter-value').innerText = count;
});

// ANSWER: the value assigned to count is enclosed in quotes ('0'), which represents a string literal

// Question 7: How can you monitor the value of count using breakpoints?
// ANSWER:in dev tools 

// Question 8: What is the scope of the count variable in DevTools?
// ANSWER:scope of `count` is within the global scope of the script

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// Question 10: Use the Console to track errors. Are there any errors being thrown?
