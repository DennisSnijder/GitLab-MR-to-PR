walk(document.body);

function walk(node) {
    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
    }
}
function handleText(textNode) {
    var v1 = textNode.nodeValue;

    var v2 = v1;
    var randomCode = "Pull Request";

    v2 = v2.replace(/merge request/g, randomCode);
    v2 = v2.replace(/Merge request/g, randomCode);
    v2 = v2.replace(/Merge Request/g, randomCode);

    if (v1 !== v2) {
        textNode.nodeValue = v2.replace(/Pull Request/g, "Pull Request");
    }
}