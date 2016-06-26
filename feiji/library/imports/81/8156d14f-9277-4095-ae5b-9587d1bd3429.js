"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        buttonAudio: {
            "default": null,
            url: cc.AudioClip
        },
        bgAudio: {
            "default": null,
            url: cc.AudioClip
        }
    },

    playMusic: function playMusic() {
        //播放背景音乐，true代表循环无限次播放，false表示只播放一次。
        // if (GC.SOUND_ON){
        // if (cc.audioEngine.isMusicPlaying()){
        //     return;
        // }
        cc.audioEngine.playMusic(this.bgAudio, true);
        // }
    },
    pauseMusic: function pauseMusic() {
        cc.audioEngine.pauseMusic();
    },
    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },