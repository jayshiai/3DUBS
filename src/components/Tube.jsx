// components/Tube.js
import { useRef, useEffect } from 'react';

import { useFrame } from 'react-three-fiber';

const Tube = () => {
  const tubeRef = useRef();
  const points = [];
  let i = 0;

  // Define initial points for the curve
  for (i = 0; i < 5; i += 1) {
    points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)));
  }
  points[4].y = -0.06;

  const curve = new THREE.CatmullRomCurve3(points);
  curve.type = "catmullrom";

  const tubeGeometry = new THREE.TubeGeometry(curve, 70, 0.02, 30, false);
  const tubeMaterial = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    color: 0xffffff
  });

  useEffect(() => {
    if (tubeRef.current) {
      tubeRef.current.geometry.vertices = curve.getPoints(70);
      tubeRef.current.geometry.verticesNeedUpdate = true;
    }
  }, [curve]);

  useFrame(() => {
    if (tubeRef.current) {
      tubeRef.current.material.color.set(new THREE.Color(0xffffff));
      tubeRef.current.material.needsUpdate = true;
      tubeRef.current.material.map = null; // Remove texture
      tubeRef.current.material.map = new THREE.TextureLoader().load(''); // Optional: Provide an empty texture
      tubeRef.current.material.map.needsUpdate = true;
      tubeRef.current.material.map.offset.x += 0.01; // Adjust the speed as needed
    }
  });

  return <mesh ref={tubeRef} geometry={tubeGeometry} material={tubeMaterial} />;
};

export default Tube;
    