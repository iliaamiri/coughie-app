import * as groupService from "./group.service.js";

const STORAGE_KEY = "users";

export function joinGroup({groupId}) {
    const user = getCurrentUserFromStorage();
    if (!user) throw new Error("User is not setup");
    groupService.mapSave(g => {
        if (g.id !== groupId) return g; // only change the group that matches the id.
        if (g.members.find(u => u.name === user.name) === undefined) g.members.push(user);
        return g;
    });
}

export function findUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function getUserById(userId) {
    return findUsers().find(u => u.id === userId);
}

export function createUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findUsers(), users.map(u => ({ ...u, createdAt: Date.now(), updatedAt: Date.now() }))]));
}

export function getCurrentUserFromStorage({}) {
    const raw = localStorage.getItem("user");
    if (!raw) return undefined;
    return JSON.parse(raw);
}