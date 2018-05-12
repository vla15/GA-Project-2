INSERT INTO USERS
(USER_NAME, FIRST_NAME, LAST_NAME)
values
('dummy', 'john', 'doe');

INSERT INTO POSTS
(USER_ID, TITLE, BODY)
values
(1, 'Hello world', 'what is the meaning of this'),
(1, 'Creation time', 'Lets go ahead and create some posts'),
(1, 'Tie', 'Im going to be creating some fake mock data here');

INSERT INTO VOTES
(POST_ID, VOTE_COUNT)
values
(1, 0),
(2, 0),
(3, 0);