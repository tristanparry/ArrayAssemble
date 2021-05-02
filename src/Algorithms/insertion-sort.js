// MAIN EXPORT FUNCTION
export function insertionSort(newArray) { // Function passes the array, to manipulate its values/attributes
    // VARIABLE ASSIGNMENTS
    const animationArray = [];
    const arrayElementAttributes = document.getElementsByClassName("arrayElement");
    const animationSpeed = 0.45;

    // INSERTION SORT ALGORITHM
    for (let i = 1; i < newArray.length; i++) {
        for (let j = i; (j > 0) && (j <= i); j--) {
            if (newArray[j - 1] > newArray[j]) {
                // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
                animationArray.push([j - 1, newArray[j]]);
                animationArray.push([j, newArray[j - 1]]);
                let largerValue = newArray[j - 1];
                newArray[j - 1] = newArray[j];
                newArray[j] = largerValue;
            }
        }
    }

    // INTERPRETING THE INSERTION SORT ALGORITHM, RETURNING ANIMATED VALUES
    for (let i = 0; i < animationArray.length; i++) {
        const arrayElement = arrayElementAttributes[animationArray[i][0]].style;
        setTimeout(() => {
            arrayElement.height = `${animationArray[i][1]}px`;
        }, i * animationSpeed);
    }
}