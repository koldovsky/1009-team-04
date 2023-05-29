const text = document.getElementById('age');

const color = [
    'red',
    'black',
    'green'
]
const getRandom = (arr) => {
    const randomIndx = Math.floor(Math.random() * arr.length);
    return arr[randomIndx];

}

text.style.color = getRandom(color);
