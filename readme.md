### Requisitos

- Java versión 15 (https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html).
- MySQL (https://dev.mysql.com/downloads/installer/).
- Node.js (https://nodejs.org/en/).

### Instrucciones

1. Iniciar el motor de MySQL.
3. Crear un usuario y darle todos los privilegios desde MySQL Workbench o MySQL Command Line Client:

	```
	create user 'springuser'@'%' identified by 'ThePassword';
	grant all on shop_stalls.* to 'springuser'@'%';
	```

4. Instalar el CLI de Angular

	``` npm install -g @angular/cli ```

5. Ingresar al directorio ``` Shop Stalls\view ``` desde la consola de comandos y ejecutar el comando:
	
	``` ng serve ```

6. Ingresar al directorio ``` Shop Stalls\logic\build\libs ``` desde la consola de comandos y ejecutar el comando:

	``` java -jar shop-stalls-1.0.jar ```

7. Abrir el navegador en la URL http://localhost:4200/ y crear usuarios.
8. Para ver los usuarios ingresar a la URL http://localhost:8080/user/get-all.
