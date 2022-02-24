<template>
  <main id="main"></main>
</template>

<script>
  export default {
    name: "first3D",
    mounted(){
      /**
       * 创建场景对象Scene
       */
      var scene = new THREE.Scene();
      /**
       * 创建网格模型
       */
        // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      var geometry = new THREE.BoxGeometry(100, 100, 100);
      var box=new THREE.SphereGeometry(60,40,40);//创建一个球体几何对象
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff
      }); //材质对象Material
      var mesh1 = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      var mesh2 = new THREE.Mesh(box, material); //网格模型对象Mesh

      mesh1.position.set(100,100,100);
      mesh2.position.set(200,200,200);

      scene.add(mesh1); //网格模型添加到场景中
      scene.add(mesh2); //网格模型添加到场景中
      /**
       * 光源设置
       */
        //点光源
      var point = new THREE.PointLight(0xffffff);
      point.position.set(400, 200, 300); //点光源位置
      scene.add(point); //点光源添加到场景中
      //环境光
      var ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);
      // console.log(scene)
      // console.log(scene.children)
      /**
       * 相机设置
       */
      var width = window.innerWidth; //窗口宽度
      var height = window.innerHeight; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(200, 300, 200); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);//设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      document.getElementById('main').appendChild(renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      function render() {
        renderer.render(scene,camera);//执行渲染操作
        requestAnimationFrame(render);//请求再次执行渲染函数render
      }
      render();
      var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象

    },
  }
</script>

<style scoped>
  #main{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
</style>
