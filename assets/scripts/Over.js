cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    playAgain: function(){
        cc.director.loadScene('youxi');
    },
    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
