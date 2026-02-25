// Character data for the selection dropdown
function characterSelector() {
    return {
        selectedCharacterId: '',
        selectedCharacter: null,

        characters: {
            captain: {
                name: 'Captain Vex Donovan',
                player: 'Player Name',
                blurb: 'A seasoned captain with decades of space exploration. Known for tactical brilliance and ruthless pragmatism. The Void Wanderer is everything to her—would she kill to protect it?'
            },
            engineer: {
                name: 'Chief Engineer Kess "Wrench" Morgan',
                player: 'Player Name',
                blurb: 'Grease-stained genius of the engines. Brilliant but volatile, with a short fuse and a list of grievances. What secrets die with the victim in your sector?'
            },
            medic: {
                name: 'Dr. Atlas Kane',
                player: 'Player Name',
                blurb: 'Brilliant physician with access to every poison known to the void. Troubled past, troubled present. What was their connection to the deceased?'
            },
            gunslinger: {
                name: 'Vera Cross',
                player: 'Player Name',
                blurb: 'Mysterious bounty hunter with a deadly hand and a deadly past. Joined the crew under circumstances best left unquestioned. Old debts collect interest.'
            },
            merchant: {
                name: 'Silas Crow',
                player: 'Player Name',
                blurb: 'Smooth-talking trader in contraband and secrets. Always working an angle. What cargo was really in that hold? What information was worth killing for?'
            },
            robot: {
                name: 'Unit-7',
                player: 'Player Name',
                blurb: 'Newly sentient android learning humanity one interaction at a time. Programmed to serve, but what happens when you give an AI emotions and free will?'
            }
        },

        selectCharacter() {
            if (this.selectedCharacterId) {
                this.selectedCharacter = this.characters[this.selectedCharacterId];
            } else {
                this.selectedCharacter = null;
            }
        }
    };
}

// Characters display for the characters page
function charactersDisplay() {
    return {
        // Characters data would be populated here if needed for dynamic content
    };
}

// Add any additional global functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Murder in the Void - Initialization Complete');
});
