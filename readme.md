### Requisitos

- Java versión 15 (https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html).
- MySQL (https://dev.mysql.com/downloads/installer/).
- Node.js (https://nodejs.org/en/).

### Instrucciones

1. Iniciar el motor de MySQL.
2. Crear un usuario y darle todos los privilegios desde MySQL Workbench o MySQL Command Line Client:

	```
	create database shop_stalls;
	create user 'springuser'@'%' identified by 'ThePassword';
	grant all on shop_stalls.* to 'springuser'@'%';
	```



3. Crear los roles de los usuarios:

	```
	insert into role values (0, "administrador");
	insert into role values (1, "vendedor");
	insert into role values (2, "contador");
	```
