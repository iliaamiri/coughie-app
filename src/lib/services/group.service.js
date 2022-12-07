export function findAllGroups() {
    return JSON.parse(localStorage.getItem("groups") || "[]");
}

export function getGroupById({groupId}) {
    return findAllGroups().find(g => g.groupId === groupId);
}

export function createGroup({name, description}) {
    localStorage.setItem("groups", JSON.stringify([...findAllGroups(), { name, description, members: [], createdAt: Date.now() }]));
}

export function deleteGroupById({groupId}) {
    localStorage.setItem("groups", JSON.stringify([...findAllGroups().filter(g => g.groupId !== groupId)]));
}