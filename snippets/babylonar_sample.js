var createScene = async function() {
  var scene = new BABYLON.Scene(engine);

  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;

  await BABYLON.Tools.LoadScriptAsync(
    "https://ar.babylonjs.com/babylonAr.playground.js"
  );

  var camera = await BabylonAR.ObjectTrackerCamera.CreateAsync("camera", scene);

  const tracker = await BabylonAR.ArUcoMetaMarkerObjectTracker.CreateAsync(
    camera.videoTexture,
    scene
  );
  const trackedNode = await tracker.addTrackableObjectAsync(0, 1, 2, 3, 5);

  var mat = new BABYLON.StandardMaterial("mat", scene);
  var texture = new BABYLON.Texture("https://i.imgur.com/lXehwjZ.jpg", scene);
  mat.diffuseTexture = texture;

  // var box = BABYLON.MeshBuilder.CreateBox("box", { size: 5.0 }, scene);
  var box = BABYLON.MeshBuilder.CreateBox(
    "box",
    { height: 5, width: 5, depth: 0.5 },
    scene
  );
  box.material = mat;
  box.parent = trackedNode;
  box.position.z += 5.0;

  // var plane = BABYLON.MeshBuilder.CreatePlane('plane', {width: 5, height: 5}, scene);
  // plane.material = mat;
  // plane.parent = trackedNode;
  // plane.position.z += 5.0;

  tracker.startTracking();

  return scene;
};
