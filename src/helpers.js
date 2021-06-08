
const choice = (arr) => {
    let randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx];
}

const remove = (arr, item) => {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === item) {
            return [...arr.slice(0,i), ...arr.slice(i+1)];
        }
    }
};

export { choice, remove }

