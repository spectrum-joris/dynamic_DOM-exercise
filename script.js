let age = {
    "aline": [16,"🤡"],
    "noah": [18, "🤖"],
    "robbe": [12, "👻"],
    "jamal": [17, "😇"],
    "eugene": [16, "😄"],
    "faruk": [16, "💥"],
    "joris": [49, "🫠"]
};

const div = document.createElement('div');
document.body.appendChild(div);

// Convert the object to an array and sort it by age
// entries: [ ["John", [25]], ["Jane", [22]], ["Doe", [30]] ]
// a[1] accesses the value array of the entry.
//a[1][0] accesses the first element of the value array, which is the age.
// let entry = ["John", [25]];
// entry[1][0]; // Output: 25
let sortedAgeArray = Object.entries(age).sort((a, b) => a[1][0] - b[1][0]);

for (let [key, value] of sortedAgeArray) {
    let a = document.createElement('p');
    a.innerHTML = key + " is " + value[0] + " years old" + " " + value[1];
    a.style.fontSize = (value[0]/10) + "rem";
    a.style.color = "rgb(" + (value[0]*2) + "," + (value[0]*10) + "," + (value[0]*50) + ")";
    div.appendChild(a);
}

