import * as groupService from "./group.service.js";
import * as userService from "./user.service.js";
import {generateUUID} from "../utils.js";

const STORAGE_KEY = "messages";

export function findAllMessages() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
}

export function findAllMessagesByGroupId(groupId) {
    return findAllMessages().filter(m => m.groupId === groupId);
}

export function createNewMessage({messageText, groupId, userId, createdAt}) {
    const uuid = generateUUID();
    const newMessage = {
        id: uuid,
        messageText,
        groupId,
        userId,
        createdAt: createdAt ?? Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...findAllMessages(), newMessage]));
    return newMessage;
}

export function addMessage({ userId, groupId, messageText, createdAt }) {
    const group = groupService.getGroupById(groupId);
    if (!group) {
        throw new Error(`group doesn't exist ${group} ${groupId}`);
    }
    const user = userService.getUserById(userId);
    if (!user) {
        throw new Error(`user doesn't exist. ${user} ${userId}`);
    }
    if (!group.membersIds.includes(userId)) {
        throw new Error(`this user is not in this group. ${userId}. ${group.membersIds.join("  ")}`);
    }

    const message = createNewMessage({messageText, groupId, userId, createdAt});
    groupService.mapSave(g => {
       if (g.id !== groupId) return g;
       g.messagesIds.push(message.id);
       return g;
    });
    return message;
}