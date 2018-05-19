# TrashExpert
Trash Expert is an application that giving users a better understanding of recycling and play some small interactive games to inspire users. <br>
[Link to the demo](http://peterchangsite.com/aau/wnm617/final_project/)

## Description
This project is using Highcharts for showing recycling data, and we created some interactive 3D games with three.js. Also, Stripe platform has been used for payment method.

## How it works?
#### examples:
```javascript
//Draggable
$("#id").draggable();
//Droppable
$("#id").droppable({
    accept: "#id",
    tolerance:"touch",
    drop: function(event, ui) {
        $(this).attr("src","img/name.png");
        $("#id").css("visibility","hidden");
        drop2 = true;
    }
});
```
```javascript
//Three.js basic scene
function createScene() {	
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	scene = new THREE.Scene;

	scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
	
	aspectRatio = WIDTH / HEIGHT;
	fieldOfView = 60;
	nearObject = 1;
	farObject = 10000;
	camera = new THREE.PerspectiveCamera(
		fieldOfView,
		aspectRatio,
		nearObject,
		farObject
		);
	
	camera.position.x = -50;
	camera.position.z = 180;
	camera.position.y = 100;
	camera.rotation.y = 50;

	renderer = new THREE.WebGLRenderer({ 
		alpha: true, 
		antialias: true 
	});

	renderer.setSize(WIDTH, HEIGHT);	
	renderer.shadowMap.enabled = true;
	
	container = document.getElementById('world');
	container.appendChild(renderer.domElement);
	
	window.addEventListener('resize', handleWindowResize, false);
}
```
