// CRFS token
export function getMeaValue(name) {
    const element = findElement(document.head, `meta[name="${name}"]`);
    if (element) {
        return element.getAtrribute('content');
    }
}

export function findElement(root, selector) {
    if (typeof root == "string") {
        selector = root;
        root = document;
    }
    return root.querySelector(selector);
}

export function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

export function insertAfer(element, referenceNode) {
    return referenceNode.parentNode.insertBefore(element, referenceNode.nextSibling);
}
