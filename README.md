# Coinprofit


## Instalación

Estos son los pasos a seguir para ejecutar el proyecto en un equipo con Macintosh
*	Node: Descargamos desde la web https://nodejs.org/en/download/ 
*	NPM: npm install en el directorio del proyecto para que se instalen las dependencias necesarias.
*	MongoDB:
Descargamos ficheros binarios del repositorio de MongoDB

$ curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.4.tgz               

Extraemos los ficheros con el comando tar

$ tar -zxvf mongodb-osx-x86_64-3.4.4.tgz

Creamos un directorio llamando mongodb donde guardaremos el proyecto (en nuestro caso lo hemos almacenado en la carpeta del proyecto)

$ mkdir -p mongodb 

$ cp -R -n mongodb-osx-x86_64-3.4.4/ mongodb

exportamos la ruta de la base de datos mongoDB al PATH, donde  <mongodb-install-directory> será nuestra ruta

$ export PATH=<mongodb-install-directory>/bin:$PATH

Creamos el directorio por defecto 

$ sudo mkdir -p /data/db

Corremos mongoDB

$ mongod

Apuntamos a mongodb a esa ruta (data/db/)

$ mongod --dbpath <path to data directory>

Comprobamos que tenemos conexión con la BBDD desde un navegador introducciendo la dirección 
$ http://localhost:27017/



## Arrancando 

Acceder a twitter a https://apps.twitter.com/ y crear una nueva aplicación.

Generar las API key de Twitter, API secret, token key, y token secret.

Configurar el fichero env.sample.js con los valores de las variables anteriores.

Para obtener los datos financieros generar una API key en https://www.quandl.com/


Lanzamos aplicación

    $ npm run start

Cargamos en el navegador

    $ http://localhost:3000

## Test

Para arrancar en modo test:

    $ npm test


