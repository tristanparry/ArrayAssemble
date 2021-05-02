// IMPORT STATEMENTS
import React from 'react';
import logo from '../logo.png';
import * as bubblesort from '../Algorithms/bubble-sort.js';
import * as insertionsort from '../Algorithms/insertion-sort.js';
import * as mergesort from '../Algorithms/merge-sort.js';
import * as selectionsort from '../Algorithms/selection-sort.js';
import './SortArray.css';

// MAIN EXPORT CLASS
export default class SortArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newArray: [],
            buttonsDisabled: false
        };
    }


    // CHECK CONTENT LOADING
    componentDidMount() { // Method that defines what happends when the app loads on the localhost
        this.randomize();
    }


    // RANDOMIZE ARRAY
    randomize() {
        const newArray = [];
        for (let i = 0; i < 250; i++) {
            newArray.push(Math.floor((Math.random() * 450) + 5));
        }
        this.setState({ newArray });
    }


    // BUTTON EVENTS
    clickEvent(num) {
        // THE PASSED INT PARAMETER DICTATES WHICH SORTING ALGORITHM WILL BE PROCESSED
        if (num === 1) {
            this.setState({ buttonsDisabled: true }, () => this.bubbleSort());
        } else if (num === 2) {
            this.setState({ buttonsDisabled: true }, () => this.insertionSort());
        } else if (num === 3) {
            this.setState({ buttonsDisabled: true }, () => this.mergeSort());
        } else if (num === 4) {
            this.setState({ buttonsDisabled: true }, () => this.selectionSort());
        }
    }


    // SORTING ALGORITHMS
    // BUBBLE SORT DRIVER CODE
    bubbleSort() {
        bubblesort.bubbleSort(this.state.newArray);
        setTimeout(() => {
            this.setState({ buttonsDisabled: false });
        }, 10000);
    }

    // INSERTION SORT DRIVER CODE
    insertionSort() {
        insertionsort.insertionSort(this.state.newArray);
        setTimeout(() => {
            this.setState({ buttonsDisabled: false });
        }, 15000);
    }

    // MERGE SORT DRIVER CODE
    mergeSort() {
        mergesort.mergeSort(this.state.newArray);
        setTimeout(() => {
            this.setState({ buttonsDisabled: false });
        }, 9000);
    }

    // SELECTION SORT DRIVER CODE
    selectionSort() {
        selectionsort.selectionSort(this.state.newArray);
        setTimeout(() => {
            this.setState({ buttonsDisabled: false });
        }, 10500);
    }


    // WINDOW RENDER METHOD
    render() {
        const { newArray } = this.state;

        return (
            <>
                <div className="headerContainer">
                    <img src={logo} alt="ArrayAssembly" height="40" />
                </div>
                <div className="arrayContainer">
                    {/* The array is rendered according to its predetermined values */}
                    {newArray.map((currentArrayValue, currentArrayIndex) => (
                        <div className="arrayElement" key={currentArrayIndex}
                            style={{ height: `${currentArrayValue}px` }}>
                        </div>
                    ))}
                </div>
                <div className="menuContainer">
                    {/* Each button is assigned to the buttonElement CSS class attribute, given an onClick method to
                    handle the click event, set to disabled when the state changes, and set with a specific text */}
                    <button className="buttonElement" onClick={() => this.randomize()} disabled={this.state.buttonsDisabled}>NEW ARRAY</button>
                    <button className="buttonElement" onClick={() => this.clickEvent(1)} disabled={this.state.buttonsDisabled}>BUBBLE SORT</button>
                    <button className="buttonElement" onClick={() => this.clickEvent(2)} disabled={this.state.buttonsDisabled}>INSERTION SORT</button>
                    <button className="buttonElement" onClick={() => this.clickEvent(3)} disabled={this.state.buttonsDisabled}>MERGE SORT</button>
                    <button className="buttonElement" onClick={() => this.clickEvent(4)} disabled={this.state.buttonsDisabled}>SELECTION SORT</button>
                </div>
            </>
        );
    }
}