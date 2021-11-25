<style>
#jazz {
  position: absolute;
  margin-left: 0%;
  margin-top: -1%;
}

.b {
  padding-left: 10px;
  padding-right: 10px;
  border-left: 1px solid black;
}
.a {
  padding-right: 10px;
}
.c {
  width: 100%;
  text-align-last: center;
}

.d {
  margin-right: -10%;
  margin-left: 20%;
  position: absolute;
  border: 1px solid black;
  padding: 3px;
  border-radius: 9px;
  font-size: 12pt !important;
  font-weight: bold;
  top: 0;
  right: 0;
  text-decoration: none;
  align-content: center;
}

.c .a,
.c .b {
  padding: 10px;
  text-decoration: none;
  color: white;
  font-size: 16pt;
  background-color: black;
  border-radius: 20px;
}
</style>

<template>
  <div>
    <div class="row c" style="margin-top: 15px">
      <NuxtLink class="a" to="/">Home</NuxtLink>
      <NuxtLink class="b" to="/animals_index">Animals</NuxtLink>
    </div>
  </div>
</template>