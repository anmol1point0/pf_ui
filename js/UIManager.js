class UIManager {
    constructor() {
        this.elements = {};
        this.isOn = false;
    }

    initialize() {
        this.createShakeAnimation();
        this.createUIElements();
        this.appendElements();
    }

    createShakeAnimation() {
        const shakeAnimation = document.createElement('style');
        shakeAnimation.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(shakeAnimation);
    }

    createUIElements() {
        this.elements.switchContainer = this.createElement('div', {
            style: 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2000; display: flex; flex-direction: column; align-items: center;'
        });

        this.elements.welcomeMessage = this.createElement('div', {
            text: 'Turn on the switch to reveal myself',
            style: 'color: #fff; font-family: Poppins, sans-serif; margin-bottom: 20px; font-size: 18px;'
        });

        this.elements.bulbElement = this.createElement('div', {
            style: 'width: 60px; height: 60px; border-radius: 50%; background: #333; margin-bottom: 10px; transition: all 0.3s;'
        });

        this.elements.switchElement = this.createElement('div', {
            style: 'width: 40px; height: 80px; background: #444; border-radius: 20px; position: relative; cursor: pointer; animation: shake 0.5s ease-in-out infinite;'
        });

        this.elements.switchKnob = this.createElement('div', {
            style: 'width: 34px; height: 34px; background: #fff; border-radius: 50%; position: absolute; bottom: 5px; left: 3px; transition: all 0.3s;'
        });

        this.elements.darkRoom = this.createElement('div', {
            style: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); z-index: 1000;'
        });
    }

    createElement(tag, options = {}) {
        const element = document.createElement(tag);
        if (options.style) element.style.cssText = options.style;
        if (options.text) element.textContent = options.text;
        return element;
    }

    appendElements() {
        this.elements.switchElement.appendChild(this.elements.switchKnob);
        this.elements.switchContainer.appendChild(this.elements.welcomeMessage);
        this.elements.switchContainer.appendChild(this.elements.bulbElement);
        this.elements.switchContainer.appendChild(this.elements.switchElement);
        document.body.appendChild(this.elements.darkRoom);
        document.body.appendChild(this.elements.switchContainer);
    }

    turnOn(callback) {
        if (this.isOn) return;
        this.isOn = true;

        // Fade out welcome message
        this.elements.welcomeMessage.style.opacity = '0';
        this.elements.welcomeMessage.style.transition = 'opacity 0.3s';

        // Move switch up
        this.elements.switchKnob.style.top = '5px';
        this.elements.switchKnob.style.bottom = 'auto';

        // Light up bulb
        this.elements.bulbElement.style.background = '#ffeb3b';
        this.elements.bulbElement.style.boxShadow = '0 0 50px #ffeb3b';

        // Fade out dark room and switch
        setTimeout(() => {
            this.elements.darkRoom.style.opacity = '0';
            this.elements.darkRoom.style.transition = 'opacity 1s';
            this.elements.switchContainer.style.opacity = '0';
            this.elements.switchContainer.style.transition = 'opacity 0.3s';

            if (callback) callback();

            // Hide elements
            setTimeout(() => {
                this.elements.darkRoom.style.display = 'none';
                this.elements.switchContainer.style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 5000);
        }, 500);
    }
}

export default UIManager;