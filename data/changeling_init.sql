DROP TABLE IF EXISTS sheet CASCADE;

CREATE TABLE sheet (
    id          SERIAL PRIMARY KEY     NOT NULL,
    attributes  VARCHAR(200)           NOT NULL,
    skills      VARCHAR(200)           NOT NULL
);

INSERT INTO sheet (attributes, skills) VALUES ('2,2,2|3,2,1|2,1,3', '0,0,0,1,4,2,1|1,3,2,3,0,0,2|2,1,1,3,1,0,2');