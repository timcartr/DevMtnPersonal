CREATE TABLE Members (
    Member_Id serial primary key,
    Auth_Id text,
    First_Name varchar(99),
    Last_Name varchar(99),
    Email varchar(99),
    Phone varchar(99),
    Profile_Pic text,
    member_since date,
);

CREATE TABLE Memberships (
    Membership_Id serial primary key,
    Membership_Level text,
    Cost Integer,
    Start_Date date,
    End_Date date,
    Member_Id Integer references members(Member_Id)
);

CREATE TABLE Certifications (
    certification_Id Serial Primary Key,
    Certification text,
    Certification_Length Integer,
    Certification_End date,
    Member_Id Integer refrences members(member_id)
);

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('Spiderman', 'Peter', 'Parker', 'peter@theavengers.com', '5555555555', 'https://images.indianexpress.com/2018/06/114811_434019-759.jpg', 'Monthly Membership');

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('GreenArrow', 'Oliver', 'Queen', 'Ollie@justiceleague.com', '2222222222', 'https://heroichollywood.b-cdn.net/wp-content/uploads/2018/01/Arrow-Season-6-CW-DC-Stephen-Amell.jpg?x42694', 'Yearly Membership');

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('WonderWoman', 'Diana', 'Prince', 'Diana@justiceleague.com', '882.834.9283', 'https://cdn3.movieweb.com/i/article/2b8XxiINildrKbllDMeTi7INBNFPvR/1107:50/Wonder-Woman-2-Set-Photo-Smithsonian-Event.jpg', 'Monthy Membership');

insert into Memberships (type,daily_rate,length,cost,member_id,start_date,end_date)
values ('Daily Membership','8','1',8*1,1,'Jun-04-2018','Jun-05-2018')