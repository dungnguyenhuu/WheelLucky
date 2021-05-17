cc.Class({
    extends: cc.Component,
    ctor () {
        
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

    // update (dt) {},

    spin () {
        this.gamePlayManager.spinEvent();
    },
});
