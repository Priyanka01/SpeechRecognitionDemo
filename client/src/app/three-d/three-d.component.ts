import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.css']
})
export class ThreeDComponent implements OnInit {
  
  static camera : any;
  static scene :any
  static renderer : any;
  static geometry : any; 
  static material : any; 
  static mesh : any;

  show: boolean = true;
  expr:any;
  static exp = false;
  constructor() { 
   
  }

  ngOnInit() {
    ThreeDComponent.init();
    ThreeDComponent.animate();   
  }

  // rotateOnClick(){

  //   this.expr = true;
  // }

 static animate() {
    requestAnimationFrame(ThreeDComponent.animate);
    ThreeDComponent.mesh.rotation.x += 0.01;
    ThreeDComponent.mesh.rotation.y += 0.02;
    ThreeDComponent.renderer.render( ThreeDComponent.scene, ThreeDComponent.camera );
  }

    static init() {

      ThreeDComponent.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
      ThreeDComponent.camera.position.z = 1;

      ThreeDComponent.scene = new THREE.Scene();

      ThreeDComponent.geometry = new THREE.BoxGeometry( 0.6, 0.6, 0.6 );
      ThreeDComponent.material = new THREE.MeshNormalMaterial();

      ThreeDComponent.mesh = new THREE.Mesh( ThreeDComponent.geometry, ThreeDComponent.material );
      ThreeDComponent.scene.add( ThreeDComponent.mesh );

      ThreeDComponent.renderer = new THREE.WebGLRenderer( { antialias: true } );
      ThreeDComponent.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( ThreeDComponent.renderer.domElement );
}


  rotateEarth(){
  }
}