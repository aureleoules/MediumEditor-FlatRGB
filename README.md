# medium-editor-flat-rgb
Add colors to your document

# Documentation

## `new FlatRGB(color)`
Creates a new instance of a FlatRGB button.

# How to use

```js
window.onload = function () {
    const editor = new MediumEditor('.editor', {
        toolbar: {
            buttons: [
                'bold',
                'italic',
                'underline',
                'anchor', 
                'h2', 
                'h3', 
                'quote',
                'customColorRed',
                'customColorGreen',
                'customColorBlue'
            ],
        },
        extensions: {
            "customColorRed": new window.FlatRGB("R"),
            "customColorGreen": new window.FlatRGB("G"),
            "customColorBlue": new window.FlatRGB("B"),
        }
    });
};
```

# License
See the [LICENSE](./LICENSE) file.
