// Character data for the selection dropdown
function characterSelector() {
    return {
        selectedCharacterId: '',
        selectedCharacter: null,

        characters: {
            captain: {
                name: 'Captain Vex Donovan',
                player: 'Player Name',
                blurb: 'A seasoned captain with decades of space exploration. Known for tactical brilliance and ruthless pragmatism. The Void Wanderer is everything to her—would she kill to protect it?',
                password: "bigM@nInCharge"
            },
            engineer: {
                name: 'Chief Engineer Kess "Wrench" Morgan',
                player: 'Player Name',
                blurb: 'Grease-stained genius of the engines. Brilliant but volatile, with a short fuse and a list of grievances. What secrets die with the victim in your sector?',
                password: "password123"
            },
            medic: {
                name: 'Dr. Atlas Kane',
                player: 'Player Name',
                blurb: 'Brilliant physician with access to every poison known to the void. Troubled past, troubled present. What was their connection to the deceased?',
                password: "stillInD3bt"
            },
        },

        selectCharacter() {
            if (this.selectedCharacterId) {
                this.selectedCharacter = this.characters[this.selectedCharacterId];
                this.selectedCharacterPassword = this.selectedCharacter.password; // Store the password for later use
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
