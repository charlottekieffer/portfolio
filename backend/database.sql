CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

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