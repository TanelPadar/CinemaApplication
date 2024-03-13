INSERT INTO movie (name,genre,language,age_limit)
VALUES ('Six Bullets','action','english', 18);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('Top Gun: Maverick','action','estonian', 12);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('The Dictator','comedy','english', 18);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('Inception','sci-fi','english', 12);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('The Shawshank Redemption','drama','english', 15);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('The Dark Knight','thriller','english', 15);

INSERT INTO auditorium(rows,columns)VALUES (4,6);

INSERT INTO movie_schedule (screening_time, movie_id, auditorium_id)
VALUES (DATEADD('HOUR', 3, CURRENT_TIMESTAMP), (SELECT id FROM movie WHERE name = 'Six Bullets'), 1);

INSERT INTO movie_schedule (screening_time, movie_id, auditorium_id)
VALUES (DATEADD('HOUR', 4, CURRENT_TIMESTAMP), (SELECT id FROM movie WHERE name = 'Top Gun: Maverick'), 1);

INSERT INTO movie_schedule (screening_time, movie_id, auditorium_id)
VALUES (DATEADD('HOUR', 3, CURRENT_TIMESTAMP), (SELECT id FROM movie WHERE name = 'The Dictator'), 1);

INSERT INTO `user` (username) VALUES ('tanel');
INSERT INTO `user` (username) VALUES ('kaisa');

INSERT INTO `order` (user_id,movie_schedule_id) VALUES (1,1);
INSERT INTO `order` (user_id,movie_schedule_id) VALUES (1,1);

INSERT INTO `order` (user_id,movie_schedule_id) VALUES (1,3);
INSERT INTO `order` (user_id,movie_schedule_id) VALUES (1,3);
INSERT INTO `order` (user_id,movie_schedule_id) VALUES (1,3);
INSERT INTO `order` (user_id,movie_schedule_id) VALUES (2,3);

