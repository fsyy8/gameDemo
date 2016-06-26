cc._RFpush(module, '76274w1SORFtoo3bw6gAva/', 'welcome');
// scripts\welcome.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        //开始游戏的按钮
        startBTN: {
            'default': null,
            type: cc.Button
        }
    },

    //你看大象的音频
    // lookDaxiangAudio: {
    //     default: null,
    //     url: cc.AudioClip
    // },
    loadGamePage: function loadGamePage() {
        //播放声音
        // cc.audioEngine.playEffect(this.lookDaxiangAudio, false);
        //进入游戏场景
        cc.director.loadScene('youxi');
    },

    // use this for initialization
    onLoad: function onLoad() {
        // cc.audioEngine.playEffect(this.lookDaxiangAudio, false);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();