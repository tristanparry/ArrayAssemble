// MAIN EXPORT FUNCTION
export function selectionSort(newArray) { // Function passes the array, to manipulate its values/attributes
    // VARIABLE ASSIGNMENTS
    const animationArray = [];
    const arrayElementAttributes = document.getElementsByClassName("arrayElement");
    const animationSpeed = 20;

    // SELECTION SORT ALGORITHM
    for (let i = 0; i < newArray.length; i++) {
        let lowestIndex = i;
        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[j] < newArray[lowestIndex]) {
                lowestIndex = j;
            }
        }
        // PUSHES ARRAY ELEMENTS THAT NEED TO BE ANIMATED/CHANGED
        animationArray.push([i, newArray[lowestIndex]]);
        animationArray.push([lowestIndex, newArray[i]]);
        let smallerValue = newArray[lowestIndex];
        newArray[lowestIndex] = newArray[i];
        newArray[i] = smallerValue;
    }

    // INTERPRETING THE SELECTION SORT ALGORITHM, RETURNING ANIMATED VALUES
    for (let i = 0; i < animationArray.length; i++) {
        const arrayElement = arrayElementAttributes[animationArray[i][0]].style;
        setTimeout(() => {
            arrayElement.height = `${animationArray[i][1]}px`;
        }, i * animationSpeed);
    }
}