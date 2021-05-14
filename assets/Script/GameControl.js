cc.Class({
    extends: cc.Component,
    ctor () {
        
    },

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = "";
    },

    setText(text) {
        this.label.string = text;
    },

    // called every frame
    update: function (dt) {

    },
});
