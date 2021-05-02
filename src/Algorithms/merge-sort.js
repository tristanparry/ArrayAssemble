// MERGE SORT ALGORITHM
function mergeRecursion(newArray, firstIndex, lastIndex, secondaryArray, animationArray) {
    if (firstIndex === lastIndex) {
        return;
    }

    var middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    mergeRecursion(secondaryArray, firstIndex, middleIndex, newArray, animationArray);
    mergeRecursion(secondaryArray, middleIndex + 1, lastIndex, newArray, animationArray);
    mergeExecute(newArray, firstIndex, middleIndex, lastIndex, secondaryArray, animationArray);
}
function mergeExecute(newArray, firstIndex, middleIndex, lastIndex, secondaryArray, animationArray) {
    let x = firstIndex;
    let y = firstIndex;
    let z = middleIndex + 1;

    while ((y <= middleIndex) && (z <= lastIndex)) {
        if (secondaryArray[y] <= secondaryArray[z]) {
            // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
            animationArray.push([x, secondaryArray[y]]);
            newArray[x++] = secondaryArray[y++];
        } else {
            // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
            animationArray.push([x, secondaryArray[z]]);
            newArray[x++] = secondaryArray[z++];
        }
    }
    while (y <= middleIndex) {
        // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
        animationArray.push([x, secondaryArray[y]]);
        newArray[x++] = secondaryArray[y++];
    }
    while (z <= lastIndex) {
        // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
        animationArray.push([x, secondaryArray[z]]);
        newArray[x++] = secondaryArray[z++];
    }
}


// MAIN EXPORT FUNCTION
export function mergeSort(newArray) { // Function passes the array, to manipulate its values/attributes
    // VARIABLE ASSIGNMENTS
    const animationArray = [];
    const arrayElementAttributes = document.getElementsByClassName("arrayElement");
    const animationSpeed = 4;

    if (newArray.length < 2) {
        return newArray;
    }
    const secondaryArray = newArray.slice();
    // CALLING THE MERGE SORT ALGORITHM
    mergeRecursion(newArray, 0, newArray.length - 1, secondaryArray, animationArray)

    // INTERPRETING THE MERGE SORT ALGORITHM, RETURNING ANIMATED VALUES
    for (let i = 0; i < animationArray.length; i++) {
        const arrayElement = arrayElementAttributes[animationArray[i][0]].style;
        setTimeout(() => {
            arrayElement.height = `${animationArray[i][1]}px`;
        }, i * animationSpeed);
    }
}