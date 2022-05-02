create table contactrequests (
	id integer PRIMARY KEY autoincrement,
	firstname text NOT NULL,
	lastname text,
	email text,
	dishname text,
	reqtype text,
	reqtext text,
	createdAt datetime,
	updatedAt datetime
);

create table logins (
 id integer PRIMARY KEY autoincrement,
 username varchar(255) NOT NULL UNIQUE,
 email varchar(255) NOT NULL UNIQUE,
 password varchar(255) NOT NULL UNIQUE
);
