class UIManager {
    constructor() {
        this.elements = {};
        this.isOn = false;
    }

    initialize() {
        this.createShakeAnimation();
        this.createUIElements();
        this.appendElements();
        this.setupRegistrationForm();
    }

    createShakeAnimation() {
        const shakeAnimation = document.createElement('style');
        shakeAnimation.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }

            @keyframes growMessage {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }

            @keyframes fadeOutBackground {
                to { opacity: 0; }
            }

            @keyframes wave {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-10deg); }
                75% { transform: rotate(10deg); }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-30px); }
            }

            @keyframes walk {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100vw); }
            }

            @keyframes moveBackground {
                0% { background-position: 0 0; }
                100% { background-position: -1000px 0; }
            }

            @keyframes twinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }

            @keyframes floatUp {
                0% { transform: translateY(100vh); }
                100% { transform: translateY(-100px); }
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

        this.elements.thankYouMessage = this.createElement('div', {
            text: 'Thank you for registering! We\'ll notify you when we launch.',
            style: 'color: #fff; font-family: Poppins, sans-serif; font-size: 24px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2500; opacity: 0; background: rgba(0, 0, 0, 0.9); padding: 30px 60px; border-radius: 15px; pointer-events: none; box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);'
        });

        // Create background container
        this.elements.backgroundContainer = this.createElement('div', {
            style: 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, #1a1a2e, #16213e); z-index: 2300; opacity: 0; transition: opacity 0.5s; overflow: hidden;'
        });

        // Create stars background
        const starsContainer = this.createElement('div', {
            style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        });

        // Add stars
        for (let i = 0; i < 50; i++) {
            const star = this.createElement('div', {
                style: `position: absolute; width: 2px; height: 2px; background: white; border-radius: 50%; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation: twinkle ${1 + Math.random() * 2}s ease-in-out infinite;`
            });
            starsContainer.appendChild(star);
        }

        // Create city skyline
        const citySkyline = this.createElement('div', {
            style: 'position: absolute; bottom: 0; left: 0; width: 100%; height: 30%; background: linear-gradient(to top, #2c3e50, transparent);'
        });

        // Create buildings
        for (let i = 0; i < 20; i++) {
            const building = this.createElement('div', {
                style: `position: absolute; bottom: 0; left: ${i * 5}%; width: 4%; height: ${20 + Math.random() * 30}%; background: #34495e; box-shadow: 0 0 10px rgba(0,0,0,0.3);`
            });
            citySkyline.appendChild(building);
        }

        // Create walking character (simplified to a circle with eyes)
        const walkingCharacter = this.createElement('div', {
            style: 'position: absolute; bottom: 20%; left: 0; width: 50px; height: 50px; background: #e74c3c; border-radius: 50%; animation: walk 8s linear infinite;'
        });

        // Add eyes to character
        const leftEye = this.createElement('div', {
            style: 'position: absolute; width: 8px; height: 8px; background: white; border-radius: 50%; left: 10px; top: 15px;'
        });
        const rightEye = this.createElement('div', {
            style: 'position: absolute; width: 8px; height: 8px; background: white; border-radius: 50%; right: 10px; top: 15px;'
        });
        walkingCharacter.appendChild(leftEye);
        walkingCharacter.appendChild(rightEye);

        // Create floating gaming elements
        const gamingElements = this.createElement('div', {
            style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
        });

        // Add floating game controllers
        for (let i = 0; i < 5; i++) {
            const controller = this.createElement('div', {
                style: `position: absolute; width: 30px; height: 20px; background: #3498db; border-radius: 5px; left: ${Math.random() * 100}%; animation: floatUp ${10 + Math.random() * 10}s linear infinite; animation-delay: ${Math.random() * 5}s;`
            });
            gamingElements.appendChild(controller);
        }

        // Assemble background
        this.elements.backgroundContainer.appendChild(starsContainer);
        this.elements.backgroundContainer.appendChild(citySkyline);
        this.elements.backgroundContainer.appendChild(walkingCharacter);
        this.elements.backgroundContainer.appendChild(gamingElements);

        // Create waving pencil element
        this.elements.wavingPencil = this.createElement('div', {
            style: 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2600; opacity: 0; pointer-events: none; display: flex; flex-direction: column; align-items: center; gap: 80px;'
        });

        // Create pencil container
        const pencilContainer = this.createElement('div', {
            style: 'position: relative; transform-origin: center center; animation: wave 1s ease-in-out infinite;'
        });

        // Create pencil body
        const pencilBody = this.createElement('div', {
            style: 'width: 200px; height: 40px; background: linear-gradient(90deg, #ff6b6b, #ff8e8e); border-radius: 20px; position: relative;'
        });

        // Create pencil face
        const pencilFace = this.createElement('div', {
            style: 'position: absolute; left: 40px; top: 50%; transform: translateY(-50%); width: 60px; height: 60px;'
        });

        // Create eyes
        const leftEyePencil = this.createElement('div', {
            style: 'position: absolute; width: 8px; height: 8px; background: #000; border-radius: 50%; left: 15px; top: 20px;'
        });

        const rightEyePencil = this.createElement('div', {
            style: 'position: absolute; width: 8px; height: 8px; background: #000; border-radius: 50%; right: 15px; top: 20px;'
        });

        // Create smile
        const smile = this.createElement('div', {
            style: 'position: absolute; width: 30px; height: 15px; border-bottom: 3px solid #000; border-radius: 0 0 15px 15px; left: 15px; top: 35px;'
        });

        // Create pencil tip
        const pencilTip = this.createElement('div', {
            style: 'position: absolute; right: -20px; top: 50%; transform: translateY(-50%); width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 30px solid #ff8e8e;'
        });

        // Create goodbye message
        const goodbyeMessage = this.createElement('div', {
            text: 'Hope to see you when we launch! 👋',
            style: 'color: #fff; font-family: Poppins, sans-serif; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); animation: float 2s ease-in-out infinite; white-space: nowrap;'
        });

        // Assemble the pencil
        pencilFace.appendChild(leftEyePencil);
        pencilFace.appendChild(rightEyePencil);
        pencilFace.appendChild(smile);
        pencilBody.appendChild(pencilFace);
        pencilBody.appendChild(pencilTip);
        pencilContainer.appendChild(pencilBody);
        this.elements.wavingPencil.appendChild(pencilContainer);
        this.elements.wavingPencil.appendChild(goodbyeMessage);
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

    setupRegistrationForm() {
        const form = document.querySelector('.registration-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                if (email) {
                    // Hide all existing elements
                    const mainContent = document.getElementById('main-content');
                    const intro = document.getElementById('intro');
                    const darkRoom = document.querySelector('.dark-room');
                    
                    if (mainContent) mainContent.style.display = 'none';
                    if (intro) intro.style.display = 'none';
                    if (darkRoom) darkRoom.style.display = 'none';
                    if (this.elements.darkRoom) this.elements.darkRoom.style.display = 'none';
                    if (this.elements.switchContainer) this.elements.switchContainer.style.display = 'none';

                    // Show background
                    if (!document.body.contains(this.elements.backgroundContainer)) {
                        document.body.appendChild(this.elements.backgroundContainer);
                    }
                    this.elements.backgroundContainer.style.opacity = '1';

                    // Append and animate thank you message
                    if (!document.body.contains(this.elements.thankYouMessage)) {
                        document.body.appendChild(this.elements.thankYouMessage);
                    }
                    
                    this.elements.thankYouMessage.style.animation = 'growMessage 0.8s ease-out forwards';
                    
                    // Wait for thank you message to complete and fade out
                    setTimeout(() => {
                        // Fade out thank you message
                        this.elements.thankYouMessage.style.opacity = '0';
                        this.elements.thankYouMessage.style.transition = 'opacity 0.5s';
                        
                        // Wait for thank you message to fade out completely
                        setTimeout(() => {
                            // Remove thank you message
                            if (document.body.contains(this.elements.thankYouMessage)) {
                                document.body.removeChild(this.elements.thankYouMessage);
                            }
                            
                            // Show waving pencil
                            if (!document.body.contains(this.elements.wavingPencil)) {
                                document.body.appendChild(this.elements.wavingPencil);
                            }
                            this.elements.wavingPencil.style.opacity = '1';
                            this.elements.wavingPencil.style.transition = 'opacity 0.5s';
                            this.elements.wavingPencil.style.animation = 'float 2s ease-in-out infinite, wave 1s ease-in-out infinite';
                        }, 500);
                    }, 2000);

                    form.reset();
                }
            });
        }
    }

    turnOn(callback) {
        if (this.isOn) return;
        this.isOn = true;

        this.elements.welcomeMessage.style.opacity = '0';
        this.elements.welcomeMessage.style.transition = 'opacity 0.3s';

        this.elements.switchKnob.style.top = '5px';
        this.elements.switchKnob.style.bottom = 'auto';

        this.elements.bulbElement.style.background = '#ffeb3b';
        this.elements.bulbElement.style.boxShadow = '0 0 50px #ffeb3b';

        setTimeout(() => {
            this.elements.darkRoom.style.opacity = '0';
            this.elements.darkRoom.style.transition = 'opacity 1s';
            this.elements.switchContainer.style.opacity = '0';
            this.elements.switchContainer.style.transition = 'opacity 0.3s';

            if (callback) callback();

            setTimeout(() => {
                this.elements.darkRoom.style.display = 'none';
                this.elements.switchContainer.style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 5000);
        }, 500);
    }
}

export default UIManager;