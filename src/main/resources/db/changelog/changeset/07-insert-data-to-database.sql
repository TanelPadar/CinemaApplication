INSERT INTO movie (name,genre,language,age_limit)
VALUES ('Six Bullets','action','english', 15);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('Top Gun: Maverick','action','english', 12);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('The Dictator: Maverick','comedy','english', 15);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('Inception','sci-fi','english', 12);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('The Shawshank Redemption','drama','english', 15);

INSERT INTO movie (name,genre,language,age_limit)
VALUES ('The Dark Knight','thriller','english', 15);

INSERT INTO auditorium(rows,columns)values (8,10);

INSERT INTO movie_schedule (screening_time, movie_id, auditorium_id)
VALUES (DATEADD('HOUR', 3, CURRENT_TIMESTAMP), (SELECT id FROM movie WHERE name = 'Six Bullets'), 1);

INSERT INTO movie_schedule (screening_time, movie_id, auditorium_id)
VALUES (DATEADD('HOUR', 3, CURRENT_TIMESTAMP), (SELECT id FROM movie WHERE name = 'Top Gun: Maverick'), 1);

INSERT INTO movie_schedule (screening_time, movie_id, auditorium_id)
VALUES (DATEADD('HOUR', 3, CURRENT_TIMESTAMP), (SELECT id FROM movie WHERE name = 'The Dictator: Maverick'), 1);

