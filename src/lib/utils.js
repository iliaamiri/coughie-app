import {v4 as uuidv4} from 'uuid';
import moment from "moment-timezone";

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateUUID() {
    return uuidv4();
}

export function timeAgo(timestamp) {
    const dt = moment(timestamp);
    return dt.tz('America/Los_Angeles').fromNow();
}

export function timezonedMoment(timestamp) {
    return moment(timestamp).tz('America/Los_Angeles');
}