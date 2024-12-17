let ghosts = [
    { 
        name: "Spirit",
        sanity: 50,
        ability: 'None',
        tells: 'Can only hunt 180s after being smudged',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Wraith",
        sanity: 50,
        ability: 'Can teleport to any player',
        tells: 'Does not interact with salt',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Phantom",
        sanity: 50,
        ability: 'Can roam to any player',
        tells: { 1: 'Does not appear in ghost photos', 2: 'Less visible during hunts' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Polter",
        sanity: 50,
        ability: 'Can throw multiple objects',
        tells: 'Throws an object every 0.5s with increased force during hunts',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Banshee",
        sanity: 50,
        ability: 'Can roam to the target',
        tells: { 1: '33% chance to scream in the Parabolic Mic', 2: 'Will hunt at 50% sanity of the target', 3: "Will targets it's target if they're in the building during a hunt" },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Jinn",
        sanity: 50,
        ability: "With the breaker on, it can drop a nearby player's sanity by 25%",
        tells: 'With the breaker on, it will speed up in LOS if the player is 3m+ away',
        speed: { los_three_meters_away: '2.5m/s', base: '1.7m/s' },
        los: true
    },
    { 
        name: "Mare",
        sanity: { in_the_dark: 60, in_the_light: 40 },
        ability: 'Small chance to immediately turn off a light switch (or lamp) that a player has turned on within 4m of the ghost',
        tells: "Hunts at 40% average sanity if the lightswitch in it's current room is in the off position (reguardless of breaker state)",
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Revenant",
        sanity: 50,
        ability: 'None',
        tells: 'During hunts, it will be slow until it detects a player where it will immediately speed up',
        speed: { player_undetected: '3.0m/s', player_detected: '1.0m/s' },
        los: false
    },
    { 
        name: "Shade",
        sanity: 35,
        ability: 'None',
        tells: 'Only ghost that can appear as a shadow or translucent ghost model on summoning circle event',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Demon",
        sanity: { ability: 100, base: 70 },
        ability: 'Can hunt at any sanity',
        tells: { 1: 'Can hunt 60s after being smudged', 2: 'Can hunt 20s after a previous hunt has ended or after a crucifix has been used instead of 25s' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Yurei",
        sanity: 50,
        ability: 'None',
        tells: 'Only ghost who can close/interact with an exit door outside of a hunt or event',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Oni",
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Drains 20% sanity during events instead of the normal 10%', 2: 'Cannot do the "Ghost Mist" event', 3: 'More visible during hunts' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Yokai",
        sanity: { when_talking: 80, base: 50 },
        ability: 'Talking in the same room can cause it to hunt up to 80% average sanity',
        tells: "They can only detect the player 2.5m during hunts; they're dumb",
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Hantu",
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Will have visible freezing breath during hunts when the breaker is off or broken', 2: 'Cannot turn on the breaker',
            3: 'More likely to turn off the breaker', 4: 'Is faster in colder rooms during hunts' },
        speed: { coldest_room: '2.7m/s', warmest_room: '1.4m/s' },
        los: false
    },
    {
        name: "Goryo",
        sanity: 50,
        ability: 'None',
        tells: 'DOTs only appear on video camera and will not show if the player is in the same room',
        speed: '1.7m/s',
        los: true
    },
    {
        name: "Myling",
        sanity: 50,
        ability: 'None',
        tells: { 1: 'During hunts, it cannot be heard more than 12m away (normal is 20m)', 2: 'Has an increased number of sounds through the Parabolic Mic' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Onryo",
        sanity: { three_blowouts: 100, base: 60 },
        ability: 'None',
        tells: 'Will attempt to hunt at any sanity after blowing out every 3rd flame (can be candles, firelights, or your lighter)',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Twins",
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Can do 2 interactions at once, one in the standard range, and another in double the standard range', 2: 'Ghost speed during hunts will be +-10% of the normal 1.7m/s speed' },
        speed: { fast_twin: '1.87m/s', slow_twin: '1.53m/s' },
        los: true
    },
    { 
        name: "Raiju",
        sanity: { near_electronics: 65, base: 50 },
        ability: 'None',
        tells: { 1: 'During a hunt, it causes electronic disturbance at 15m instead of 10m', 2: 'Faster near active electronic equipment during hunts' },
        speed: { near_electronics: '2.5m/s', base: '1.7m/s' },
        los: true
    },
    { 
        name: "Obake",
        sanity: 50,
        ability: 'Can make fingerprints disappear twice as fast',
        tells: { 1: 'Small chance to leave 6 fingered fingerprints', 2: '25% chance to not leave UV evidence', 3: '6.66% chance to change models for a single blink (guarenteed once per hunt)' },
        evidence: 'Guarenteed to have the Ultraviolet evidence on Nightmare/Insanity mode',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Mimic",
        sanity: 100,
        ability: 'Changes ghost behavior every 30s to 2m',
        tells: { 1: 'Shows ghost orbs as an ability, not an evidence', 2: 'Will always show ghost orbs, even on 0 evidence' },
        speed: 'any',
        los: true
    },
    { 
        name: "Moroi",
        sanity: 50,
        ability: 'None',
        tells: { 1: 'When hearing a whisper through the Parabolic Mic, the player will drain sanity twice as fast', 2: 'Incense blindness during during hunts is increased by 50% (7.5s instead of 5s)' },
        evidence: 'Guarenteed to have the Spirit Box evidence on Nightmare/Insanity mode',
        speed: { low_sanity: '2.25m/s', high_sanity: '1.5m/s' },
        los: true
    },
    { 
        name: "Deogen",
        sanity: 40,
        ability: 'Always knows the location of the player',
        tells: { 1: 'Very fast when far away, very slow when close to the player', 2: '33% chance to give heavy breathing through spirit box when the player is within 1m of the ghost', 3: 'More visible during hunts' },
        evidence: 'Guarenteed to have the Spirit Box evidence on Nightmare/Insanity mode',
        speed: { far: '3.0m/s', near: '0.4m/s' },
        los: false
    },
    { 
        name: "Thaye",
        sanity: { youngest: 75, oldest: 15 },
        ability: 'None',
        tells: "Age response on the Ouija Board cursed possesion will change as it's age increases",
        speed: { youngest: '2.75m/s', oldest: '1.0m/s' },
        los: false
    }
];

function ghostProperties(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const ghost = ghosts.find(g => g.name === name);

    if (!ghost) return 'Please enter a valid ghost name.';

    let result = `Ghost: ${ghost.name}<br><br>`;

    if (typeof ghost.sanity === 'object' && ghost.sanity !== null) {
        result += `Sanity: `;
        for (let key in ghost.sanity) {
            result += `${key}: ${ghost.sanity[key]}, `;
        }
        result = result.slice(0, -2);
        result += `<br><br>`;
    } else result += `Sanity: ${ghost.sanity}<br><br>`;

    if (ghost.ability !== null) result += `Ability: ${ghost.ability}<br><br>`;

    if (typeof ghost.tells === 'object' && ghost.tells !== null) {
        result += `Tells: `;
        for (let key in ghost.tells) {
            result += `${ghost.tells[key]}, `;
        }
        result = result.slice(0, -2);
        result += `<br><br>`;
    } else result += `Tells: ${ghost.tells}<br><br>`;

    if (ghost.evidence !== undefined) result += `Evidence: ${ghost.evidence}<br><br>`;

    if (typeof ghost.speed === 'object' && ghost.speed !== null) {
        result += `Speed: `;
        for (let key in ghost.speed) {
            result += `${key}: ${ghost.speed[key]}, `;
        }
        result = result.slice(0, -2);
        result += `<br><br>`;
    } else result += `Speed: ${ghost.speed}<br><br>`;

    if (ghost.los === true) result += `LOS: true<br><br>`;
    else if (ghost.los === false) result += `LOS: false<br><br>`;

    return result;
}

// Function to handle search input and display results
function handleSearchInput() {
    const searchInput = document.getElementById('ghostSearch');
    const resultDiv = document.querySelector('.output');
    
    // Add event listener for 'Enter' key
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const ghostName = searchInput.value.trim();
            const ghostInfo = ghostProperties(ghostName);
            resultDiv.innerHTML = ghostInfo;
            searchInput.value = '';
        }
    });
}

// Initializing the functionality
handleSearchInput();