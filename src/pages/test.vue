<template>
  <main>

  </main>
</template>

<script>
  import * as THREE from '../../static/three.min';
  import {OBJLoader} from '../../static/OBJLoader';
  import {FBXLoader} from '../../static/FBXLoader';
  export default {
    name: "test",
    mounted(){
      let container;

      let camera, scene, renderer;

      let mouseX = 0, mouseY = 0;

      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;

      let object;

      init();


      function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
        camera.position.x = 1;
        camera.position.y = 2;
        camera.position.z = 3;

        // scene

        scene = new THREE.Scene();

        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        scene.add( ambientLight );

        const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        camera.add( pointLight );
        scene.add( camera );

        // manager

        function loadModel() {
          object.position.x = 1;
          object.position.y = 1;
          object.position.z = 1;
          scene.add( object );
        }

        const manager = new THREE.LoadingManager( loadModel );

        manager.onProgress = function ( item, loaded, total ) {

          console.log( item, loaded, total );
          animate();

        };


        function onProgress( xhr ) {

          if ( xhr.lengthComputable ) {

            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );

          }

        }

        function onError() {}

        const loader = new OBJLoader( manager );
        loader.load( '../../static/king/111.obj', function ( obj ) {
          object = obj;
        }, onProgress, onError );

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight);
        container.appendChild( renderer.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove );

        window.addEventListener( 'resize', onWindowResize );

      }

      function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      function onDocumentMouseMove( event ) {
        mouseX = ( event.clientX - windowHalfX ) / 2;
        mouseY = ( event.clientY - windowHalfY ) / 2;
      }

      function animate() {

        // object.rotation.y += 0.002;
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

      }

      function render() {

        camera.position.x += mouseX/100000;
        camera.position.y += mouseY/100000;

        renderer.render( scene, camera );

      }
    },
  }
</script>

<style scoped>

</style>
