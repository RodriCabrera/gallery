# ART LATIN AMERICA

![artlatinamerica-logo](./src/components/Navbar/logo-art-transp.png)

## Proyecto realizado en el marco del [curso de React.js de CODERHOUSE](https://www.coderhouse.com/online/reactjs).

### Live Demo: [Deployed en Vercel](https://artlatinamerica.vercel.app/)

## Create React App

El project fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Iniciando el proyecto:

Una vez descargado el repositorio, se deben instalar las dependencias utlizadas mediante `npm install`, que en este caso fueron:

"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",
"bootstrap": "^5.1.0",
"firebase": "^9.1.0", -----> Utilizazdo Firestore para el almacenamiento de las obras, las categorías y las órdenes de compra.
"react": "^17.0.2",
"react-bootstrap": "^2.0.0-beta.6", -----> Para el carousel del banner principal y el spinner de carga.
"react-dom": "^17.0.2",
"react-icons": "^4.2.0", ----> Para los iconos utilizados
"react-masonry-css": "^1.0.16", -----> Para crear el display de la grilla de obras
"react-router-dom": "^5.3.0",
"react-scripts": "4.0.3",
"styled-components": "^5.3.1" ----> Para darle estilo a los componentes.

### `npm start`

Una vez instaladas las dependencias ejecutar el comando `npm start` para correr la app en el navegador.
Por defecto va a correr en el puerto 3000: [http://localhost:3000](http://localhost:3000)

Si se hacen modificaciones se van a visualizar automáticamente, sin necesidad de volver a ejecutar el comando.

# Sobre el sitio

**ART LATIN AMERICA** es un prototipo de una aplicación de venta de obras de arte online. Inicialmente se simula la venta de impresiones de las obras, por lo tanto se puede elegir la cantidad. En futuras versiones se eliminará la opción para elegir cantidad y se venderán obras de arte únicas.

Todas las obras actualmente expuestas son parte de la colección permanente del [Museo Nacional de Bellas Artes](https://www.bellasartes.gob.ar/), y se eligieron únicamente con el fin de contar con contenidos para poder simular el flujo de la aplicación.

La base de datos utilizada es **Firestore**. Allí están almacenadas las obras de arte, las categorías con las técnicas empleadas, y el registro de las ordenes de compra.

### HOME

Incluye:

- Banner con breve descripción sobre ART LATIN AMERICA.
- Listado de obras con posibilidad de filtrar según técnica utilizada.
  Al elegir una obra se pasa a la vista de detalle, donde hay más información de la misma, y la posibilidad de elegir una cantidad de impresiones para agregar al carrito. Tras confirmar la elección, se redirige al CART.

### Links del NAVBAR:

#### ARTWORKS

Listado de obras igual que el HOME pero sin el Banner.

#### ARTISTS

Un listado con los nombres de los artistas cuyas obras están siendo publicadas. Esta lista se genera dinámicamente en base a la base de datos de Firebase.

#### ABOUT US

Breve descripción sobre ART LATIN AMERICA.

#### CART

Listado de las obras elegidas hasta el momento. El número que figura al lado del ícono del carrito es el total de obras elegidas.
