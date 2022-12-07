import { v4 as uuidv4 } from 'uuid';

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateUUID() {
    return uuidv4();
}