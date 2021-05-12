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
### Endpoints

Endpoint | Acción | Descripción | Parámetros
---|----|---|---
/login | POST | Inicia sesión | Objeto AuthRequest
/companies/{company}/{inventory} | PUT | Añade la lista al inventario | Una lista de Objetos PurchaseDetail
/companies/{company}/inventory | GET | Retorna el inventario | El ID de la compañía
/invoices/{invoice}/product | PUT | Añade un producto a la facutura | El ID de la factura, el producto y la cantidad
/invoices/{invoice}/service | PUT | Añade un servicio a la facutura | El ID de la factura y el servicio
/invoices | POST | Crea una factura | Un objeto Invoice
/invoices/{invoice} | GET | Retorna una factura | El ID de la factura
/products | POST | Añade un producto al sistema | Un objeto Product
/products | GET | Retorna la lista de productos | El ID de la compañía
/products/{product} | GET | Retorna un producto | El ID del producto y la compañía
/products | PUT | Modifica un producto | Un objeto Product
/purchase-items | POST | Añade los productos de una factura de compra | Una lista de objetos PurchaseDetail
/purchases | POST | Crea una factura de compra | 
/purchases/purchase | GET | Retorna una factura de compra| El ID de la factura de compra
