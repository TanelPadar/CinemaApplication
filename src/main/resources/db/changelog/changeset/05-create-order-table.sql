CREATE TABLE `order` (
     id INT PRIMARY KEY AUTO_INCREMENT,
     user_id INT,
     movie_schedule_id INT,
     FOREIGN KEY (user_id) REFERENCES `user`(id),
     FOREIGN KEY (movie_schedule_id) REFERENCES movie_schedule(id)
);
