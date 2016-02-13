
/* == START FILE ========================================================= */

function Preloader()
{
    this.stage = new PIXI.Container();
    this.styleText = { font : 'bold 48px Arial', fill : '#FFFFFF', stroke : '#000000', strokeThickness : 1, wordWrap : true, wordWrapWidth : 600 };
    this.progressText = null;
}

Preloader.prototype = {
    constconstructor: Preloader,
    
    getStage: function()
    {
        return this.stage;
    },
    
    removeStage: function()
    {
        for(var child in this.stage.children) this.stage.removeChild(this.stage.children[child]);
        return this.stage;
    },
    
    destroyStage: function()
    {
        this.stage.destroy();
    },
    
    startLoad: function() 
    {
        var loader = new PIXI.loaders.Loader();
        loader.add('preloaderTexture',"./assets/image/textures/preloader.jpg");
        loader.once('complete', this.onLoaderComplete);
        loader.parent = this;
        loader.load();
        loader = null;
    },
    
    onLoaderComplete: function(loader, res)
    {
        var sprite = new PIXI.Sprite(res.preloaderTexture.texture);
        sprite.position.x = 0; 
        sprite.position.y = 0; 
        
        this.parent.stage.addChild(sprite);
        
        this.parent.loadProgressShow();
        
        sprite = null;
        this.parent.stage = null;
    },
    
    loadProgressShow: function()
    {
        this.progressText = new PIXI.Text("Загрузка", this.styleText); 
        this.progressText.x = 500;
        this.progressText.y = 570;
        this.stage.addChild(this.progressText);
        
        //that.loadSounds();
        //that.loadAssets();
    }
};

/* == END FILE ========================================================== */
