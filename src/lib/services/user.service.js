export function joinGroup({groupId}) {

}

export function findUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

export function createUsers(users) {
    localStorage.setItem("users", JSON.stringify([...findUsers(), users.map(u => ({ ...u, createdAt: Date.now(), updatedAt: Date.now() }))]));
}

export function getCurrentUserFromStorage({}) {
    const raw = localStorage.getItem("user");
    if (!raw) return undefined;
    return JSON.parse(raw);
}