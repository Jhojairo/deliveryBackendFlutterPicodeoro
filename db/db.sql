CREATE TABLE usaers(
id BIGSERIAL  PRIMARY KEY,
	email VARCHAR (255) NOT NULL,
	name VARCHAR (255)NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	phone VARCHAR (255) NOT  NULL UNIQUE,
	image VARCHAR (255) NULL,
	password VARCHAR (255) NOT  NULL,
	is_aviable BOOLEAN NULL,
	session_token VARCHAR (255) NULL,
	created_at TIMESTAMP (0) NOT NULL,
	updated_at TIMESTAMP (0) NOT NULL
	
);