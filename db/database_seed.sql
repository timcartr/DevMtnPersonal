CREATE TABLE Members (
    Member_Id serial primary key,
    Username varchar(99),
    Auth_Id text,
    First_Name varchar(99),
    Last_Name varchar(99),
    Email varchar(99),
    Phone varchar(99),
    Profile_Pic text,
);

CREATE TABLE Memberships (
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
    Member_Id Integer
);

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('Spiderman', 'Peter', 'Parker', 'peter@theavengers.com', '5555555555', 'http://cdn1.sciencefiction.com/wp-content/uploads/2018/01/tom-holland-peter-parker-1.jpg', 'Monthly Membership');

insert into Members (username, first_name, last_name, email, phone, profile_pic, membership_level)
VALUES ('GreenArrow', 'Oliver', 'Queen', 'Ollie@justiceleague.com', '2222222222', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5syTM2chHmE2v0ivLskLYx_yjaJfszOu626qmSFkKlifQ5XowNg', 'Yearly Membership');

insert into Memberships (type,daily_rate,length,cost,member_id,start_date,end_date)
values ('Daily Membership','8','1',8*1,1,'Jun-04-2018','Jun-05-2018')