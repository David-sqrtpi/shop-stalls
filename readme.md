### Requisitos

- Java, Yo uso la versión 15 (Versión 15: https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html).
- MySQL Versión estable más reciente (https://dev.mysql.com/downloads/installer/).
- Node.js versión estable más reciente (LTS: https://nodejs.org/en/).

### Instrucciones

1. Iniciar el motor de MySLQ.
2. Crear la base de datos con el script de la ruta ```Shop Stalls\database\script.sql``` desde MySQL Workbench o MySQL Command Line Client.
3. Crear un usuario y darle acceso a todo desde MySQL Workbench o MySQL Command Line Client:

	```mysql> create user 'springuser'@'%' identified by 'ThePassword';```
	
	```mysql> grant all on shop_stalls.* to 'springuser'@'%';```

4. Instalar el CLI de Angular

```npm install -g @angular/cli```

5. Ingresar al directorio ```Shop Stalls\view``` desde la consola de comandos y ejecutar el comando:
	
	```ng serve```

6. Ingresar al directorio ```Shop Stalls\logic\build\libs``` desde la consola de comandos y ejecutar el comando:

	```java -jar shop-stalls-1.0.jar```

7. Abrir el navegador en la URL http://localhost:4200/ y crear usuarios.
8. Para ver los usuarios ingresar a la URL http://localhost:8080/user/get-all.