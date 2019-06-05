INSERT INTO ROLES (name) VALUES('ROLE_ADMIN');
INSERT INTO ROLES (name) VALUES('ROLE_MODER');
INSERT INTO ROLES (name) VALUES('ROLE_USER');

INSERT INTO DB_USER (first_Name, last_Name, username, password, email) VALUES('Rafał','Dziaczyński','admin','$2a$10$fg3uOMLNqmTzUnuTJ6y7/ObhAeh.YtbWtRSlZMR7dK3JQdqtbWVtK','admin@admin');
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 1);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 2);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 3);
