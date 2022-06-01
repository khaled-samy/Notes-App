BEGIN;

DROP TABLE IF EXISTS categories,notes CASCADE;
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(125) NOT NULL,
    note TEXT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) 
    REFERENCES categories(id) 
);

INSERT INTO categories (category) VALUES 
(
'javascript'
),
(
'python'
),
(
'php'
),
(
'others'
);

INSERT INTO notes (title, note, category_id) VALUES 
(
    'JS note',
    'JavaScript is the worlds most popular programming language.
JavaScript is the programming language of the Web.
JavaScript is easy to learn.
This tutorial will teach you JavaScript from basic to advanced.',
    '1'
),
(
    'Second JS note',
    'JavaScript is the worlds most popular programming language.
    JavaScript is the programming language of the Web.
    JavaScript is easy to learn.
    This tutorial will teach you JavaScript from basic to advanced.',
    '1'
),
(
    'Python note',
    'The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python',
    '2'
),
(
    'Second Python note',
    'The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python',
    '2'
),
(
    'Php note',
    'The PHP development team announces the immediate availability of PHP 8.1.3. This is a security release.
All PHP 8.1 users are encouraged to upgrade to this version.',
    '3'
);

COMMIT;