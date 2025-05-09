class AnimationController {
    constructor() {
        this.intro = document.getElementById('intro');
        this.mainContent = document.getElementById('main-content');
        this.animations = {
            intro: 'fadeOut 1s ease-out 6s forwards',
            mainContent: 'fadeIn 1s ease-out 6.5s forwards'
        };
    }

    initialize() {
        this.resetAnimations();
        this.startAnimations();
        this.setupCleanup();
    }

    resetAnimations() {
        this.intro.style.animation = 'none';
        this.mainContent.style.animation = 'none';
        // Force reflow
        this.intro.offsetHeight;
        this.mainContent.offsetHeight;
    }

    startAnimations() {
        this.intro.style.animation = this.animations.intro;
        this.mainContent.style.animation = this.animations.mainContent;
        this.intro.classList.add('active');
    }

    setupCleanup() {
        setTimeout(() => {
            this.intro.style.display = 'none';
            this.mainContent.style.opacity = '1';
        }, 7500);
    }
}

export default AnimationController;