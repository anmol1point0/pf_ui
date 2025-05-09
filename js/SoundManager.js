class SoundManager {
    constructor() {
        this.sounds = {};
    }

    initialize() {
        this.sounds = {
            bulb: document.getElementById('bulbSound'),
            table: document.getElementById('tableSound'),
            explosion: document.getElementById('explosionSound')
        };

        Object.values(this.sounds).forEach(sound => {
            if (sound) {
                sound.load();
            }
        });
    }

    async playSound(soundName) {
        try {
            const sound = this.sounds[soundName];
            if (!sound) return;
            
            sound.currentTime = 0;
            await sound.play();
        } catch (error) {
            console.error(`Error playing ${soundName} sound:`, error);
        }
    }
}

export default SoundManager;