cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,
        minMoveDuration: 1,
        maxMoveDuration: 2,
    },
    
    setJumpAction: function () {
        // 大象往左飞
        var thisMoveDuration = cc.random0To1()*(this.maxMoveDuration - this.minMoveDuration) + this.minMoveDuration;
        var goLeft = cc.moveBy(thisMoveDuration, cc.p(-1600,0)).easing();
        return goLeft;
    },
    // use this for initialization
    onLoad: function () {
        this.node.runAction(this.setJumpAction());
    },
    
    getPlayerDistance: function(){
        var playerPos = this.game.player.getPosition();
        var dist = cc.pDistance(this.node.position,playerPos);
        return dist;
    },
    
    getDeadDistance: function(){
        var dist = cc.pDistance(this.node.position,cc.p(-1000,-228));
        return dist;
    },
    
    onPicked: function() {
        this.game.gainScore();
        this.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        if(this.getDeadDistance()<100){
            this.node.destroy();
            this.game.spawnNewElephant();
            return;
        }
        //死亡判定--吃到了炸弹
        if(this.getPlayerDistance()<this.pickRadius){
            this.node.destroy();
            this.game.gameOver();
        }
        // if(this.getDeadDistance()<100){
        //     this.game.gameOver();
        // }
        // console.log(this.node.position)
    },
});
