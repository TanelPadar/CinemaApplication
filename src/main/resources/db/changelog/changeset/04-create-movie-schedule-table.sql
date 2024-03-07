CREATE TABLE `movie_schedule` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    screening_time DATETIME,
    movie_id INT,
    auditorium_id INT,
    FOREIGN KEY (movie_id) REFERENCES movie(id),
    FOREIGN KEY (auditorium_id) REFERENCES auditorium(id)
);

