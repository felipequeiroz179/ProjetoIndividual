create database Garen;

use Garen;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(50),
    email varchar(90),
    senha varchar(50)
);

select * from usuario;