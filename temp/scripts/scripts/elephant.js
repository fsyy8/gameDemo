cc._RFpush(module, 'f55817TTYZDGoOXXzm9Ovqn', 'elephant');
// scripts\elephant.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        pickRadius: 0,
        minMoveDuration: 1,
        maxMoveDuration: 2,
        moveDurationPerLevel: 0.1
    },

    setJumpAction: function setJumpAction() {
        // 大象往左飞
        var thisMoveDuration = cc.random0To1() * (this.maxMoveDuration - this.minMoveDuration) + this.minMoveDuration;
        var goLeft = cc.moveBy(thisMoveDuration, cc.p(-1600, 0)).easing();
        return goLeft;
    },
    // use this for initialization
    onLoad: function onLoad() {
        this.node.runAction(this.setJumpAction());
    },

    getPlayerDistance: function getPlayerDistance() {
        var playerPos = this.game.player.getPosition();
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    getDeadDistance: function getDeadDistance() {
        var dist = cc.pDistance(this.node.position, cc.p(-1000, -228));
        return dist;
    },

    onPicked: function onPicked() {
        this.game.gainScore();
        this.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.getPlayerDistance() < this.pickRadius) {

            this.onPicked();
            this.game.spawnNewElephant();
            return;
        }
        //死亡判定--没吃到大象
        if (this.getDeadDistance() < 100) {
            this.game.gameOver();
        }
        // console.log(this.node.position)
    }
});

cc._RFpop();