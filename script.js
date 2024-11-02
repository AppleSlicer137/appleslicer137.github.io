document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked! Tim\'s world!');
    console.log('Environment Variable TEST_SECRET:', process.env.TEST_SECRET);
});
console.log('Tim\'s world!');