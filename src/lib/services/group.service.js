import {generateUUID} from "../utils.js";

export function findAllGroups() {
    return JSON.parse(localStorage.getItem("groups") || "[]");
}

export function getGroupById({groupId}) {
    return findAllGroups().find(g => g.id === groupId);
}

export function createGroup({name, description, messagesIds, membersIds}) {
    const uuid = generateUUID();
    localStorage.setItem("groups", JSON.stringify([...findAllGroups(), {
        id: uuid,
        name,
        description,
        messagesIds: messagesIds ?? [],
        membersIds: membersIds ?? [],
        createdAt: Date.now()
    }]));
    return uuid;
}

export function deleteGroupById({groupId}) {
    localStorage.setItem("groups", JSON.stringify([...findAllGroups().filter(g => g.id !== groupId)]));
}

// loop through each group and save their return value to localStorage instantly.
export function mapSave(cb) {
    localStorage.setItem("groups", JSON.stringify([...findAllGroups().map(cb)]));
}