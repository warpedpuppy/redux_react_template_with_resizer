export let resize = (width, height, homeCanvasWidth, homeCanvasHeight) => 
	({
	  type: 'SCREEN_RESIZE',
	  windowWidth: width,
	  windowHeight: height,
	  homeCanvasWidth: homeCanvasWidth,
	  homeCanvasHeight: homeCanvasHeight,
})
