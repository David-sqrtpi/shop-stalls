create database shop_stalls;

use shop_stalls;

create table company (
	id int not null primary key,
    name varchar (20) not null,
    web varchar (20) not null,
    address varchar (20) not null,
    phone varchar (20) not null
);

create table user (
	id int not null primary key,
    name varchar (20) not null,
    email varchar (20) not null,
    password varchar (20) not null,
    age int not null,
    id_company int not null,
    foreign key (id_company) references company(id)
);

create table rol (
	id int primary key  not null,
    name varchar(20) not null    
);

create table user_rol (
	id int not null primary key,
    user_id int not null,
    rol_id int not null,
    foreign key (user_id) references user(id),
    foreign key (rol_id) references rol(id)
);

create table sale (
	id int primary key not null,
    user_id int not null,
    state_details varchar(50) not null,
    foreign key (user_id) references user (id)
);

create table invoice (
	id int primary key not null,
    sale_id int not null,
    client_name varchar(50) not null,
    date Date not null,
    total_due int not null,
    foreign key (sale_id) references sale (id)
);

create table product_type (
	id int not null primary key,
    name varchar (40) not null
);

create table product (
	id int not null primary key,
    product_type_id int not null,
    name varchar (30) not null,
    price int not null,
    quantity int not null,
    foreign key (product_type_id) references product_type (id)
);

create table product_property (
	id int not null primary key,
    product_id int not null,
    name varchar (40) not null,
    value varchar (50) not null,
    foreign key (product_id) references product (id)
);

create table service (
	id int not null primary key,
    information varchar (50)
);

create table invoice_detail (
	id int primary key not null,
    invoice_id int not null,
    product_id int not null,
    service_id int not null,
    foreign key (invoice_id) references invoice (id),
    foreign key (product_id) references invoice (id),
    foreign key (service_id) references invoice (id)
);

insert into company values (0, "Avenida 12", "Motomaniacos", "31108762364", "www.motomaniacos.com");
insert into user values (0, 22, "yeison@motomaniacos.com", "yeison", "12345678", 0);
insert into product values (0, "Aceite Castrol 400W", 10000, 10, 123, "AVAILABLE", 0);
insert into service values (0, "Según el aceite seleccionado", "Cambio de Aceite", 10000, "AVAILABLE", 0);
insert into supplier values (0, "Ave 129 Palo Alto California", "Grand Scott Garage", "312982374", 0);
