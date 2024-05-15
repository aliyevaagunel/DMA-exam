function swapCase(string) {
    let swappedString = "";
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}


console.log(swapCase("aBcD")); 
console.log(swapCase("jAvaScRIPt")); 
console.log(swapCase("iTBAcAdemY")); 