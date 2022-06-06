create database garen;
use garen;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(30)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

alter table usuario add column imagem varchar(500); 
select * from usuario;

select * from aviso;
