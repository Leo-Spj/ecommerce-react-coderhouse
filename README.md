# Iniciando con REACT

Sólo **por primera vez** para una maquina:

	npm install -g create-react-app

Despues, para crear proyectos normalmente:

	npx create-react-app NombreDelProyecto

> Tambien se puede inicializar React en una **capeta existente**:
>>  **Ojo**: Primero, ubicarse la capeta en cuestión

> 	npx create-react-app .
>Conviene cuando ya tienes creado un repositorio en GitHub.

------------
## Iniciando el servidor de desarrollo

Luego de instalado, para iniciar el servidor de desarrollo:

	npm start

******
##### Si el proyecto ya está creado y está en github:
>Clonarlo y ejecutar:

	npm install
	npm init

## GitHub Pages:
Instalar:

	npm i gh-pages 

En el archivo `package.json` agregar justo antes de `dependencies`:
> Colocar el link que genera GitHub Pages en "link_githubPages":

	 "homepage": " link_githubPages ",

Y en la primera linea dentro de `Scripts`:

	"predeploy": "npm run build",
	"deploy": "gh-pages -d build",


####Importante:
Cada vez que quiera **subir nuevos cambios al servidor** de github-pages:

	 git push
	 npm run deploy

##OPCIONAL:

###### SASS:
Para trabajar con archivos sass:

	npm i sass
