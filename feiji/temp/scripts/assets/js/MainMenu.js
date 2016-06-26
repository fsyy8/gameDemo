cc._RFpush(module, 'b139bOew1VBT4b9t89WjI5g', 'MainMenu');
// js\MainMenu.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        buttonAudio: {
            'default': null,
            url: cc.AudioClip
        },
        audioMng: {
            'default': null,
            type: cc.Node
        }
    },

    onNewGame: function onNewGame() {
        cc.director.loadScene('GamePlay');
    },

    onSettings: function onSettings() {
        cc.director.loadScene('Settings');
    },

    onButtonEffect: function onButtonEffect() {
        cc.audioEngine.playEffect(this.buttonAudio);
    },
    // playMusic: function(){
    //     //播放背景音乐，true代表循环无限次播放，false表示只播放一次。
    //     // if (GC.SOUND_ON){
    //         // if (cc.audioEngine.isMusicPlaying()){
    //         //     return;
    //         // }
    //         cc.audioEngine.playMusic(this.bgAudio, true);
    //     // }
    // },
    // pauseMusic: function(){
    //     cc.audioEngine.pauseMusic();
    // },

    // use this for initialization
    onLoad: function onLoad() {
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();

        // this.playMusic();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();