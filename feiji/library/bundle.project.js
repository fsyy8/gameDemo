require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"AudioMng":[function(require,module,exports){
cc._RFpush(module, '8156dFPkndAla5blYfRvTQp', 'AudioMng');
// js\AudioMng.js

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

cc._RFpop();
},{}],"GamePlay":[function(require,module,exports){
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
},{}],"MainMenu":[function(require,module,exports){
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
},{}],"Settings":[function(require,module,exports){
cc._RFpush(module, 'e25c3I021BGUbiOkO6UAlr4', 'Settings');
// js\Settings.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        // soundMenuItem:{
        //     default:null,
        //     type:cc.Label,
        // }
    },

    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"bullet1":[function(require,module,exports){
cc._RFpush(module, '2daf4VZWVxIVpJTP+C6gPqs', 'bullet1');
// js\bullet1.js

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

cc._RFpop();
},{}]},{},["bullet1","AudioMng","GamePlay","MainMenu","Settings"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvQXVkaW9NbmcuanMiLCJhc3NldHMvanMvR2FtZVBsYXkuanMiLCJhc3NldHMvanMvTWFpbk1lbnUuanMiLCJhc3NldHMvanMvU2V0dGluZ3MuanMiLCJhc3NldHMvanMvYnVsbGV0MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNjLl9SRnB1c2gobW9kdWxlLCAnODE1NmRGUGtuZEFsYTVibFlmUnZUUXAnLCAnQXVkaW9NbmcnKTtcbi8vIGpzXFxBdWRpb01uZy5qc1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvbkF1ZGlvOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGJnQXVkaW86IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwbGF5TXVzaWM6IGZ1bmN0aW9uIHBsYXlNdXNpYygpIHtcbiAgICAgICAgLy/mkq3mlL7og4zmma/pn7PkuZDvvIx0cnVl5Luj6KGo5b6q546v5peg6ZmQ5qyh5pKt5pS+77yMZmFsc2XooajnpLrlj6rmkq3mlL7kuIDmrKHjgIJcbiAgICAgICAgLy8gaWYgKEdDLlNPVU5EX09OKXtcbiAgICAgICAgLy8gaWYgKGNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpe1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnQXVkaW8sIHRydWUpO1xuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBwYXVzZU11c2ljOiBmdW5jdGlvbiBwYXVzZU11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XG4gICAgfSxcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnYTAwOGVIUU9oVklocWhaQjlIaFVRRGcnLCAnR2FtZVBsYXknKTtcbi8vIGpzXFxHYW1lUGxheS5qc1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGJ1bGxldFByZWZhYjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zcGF3bk5ld0J1bGxldCgpO1xuICAgIH0sXG5cbiAgICAvL+eUn+aIkOaWsOWtkOW8uVxuICAgIHNwYXduTmV3QnVsbGV0OiBmdW5jdGlvbiBzcGF3bk5ld0J1bGxldCgpIHtcbiAgICAgICAgdmFyIG5ld0J1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWRkQ2hpbGQobmV3QnVsbGV0KTtcbiAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKGNjLnAoLTE1LCA2MCkpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICdiMTM5Yk9ldzFWQlQ0Yjl0ODlXakk1ZycsICdNYWluTWVudScpO1xuLy8ganNcXE1haW5NZW51LmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBidXR0b25BdWRpbzoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgYXVkaW9Nbmc6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk5ld0dhbWU6IGZ1bmN0aW9uIG9uTmV3R2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lUGxheScpO1xuICAgIH0sXG5cbiAgICBvblNldHRpbmdzOiBmdW5jdGlvbiBvblNldHRpbmdzKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1NldHRpbmdzJyk7XG4gICAgfSxcblxuICAgIG9uQnV0dG9uRWZmZWN0OiBmdW5jdGlvbiBvbkJ1dHRvbkVmZmVjdCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJ1dHRvbkF1ZGlvKTtcbiAgICB9LFxuICAgIC8vIHBsYXlNdXNpYzogZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgLy/mkq3mlL7og4zmma/pn7PkuZDvvIx0cnVl5Luj6KGo5b6q546v5peg6ZmQ5qyh5pKt5pS+77yMZmFsc2XooajnpLrlj6rmkq3mlL7kuIDmrKHjgIJcbiAgICAvLyAgICAgLy8gaWYgKEdDLlNPVU5EX09OKXtcbiAgICAvLyAgICAgICAgIC8vIGlmIChjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKXtcbiAgICAvLyAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ0F1ZGlvLCB0cnVlKTtcbiAgICAvLyAgICAgLy8gfVxuICAgIC8vIH0sXG4gICAgLy8gcGF1c2VNdXNpYzogZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgIC8vIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hdWRpb01uZyA9IHRoaXMuYXVkaW9NbmcuZ2V0Q29tcG9uZW50KCdBdWRpb01uZycpO1xuICAgICAgICB0aGlzLmF1ZGlvTW5nLnBsYXlNdXNpYygpO1xuXG4gICAgICAgIC8vIHRoaXMucGxheU11c2ljKCk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2UyNWMzSTAyMUJHVWJpT2tPNlVBbHI0JywgJ1NldHRpbmdzJyk7XG4vLyBqc1xcU2V0dGluZ3MuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBzb3VuZE1lbnVJdGVtOntcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzJkYWY0VlpXVnhJVnBKVFArQzZnUHFzJywgJ2J1bGxldDEnKTtcbi8vIGpzXFxidWxsZXQxLmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BlZWQ6IDIwMCxcbiAgICAgICAgSFA6IDFcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHkgLSB0aGlzLnNwZWVkICogZHQ7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
