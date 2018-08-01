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

CREATE TABLE Memberships (
    Membership_Id serial primary key,
    Type text,
    Daily_Rate decimal,
    Length Integer,
    Cost Integer,
    Member_Id Integer references members(Member_Id),
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

