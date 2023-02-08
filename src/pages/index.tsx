import { useEffect } from 'react';
import * as THREE from 'three';



function threeTest() {
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,//0xff0000设置材质颜色为红色
  });
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  mesh.position.set(0, 10, 0);
  scene.add(mesh);
  // 实例化一个透视投影相机对象
  const camera = new THREE.PerspectiveCamera();

  //相机在Three.js三维坐标系中的位置
  // 根据需要设置相机位置具体值
  camera.position.set(200, 200, 200);
  //相机观察目标指向Threejs 3D空间中某个位置
  camera.lookAt(0, 0, 0); //坐标原点
  // 相机位置xyz坐标：0,10,0
  mesh.position.set(0, 10, 0);
  // 相机位置xyz坐标：200, 200, 200
  camera.position.set(200, 200, 200);

  const width = 800; //宽度
  const height = 500; //高度

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
  renderer.render(scene, camera); //执行渲染操作
  document.body.appendChild(renderer.domElement);
  document.getElementById('webgl').appendChild(renderer.domElement);

}
export default function HomePage() {


  useEffect(() => {
    threeTest();
  })

  return (
    <div id="webgl"></div>
  );
}
