import AnimationController from './AnimationController.js';
import PenAnimation from './PenAnimation.js';
import SoundManager from './SoundManager.js';
import UIManager from './UIManager.js';

class App {
    constructor() {
        this.animationController = new AnimationController();
        this.soundManager = new SoundManager();
        this.uiManager = new UIManager();
        this.setupPens();
    }

    setupPens() {
        this.heroPen = new PenAnimation(
            document.querySelector('.pen-hero'),
            { direction: 1, duration: 2, delay: 2 }
        );

        this.enemyPen = new PenAnimation(
            document.querySelector('.pen-enemy'),
            { direction: -1, duration: 2, delay: 2 }
        );
    }

    start() {
        document.getElementById('intro').style.display = 'block';
        this.animationController.initialize();
        this.heroPen.initialize();
        this.enemyPen.initialize();
    }

    initialize() {
        this.soundManager.initialize();
        this.uiManager.initialize();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.uiManager.elements.switchElement.addEventListener('click', () => {
                this.handleSwitchClick();
            });
        });
    }

    async handleSwitchClick() {
        await this.soundManager.playSound('bulb');
        
        this.uiManager.turnOn(() => {
            this.start();
            
            // Play additional sounds
            setTimeout(() => this.soundManager.playSound('table'), 2000);
            setTimeout(() => this.soundManager.playSound('explosion'), 3000);
        });
    }
}

const app = new App();
app.initialize();