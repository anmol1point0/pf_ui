export class ElementCreator {
    createElement(tag, options = {}) {
        const element = document.createElement(tag);
        if (options.style) element.style.cssText = options.style;
        if (options.text) element.textContent = options.text;
        if (options.className) element.className = options.className;
        if (options.id) element.id = options.id;
        return element;
    }
} 