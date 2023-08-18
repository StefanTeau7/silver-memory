# SYSTEMS DESIGN

## 1. Database Design

Due to the structured nature of the data, I used a Relational Database Management System (RDBMS):

- **PostgreSQL**

Tables:
**Company Data:**

- ID (Primary Key)
- Name
- Industry
- Business Model
- HQ Location
- Founder Quality
- Feature Set

**Financial Data:**

- ID (Primary Key)
- Company_ID (Foreign Key from Company Data table)
- Date (To record the date the financial data is for)
- Revenue
- Cash Burn
- Gross Profit (%)
- Gross Profit ($)
- EBITDA
- Cash On Hand
- CAC
- LTV
- ACV/ARPU
- Customer Count
- Next Est. Fundraise Date

Relation: _One Company object to many Financial Data objects_

## 2. Backend server

Here we need a lightweight, scalable backend server to easily integrate with PostgreSQL. It must also handle business logic (such as annualizing data and future work, such as AI implementation) and send the data to the frontend through endpoints, which is why I recommend:

- **NodeJS with ExpressJS**

## 3. Frontend UI

We need to build a simple web app that ideally offers a lot of features, such as input forms, out of the box. A versatile and popular solution in the market is:

- **ReactJS**

# SYSTEMS RECOMMENDATIONS

_Database_: Host PostgreSQL on Amazon RDS. It is a reliable, managed database solution.

_Frontend and Backend Hosting_: I recommend Heroku for easy deployment, or AWS Elastic Beanstalk for more control and scalability.

_Version Control_: Maintain codebase on GitHub.

**Note**: for a cheaper alternative, in the event that the service does not expect a lot of traffic, a reliable alternative is a VPS (Virtual Private Server) like Amazon Lightsail. The drawback for a VPS is it requires more manual work for setup and maintenance.
