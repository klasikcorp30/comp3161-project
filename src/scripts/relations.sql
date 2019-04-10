create table purchase(
    customer_id INT(100) NOT NULL,
    prod_id INT(100) NOT NULL,
    purchase_date DATE NOT NULL,
    purchase_time TIMESTAMP NOT NULL,
    
    PRIMARY KEY (customer_id,prod_id)
    
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE

);

create table uses (
    customer_id INT(100) NOT NULL,
    c_number INT(16) NOT NULL,
    
    PRIMARY KEY(customer_id, c_number),
    
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE;,
    FOREIGN KEY(c_number) REFERENCES credt_card(c_number) ON DELETE CASCADE ON UPDATE CASCADE

);

create table supplies(
    m_id INT(11) NOT NULL,
    prod_id INT(100) NOT NULL,
    supply_date DATE NOT NULL,
    
    PRIMARY KEY(m_id, prod_id),
    FOREIGN KEY (m_id) REFERENCES manufacturer(m_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table requires(
    customer_id INT(100) NOT NULL,
    prod_id INT(100) NOT NULL,
    review_id INT(100) NOT NULL,
    
    PRIMARY KEY(customer_id, prod_id, review_id),
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (review_id) REFERENCES review(review_id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table warehoses(
    prod_id INT(100) NOT NULL,
    w_id INT(11) NOT NULL,
    quantity INT(11) NOT NULL,
    PRIMARY KEY(customer_id, w_id),
    
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (w_id) REFERENCES warehouse(w_id) ON DELETE CASCADE ON UPDATE CASCADE
);
