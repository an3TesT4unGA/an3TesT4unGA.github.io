(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Asset3 = function() {
	this.initialize(img.Asset3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,182);


(lib.Asset4 = function() {
	this.initialize(img.Asset4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,184);


(lib.Asset5 = function() {
	this.initialize(img.Asset5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,201);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1150);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,182);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,177);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset5();
	this.instance.setTransform(-81.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-100.5,163,201);


(lib.eggplant = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset5();
	this.instance.setTransform(-81.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-100.5,163,201);


(lib.cherry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset3();
	this.instance.setTransform(-80,-91);

	this.press5 = new lib.eggplant();
	this.press5.name = "press5";
	this.press5.setTransform(-20.5,8.5);
	new cjs.ButtonHelper(this.press5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.press5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-92,182,201);


(lib.pear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer6();
	this.instance.setTransform(-65,-88.5);

	this.press4 = new lib.cherry();
	this.press4.name = "press4";
	this.press4.setTransform(19,3);
	new cjs.ButtonHelper(this.press4, 0, 1, 2, false, new lib.cherry(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.press4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-88.5,164,182.5);


(lib.bellpepper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset4();
	this.instance.setTransform(-80.5,-92);

	this.press3 = new lib.pear();
	this.press3.name = "press3";
	this.press3.setTransform(-31,0.5);
	new cjs.ButtonHelper(this.press3, 0, 1, 2, false, new lib.pear(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.press3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-92,176.5,184);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer5();
	this.instance.setTransform(-79,-91);

	this.press2 = new lib.bellpepper();
	this.press2.name = "press2";
	this.press2.setTransform(-0.5,-3);
	new cjs.ButtonHelper(this.press2, 0, 1, 2, false, new lib.bellpepper(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.press2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-95,161,186);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.press2 = new lib.bellpepper();
	this.press2.name = "press2";
	new cjs.ButtonHelper(this.press2, 0, 1, 2, false, new lib.bellpepper(), 3);

	this.timeline.addTween(cjs.Tween.get(this.press2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-92,161,184);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.press1 = new lib.apple();
	this.press1.name = "press1";
	new cjs.ButtonHelper(this.press1, 0, 1, 2, false, new lib.apple(), 3);

	this.timeline.addTween(cjs.Tween.get(this.press1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-91,158,182);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// Initially only the apple button is visible
		this.press2.visible = false;
		this.press3.visible = false;
		this.press4.visible = false;
		this.press5.visible = false;
		this.press1.visible = true;
		
		// Function to change visibility when press1 is clicked
		this.press1.addEventListener("click", function() {
		    this.press1.visible = false; // Hide press1
		    this.press2.visible = true; // Show press2
			console.log("press1 hidden, press2 visible");
		}.bind(this));
		
		// Function to change visibility when press2 is clicked
		this.press2.addEventListener("click", function() {
		    this.press2.visible = false; // Hide press2
		    this.press3.visible = true; // Show press3
			console.log("press2 hidden, press3 visible");
		}.bind(this));
		
		// Function to change visibility when press3 is clicked
		this.press3.addEventListener("click", function() {
		    this.press3.visible = false; // Hide press3
		    this.press4.visible = true; // Show press4
			console.log("press3 hidden, press4 visible");
		}.bind(this));
		
		// Function to change visibility when press4 is clicked
		this.press4.addEventListener("click", function() {
		    this.press4.visible = false; // Hide press4
		    this.press5.visible = true; // Show press5
			console.log("press4 hidden, press5 visible");
		}.bind(this));
		
		// Function to change visibility when press is clicked
		this.press5.addEventListener("click", function() {
		    this.press5.visible = false; // Hide press5
		    this.press1.visible = true; // Show press1 again, creating a loop
			console.log("press5 hidden, press1 visible");
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// press1
	this.press1 = new lib.Symbol1();
	this.press1.name = "press1";
	this.press1.setTransform(626,449);
	new cjs.ButtonHelper(this.press1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.press1).wait(1));

	// press2
	this.press2 = new lib.Symbol2();
	this.press2.name = "press2";
	this.press2.setTransform(627.5,445.1);
	new cjs.ButtonHelper(this.press2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.press2).wait(1));

	// press3
	this.press3 = new lib.pear();
	this.press3.name = "press3";
	this.press3.setTransform(593.8,446.6);
	new cjs.ButtonHelper(this.press3, 0, 1, 2, false, new lib.pear(), 3);

	this.timeline.addTween(cjs.Tween.get(this.press3).wait(1));

	// press4
	this.press4 = new lib.cherry();
	this.press4.name = "press4";
	this.press4.setTransform(607.55,447.85);
	new cjs.ButtonHelper(this.press4, 0, 1, 2, false, new lib.cherry(), 3);

	this.timeline.addTween(cjs.Tween.get(this.press4).wait(1));

	// press5
	this.press5 = new lib.Symbol3();
	this.press5.name = "press5";
	this.press5.setTransform(598.5,458.5);
	new cjs.ButtonHelper(this.press5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.press5).wait(1));

	// Layer_1
	this.instance = new lib.Layer2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(375,575,375,575);
// library properties:
lib.properties = {
	id: '25C812ECD4216348822C5AEB6E0500F4',
	width: 750,
	height: 1150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Asset3.png", id:"Asset3"},
		{src:"images/Asset4.png", id:"Asset4"},
		{src:"images/Asset5.png", id:"Asset5"},
		{src:"images/Layer2.jpg", id:"Layer2"},
		{src:"images/Layer5.png", id:"Layer5"},
		{src:"images/Layer6.png", id:"Layer6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['25C812ECD4216348822C5AEB6E0500F4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;