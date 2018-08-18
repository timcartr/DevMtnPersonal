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
    Member_Id Integer references members(Member_Id)
);

