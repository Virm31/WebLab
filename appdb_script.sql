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