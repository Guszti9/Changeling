DROP TABLE IF EXISTS sheet CASCADE;

CREATE TABLE sheet (
    id          SERIAL PRIMARY KEY     NOT NULL,
    attributes  VARCHAR(200)           NOT NULL,
    skills      VARCHAR(200)           NOT NULL
);

