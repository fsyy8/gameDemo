require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Game":[function(require,module,exports){
cc._RFpush(module, 'e447eG06+FIY7AB0yPhSvYx', 'Game');
// scripts\Game.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        elephantPrefab: {
            'default': null,
            type: cc.Prefab
        },
        bombPrefab: {
            'default': null,
            type: cc.Prefab
        },
        ground: {
            'default': null,
            type: cc.Node
        },
        player: {
            'default': null,
            type: cc.Node
        },
        scoreDisplay: {
            'default': null,
            type: cc.Label
        },
        levelDisplay: {
            'default': null,
            type: cc.Label
        },
        gameOverBoard: {
            'default': null,
            type: cc.Node
        },
        // visible: false
        // bgAudio: {
        //     default: null,
        //     url: cc.AudioClip
        // },
        scoreAudio: {
            'default': null,
            url: cc.AudioClip
        },
        bombAudio: {
            'default': null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        //初始化得分
        this.score = 0;
        //初始化关卡
        this.level = 1;
        //生成新的大象
        this.spawnNewElephant();
        //背景音乐
        // cc.audioEngine.playMusic(this.bgAudio, true);
    },

    spawnNewElephant: function spawnNewElephant() {
        var RNum = cc.random0To1();
        if (RNum > 0.4) {
            this.spawnNewElephantGood();
        } else {
            this.spawnNewElephantBad();
        }
    },

    spawnNewElephantGood: function spawnNewElephantGood() {
        var newElephant = cc.instantiate(this.elephantPrefab);
        this.node.addChild(newElephant);
        newElephant.setPosition(cc.p(600, -228));
        //将实例传入elephant组件
        newElephant.getComponent('elephant').game = this;
    },

    spawnNewElephantBad: function spawnNewElephantBad() {
        var newElephant = cc.instantiate(this.bombPrefab);
        this.node.addChild(newElephant);
        newElephant.setPosition(cc.p(600, -228));
        //将实例传入elephant组件
        newElephant.getComponent('bomb').game = this;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {},

    gainScore: function gainScore() {
        this.score += 1;
        if (this.score % 10 === 0) {
            this.level += 1;
        }
        cc.audioEngine.playEffect(this.scoreAudio, false);
        this.scoreDisplay.string = 'Score  ' + this.score.toString();
        this.levelDisplay.string = 'Level  ' + this.level.toString();
    },
    gameOver: function gameOver() {
        cc.audioEngine.playEffect(this.bombAudio, false);
        cc.audioEngine.stopMusic(this.bgAudio);
        cc.director.loadScene('shibai');
    },
    playAgain: function playAgain() {
        cc.director.loadScene('youxi');
    }
});

cc._RFpop();
},{}],"Over":[function(require,module,exports){
cc._RFpush(module, '264cbpMXP1D47DVRRAbNEIa', 'Over');
// scripts\Over.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    playAgain: function playAgain() {
        cc.director.loadScene('youxi');
    },
    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"Player":[function(require,module,exports){
cc._RFpush(module, '067a9ctWotAIb8M63Pz+Eca', 'Player');
// scripts\Player.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        // 最大移动速度
        maxMoveSpeed: 0
    },

    setJumpAction: function setJumpAction() {
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // 不断重复
        return cc.sequence(jumpUp, jumpDown);
        // return jumpUp;
    },

    setInputControl: function setInputControl() {
        var self = this;
        // 添加键盘事件监听
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // 有按键按下时，判断是否是我们指定的方向控制键，并设置向对应方向加速
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.w:
                        self.jumpOn = true;
                        break;
                }
            },
            // 松开按键时，停止向该方向的加速
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.w:
                        self.jumpOn = false;
                        break;
                }
            }
        }, self.node);
    },

    // use this for initialization
    onLoad: function onLoad() {
        //跳跃动作
        // this.node.runAction(this.setJumpAction());

        //跳跃开关
        this.jumpOn = false;

        // 初始化键盘输入监听
        this.setInputControl();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.jumpOn) {
            this.jumpOn = false;
            this.node.runAction(this.setJumpAction());
        }
    }
});

cc._RFpop();
},{}],"bomb":[function(require,module,exports){
cc._RFpush(module, '984f0mWqHpB8477FBOubKzt', 'bomb');
// scripts\bomb.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        pickRadius: 0,
        minMoveDuration: 1,
        maxMoveDuration: 2
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

        if (this.getDeadDistance() < 100) {
            this.node.destroy();
            this.game.spawnNewElephant();
            return;
        }
        //死亡判定--吃到了炸弹
        if (this.getPlayerDistance() < this.pickRadius) {
            this.node.destroy();
            this.game.gameOver();
        }
        // if(this.getDeadDistance()<100){
        //     this.game.gameOver();
        // }
        // console.log(this.node.position)
    }
});

cc._RFpop();
},{}],"elephant":[function(require,module,exports){
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
},{}],"welcome":[function(require,module,exports){
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
},{}]},{},["Player","Over","welcome","bomb","Game","elephant"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9HYW1lLmpzIiwiYXNzZXRzL3NjcmlwdHMvT3Zlci5qcyIsImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyIsImFzc2V0cy9zY3JpcHRzL2JvbWIuanMiLCJhc3NldHMvc2NyaXB0cy9lbGVwaGFudC5qcyIsImFzc2V0cy9zY3JpcHRzL3dlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNjLl9SRnB1c2gobW9kdWxlLCAnZTQ0N2VHMDYrRklZN0FCMHlQaFN2WXgnLCAnR2FtZScpO1xuLy8gc2NyaXB0c1xcR2FtZS5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZWxlcGhhbnRQcmVmYWI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBib21iUHJlZmFiOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsRGlzcGxheToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgZ2FtZU92ZXJCb2FyZDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAvLyBiZ0F1ZGlvOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgLy8gfSxcbiAgICAgICAgc2NvcmVBdWRpbzoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgYm9tYkF1ZGlvOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvL+WIneWni+WMluW+l+WIhlxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy/liJ3lp4vljJblhbPljaFcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIC8v55Sf5oiQ5paw55qE5aSn6LGhXG4gICAgICAgIHRoaXMuc3Bhd25OZXdFbGVwaGFudCgpO1xuICAgICAgICAvL+iDjOaZr+mfs+S5kFxuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ0F1ZGlvLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgc3Bhd25OZXdFbGVwaGFudDogZnVuY3Rpb24gc3Bhd25OZXdFbGVwaGFudCgpIHtcbiAgICAgICAgdmFyIFJOdW0gPSBjYy5yYW5kb20wVG8xKCk7XG4gICAgICAgIGlmIChSTnVtID4gMC40KSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduTmV3RWxlcGhhbnRHb29kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduTmV3RWxlcGhhbnRCYWQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzcGF3bk5ld0VsZXBoYW50R29vZDogZnVuY3Rpb24gc3Bhd25OZXdFbGVwaGFudEdvb2QoKSB7XG4gICAgICAgIHZhciBuZXdFbGVwaGFudCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZWxlcGhhbnRQcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3RWxlcGhhbnQpO1xuICAgICAgICBuZXdFbGVwaGFudC5zZXRQb3NpdGlvbihjYy5wKDYwMCwgLTIyOCkpO1xuICAgICAgICAvL+WwhuWunuS+i+S8oOWFpWVsZXBoYW5057uE5Lu2XG4gICAgICAgIG5ld0VsZXBoYW50LmdldENvbXBvbmVudCgnZWxlcGhhbnQnKS5nYW1lID0gdGhpcztcbiAgICB9LFxuXG4gICAgc3Bhd25OZXdFbGVwaGFudEJhZDogZnVuY3Rpb24gc3Bhd25OZXdFbGVwaGFudEJhZCgpIHtcbiAgICAgICAgdmFyIG5ld0VsZXBoYW50ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib21iUHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0VsZXBoYW50KTtcbiAgICAgICAgbmV3RWxlcGhhbnQuc2V0UG9zaXRpb24oY2MucCg2MDAsIC0yMjgpKTtcbiAgICAgICAgLy/lsIblrp7kvovkvKDlhaVlbGVwaGFudOe7hOS7tlxuICAgICAgICBuZXdFbGVwaGFudC5nZXRDb21wb25lbnQoJ2JvbWInKS5nYW1lID0gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge30sXG5cbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uIGdhaW5TY29yZSgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICBpZiAodGhpcy5zY29yZSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlICAnICsgdGhpcy5zY29yZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmxldmVsRGlzcGxheS5zdHJpbmcgPSAnTGV2ZWwgICcgKyB0aGlzLmxldmVsLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5ib21iQXVkaW8sIGZhbHNlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKHRoaXMuYmdBdWRpbyk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2hpYmFpJyk7XG4gICAgfSxcbiAgICBwbGF5QWdhaW46IGZ1bmN0aW9uIHBsYXlBZ2FpbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCd5b3V4aScpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzI2NGNicE1YUDFENDdEVlJSQWJORUlhJywgJ092ZXInKTtcbi8vIHNjcmlwdHNcXE92ZXIuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIHBsYXlBZ2FpbjogZnVuY3Rpb24gcGxheUFnYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3lvdXhpJyk7XG4gICAgfSxcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnMDY3YTljdFdvdEFJYjhNNjNQeitFY2EnLCAnUGxheWVyJyk7XG4vLyBzY3JpcHRzXFxQbGF5ZXIuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyDkuLvop5Lot7Pot4Ppq5jluqZcbiAgICAgICAganVtcEhlaWdodDogMCxcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD5oyB57ut5pe26Ze0XG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcbiAgICAgICAgLy8g5pyA5aSn56e75Yqo6YCf5bqmXG4gICAgICAgIG1heE1vdmVTcGVlZDogMFxuICAgIH0sXG5cbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiBzZXRKdW1wQWN0aW9uKCkge1xuICAgICAgICAvLyDot7Pot4PkuIrljYdcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MucCgwLCB0aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xuICAgICAgICAvLyDkuIvokL1cbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy5wKDAsIC10aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxuICAgICAgICByZXR1cm4gY2Muc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bik7XG4gICAgICAgIC8vIHJldHVybiBqdW1wVXA7XG4gICAgfSxcblxuICAgIHNldElucHV0Q29udHJvbDogZnVuY3Rpb24gc2V0SW5wdXRDb250cm9sKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIOa3u+WKoOmUruebmOS6i+S7tuebkeWQrFxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICAvLyDmnInmjInplK7mjInkuIvml7bvvIzliKTmlq3mmK/lkKbmmK/miJHku6zmjIflrprnmoTmlrnlkJHmjqfliLbplK7vvIzlubborr7nva7lkJHlr7nlupTmlrnlkJHliqDpgJ9cbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gb25LZXlQcmVzc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmp1bXBPbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5p2+5byA5oyJ6ZSu5pe277yM5YGc5q2i5ZCR6K+l5pa55ZCR55qE5Yqg6YCfXG4gICAgICAgICAgICBvbktleVJlbGVhc2VkOiBmdW5jdGlvbiBvbktleVJlbGVhc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmp1bXBPbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy/ot7Pot4PliqjkvZxcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLnNldEp1bXBBY3Rpb24oKSk7XG5cbiAgICAgICAgLy/ot7Pot4PlvIDlhbNcbiAgICAgICAgdGhpcy5qdW1wT24gPSBmYWxzZTtcblxuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgdGhpcy5zZXRJbnB1dENvbnRyb2woKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5qdW1wT24pIHtcbiAgICAgICAgICAgIHRoaXMuanVtcE9uID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuc2V0SnVtcEFjdGlvbigpKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzk4NGYwbVdxSHBCODQ3N0ZCT3ViS3p0JywgJ2JvbWInKTtcbi8vIHNjcmlwdHNcXGJvbWIuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwaWNrUmFkaXVzOiAwLFxuICAgICAgICBtaW5Nb3ZlRHVyYXRpb246IDEsXG4gICAgICAgIG1heE1vdmVEdXJhdGlvbjogMlxuICAgIH0sXG5cbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiBzZXRKdW1wQWN0aW9uKCkge1xuICAgICAgICAvLyDlpKfosaHlvoDlt6bpo55cbiAgICAgICAgdmFyIHRoaXNNb3ZlRHVyYXRpb24gPSBjYy5yYW5kb20wVG8xKCkgKiAodGhpcy5tYXhNb3ZlRHVyYXRpb24gLSB0aGlzLm1pbk1vdmVEdXJhdGlvbikgKyB0aGlzLm1pbk1vdmVEdXJhdGlvbjtcbiAgICAgICAgdmFyIGdvTGVmdCA9IGNjLm1vdmVCeSh0aGlzTW92ZUR1cmF0aW9uLCBjYy5wKC0xNjAwLCAwKSkuZWFzaW5nKCk7XG4gICAgICAgIHJldHVybiBnb0xlZnQ7XG4gICAgfSxcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLnNldEp1bXBBY3Rpb24oKSk7XG4gICAgfSxcblxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiBnZXRQbGF5ZXJEaXN0YW5jZSgpIHtcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UodGhpcy5ub2RlLnBvc2l0aW9uLCBwbGF5ZXJQb3MpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuXG4gICAgZ2V0RGVhZERpc3RhbmNlOiBmdW5jdGlvbiBnZXREZWFkRGlzdGFuY2UoKSB7XG4gICAgICAgIHZhciBkaXN0ID0gY2MucERpc3RhbmNlKHRoaXMubm9kZS5wb3NpdGlvbiwgY2MucCgtMTAwMCwgLTIyOCkpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uIG9uUGlja2VkKCkge1xuICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcblxuICAgICAgICBpZiAodGhpcy5nZXREZWFkRGlzdGFuY2UoKSA8IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zcGF3bk5ld0VsZXBoYW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/mrbvkuqHliKTlrpotLeWQg+WIsOS6hueCuOW8uVxuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYodGhpcy5nZXREZWFkRGlzdGFuY2UoKTwxMDApe1xuICAgICAgICAvLyAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uKVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2Y1NTgxN1RUWVpER29PWFh6bTlPdnFuJywgJ2VsZXBoYW50Jyk7XG4vLyBzY3JpcHRzXFxlbGVwaGFudC5qc1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBpY2tSYWRpdXM6IDAsXG4gICAgICAgIG1pbk1vdmVEdXJhdGlvbjogMSxcbiAgICAgICAgbWF4TW92ZUR1cmF0aW9uOiAyLFxuICAgICAgICBtb3ZlRHVyYXRpb25QZXJMZXZlbDogMC4xXG4gICAgfSxcblxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uIHNldEp1bXBBY3Rpb24oKSB7XG4gICAgICAgIC8vIOWkp+ixoeW+gOW3pumjnlxuICAgICAgICB2YXIgdGhpc01vdmVEdXJhdGlvbiA9IGNjLnJhbmRvbTBUbzEoKSAqICh0aGlzLm1heE1vdmVEdXJhdGlvbiAtIHRoaXMubWluTW92ZUR1cmF0aW9uKSArIHRoaXMubWluTW92ZUR1cmF0aW9uO1xuICAgICAgICB2YXIgZ29MZWZ0ID0gY2MubW92ZUJ5KHRoaXNNb3ZlRHVyYXRpb24sIGNjLnAoLTE2MDAsIDApKS5lYXNpbmcoKTtcbiAgICAgICAgcmV0dXJuIGdvTGVmdDtcbiAgICB9LFxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuc2V0SnVtcEFjdGlvbigpKTtcbiAgICB9LFxuXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6IGZ1bmN0aW9uIGdldFBsYXllckRpc3RhbmNlKCkge1xuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICB2YXIgZGlzdCA9IGNjLnBEaXN0YW5jZSh0aGlzLm5vZGUucG9zaXRpb24sIHBsYXllclBvcyk7XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH0sXG5cbiAgICBnZXREZWFkRGlzdGFuY2U6IGZ1bmN0aW9uIGdldERlYWREaXN0YW5jZSgpIHtcbiAgICAgICAgdmFyIGRpc3QgPSBjYy5wRGlzdGFuY2UodGhpcy5ub2RlLnBvc2l0aW9uLCBjYy5wKC0xMDAwLCAtMjI4KSk7XG4gICAgICAgIHJldHVybiBkaXN0O1xuICAgIH0sXG5cbiAgICBvblBpY2tlZDogZnVuY3Rpb24gb25QaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zcGF3bk5ld0VsZXBoYW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/mrbvkuqHliKTlrpotLeayoeWQg+WIsOWkp+ixoVxuICAgICAgICBpZiAodGhpcy5nZXREZWFkRGlzdGFuY2UoKSA8IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uKVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzc2Mjc0dzFTT1JGdG9vM2J3NmdBdmEvJywgJ3dlbGNvbWUnKTtcbi8vIHNjcmlwdHNcXHdlbGNvbWUuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v5byA5aeL5ri45oiP55qE5oyJ6ZKuXG4gICAgICAgIHN0YXJ0QlROOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+S9oOeci+Wkp+ixoeeahOmfs+mikVxuICAgIC8vIGxvb2tEYXhpYW5nQXVkaW86IHtcbiAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAvLyAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAvLyB9LFxuICAgIGxvYWRHYW1lUGFnZTogZnVuY3Rpb24gbG9hZEdhbWVQYWdlKCkge1xuICAgICAgICAvL+aSreaUvuWjsOmfs1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubG9va0RheGlhbmdBdWRpbywgZmFsc2UpO1xuICAgICAgICAvL+i/m+WFpea4uOaIj+WcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3lvdXhpJyk7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubG9va0RheGlhbmdBdWRpbywgZmFsc2UpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7Il19
