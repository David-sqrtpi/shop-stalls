Requisitos:
	- Java Yo uso la versión 15 (Versión 15: https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html)
	- MySQL Versión estable más reciente (https://dev.mysql.com/downloads/installer/)
	- Node.js versión estable más reciente (LTS: https://nodejs.org/en/)

1. Iniciar el motor de MySLQ.
2. Crear un usuario y darle acceso a todo desde MySQL Workbench o MySQL Command Line Client

	mysql> create user 'springuser'@'%' identified by 'ThePassword'; -- Creates the user
	mysql> grant all on db_example.* to 'springuser'@'%'; -- Gives all privileges to the new user on the newly created database

3. Crear la base de datos con el scrip de la ruta Shop "Stalls\database\script.sql" desde MySQL Workbench o MySQL Command Line Client
3. Ingresar al directorio "Shop Stalls\view" desde consola y ejecutar el comando 

	ng serve

4. Ingresar al directorio "Shop Stalls\logic\build\libs" y ejecutar el comando 

	java -jar shop-stalls-1.0.jar

5. Abrir el navegador en la URL "http://localhost:4200/" y crear usuarios.
5. Para ver los usuarios ingresar a la URL "http://localhost:8080/user/get-all"