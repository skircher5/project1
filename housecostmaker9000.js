/**
 * @author Kircher, Everett (Everettkircher@icloud.com)
 * @version 0.0.1
 * @summary hello world // Created 09.15.16
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let BASE_PRICE = 50000;
let BEDROOM_PRICE = 17000;
let BATHROOM_PRICE = 12500;
let NUM_CAR_SPACE = 6000;

let numBedRooms, numBathRooms, numCars, totalCost, lotNum;

function main(){
    setNumBedRooms();
    setNumBathRoom();
    setNumCars();
    printResults();
    setTotalCost();
    setLotNum();
}

main();

function setNumBedRooms() {
    numBedRooms = Number(PROMPT.question(`\nEnter NO. bedrooms`));
}

function setNumBathRoom() {
    numBathRooms = Number(PROMPT.question(`\nEnter NO. bathrooms`));
}

function setNumCars() {
    numCars = Number(PROMPT.question(`\nEnter NO. car spaces`));
}

function setTotalCost() {
    totalCost = BASE_PRICE + BEDROOM_PRICE * numBedRooms + BATHROOM_PRICE * numBathRooms + NUM_CAR_SPACE * numCars;
}

function setLotNum() {
    lotNum = Number(PROMPT.question(`\nEnter lot number`));
}

function printResults() {
    //Clears the screen
    console.log(`\nYour house costs ${totalCost}`);
}