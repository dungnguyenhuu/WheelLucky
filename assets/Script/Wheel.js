// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    ctor () {
        this.timeRotation = 5;
        this.minDeg = 1800;
        this.maxDeg = this.minDeg + 360;
        this.randomDeg = 0;
        this.isSpine = false;
        this.itemId = 0;
        this.speed = Math.ceil(this.maxDeg /360);
        
        this.listItem = [
            {item: "key"},
            {item: "50"},
            {item: "500"},
            {item: "emtry"},
            {item: "200"},
            {item: "100"},
            {item: "150"},
            {item: "emtry"},
        ];
    },

    properties: {
        gameControl: require("GameControl"),
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },

    spine() {
        let totalItems = this.listItem.length;
        this.randomDeg = Math.floor(Math.random()*(this.maxDeg - this.minDeg) + this.minDeg);
        this.itemId = Math.floor((this.randomDeg - this.minDeg) / (360 / totalItems));
        this.node.angle = this.randomDeg;
        this.isSpine = true;
        // console.log("itemId "+this.listItem[this.itemId].item);
    },

    /* spine() {
        this.node.angle = 0;
        let totalItems = this.listItem.length;
        let randomDeg = Math.floor(Math.random()*(this.maxDeg - this.minDeg) + this.minDeg);
        let itemId = Math.floor((randomDeg - this.minDeg) / (360 / totalItems));
        cc.tween(this.node).to(this.timeRotation, { angle: -randomDeg}).start();
        console.log("itemId "+this.listItem[totalItems - 1 - itemId].item);
    }, */

    update (dt) {
        if(this.node.angle >= this.itemId * 45 - 340 && this.isSpine) {
            if(this.node.angle / 360 > 1){
                this.speed = this.node.angle / 360;
                this.node.angle -= this.speed; 
            } else {
                this.node.angle -= this.speed;
            }
        } else {
            this.isSpine = false;
            this.gameControl.setText(this.listItem[this.itemId].item);
        }
    },
});
