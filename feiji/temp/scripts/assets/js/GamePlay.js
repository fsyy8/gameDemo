cc._RFpush(module, 'a008eHQOhVIhqhZB9HhUQDg', 'GamePlay');
// js\GamePlay.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        player: {
            "default": null,
            type: cc.Node
        },
        bulletPrefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.spawnNewBullet();
    },

    //生成新子弹
    spawnNewBullet: function spawnNewBullet() {
        var newBullet = cc.instantiate(this.bulletPrefab);
        this.player.addChild(newBullet);
        newBullet.setPosition(cc.p(-15, 60));
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();