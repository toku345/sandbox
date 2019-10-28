var createScene = function() {
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new BABYLON.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
  var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  var mat = new BABYLON.StandardMaterial("mat", scene);

  var videoTexture = new BABYLON.VideoTexture(
    "video",
    ["textures/babylonjs.mp4", "textures/babylonjs.webm"],
    scene,
    true,
    true
  );

  mat.diffuseTexture = videoTexture;
  sphere.material = mat;

  // scene.onPointerUp = function () {
  videoTexture.video.play();
  //}

  return scene;
};
