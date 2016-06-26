cc.Class({
    extends: cc.Component,

    properties: {
        elephantPrefab: {
            default: null,
            type: cc.Prefab
        },
        bombPrefab: {
            default: null,
            type: cc.Prefab
        },
        ground: {
            default:null,
            type: cc.Node
        },
        player: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default:null,
            type: cc.Label
        },
        levelDisplay: {
            default:null,
            type: cc.Label
        },
        gameOverBoard: {
            default:null,
            type: cc.Node,
            // visible: false
        },
        // bgAudio: {
        //     default: null,
        //     url: cc.AudioClip
        // },
        scoreAudio: {
            default: null,
            url: cc.AudioClip
        },
        bombAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function () {
        //初始化得分
        this.score = 0;
        //初始化关卡
        this.level = 1;
        //生成新的大象
        this.spawnNewElephant();
        //背景音乐
        // cc.audioEngine.playMusic(this.bgAudio, true);
    },
    
    spawnNewElephant: function(){
        var RNum = cc.random0To1();
        if(RNum>0.4){
            this.spawnNewElephantGood();
        }else{
            this.spawnNewElephantBad();
        }
    },
    
    spawnNewElephantGood: function(){
        var newElephant = cc.instantiate(this.elephantPrefab);
        this.node.addChild(newElephant);
        newElephant.setPosition(cc.p(600,-228));
        //将实例传入elephant组件
        newElephant.getComponent('elephant').game = this;
    },
    
    spawnNewElephantBad: function(){
        var newElephant = cc.instantiate(this.bombPrefab);
        this.node.addChild(newElephant);
        newElephant.setPosition(cc.p(600,-228));
        //将实例传入elephant组件
        newElephant.getComponent('bomb').game = this;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

    },
    
    gainScore: function(){
        this.score += 1;
        if (this.score %10 ===0){
            this.level+=1;            
        }
        cc.audioEngine.playEffect(this.scoreAudio, false);
        this.scoreDisplay.string = 'Score  ' + this.score.toString();
        this.levelDisplay.string = 'Level  ' + this.level.toString();
    },
    gameOver: function(){
        cc.audioEngine.playEffect(this.bombAudio, false);
        cc.audioEngine.stopMusic(this.bgAudio);
        cc.director.loadScene('shibai');
    },
    playAgain: function(){
        cc.director.loadScene('youxi');
    }
});
