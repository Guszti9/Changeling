DROP TABLE IF EXISTS sheet CASCADE;
DROP TABLE IF EXISTS contract_group CASCADE;
DROP TABLE IF EXISTS contract CASCADE;
DROP TABLE IF EXISTS sheet_contract CASCADE;
DROP TABLE IF EXISTS seeming_benefit CASCADE;

CREATE TABLE sheet (
    id          SERIAL PRIMARY KEY     NOT NULL,
    attributes  VARCHAR(200)           NOT NULL,
    skills      VARCHAR(200)           NOT NULL
);

CREATE TABLE contract_group (
    id                  SERIAL PRIMARY KEY NOT NULL,
    name                VARCHAR(200)       NOT NULL,
    description         TEXT,
    background_color    TEXT,
    main_color          TEXT,
    secondary_color     TEXT
);

CREATE TABLE contract (
    id                  SERIAL PRIMARY KEY     NOT NULL,
    name                VARCHAR(200)           NOT NULL,
    type                VARCHAR(200),
    contract_group_id   INT                    NOT NULL,
    description         TEXT,
    cost                VARCHAR(200),
    dice_pool           VARCHAR(200),
    dice_pool_against   VARCHAR(200),
    loophole            TEXT,
    CONSTRAINT fk_contract_group
      FOREIGN KEY(contract_group_id)
	    REFERENCES contract_group(id)
);

CREATE TABLE seeming_benefit (
    id                  SERIAL PRIMARY KEY     NOT NULL,
    name                VARCHAR(200)           NOT NULL,
    description         TEXT,
    seeming             TEXT,
    contract_id         INT                    NOT NULL,
    CONSTRAINT fk_contract FOREIGN KEY (contract_id) REFERENCES contract(id)
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

INSERT INTO contract_group (name, description, background_color, main_color, secondary_color)
VALUES (
        'Contracts of the Crown',
        'yay',
        '#242582',
        '#F64C72',
        '#99738E'
        );

INSERT INTO contract (name, type, contract_group_id, description, cost, dice_pool, dice_pool_against, loophole)
VALUES (
        'Hostile Takeover',
        'common',
        1,
        'Declare yourself, and up to your Presence in allies beside you, a rightful guest, unharried by protection from intruders.',
        '2/0',
        'None',
        'None',
        'One of the owner''s possessions'
       );
INSERT INTO contract (name, type, contract_group_id, description, cost, dice_pool, dice_pool_against, loophole)
VALUES (
        'Mask of Superiority',
        'common',
        1,
        'Apply your Presence as false Status, convincing others you rank in their organization.',
        '1/0',
        'Presence+Subterfuge+Wyrd',
        'None',
        'Match the dress code'
       );
INSERT INTO contract (name, type, contract_group_id, description, cost, dice_pool, dice_pool_against, loophole)
VALUES (
        'Paralyzing Presence ',
        'common',
        1,
        'Overwhelm a target with your presence, rendering them Insensate.',
        '1/0',
        'Presence+Intimidation+Wyrd',
        'Composure+Tolerance',
        'Match the dress code'
       );

