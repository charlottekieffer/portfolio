CREATE TABLE user
(
	id             INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	firstname      VARCHAR(100)        NOT NULL,
	lastname       VARCHAR(100)        NOT NULL,
	username       VARCHAR(100)        NOT NULL UNIQUE,
	email          VARCHAR(100)        NOT NULL UNIQUE,
	hashedPassword VARCHAR(100)        NOT NULL
) engine = InnoDB
  default charset = latin1;

INSERT INTO user (
  id,
  firstname,
  lastname,
  username,
  email,
  hashedPassword
) VALUES (
  1,
  'Charlotte',
  'Kieffer',
  'Cha',
  'kindred242@gmail.com',
	'$argon2id$v=19$m=65536,t=5,p=1$fqJ5foRrofHs73G562DJ2Q$PDRuCNODu9Q5+PT/AzaIfJz3IR4+N/B+R/GoT4DbTU0'
);

CREATE TABLE skill
(
	id        INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name      VARCHAR(100) NOT NULL,
	type      VARCHAR(100) NOT NULL
) engine = InnoDB
  default charset = latin1;
  
  INSERT INTO skill (
  id,
  name,
  type
) VALUES (1, 'React', 'hard'), (2, 'HTML', 'hard'), (3, 'CSS', 'hard'), (4, 'Express', 'hard'), (5, 'Javascript', 'hard'), (6, "Sens de l'organisation", 'soft'), 
(7, "Esprit d'équipe", 'soft'), (8, "Excellente communication", 'soft'), (9, "Aisance relationnelle", 'soft');

CREATE TABLE project
(
	id        INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title      VARCHAR(100) NOT NULL,
	description      VARCHAR(900) NOT NULL
) engine = InnoDB
  default charset = latin1;

  INSERT INTO project (
  id,
  title,
  description
  ) VALUES 
  (1, "Book of the Wilders", "Création d'un annuaire pour présenter les personnes de la promo 2022/2023 de notre formation de développeur web et mobile."),
  (2, "Find Fuel", "Création d'un site permettant de recenser les stations-service sous forme de liste ou de carte, avec les différents carburants disponibles ainsi que leur prix."),
  (3, "Origins Digital", "Plateforme de streaming de vidéos sportives avec la possibilité de s'enregistrer pour avoir accès à toutes les vidéos de la plateforme. Création d'un back-office pour que les administrateurs du site puissent gérer les vidéos et les utilisateurs.")