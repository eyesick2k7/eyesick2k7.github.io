const ghosts = [
    { 
        name: "Spirit",
        evidence: { 1: "EMF 5", 2: "Spirit Box", 3: "Writing" },
        sanity: 50,
        ability: 'None',
        tells: 'Can only hunt 180s after being smudged',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Wraith",
        evidence: { 1: "EMF 5", 2: "Spirit Box", 3: "DOTs" },
        sanity: 50,
        ability: 'Can teleport to any player',
        tells: 'Does not interact with salt',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Phantom",
        evidence: { 1: "Spirit Box", 2: "Ultraviolet", 3: "DOTs" },
        sanity: 50,
        ability: 'Can roam to any player',
        tells: { 1: 'Does not appear in ghost photos', 2: 'Less visible during hunts' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Polter",
        evidence: { 1: "Spirit Box", 2: "Ultraviolet", 3: "Writing" },
        sanity: 50,
        ability: 'Can throw multiple objects',
        tells: 'Throws an object every 0.5s with increased force during hunts',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Banshee",
        evidence: { 1: "Ultraviolet", 2: "Ghost Orbs", 3: "DOTs" },
        sanity: 50,
        ability: 'Can roam to the target',
        tells: { 1: '33% chance to scream in the Parabolic Mic', 2: 'Will hunt at 50% sanity of the target', 3: "Will target its target if they're in the building during a hunt" },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Jinn",
        evidence: { 1: "EMF 5", 2: "Ultraviolet", 3: "Freezing" },
        sanity: 50,
        ability: "With the breaker on, it can drop a nearby player's sanity by 25%",
        tells: 'With the breaker on, it will speed up in LOS if the player is 3m+ away',
        speed: { los_three_meters_away: '2.5m/s', base: '1.7m/s' },
        los: true
    },
    { 
        name: "Mare",
        evidence: { 1: "Spirit Box", 2: "Ghost Orbs", 3: "Writing" },
        sanity: { in_the_dark: 60, in_the_light: 40 },
        ability: 'Small chance to immediately turn off a light switch (or lamp) that a player has turned on within 4m of the ghost',
        tells: "Hunts at 40% average sanity if the lightswitch in it's current room is in the off position (regardless of breaker state)",
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Revenant",
        evidence: { 1: "Ghost Orbs", 2: "Writing", 3: "Freezing" },
        sanity: 50,
        ability: 'None',
        tells: 'During hunts, it will be slow until it detects a player, then immediately speeds up to 3.0m/s',
        speed: { player_detected: '3.0m/s', player_undetected: '1.0m/s' },
        los: false
    },
    { 
        name: "Shade",
        evidence: { 1: "EMF 5", 2: "Writing", 3: "Freezing" },
        sanity: 35,
        ability: 'None',
        tells: 'Only ghost that can appear as a shadow or translucent ghost model on summoning circle event',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Demon",
        evidence: { 1: "Ultraviolet", 2: "Writing", 3: "Freezing" },
        sanity: { ability: 100, base: 70 },
        ability: 'Can hunt at any sanity',
        tells: { 1: 'Can hunt 60s after being smudged', 2: 'Can hunt 20s after a previous hunt has ended or after a crucifix use instead of the normal 25s' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Yurei",
        evidence: { 1: "Ghost Orbs", 2: "Freezing", 3: "DOTs" },
        sanity: 50,
        ability: 'None',
        tells: 'Only ghost who can close/interact with an exit door outside of a hunt or event',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Oni",
        evidence: { 1: "EMF 5", 2: "Freezing", 3: "DOTs" },
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Drains 20% sanity during events instead of the normal 10%', 2: 'Cannot do the "Ghost Mist" event', 3: 'More visible during hunts' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Yokai",
        evidence: { 1: "Spirit Box", 2: "Ghost Orbs", 3: "DOTs" },
        sanity: { when_talking: 80, base: 50 },
        ability: 'Talking in the same room can cause it to hunt up to 80% average sanity',
        tells: "They can only detect the player 2.5m during hunts; they're dumb",
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Hantu",
        evidence: { 1: "Ultraviolet", 2: "Ghost Orbs", 3: "Freezing (forced)" },
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Will have visible freezing breath during hunts when the breaker is off or broken', 2: 'Cannot turn on the breaker',
            3: 'More likely to turn off the breaker', 4: 'Is faster in colder rooms during hunts' },
        speed: { coldest_room: '2.7m/s', warmest_room: '1.4m/s' },
        los: false
    },
    { 
        name: "Goryo",
        evidence: { 1: "EMF 5", 2: "Ultraviolet", 3: "DOTs (forced)" },
        sanity: 50,
        ability: 'None',
        tells: 'DOTs only appear on video camera and will not show if the player is in the same room',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Myling",
        evidence: { 1: "EMF 5", 2: "Ultraviolet", 3: "Writing" },
        sanity: 50,
        ability: 'None',
        tells: { 1: 'During hunts, it cannot be heard more than 12m away (normal is 20m)', 2: 'Has increased Parabolic Mic sounds' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Onryo",
        evidence: { 1: "Spirit Box", 2: "Ghost Orbs", 3: "Freezing" },
        sanity: { three_blowouts: 100, base: 60 },
        ability: 'None',
        tells: 'Will attempt to hunt at any sanity after blowing out every 3rd flame (candles, firelights, or your lighter)',
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Twins",
        evidence: { 1: "EMF 5", 2: "Spirit Box", 3: "Freezing" },
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Can do 2 interactions at once, one in the standard range, and another double the standard range', 2: 'Ghost speed during hunts will be + or - 10% of the normal 1.7m/s speed' },
        speed: { fast_twin: '1.87m/s', slow_twin: '1.53m/s' },
        los: true
    },
    { 
        name: "Raiju",
        evidence: { 1: "EMF 5", 2: "Ghost Orbs", 3: "DOTs" },
        sanity: { near_electronics: 65, base: 50 },
        ability: 'None',
        tells: { 1: 'During a hunt, it causes electronic disturbance at 15m (normal 10m)', 2: 'Faster near active electronic equipment during hunts' },
        speed: { near_electronics: '2.5m/s', base: '1.7m/s' },
        los: true
    },
    { 
        name: "Obake",
        evidence: { 1: "EMF 5", 2: "Ultraviolet", 3: "Ghost Orbs" },
        sanity: 50,
        ability: 'Can make fingerprints disappear twice as fast',
        tells: { 1: 'Small chance to leave 6-finger prints', 2: '25% chance no UV evidence', 3: '6.66% model blink change per hunt' },
        speed: '1.7m/s',
        los: true
    },
    { 
        name: "Mimic",
        evidence: { 1: "Spirit Box", 2: "Ultraviolet", 3: "Freezing" },
        sanity: 100,
        ability: 'Changes ghost behavior every 30s to 2m',
        tells: { 1: 'Shows ghost orbs as an ability, not an evidence', 2: 'Always shows ghost orbs, even on 0 evidence' },
        speed: 'any',
        los: true
    },
    { 
        name: "Moroi",
        evidence: { 1: "Spirit Box (forced)", 2: "Writing", 3: "Freezing" },
        sanity: 50,
        ability: 'None',
        tells: { 1: 'Whisper drains sanity faster', 2: 'Incense blindness increased by 50% during hunts (7.5s instead of 5s)' },
        speed: { low_sanity: '2.25m/s', high_sanity: '1.5m/s' },
        los: true
    },
    { 
        name: "Deogen",
        evidence: { 1: "Spirit Box (forced)", 2: "Writing", 3: "DOTs" },
        sanity: 40,
        ability: 'Always knows player location',
        tells: { 1: 'Fast when far, slow when close', 2: 'Heavy breathing chance at 1m range', 3: 'More visible during hunts' },
        speed: { far: '3.0m/s', near: '0.4m/s' },
        los: false
    },
    { 
        name: "Thaye",
        evidence: { 1: "Ghost Orbs", 2: "Writing", 3: "DOTs" },
        sanity: { youngest: 75, oldest: 15 },
        ability: 'None',
        tells: "Ouija Board age response changes as age increases",
        speed: { youngest: '2.75m/s', oldest: '1.0m/s' },
        los: false
    }
];


function ghostProperties(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const ghost = ghosts.find(g => g.name === name);

    if (!ghost) return 'Please enter a valid ghost name.';

    let result = `Ghost: ${ghost.name}<br><br>`;

    if (typeof ghost.evidence === 'object' && ghost.evidence !== null) {
        result += `Evidences: `;
        result += Object.values(ghost.evidence).join(', ');
        result += `<br><br>`;
    }    

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