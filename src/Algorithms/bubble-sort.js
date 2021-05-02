// MAIN EXPORT FUNCTION
export function bubbleSort(newArray) { // Function passes the array, to manipulate its values/attributes
    // VARIABLE ASSIGNMENTS
    const animationArray = [];
    const arrayElementAttributes = document.getElementsByClassName("arrayElement");
    const animationSpeed = 0.3;

    // BUBBLE SORT ALGORITHM
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < (newArray.length - 1 - i); j++) {
            if (newArray[j] > newArray[j + 1]) {
                // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
                animationArray.push([j, newArray[j + 1]]);
                animationArray.push([j + 1, newArray[j]]);
                let largerValue = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = largerValue;
            }
        }
    }

    // INTERPRETING THE BUBBLE SORT ALGORITHM, RETURNING ANIMATED VALUES
    for (let i = 0; i < animationArray.length; i++) {
        const arrayElement = arrayElementAttributes[animationArray[i][0]].style;
        setTimeout(() => {
            arrayElement.height = `${animationArray[i][1]}px`;
        }, i * animationSpeed);
    }
}