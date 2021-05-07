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

insert into company values (1, "Avenida 12", "Motomaniacos", "31108762364", "www.motomaniacos.com");
insert into user values (1, 22, "yeison@motomaniacos.com", "Yeison", "12345678", "AVAILABLE", 1);
insert into user values (2, 20, "vivi@motomaniacos.com", "Viviana", "12345678", "AVAILABLE", 1);
insert into product values (1, 10, "Aceite Castrol 400W", 10000, "AVAILABLE", 1);
insert into service values (1, "Según el aceite seleccionado", "Cambio de Aceite", 10000, "AVAILABLE", 1);
insert into supplier values (1, "Ave 129 Palo Alto California", "Grand Scott Garage", "312982374", 1);
insert into role values (1, "Administrador");
insert into role values (2, "Vendedor");
insert into user_roles values (1, 1);
insert into user_roles values (1, 2);
insert into user_roles values (2, 2);
update hibernate_sequence set next_val=3;
