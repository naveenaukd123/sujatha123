window.onload = sortArray();

function shuffleArray() {
    // clearing the div area
    document.getElementById("wrapper").innerHTML = '';
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentId = arr.length;
    // To shuffle array
    while (0 !== currentId) {
        let randomId = Math.floor(Math.random() * currentId);
        currentId -= 1;
        let tmp = arr[currentId];
        arr[currentId] = arr[randomId];
        arr[randomId] = tmp;
    }
    // For create the div accordingly
    for (i = 0; i < arr.length; i++) {
        var newDiv = document.createElement('div');
        createInternalDiv(arr);
    }
}
function sortArray() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // To clear div and sort it
    document.getElementById("wrapper").innerHTML = '';
    for (i = 0; i < arr.length; i++) {
        createInternalDiv(arr);
    }
}

function createInternalDiv(arr) {
    // Creating element and appending it to parent wrapper
    var newDiv = document.createElement('div');
    newDiv.innerHTML = arr[i];
    newDiv.setAttribute('class', 'w-30 div-' + arr[i]);
    document.getElementById("wrapper").appendChild(newDiv);
}