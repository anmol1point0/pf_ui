class PenAnimation {
    constructor(element, options) {
        this.element = element;
        this.options = {
            duration: options.duration || 2,
            delay: options.delay || 0,
            direction: options.direction || 1,
            ...options
        };
    }

    initialize() {
        this.setupStyles();
        this.setupAnimations();
    }

    setupStyles() {
        this.element.style.position = 'absolute';
        this.element.style.width = '120px';
        this.element.style.height = '20px';
    }

    setupAnimations() {
        const entryAnimation = this.createEntryAnimation();
        const attackAnimation = this.createAttackAnimation();
        
        this.element.style.animation = `${entryAnimation}, ${attackAnimation}`;
    }

    createEntryAnimation() {
        const direction = this.options.direction;
        return `${direction > 0 ? 'heroEntry' : 'enemyEntry'} ${this.options.duration}s ease-out forwards`;
    }

    createAttackAnimation() {
        const direction = this.options.direction;
        return `${direction > 0 ? 'heroAttack' : 'enemyAttack'} ${this.options.duration}s ease-in-out ${this.options.delay}s forwards`;
    }
}

export default PenAnimation;