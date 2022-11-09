# Iniciando con REACT

Sólo **por primera vez** para una maquina:

	npm install -g create-react-app

Despues, para crear proyectos normalmente:

	npx create-react-app NombreDelProyecto

> Tambien se puede inicializar React en una **capeta existente**:
>
>  **Ojo**: Primero, ubicarse la capeta en cuestión.

 	npx create-react-app .

>Conviene cuando ya tienes creado un repositorio en GitHub.

------------
## Iniciando el servidor de desarrollo

Luego de instalado, para iniciar el servidor de desarrollo:

	npm start

******
## Si el proyecto ya está creado y está en github:
>Clonarlo y ejecutar:

	npm install
	npm init
	npm start

# GitHub Pages:
Instalar:

	npm i gh-pages 

En el archivo `package.json` agregar justo antes de `dependencies`:
> Colocar en "link_githubPages" :  
> Segun la estructura de este link: https://leo-spj.github.io/ecommerce-react-coderhouse/ 
> : nombre de usuario, github.io, nombre del repositorio github.

	 "homepage": " link_githubPages ",

Y en la primera linea dentro de `Scripts` pegar:

	"predeploy": "npm run build",
	"deploy": "gh-pages -d build",


#### Importante:
Cada vez que quiera **subir nuevos cambios al servidor** de github-pages:

	 git push
	 npm run deploy

## OPCIONAL:

##### SASS:

https://www.npmjs.com/package/sass

Para trabajar con archivos sass:

	npm i sass

##### React Bootstrap:

https://react-bootstrap.github.io/
