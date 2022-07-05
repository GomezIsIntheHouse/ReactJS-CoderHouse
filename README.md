
# CREADOR: Julián Gómez

Este proyecto es un E-comerce desarrollado con React. Representa una simulación de una tienda en linea que vende dispositivos electronicos y accesorios para dichos dispositivos.

## bash

- $ git clone https://github.com/GomezIsIntheHouse/ReactJS-CoderHouse
- $ cd .\proyecto\
- $ npm install
- $ npm start
- npm start Abra http://localhost:3000 para ver en su navegador.

## FIREBASE - Base de datos.
Para poder utilizar la base de datos conectada con esta app, se deberan completar los campos con las respectivas claves de acceso:


- **REACT_APP_apikey=**
- **REACT_APP_authDomain=**
- **REACT_APP_projectId=**
- **REACT_APP_storageBucket=**
- **REACT_APP_messaginSenderId=**
- **REACT_APP_appId=**


# Componentes principales
- NavBar
- CarritoComponente
- ItemDetail , ItemDetailConteiner
- Item,ItemList , ItemListContainer
- Cart
- Login
- Perfil


## Uso de componentes
En primer instancia se vera una landing page, con el navbar dividido por las secciones pertenecientes a la naturaleza de los productos.
Al seleccionar un producto del inicio de nuestra página, llevará al detalle del producto. En esa sección podremos ver la cantidad de productos que se desea llevar y el detalle de nuestro producto. Al seleccionar la cantidad deseada podremos finalizar compra o seguir comprando.

En cuanto a la funcionalidad de la aplicación, podremos navegar por toda la página y todos los items, incluyendo la agregación de productos
al carrito de compras, pero para poder acceder al carrito para finalizar la compra, se deberá crear un usuario incluyendo, contraseña, email, direccion, edad, telefono. Dichos campos seran rellenados de manera dinámica y manual por el usuario, respetando las exigencias propias de las reglas del negocio. Edad minima 18 años, nombre de no mas de 20 caracteres y no menos de 4 caracteres. Email con un formato valido por el sistema, contraseña de no menos de 6 caracteres. Todos los campos del formulario deberán ser completados para lanzar la petición de agregación de un nuevo usuario del sistema.

Finalizar compra: Nos llevara al carrito de productos, donde vemos la cantidad del producto, el precio unitario y el subtotal. En la misma página vamos a ver el total de todos los productos que añadimos al carrito. En dicha sección veremos un listado detallado de los productos agregados por el usuario ya logueado en nuestro sistema. Tambien por cada producto se podra actualizar la cantidad del mismo, eliminar el producto o eliminar todo el carrito de compras completo.

Funcionalidad a mejorar:
La orden de compra se registra en la base de datos junto con los datos del registro del usuario. 
Esta funcionalidad la falta un mayor refinamiento, ya que por el momento los datos de los usuarios los carga dinamicamente en localStorage y desde allí los carga en la orden. Aún no vincula el email con los datos de los usuarios registrados


