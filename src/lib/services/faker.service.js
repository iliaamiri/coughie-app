const fakedDescriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
    'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
    'Pellentesque congue. Ut in risus volutpat libero pharetra tempor.',
    'Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
    'Praesent blandit odio eu enim.',
    'Pellentesque sed dui ut augue blandit sodales.',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.',
    'Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.',
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.',
    'Curabitur at lacus ac velit ornare lobortis.',
    'Cras tellus.',
    'In pulvinar lectus a est.',
    'Curabit',
    'Morbi vel lectus in quam fringilla rhoncus.',
    'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
];

export function fakeDescription() {
    return fakedDescriptions[Math.floor(Math.random() * fakedDescriptions.length)];
}

const nameKeywords = [
    "Vape Quitters",
    "No Smoking",
    "Quit Smoking",
    "Quit Vaping",
    "No Vaping",
    "Together We Can Quit our bad habits",
    "Let's Quit Smoking",
    "Vancouver Quitters 2nd Edition",
    "Victoria Quitters",
    "Vaping is Bad for You",
];

export function fakeName() {
    return nameKeywords[Math.floor(Math.random() * nameKeywords.length)];
}