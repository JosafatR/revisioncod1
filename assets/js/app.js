const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// se cambian los nombres de las variables para una mejor comprensión
const nameDate = document.querySelector('.name'); // se agrega el . a 'name'
const blogDate = document.querySelector('.blog'); // se cambia el # por el . en 'blog'
const locationCase = document.querySelector('.location');

async function displayUser(username) { //SE agrega async a la función para usar el await
  //SE reemplaza el textContent por nameDate.innerHTML
  nameDate.innerHTML = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nameDate.innerHTML = '${data.name}'; // se convierte nameDate.innerHTML
  blogDate.innerHTML = '${data.blog}';
  locationCase.innerHTML = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameDate.innerHTML = `Algo salió mal: ${err}` //Se reemplaza la variable a nameDate.innerHTML
}

displayUser('stolinski').catch(handleError);