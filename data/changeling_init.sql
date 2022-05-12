DROP TABLE IF EXISTS sheet CASCADE;
DROP TABLE IF EXISTS contract_group;
DROP TABLE IF EXISTS contract;
DROP TABLE IF EXISTS sheet_contract;

CREATE TABLE sheet (
    id          SERIAL PRIMARY KEY     NOT NULL,
    attributes  VARCHAR(200)           NOT NULL,
    skills      VARCHAR(200)           NOT NULL
);

CREATE TABLE contract_group (
    id          SERIAL PRIMARY KEY NOT NULL,
    name        VARCHAR(200)       NOT NULL,
    description TEXT
);

CREATE TABLE contract (
    id                  SERIAL PRIMARY KEY     NOT NULL,
    name                VARCHAR(200)           NOT NULL,
    contract_group_id   INT,
    description         TEXT,
    cost                VARCHAR(200),
    dice_pool           VARCHAR(200),
    dice_pool_against   VARCHAR(200),
    loophole            TEXT,
    CONSTRAINT fk_contract_group
      FOREIGN KEY(contract_group_id)
	    REFERENCES contract_group(id)
);

CREATE TABLE sheet_contract(
    id                  SERIAL PRIMARY KEY     NOT NULL,
    sheet_id            INT                    NOT NULL,
    contract_id         INT                    NOT NULL,
    CONSTRAINT fk_sheet
      FOREIGN KEY(sheet_id)
	    REFERENCES sheet(id),
    CONSTRAINT fk_contract
      FOREIGN KEY(contract_id)
	    REFERENCES contract(id)
);

INSERT INTO sheet (attributes, skills) VALUES ('2,2,2|3,2,1|2,1,3', '0,0,0,1,4,0,2,1|1,3,2,1,3,0,0,2|2,1,1,0,3,1,0,2');