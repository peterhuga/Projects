
    var direction = Math.floor(Math.random() * 2);
    var row;
    var col;
   
    if (direction === 1) {
        row = Math.floor(Math.random() * 7);
        col = Math.floor(Math.random() * (7 - 3 + 1));
    } else {
        row = Math.floor(Math.random() * (7 - 3 + 1));
        col = Math.floor(Math.random() * 7);
    };

    var newShipLocations = [];
    for (var i = 0; i < 3; i++) {
        if (direction === 1) {
            newShipLocations.push(row + "" + (col + i));
        } else {
            newShipLocations.push((row + i) + "" + col);
        }
    };
    
console.log(direction);
console.log(row);
console.log(newShipLocations);


