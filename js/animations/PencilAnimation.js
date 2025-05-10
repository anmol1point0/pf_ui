import { ElementCreator } from '../utils/ElementCreator.js';

export class PencilAnimation {
    constructor() {
        this.elementCreator = new ElementCreator();
        this.elements = {};
    }

    createPencilContainer() {
        return this.elementCreator.createElement('div', {
            style: 'position: relative; transform-origin: center center; animation: wave 1s ease-in-out infinite;'
        });
    }

    createPencilBody() {
        return this.elementCreator.createElement('div', {
            style: 'width: 200px; height: 40px; background: linear-gradient(90deg, #ff6b6b, #ff8e8e); border-radius: 20px; position: relative;'
        });
    }

    createPencilFace() {
        const face = this.elementCreator.createElement('div', {
            style: 'position: absolute; left: 40px; top: 50%; transform: translateY(-50%); width: 60px; height: 60px;'
        });

        const leftEye = this.elementCreator.createElement('div', {
            style: 'position: absolute; width: 8px; height: 8px; background: #000; border-radius: 50%; left: 15px; top: 20px;'
        });

        const rightEye = this.elementCreator.createElement('div', {
            style: 'position: absolute; width: 8px; height: 8px; background: #000; border-radius: 50%; right: 15px; top: 20px;'
        });

        const smile = this.elementCreator.createElement('div', {
            style: 'position: absolute; width: 30px; height: 15px; border-bottom: 3px solid #000; border-radius: 0 0 15px 15px; left: 15px; top: 35px;'
        });

        face.appendChild(leftEye);
        face.appendChild(rightEye);
        face.appendChild(smile);

        return face;
    }

    createPencilTip() {
        return this.elementCreator.createElement('div', {
            style: 'position: absolute; right: -20px; top: 50%; transform: translateY(-50%); width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 30px solid #ff8e8e;'
        });
    }

    createGoodbyeMessage() {
        return this.elementCreator.createElement('div', {
            text: 'Hope to see you when we launch! 👋',
            style: 'color: #fff; font-family: Poppins, sans-serif; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); animation: float 2s ease-in-out infinite; white-space: nowrap;'
        });
    }

    initialize() {
        const wavingPencil = this.elementCreator.createElement('div', {
            style: 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2600; opacity: 0; pointer-events: none; display: flex; flex-direction: column; align-items: center; gap: 80px;'
        });

        const pencilContainer = this.createPencilContainer();
        const pencilBody = this.createPencilBody();
        const pencilFace = this.createPencilFace();
        const pencilTip = this.createPencilTip();
        const goodbyeMessage = this.createGoodbyeMessage();

        pencilBody.appendChild(pencilFace);
        pencilBody.appendChild(pencilTip);
        pencilContainer.appendChild(pencilBody);
        wavingPencil.appendChild(pencilContainer);
        wavingPencil.appendChild(goodbyeMessage);

        return wavingPencil;
    }
} 