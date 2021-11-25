<style>
p {
  text-align: justify;
  font-size: 12pt;
}
#font {
  font-size: 16px;
  color: black;
  font-family: Georgia, serif;
  letter-spacing: 0.6px;
  word-spacing: 1.4px;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: capitalize;
}

#parra {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  letter-spacing: -1.2px;
  word-spacing: 2.2px;
  color: #000000;
  font-weight: 400;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: capitalize;
  text-align: center;
}
</style>

<template>
  <div class="container">
    <HeaderView />
    <div>
      <p id="parra">
        In this page you will find information about some animals.
      </p>
      <img
        src="https://us.123rf.com/450wm/liborf/liborf1112/liborf111200001/11385111-las-sombras-de-los-p%C3%A1jaros-creado-un-dibujo-de-l%C3%ADneas-creado-por-los-p%C3%A1jaros-fotograf%C3%ADa-real-.jpg?ver=6"
        alt="imagen"
		width="45%"
		style="border: 1px solid black; border-radius:20px; padding:6px;"
      />
      <img
        src="https://previews.123rf.com/images/olgasiv/olgasiv1605/olgasiv160500029/56725565-siluetas-de-animales-salvajes-y-dom%C3%A9sticos-aves-e-insectos-sobre-un-fondo-blanco-.jpg"
        alt="imagen2"
		width="45%"
		style="border: 1px solid black; border-radius:20px;"
      />
    </div>
    <FooterView />
  </div>
</template>
