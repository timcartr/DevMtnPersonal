CREATE TABLE Members (
    Member_Id serial primary key,
    Username varchar(99),
    Auth_Id text,
    First_Name varchar(99),
    Last_Name varchar(99),
    Email varchar(99),
    Phone varchar(99),
    Profile_Pic text,
    Membership_Level int references membership(Membership_Id)
);

CREATE TABLE Membership (
    Membership_Id serial primary key,
    Type text,
    Daily_Rate decimal,
    Length Integer,
    Cost Integer,
    Member_Id Integer,
    Start_Date date,
    End_Date date
);

CREATE TABLE Certifications (
    certification_Id Serial Primary Key,
    Certification text,
    Certification_Length Integer,
    Certification_End date,
    Member_Id Integer references members(Member_Id)
);

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('PeterGryffin', 'Peter', 'Griffin', 'peter@aol.com', '5555555555', 'https://static.comicvine.com/uploads/original/11132/111329761/5986548-peter+g.jpg', '1');

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('meg', 'Meg', 'Griffin', 'meg@aol.com', '2222222222', 'https://vignette.wikia.nocookie.net/familyguy/images/3/34/FGuy_DialMegForMurder_0237F.jpg/revision/latest?cb=20100120224702', '2');

insert into Membership (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('meg', 'Meg', 'Griffin', 'meg@aol.com', '2222222222', 'https://vignette.wikia.nocookie.net/familyguy/images/3/34/FGuy_DialMegForMurder_0237F.jpg/revision/latest?cb=20100120224702', '2');
