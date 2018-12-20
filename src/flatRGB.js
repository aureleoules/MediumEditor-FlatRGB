(function () {

    function FlatRGB(color) {

        this.button = document.createElement("button");
        this.button.className = "medium-editor-action";
        
        if (this.button.innerText) {
            this.button.innerText = color;
        } else {
            this.button.textContent = color;
        }
        this.button.classList.add(color+"-background");

        this.button.onclick = () => this.changeColor(color); 
    }

    FlatRGB.prototype.changeColor = function (color) {
        const sel = window.getSelection();
        const node = sel.anchorNode.parentElement;

        switch(color) {
            case "R": {
                node.classList.toggle("red-text");
                node.classList.remove("green-text");
                node.classList.remove("blue-text");
                break
            }
            case "G": {
                node.classList.toggle("green-text");
                node.classList.remove("red-text");
                node.classList.remove("blue-text");
                break
            }

            case "B": {
                node.classList.toggle("blue-text");
                node.classList.remove("red-text");
                node.classList.remove("green-text");
                break
            }
            default: {
                break;
            }
        }
    };

    FlatRGB.prototype.getButton = function () {
        return this.button;
    };

    window.FlatRGB = FlatRGB;
})();