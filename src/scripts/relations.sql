 DROP TABLE IF EXISTS purchase;
 create table purchase(
     id INT(100) NOT NULL,
     prod_id INT(100) NOT NULL,
     quantity INT(11) NOT NULL,
     quantity_price DECIMAL (8,2) NOT NULL,
     transaction_number INT(11) NOT NULL,

     PRIMARY KEY (id,prod_id),
     FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
     FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE
     );

DROP TABLE IF EXISTS uses;
CREATE TABLE uses (
    c_number INT(16) NOT NULL,
    cvv INT(3) NOT NULL,
    id INT(100) NOT NULL,
    PRIMARY KEY(c_number, cvv, id),

    FOREIGN KEY (c_number, cvv) REFERENCES credit_card(c_number,cvv) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE


);

DROP TABLE IF EXISTS supplies;
CREATE TABLE supplies(
    m_id INT(11) NOT NULL,
    prod_id INT(100) NOT NULL,
    supply_date DATE NOT NULL,
    
    PRIMARY KEY(m_id, prod_id),
    FOREIGN KEY (m_id) REFERENCES manufacturer(m_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS requires;
CREATE TABLE requires(
    id INT(100) NOT NULL,
    prod_id INT(100) NOT NULL,
    review_id INT(100) NOT NULL,
    
    PRIMARY KEY(id, prod_id, review_id),
    FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (review_id) REFERENCES review(review_id) ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE IF EXISTS warehouses;
CREATE TABLE warehouses(
    prod_id INT(100) NOT NULL,
    w_id INT(11) NOT NULL,
    quantity INT(11) NOT NULL,
    PRIMARY KEY(prod_id, w_id),
    
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (w_id) REFERENCES warehouse(w_id) ON DELETE CASCADE ON UPDATE CASCADE
);
