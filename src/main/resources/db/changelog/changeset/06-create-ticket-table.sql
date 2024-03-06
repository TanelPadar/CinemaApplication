CREATE TABLE `ticket` (
      id INT PRIMARY KEY AUTO_INCREMENT,
      seat INT,
      price DECIMAL(10, 2),
      order_id INT,
      FOREIGN KEY (order_id) REFERENCES `order`(id)
);
