var friends = ["Cam", "Bo", "Kerryon", "Deshaun", "Tristan"];
console.log(`${friends}length.toUpperCase`);


for (var f = 0; f < friends.length; f++) {
    for (var i = 99; i > 0; i--) {
        if (i === 2) {
            console.log(`${i} lines of code in the file, ${i}  lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1}  line of code in the file`);
        } else if (i === 1) {
            console.log(`${i} lines of code in the file, ${i}  lines of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);
        } else {
            console.log(`${i} lines of code in the file, ${i}  lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1}  lines of code in the file`);

        }
    }
}