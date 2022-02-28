// 0 significa nada
      // 1 significa muro
      // 2 significa jugador
      // 3 significa premio
      let mapa = [
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      ];

      const TAMANO_PARED = 5;
      const ALTO_PARED = 3;
      let muro;
      let premio;

      let muros = document.querySelector("#muros");
      let premios = document.querySelector("#premios");
      let scoreEl = document.querySelector("#score");

      // dibujar el mapa
      for (let x = 0; x < mapa.length; x++) {
        for (let z = 0; z < mapa[x].length; z++) {
          // Esto es un salto de fe (creanme que es asi)
          //(x 1.5 z)
          let posicion =
            (x - mapa.length / 2) * TAMANO_PARED +
            " " +
            1.5 +
            " " +
            (z - mapa[x].length / 2) * TAMANO_PARED;

          if (mapa[x][z] == 0) {
            // Aire
            continue;
          } else if (mapa[x][z] == 1) {
            // Pared
            muro = document.createElement("a-box");
            muros.appendChild(muro);
            muro.setAttribute("color", "fff");
            muro.setAttribute("material", "src: #pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
          } else if (mapa[x][z] == 2) {
            // jugador
            document
              .querySelector("#jugador")
              .setAttribute("position", posicion);
          } else if (mapa[x][z] == 3) {
            premio = document.createElement("a-sphere");
            premios.appendChild(premio);
            premio.setAttribute("position", posicion);
            premio.setAttribute("class", "premio");
            premio.setAttribute("color", "tomato");
            premio.setAttribute("radius", "0.3");
          }
        }
      }