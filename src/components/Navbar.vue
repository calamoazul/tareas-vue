<template>
  <nav class="navbar">
    <div class="container-logo">
      <RouterLink to="/"><img width="50" src="@/assets/logo.svg" /></RouterLink>
      <h1>App de Notas con Vue</h1>
    </div>
    
    <div class="menu">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/nueva-tarea">Añadir Tarea</RouterLink></li>
        <li><RouterLink to="/about">Sobre mí</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--navbar-color);
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.container-logo,
.menu,
.menu ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-logo h1 {
  margin-left: 10px;
  font-size: 20px;
}

.menu li {
  list-style: none;
  margin-left: 10px;
}
.menu a {
  font-size: 16px;
  text-transform: uppercase;
  color: var(--text-color);
  text-decoration: none;
}

.menu a.router-link-active {
  color: var(--accent-color);
}
</style>
