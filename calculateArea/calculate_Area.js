let length;
let width;
// Inside the above function, fetch values from user as input. For this you need to get values using document.getElementById .
function calculateArea() {

    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

