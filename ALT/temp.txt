   <a-marker type="pattern" url="PATTS/pattern-G2.patt">
      <!-- Plane to display the image -->

      <!-- Left -->
      <a-plane id="imagePlane2" scale="1 1.4 1" position="-2 0 0" rotation="-90 0 0"
        material="shader: flat; src:POSTERS/PIYESA-Poster.png"></a-plane>
      <a-entity gltf-model="3D/FILM-FRAME.glb" scale="0.3 0.3 0.3" rotation="-90 0 0" position="-2 0 1"></a-entity>

      <!-- Middle -->
      <a-plane id="imagePlane" scale="1 1.4 1" position="0 0 0" rotation="-90 0 0"
        material="shader: flat; src:POSTERS/BN-Poster.jpg"></a-plane>
      <a-entity gltf-model="3D/FILM-FRAME.glb" scale="0.3 0.3 0.3" rotation="-90 0 0" position="0 0 1"></a-entity>

      <!-- Right -->
      <a-plane id="imagePlane1" scale="1 1.4 1" position="2 0 0" rotation="-90 0 0"
        material="shader: flat; src:POSTERS/-Poster.png"></a-plane>
      <a-entity gltf-model="3D/FILM-FRAME.glb" scale="0.3 0.3 0.3" rotation="-90 0 0" position="2 0 1"></a-entity>
    </a-marker>