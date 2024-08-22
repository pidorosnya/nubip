document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button element
    const button = document.getElementById('myButton');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Display an alert when the button is clicked
        alert('Button was clicked!');
    });
});