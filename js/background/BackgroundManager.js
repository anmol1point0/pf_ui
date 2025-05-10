import { ElementCreator } from '../utils/ElementCreator.js';

export class BackgroundManager {
    constructor() {
        this.elementCreator = new ElementCreator();
        this.elements = {};
    }

    createBackgroundContainer() {
        this.elements.backgroundContainer = this.elementCreator.createElement('div', {
            style: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, #1a1a2e, #16213e); z-index: 2300; opacity: 0; transition: opacity 0.5s; overflow: hidden;'
        });
        return this.elements.backgroundContainer;
    }

    createStars() {
        const starsContainer = this.elementCreator.createElement('div', {
            style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        });

        const starCount = window.innerWidth < 768 ? 30 : 50;
        for (let i = 0; i < starCount; i++) {
            const starSize = window.innerWidth < 768 ? 1.5 : 2;
            const star = this.elementCreator.createElement('div', {
                style: `position: absolute; width: ${starSize}px; height: ${starSize}px; background: white; border-radius: 50%; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation: twinkle ${1 + Math.random() * 2}s ease-in-out infinite;`
            });
            starsContainer.appendChild(star);
        }

        return starsContainer;
    }

    createCitySkyline() {
        const citySkyline = this.elementCreator.createElement('div', {
            style: 'position: absolute; bottom: 0; left: 0; width: 100%; height: 30%; background: linear-gradient(to top, #2c3e50, transparent);'
        });

        const buildingCount = window.innerWidth < 768 ? 15 : 20;
        for (let i = 0; i < buildingCount; i++) {
            const buildingWidth = window.innerWidth < 768 ? 5 : 4;
            const building = this.elementCreator.createElement('div', {
                style: `position: absolute; bottom: 0; left: ${i * (100 / buildingCount)}%; width: ${buildingWidth}%; height: ${20 + Math.random() * 30}%; background: #34495e; box-shadow: 0 0 10px rgba(0,0,0,0.3);`
            });
            citySkyline.appendChild(building);
        }

        return citySkyline;
    }

    createWalkingCharacter() {
        const characterSize = window.innerWidth < 768 ? 40 : 50;
        const walkingCharacter = this.elementCreator.createElement('div', {
            style: `position: absolute; bottom: 20%; left: 0; width: ${characterSize}px; height: ${characterSize}px; background: #e74c3c; border-radius: 50%; animation: walk 8s linear infinite;`
        });

        const eyeSize = window.innerWidth < 768 ? 6 : 8;
        const leftEye = this.elementCreator.createElement('div', {
            style: `position: absolute; width: ${eyeSize}px; height: ${eyeSize}px; background: white; border-radius: 50%; left: ${eyeSize + 2}px; top: ${eyeSize + 7}px;`
        });
        const rightEye = this.elementCreator.createElement('div', {
            style: `position: absolute; width: ${eyeSize}px; height: ${eyeSize}px; background: white; border-radius: 50%; right: ${eyeSize + 2}px; top: ${eyeSize + 7}px;`
        });

        walkingCharacter.appendChild(leftEye);
        walkingCharacter.appendChild(rightEye);

        return walkingCharacter;
    }

    createGamingElements() {
        const gamingElements = this.elementCreator.createElement('div', {
            style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        });

        const controllerCount = window.innerWidth < 768 ? 3 : 5;
        for (let i = 0; i < controllerCount; i++) {
            const controllerSize = window.innerWidth < 768 ? 20 : 30;
            const controller = this.elementCreator.createElement('div', {
                style: `position: absolute; width: ${controllerSize}px; height: ${controllerSize * 0.7}px; background: #3498db; border-radius: 5px; left: ${Math.random() * 100}%; animation: floatUp ${10 + Math.random() * 10}s linear infinite; animation-delay: ${Math.random() * 5}s;`
            });
            gamingElements.appendChild(controller);
        }

        return gamingElements;
    }

    initialize() {
        const container = this.createBackgroundContainer();
        container.appendChild(this.createStars());
        container.appendChild(this.createCitySkyline());
        container.appendChild(this.createWalkingCharacter());
        container.appendChild(this.createGamingElements());
        return container;
    }
} 