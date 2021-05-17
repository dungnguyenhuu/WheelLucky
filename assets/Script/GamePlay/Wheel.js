cc.Class({
    extends: cc.Component,
    ctor () {
        this.timeRotation = 5;
        this.minDeg = 1800;
        this.maxDeg = this.minDeg + 360;
        this.randomDeg = 0;
        this.isSpin = false;
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    init(gamePlayManager) {
        this.gamePlayManager = gamePlayManager;
    }, 

    start () {
        
    },

    spin() {
        if(this.isSpin) {
            return;
        }
        let totalItems = this.listItem.length;
        this.randomDeg = Math.floor(Math.random()*(this.maxDeg - this.minDeg) + this.minDeg);
        this.itemId = Math.floor((this.randomDeg - this.minDeg) / (360 / totalItems));
        this.node.angle = this.randomDeg;
        this.isSpin = true;
    },

    update (dt) {
        if(this.node.angle >= this.itemId * 45 - 340 && this.isSpin) {
            if(this.node.angle / 360 > 1){
                this.speed = this.node.angle / 360;
                this.node.angle -= this.speed; 
            } else {
                this.node.angle -= this.speed;
            }
        } else {
            this.isSpin = false;
            this.gamePlayManager.setText(this.listItem[this.itemId].item);
        }
    },
});
