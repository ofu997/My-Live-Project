//===========================================
//    Daniel Christie's Cube Animation 
//    effect for The Tech Academy Site
//===========================================
window.onload = function() {auto_animate()};

// Function to first, try and get the dimensions from the browser and if
// that did not work, try and get the dimensions from the body configuration
function getSize() {
	var dimension = [];
	var width = window.innerWidth || document.body.clientWidth;
	var height = window.innerHeight || document.body.clientHeight;
	dimension.push(width);
	dimension.push(height);
	return dimension;
}

function auto_animate() {
	var dimension = getSize();
	var width = dimension[0];
	var height = dimension[1];
	var cs = document.getElementById('cube_sides');
	var cc = document.getElementById('cube_container');
	// detect is browser has been resized and resize 
	// the cube with the corrected dimensions
	window.onresize = function(event) {
		window.location.reload();
	};
	// determine the browser size and call the correct functions
	if (width >= 600) {
		start_above600();
		cc.addEventListener("mouseover", break_above600);
		cc.addEventListener("mouseout", build_above600);
	} else if (width < 600 && width >= 301) {
		start_below600();
		cc.addEventListener("mouseover", break_below600);
		cc.addEventListener("mouseout", build_below600);
	} else if (width <= 300) {
		start_below300();
		cc.addEventListener("mouseover", break_below300);
		cc.addEventListener("mouseout", build_below300);
	};
	// start the cube rotation
	cs.style.animation = 'spin 20s infinite';
}

function start_above600() {
	//initial starting position if browser's width is 600px or greater
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	
	tp.style.transform = 'translateX(0px) translateY(-90px) translateZ(0px) rotateY(-90deg) rotateX(-90deg) scale(1)';
	bt.style.transform = 'translateX(0px) translateY(90px) translateZ(0px) rotateY(-90deg) rotateX(90deg) scale(1)';
	rt.style.transform = 'translateX(-90px) translateY(0px) translateZ(0px) rotateY(-90deg) scale(1)';
	lt.style.transform = 'translateX(90px) translateY(0px) translateZ(0px) rotateY(90deg) scale(1)';
	bk.style.transform = 'translateX(0px) translateY(0px) translateZ(-90px) rotateY(180deg) scale(1)';
	ft.style.transform = 'translateX(0px) translateY(0px) translateZ(90px) rotateY(0deg) scale(1)';
}
function start_below600() {
	//initial starting position if browser's width is below 600px
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	
	tp.style.transform = 'translateX(0px) translateY(-45px) translateZ(0px) rotateY(-90deg) rotateX(-90deg) scale(.5)';
	bt.style.transform = 'translateX(0px) translateY(45px) translateZ(0px) rotateY(-90deg) rotateX(90deg) scale(.5)';
	rt.style.transform = 'translateX(-45px) translateY(0px) translateZ(0px) rotateY(-90deg) scale(.5)';
	lt.style.transform = 'translateX(45px) translateY(0px) translateZ(0px) rotateY(90deg) scale(.5)';
	bk.style.transform = 'translateX(0px) translateY(0px) translateZ(-45px) rotateY(180deg) scale(.5)';
	ft.style.transform = 'translateX(0px) translateY(0px) translateZ(45px) rotateY(0deg) scale(.5)';
}
function start_below300() {
	//initial starting position if browser's width is below 300px
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	
	cs.style.margin = '-5% 0% 0% -5%';
	
	tp.style.transform = 'translateX(0px) translateY(-22.5px) translateZ(0px) rotateY(-90deg) rotateX(-90deg) scale(.25)';
	bt.style.transform = 'translateX(0px) translateY(22.5px) translateZ(0px) rotateY(-90deg) rotateX(90deg) scale(.25)';
	rt.style.transform = 'translateX(-22.5px) translateY(0px) translateZ(0px) rotateY(-90deg) scale(.25)';
	lt.style.transform = 'translateX(22.5px) translateY(0px) translateZ(0px) rotateY(90deg) scale(.25)';
	bk.style.transform = 'translateX(0px) translateY(0px) translateZ(-22.5px) rotateY(180deg) scale(.25)';
	ft.style.transform = 'translateX(0px) translateY(0px) translateZ(22.5px) rotateY(0deg) scale(.25)';
}

function build_above600() {
	//rebuild position if browser's width is 600px or greater
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	
	tp.style.transform = 'translateX(0px) translateY(-90px) translateZ(0px) rotateY(-90deg) rotateX(-90deg) scale(1)';
	bt.style.transform = 'translateX(0px) translateY(90px) translateZ(0px) rotateY(-90deg) rotateX(90deg) scale(1)';
	rt.style.transform = 'translateX(-90px) translateY(0px) translateZ(0px) rotateY(-90deg) scale(1)';
	lt.style.transform = 'translateX(90px) translateY(0px) translateZ(0px) rotateY(90deg) scale(1)';
	bk.style.transform = 'translateX(0px) translateY(0px) translateZ(-90px) rotateY(180deg) scale(1)';
	ft.style.transform = 'translateX(0px) translateY(0px) translateZ(90px) rotateY(0deg) scale(1)';
	
	tp.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	bt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	rt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	lt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	bk.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	ft.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	cs.style.animation = 'spin 20s infinite';
}
function build_below600() {
	//rebuild position if browser's width is below 600px
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	
	tp.style.transform = 'translateX(0px) translateY(-45px) translateZ(0px) rotateY(-90deg) rotateX(-90deg) scale(.5)';
	bt.style.transform = 'translateX(0px) translateY(45px) translateZ(0px) rotateY(-90deg) rotateX(90deg) scale(.5)';
	rt.style.transform = 'translateX(-45px) translateY(0px) translateZ(0px) rotateY(-90deg) scale(.5)';
	lt.style.transform = 'translateX(45px) translateY(0px) translateZ(0px) rotateY(90deg) scale(.5)';
	bk.style.transform = 'translateX(0px) translateY(0px) translateZ(-45px) rotateY(180deg) scale(.5)';
	ft.style.transform = 'translateX(0px) translateY(0px) translateZ(45px) rotateY(0deg) scale(.5)';
	
	tp.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	bt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	rt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	lt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	bk.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	ft.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	cs.style.animation = 'spin 20s infinite';
}
function build_below300() {
	//rebuild position if browser's width is below 300px
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	
	tp.style.transform = 'translateX(0px) translateY(-22.5px) translateZ(0px) rotateY(-90deg) rotateX(-90deg) scale(.25)';
	bt.style.transform = 'translateX(0px) translateY(22.5px) translateZ(0px) rotateY(-90deg) rotateX(90deg) scale(.25)';
	rt.style.transform = 'translateX(-22.5px) translateY(0px) translateZ(0px) rotateY(-90deg) scale(.25)';
	lt.style.transform = 'translateX(22.5px) translateY(0px) translateZ(0px) rotateY(90deg) scale(.25)';
	bk.style.transform = 'translateX(0px) translateY(0px) translateZ(-22.5px) rotateY(180deg) scale(.25)';
	ft.style.transform = 'translateX(0px) translateY(0px) translateZ(22.5px) rotateY(0deg) scale(.25)';
	
	tp.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	bt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	rt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	lt.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	bk.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	ft.style.transition = 'transform 1s cubic-bezier(.55, -.50, .47, 1.2)';
	cs.style.animation = 'spin 20s infinite';
}

function break_above600() {
	//dismantled position if browser's width is 600px or greater
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	var tpHover = document.getElementById('top:hover');
	cs.style.animation = 'reset 0s infinite';
	
	tp.style.transform = 'translateX(-70px) translateY(-140px) translateZ(0px) rotateY(0deg) rotateX(0deg) scale(.5)';
	bt.style.transform = 'translateX(-70px) translateY(140px) translateZ(0px) rotateY(0deg) rotateX(0deg) scale(.5)';
	rt.style.transform = 'translateX(160px) translateY(0px) translateZ(0px) rotateY(0deg) scale(.5)';
	lt.style.transform = 'translateX(-160px) translateY(0px) translateZ(0px) rotateY(0deg) scale(.5)';
	bk.style.transform = 'translateX(70px) translateY(140px) translateZ(0px) rotateY(0deg) scale(.5)';
	ft.style.transform = 'translateX(70px) translateY(-140px) translateZ(0px) rotateY(0deg) scale(.5)';
	
	tp.style.transition = 'transform .2s linear';
	bt.style.transition = 'transform .2s linear';
	rt.style.transition = 'transform .2s linear';
	lt.style.transition = 'transform .2s linear';
	bk.style.transition = 'transform .2s linear';
	ft.style.transition = 'transform .2s linear';	
}

function break_below600() {
	//dismantled position if browser's width is below 600px
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	var tpHover = document.getElementById('top:hover');
	cs.style.animation = 'reset 0s infinite';
	
	tp.style.transform = 'translateX(-60px) translateY(-70px) translateZ(0px) rotateY(0deg) rotateX(0deg) scale(.5)';
	bt.style.transform = 'translateX(-60px) translateY(140px) translateZ(0px) rotateY(0deg) rotateX(0deg) scale(.5)';
	rt.style.transform = 'translateX(40px) translateY(35px) translateZ(0px) rotateY(0deg) scale(.5)';
	lt.style.transform = 'translateX(-60px) translateY(35px) translateZ(0px) rotateY(0deg) scale(.5)';
	bk.style.transform = 'translateX(40px) translateY(140px) translateZ(0px) rotateY(0deg) scale(.5)';
	ft.style.transform = 'translateX(40px) translateY(-70px) translateZ(0px) rotateY(0deg) scale(.5)';
	
	tp.style.transition = 'transform .2s linear';
	bt.style.transition = 'transform .2s linear';
	rt.style.transition = 'transform .2s linear';
	lt.style.transition = 'transform .2s linear';
	bk.style.transition = 'transform .2s linear';
	ft.style.transition = 'transform .2s linear';	
}
function break_below300() {
	//dismantled position if browser's width is below 300px
	var cs = document.getElementById('cube_sides');
	var tp = document.getElementById('top');
	var bt = document.getElementById('bottom');
	var rt = document.getElementById('right');
	var lt = document.getElementById('left');
	var bk = document.getElementById('back');
	var ft = document.getElementById('front');
	var tpHover = document.getElementById('top:hover');
	cs.style.animation = 'reset 0s infinite';
	
	tp.style.transform = 'translateX(-60px) translateY(-50px) translateZ(0px) rotateY(0deg) rotateX(0deg) scale(.25)';
	bt.style.transform = 'translateX(-60px) translateY(50px) translateZ(0px) rotateY(0deg) rotateX(0deg) scale(.25)';
	rt.style.transform = 'translateX(-5px) translateY(0px) translateZ(0px) rotateY(0deg) scale(.25)';
	lt.style.transform = 'translateX(-60px) translateY(0px) translateZ(0px) rotateY(0deg) scale(.25)';
	bk.style.transform = 'translateX(-5px) translateY(50px) translateZ(0px) rotateY(0deg) scale(.25)';
	ft.style.transform = 'translateX(-5px) translateY(-50px) translateZ(0px) rotateY(0deg) scale(.25)';
	
	tp.style.transition = 'transform .2s linear';
	bt.style.transition = 'transform .2s linear';
	rt.style.transition = 'transform .2s linear';
	lt.style.transition = 'transform .2s linear';
	bk.style.transition = 'transform .2s linear';
	ft.style.transition = 'transform .2s linear';
}

