INSERT INTO ROLEDB (name) VALUES('ROLE_ADMIN');
INSERT INTO ROLEDB (name) VALUES('ROLE_MODER');
INSERT INTO ROLEDB (name) VALUES('ROLE_USER');
INSERT INTO ROLEDB (name) VALUES('ROLE_ACTIVE_USER');

INSERT INTO USERDB (first_Name, last_Name, username, password, email, activ) VALUES('Rafał','Dziaczyński','admin','$2a$10$fg3uOMLNqmTzUnuTJ6y7/ObhAeh.YtbWtRSlZMR7dK3JQdqtbWVtK','admin@admin', true );
INSERT INTO USERDB (first_Name, last_Name, username, password, email, activ) VALUES('Jan','Kowalski','user','$2a$10$fg3uOMLNqmTzUnuTJ6y7/ObhAeh.YtbWtRSlZMR7dK3JQdqtbWVtK','user@user', false );
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 1);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 2);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 3);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 4);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (2, 3);
