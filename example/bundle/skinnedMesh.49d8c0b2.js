var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire5b70;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire5b70=a);var r=a("ilwiq"),o=a("RPVlj"),i=a("7lx9d"),s=a("5Rd1x"),l=a("4CEV9"),d=a("891vQ"),u=a("kp7Te"),c=a("jiuw3"),m=a("1EdOY");let p,w,h,g,x,b,f,v,y,P,M=0;const F={environmentIntensity:3,emissiveIntensity:100,bounces:3,samplesPerFrame:1,resolutionScale:1/window.devicePixelRatio,tiles:1,autoPause:!0,pause:!1,continuous:!1};function E(e){y.action.paused=e,F.pause=e,e&&S()}function C(e){return(new i.GLTFLoader).setMeshoptDecoder(u.MeshoptDecoder).loadAsync(e).then((e=>{e.scene.traverse((e=>{e.material&&(e.material.metalness=0,e.material.map=null)}));const t=e.animations,n=new r.AnimationMixer(e.scene),a=n.clipAction(t[0]);a.play(),a.paused=F.pause;const o=new r.Group;o.add(e.scene);const i=m.generateRadialFloorTexture(2048),s=new r.Mesh(new r.PlaneBufferGeometry,new r.MeshStandardMaterial({map:i,transparent:!0,color:14540253,roughness:.025,metalness:1}));s.scale.setScalar(50),s.rotation.x=-Math.PI/2,s.position.y=.075,o.add(s);return{scene:o,sceneGenerator:new l.DynamicPathTracingSceneGenerator(o),mixer:n,action:a}}))}function R(){const e=window.innerWidth,t=window.innerHeight,n=F.resolutionScale,a=window.devicePixelRatio;g.setSize(e*n*a,t*n*a),g.reset(),p.setSize(e,t),p.setPixelRatio(window.devicePixelRatio*n),x.aspect=e/t,x.updateProjectionMatrix()}function S(){const{scene:e,sceneGenerator:t}=y,n=t.generate(e);h=n;const{bvh:a,textures:r,materials:o}=n,i=a.geometry,s=g.material;s.bvh.updateFrom(a),s.normalAttribute.updateFrom(i.attributes.normal),s.tangentAttribute.updateFrom(i.attributes.tangent),s.uvAttribute.updateFrom(i.attributes.uv),s.materialIndexAttribute.updateFrom(i.attributes.materialIndex),s.textures.setTextures(p,2048,2048,r),s.materials.updateFrom(o,r),g.reset()}function I(){requestAnimationFrame(I);const e=Math.min(v.getDelta(),.03);if(y.mixer.update(e),y.scene.updateMatrixWorld(),F.autoPause?(M+=e,(!F.pause&&M>=2.5||F.pause&&M>=5)&&(E(!F.pause),M=0)):M=0,F.pause||F.continuous){!F.pause&&F.continuous&&S(),g.material.materials.updateFrom(h.materials,h.textures),g.material.environmentIntensity=F.environmentIntensity,g.material.environmentBlur=.35,g.material.bounces=F.bounces,x.updateMatrixWorld();for(let e=0,t=F.samplesPerFrame;e<t;e++)g.update();p.autoClear=!1,b.render(p),p.autoClear=!0,P.innerText=`Samples: ${Math.floor(g.samples)}`}else p.render(f,x)}window.innerWidth/window.innerHeight<.65&&(F.resolutionScale*=.5,F.tiles=2),async function(){p=new r.WebGLRenderer({antialias:!0}),p.toneMapping=r.ACESFilmicToneMapping,document.body.appendChild(p.domElement),f=new r.Scene,x=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.025,500),x.position.set(5.5,3.5,7.5),g=new l.PathTracingRenderer(p),g.camera=x,g.material=new l.PhysicalPathTracingMaterial,g.material.filterGlossyFactor=.25,g.material.setDefine("FEATURE_MIS",0),g.tiles.set(F.tiles,F.tiles),b=new o.FullScreenQuad(new r.MeshBasicMaterial({map:g.target.texture,transparent:!0})),w=new s.OrbitControls(x,p.domElement),w.target.set(-.15,2,-.08),x.lookAt(w.target),w.addEventListener("change",(()=>{g.reset()})),w.update(),P=document.getElementById("samples"),v=new r.Clock;const e=new Promise((e=>{(new d.RGBELoader).load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr",(t=>{const n=new l.BlurredEnvMapGenerator(p),a=n.generate(t,.35);g.material.envMapInfo.updateFrom(a),n.dispose(),f.background=a,f.environment=a,e()}))}));y="#morphtarget"===window.location.hash?await C("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb"):await C("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/trex/scene.gltf");f.add(y.scene),await e,document.getElementById("loading").remove(),R(),window.addEventListener("resize",R);const t=new c.GUI;t.add(F,"tiles",1,4,1).onChange((e=>{g.tiles.set(e,e)})),t.add(F,"samplesPerFrame",1,10,1),t.add(F,"environmentIntensity",0,10).onChange((()=>{g.reset()})),t.add(F,"bounces",1,5,1).onChange((()=>{g.reset()})),t.add(F,"resolutionScale",.1,1).onChange((()=>{R()})),t.add(F,"autoPause").listen(),t.add(F,"pause").onChange((e=>{F.autoPause=!1,E(e)})).listen(),t.add(F,"continuous").onChange((()=>{F.autoPause=!1})),I()}();
//# sourceMappingURL=skinnedMesh.49d8c0b2.js.map
