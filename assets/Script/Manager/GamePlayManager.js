cc.Class({
    extends: cc.Component,

    properties: {
        wheel: require("Wheel"),
        spin: require("Spin"),
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    init(gameControl) {
        this.gameControl = gameControl;
    }, 

    start () {
        this.wheel.init(this);
        this.spin.init(this);
    },

    setText(text) {
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
        this.label.string = text;
    },

    spinEvent() {
        this.wheel.spin();
    },

    // update (dt) {},
});
