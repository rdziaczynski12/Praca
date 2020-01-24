INSERT INTO ROLEDB (name) VALUES('ROLE_ADMIN');
INSERT INTO ROLEDB (name) VALUES('ROLE_MODER');
INSERT INTO ROLEDB (name) VALUES('ROLE_USER');
INSERT INTO ROLEDB (name) VALUES('ROLE_ACTIVE_USER');

INSERT INTO USERDB (first_Name, last_Name, username, password, email, activ) VALUES('Rafał','Dziaczyński','admin','$2a$10$fg3uOMLNqmTzUnuTJ6y7/ObhAeh.YtbWtRSlZMR7dK3JQdqtbWVtK','admin@admin', true );
INSERT INTO USERDB (first_Name, last_Name, username, password, email, activ) VALUES('Jan','Kowalski','user','$2a$10$fg3uOMLNqmTzUnuTJ6y7/ObhAeh.YtbWtRSlZMR7dK3JQdqtbWVtK','user@user', false );
INSERT INTO USERDB (first_Name, last_Name, username, password, email, activ) VALUES('Tomasz','Żabiński','profesor','$2a$10$zYv8OMH.ZCnEImCT0IEHFOcrnn7RUjLt84ChAGk7UOQxmD975u3V2','profesor@mail', true );
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 1);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 2);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 3);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (1, 4);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (2, 3);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (3, 1);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (3, 2);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (3, 3);
INSERT INTO USER_ROLES (USER_ID, ROLE_ID) values (3, 4);

insert into type_dishdb (name) values ('Mięsne');
insert into type_dishdb (name) values ('Wegetariańskie');
insert into type_dishdb (name) values ('Obiad');
insert into type_dishdb (name) values ('Śniadanie');
insert into type_dishdb (name) values ('Zupa');
insert into type_dishdb (name) values ('Fast Food');
insert into type_dishdb (name) values ('Fit');

insert into restaurantdb (active, address, close_hour, email, min_value, name, open_hour, phone_number) VALUES (true, 'Reszów ul. Długa 13/2','2020-01-01 22:00:00', 'restauracja@onet.pl', 0, 'Restauracja 1', '2020-01-01 08:00:00', '174562586');
insert into restaurantdb (active, address, close_hour, email, min_value, name, open_hour, phone_number) VALUES (true, 'Reszów ul. 3 Maja  18','2020-01-01 23:00:00', 'restauracja@gmail.com', 0, 'Restauracja 2', '2020-01-01 13:00:00', '174513946');

insert into dishdb (active, description, name, price, id_restaurant) VALUES (true, 'Kotlet schabowy + ziemniaki + zestaw surówek', 'Kotlet schabowy', 1540, 1);
insert into dishdb (active, description, name, price, id_restaurant) VALUES (true, 'Pierogi ruskie 10 sztuk z masłem', 'Pierogi ruskie', 1200, 1);
insert into dishdb (active, description, name, price, id_restaurant) VALUES (true, 'Bigos staropolski z kapusty, kiełbasy i grzybów', 'Bigos', 850, 1);
insert into dishdb (active, description, name, price, id_restaurant) VALUES (true, 'Sałatka z sałaty lodowej z serem feta', 'Sałatka', 1160, 1);

INSERT INTO dish_types (id_dish, id_type) VALUES (1, 1);
INSERT INTO dish_types (id_dish, id_type) VALUES (1, 3);
INSERT INTO dish_types (id_dish, id_type) VALUES (2, 3);
INSERT INTO dish_types (id_dish, id_type) VALUES (3, 3);
INSERT INTO dish_types (id_dish, id_type) VALUES (4, 2);
INSERT INTO dish_types (id_dish, id_type) VALUES (4, 7);

insert into menudb (archive ,avtive, delivery_time, finish_date, start_date) VALUES (false, true, '2020-01-30 14:00:00', '2020-01-30 11:00:00', '2020-01-23 12:00:00');
insert into menudb (archive ,avtive, delivery_time, finish_date, start_date) VALUES (false, true, '2020-01-31 15:00:00', '2020-01-30 12:15:00', '2020-01-24 12:00:00');
insert into menudb (archive ,avtive, delivery_time, finish_date, start_date) VALUES (false, false, '2020-02-03 13:00:00', '2020-01-30 10:30:00', '2020-01-25 12:00:00');

insert into menu_dish (id_menu, id_dish) VALUES (1, 1);
insert into menu_dish (id_menu, id_dish) VALUES (1, 2);
insert into menu_dish (id_menu, id_dish) VALUES (1, 3);
insert into menu_dish (id_menu, id_dish) VALUES (2, 1);
insert into menu_dish (id_menu, id_dish) VALUES (2, 4);
insert into menu_dish (id_menu, id_dish) VALUES (3, 3);
insert into menu_dish (id_menu, id_dish) VALUES (3, 2);

