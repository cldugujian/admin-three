<template>
  <main>



  </main>
</template>

<script>
  import * as THREE from '../../static/three.min';
  import {OBJLoader} from '../../static/OBJLoader';
  import {FBXLoader} from '../../static/FBXLoader';
  export default {
    name: "legacy",
    data(){
      return{
        scene:{},
        camera:{},
        renderer:{},
      }
    },
    methods:{
      // 跳转
      jump(){

      },
      // 初始化场景
      init(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
      },
      // 设置光源
      loadLight(){
        let light = new THREE.DirectionalLight(0xff0000);// 光源颜色
        light.position.set(0, 0, 0);//光源位置
        this.scene.add(light);// 光源添加到场景中
      },
      // 添加 OBJ 模型
      loadObj(){
        const loader = new OBJLoader();
        loader.load(
          '../../static/king/111.obj',
          (object) =>  {
            console.log('object', object);
            this.camera.position.z = 5;
            object.scale.set(3, 3, 3);
            object.children[0].material.color.set(0xe8b73b);
            object.rotation.x = 0.1;
            object.rotation.y = 0.1;
            this.scene.add(object);
            this.camera.lookAt( this.scene.position );
          },
          (xhr) =>  {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
          },
          (error) =>  {
            console.error(error);
          });
      },
      // 添加 FBX 模型
      loadFBX(){
        const loader = new OBJLoader();
        loader.load(
          '../../static/cp.fbx',
          (object) => {
            console.log('object', object);
            this.camera.position.z = 5;
            object.scale.set(3, 3, 3);
            object.rotation.x += 0.01;
            object.rotation.y += 0.01;
            this.scene.add(object);
          },
          (xhr) => {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
          },
          (error) => {
            console.error(error);
          });
      },
    },
    mounted() {
      this.init();
      this.loadObj();
      this.loadLight();
    },
  }
</script>

<style scoped>

</style>
