-- Create a sample table if it doesn't exist
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text_content VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a sample row into the table
INSERT INTO messages (text_content) 
VALUES ('Hello from the MySQL Database container via init.sql!');
