import {generateUUID} from "../utils.js";

const STORAGE_KEY = "groups";

export function findAllGroups() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function getGroupById(groupId) {
    return findAllGroups().find(g => g.id === groupId);
}

export function createGroup({name, description, messagesIds, membersIds}) {
    const uuid = generateUUID();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findAllGroups(), {
        id: uuid,
        name,
        description,
        messagesIds: messagesIds ?? [],
        membersIds: membersIds ?? [],
        createdAt: Date.now()
    }]));
    return uuid;
}

export function createGroups(groups) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findAllGroups(), ...groups.map(g => ({ ...g, createdAt: g.createdAt ?? Date.now() }))]));
}

export function deleteGroupById({groupId}) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findAllGroups().filter(g => g.id !== groupId)]));
}

// loop through each group and save their return value to localStorage instantly.
export function mapSave(cb) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findAllGroups().map(cb)]));
}