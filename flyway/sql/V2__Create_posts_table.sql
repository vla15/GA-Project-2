CREATE TABLE POSTS (
ID serial,
USER_ID INTEGER REFERENCES USERS (ID),
TITLE varchar(100),
BODY TEXT,
POST_IMAGE varchar(200)
)