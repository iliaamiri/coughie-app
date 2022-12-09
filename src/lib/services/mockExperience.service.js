import * as userService from "./user.service.js";
import * as groupService from "./group.service.js";
import * as messageService from "./message.service.js";
import * as fakerService from "./faker.service.js";
import {generateUUID, randomIntFromInterval, shuffle} from "../utils.js";

export function startMocking() {
    // populate users
    if (userService.findUsers().length === 0) {
        userService.createUsers([
            {
                id: generateUUID(),
                uname: "Megan",
                imageUrl: "/assets/profileAvatars/atikh-bana-_KaMTEmJnxY-unsplash.jpg",
                reason: "I want to quit smoking because I want to be healthier and I want to be able to run a marathon.",
                o2: 1300,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Ben",
                imageUrl: "/assets/profileAvatars/ben-blennerhassett-ZXfUUM_LR0k-unsplash.jpg",
                reason: "Because of my family.",
                o2: 500,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Christian",
                imageUrl: "/assets/profileAvatars/christian-ferrer-8vT-DgHZDG4-unsplash.jpg",
                reason: "cause my mom told me to",
                o2: 430,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Jimmy",
                imageUrl: "/assets/profileAvatars/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg",
                reason: "because I want to be healthier",
                o2: 100,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Julian",
                imageUrl: "/assets/profileAvatars/julian-wan-WNoLnJo7tS8-unsplash.jpg",
                reason: "I always wanted to quit smoking but I never had the motivation to do so.",
                o2: 1000,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Shawn",
                imageUrl: "/assets/profileAvatars/shttefan-Q--oPI42ArQ-unsplash.jpg",
                reason: "Don't want to die at a young age",
                o2: 1700,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Shawnty",
                imageUrl: "/assets/profileAvatars/omid-armin-b5yGzWOpkMo-unsplash.jpg",
                reason: "i want to be healthy and age slower",
                o2: 2000,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Parimah",
                imageUrl: "/assets/profileAvatars/omid-armin-yisZonvqh54-unsplash.jpg",
                reason: "i smoke a lot and i want to stop",
                o2: 990,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Kevin",
                imageUrl: "/assets/profileAvatars/ryan-hoffman-Ft4p5E9HjTQ-unsplash.jpg",
                reason: "i want to be healthier and i want to be stronger",
                o2: 5000,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Payman",
                imageUrl: null,
                reason: "hi, i'm payman. i'm 17 years old and i want to quit smoking because i want to be healthier and i want to be able to run a marathon.",
                o2: 17000,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Sara",
                imageUrl: null,
                reason: "i want to be healthier",
                o2: 2000,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Samantha",
                imageUrl: null,
                reason: "i want to be healthier",
                o2: 4000,
                createdAt: Date.now(),
            },
            {
                id: generateUUID(),
                uname: "Leah",
                imageUrl: null,
                reason: "I want to quit smoking because I want to be healthier and I want to be able to run a marathon.",
                o2: 12520,
                createdAt: Date.now(),
            }
        ])
    }

    const users = userService.findUsers();

    // populate groups
    if (groupService.findAllGroups().length === 0) {
        groupService.createGroups([
            {
                id: generateUUID(),
                name: "Quit Smoking",
                description: "This group is for people who want to quit smoking.",
                membersIds: users.map(u => u.id),
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Together We Can Quit",
                description: "We can do this together!",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Let's Quit Smoking",
                description: "Let's do this!",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Vancouver Quitters",
                description: "Please join this group if you live in Vancouver.",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Calgary Quitters",
                description: "Please join this group if you live in Calgary.",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Vaping is Bad",
                description: "We are against vaping.",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "We hate smoking",
                description: "The worst thing you can do to your body.",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Queen Quitters Club",
                description: "We are the best quitters. Join us besties!",
                membersIds: [users[0].id, users[1].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Mashallah Quitters",
                description: "Inshallah we will quit smoking.",
                membersIds: [users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Quitters United",
                description: "We are united in our goal to quit smoking.",
                membersIds: [users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "Quitters of the World",
                description: "World wide quitters. Join us!",
                membersIds: [users[0].id, users[7].id],
                messagesIds: [],
            },
            {
                id: generateUUID(),
                name: "World Quitters",
                description: "We are the world quitters. Join us!",
                membersIds: [users[0].id, users[1].id, users[2].id, users[3].id, users[4].id, users[5].id, users[6].id, users[7].id],
                messagesIds: [],
            },
        ]);
    }

    const groups = groupService.findAllGroups();

    // populate messages
    if (messageService.findAllMessages().length === 0) {
        [
            // group 0 - user 0
            {
                messageText: "Hi, I’m Megan. I want to quit vaping. This is going to be a journey for me and I see myself ready for it. ",
                userId: users[0].id,
                groupId: groups[0].id,
                createdAt: (new Date("2022-12-07 12:43:30")).getTime(),
            },
            {
                messageText: "Also, I want to bring your attention to this useless text that does not try to say anything but rather to fill the space. Let me type a little tiny miny bit more, ok.",
                userId: users[0].id,
                groupId: groups[0].id,
                createdAt: (new Date("2022-12-07 12:55:30")).getTime(),
            },
            // group 0 - user 1
            {
                messageText: "Hi, I’m Ben. I want to quit vaping. This is going to be a journey for me and I see myself ready for it. ",
                userId: users[1].id,
                groupId: groups[0].id,
                createdAt: (new Date("2022-12-07 15:55:30")).getTime(),
            },
        ].forEach((message) => messageService.addMessage(message));
    }
}

export function seedRandomGroups(l = 5) {
    const users = userService.findUsers();

    const randomGroups = [];

    for (let i = 0; i < l; i++) {
        randomGroups.push({
            id: generateUUID(),
            name: fakerService.fakeName(),
            description: fakerService.fakeDescription(),
            membersIds: shuffle(users).slice(0, randomIntFromInterval(1, users.length)).map(u => u.id),
            messagesIds: [],
        });
    }

    groupService.createGroups(randomGroups);
    return randomGroups;
}