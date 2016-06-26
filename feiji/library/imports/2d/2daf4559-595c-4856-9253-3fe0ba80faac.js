"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        speed: 200,
        HP: 1
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var y = this.y;
        this.y = y - this.speed * dt;
    }
});