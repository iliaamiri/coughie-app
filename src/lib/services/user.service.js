import * as groupService from "./group.service.js";

const STORAGE_KEY = "users";

export function joinGroup({groupId}) {
    const user = getCurrentUserFromStorage();
    if (!user) throw new Error("User is not setup");
    groupService.mapSave(g => {
        if (g.id !== groupId) return g; // only change the group that matches the id.
        if (g.membersIds.find(id => id === user.id) === undefined) g.membersIds.push(user.id);
        return g;
    });
}
export function leaveGroup({groupId}) {
    const user = getCurrentUserFromStorage();
    if (!user) throw new Error("User is not setup");
    groupService.mapSave(g => {
        if (g.id !== groupId) return g; // only change the group that matches the id.
        g.membersIds = g.membersIds.filter(id => id !== user.id);
        return g;
    });
}

export function setup() {
    const user = getCurrentUserFromStorage();
    if (!user) throw new Error("User is not setup");
    createUsers([user]);
}

export function findUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function findUsersByGroupId(groupId) {
    const group = groupService.getGroupById(groupId);
    if (!group) throw new Error(`group doesn't exist ${group} ${groupId}`);
    return group.membersIds.map(id => getUserById(id));
}

export function getUserById(userId) {
    return findUsers().find(u => u.id === userId);
}

export function createUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findUsers(), ...users.map(u => ({ ...u, createdAt: Date.now(), updatedAt: Date.now() }))]));
}

export function getCurrentUserFromStorage() {
    const raw = localStorage.getItem("user");
    if (!raw) return undefined;
    return JSON.parse(raw);
}