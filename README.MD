# BASE 10 SWE Exercise

The objective of this product is to create a database for structured company data, a user facing front end to enter the structured data (i.e. a form or CMS), and a mechanism for the data to be queried by other services (i.e. through an API endpoint).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- PostgreSQL
- React development setup

### Installation

1. Clone the repo:

```
git clone https://github.com/stefanteau7/silvermemory.git
```

2. Navigate to the project directory:

```
cd projectname
```

### Setting up the Backend

1. Navigate to the server directory:

```
cd server
```

2. Install the required packages:

```
npm install
```

3. Setup your PostgreSQL database

```
psql -U postgres
```

```
CREATE ROLE postgres WITH LOGIN PASSWORD 'test';
```

```
ALTER ROLE dev WITH SUPERUSER;
```

4. Run the backend server:

```
npm start
```

### Setting up the Client (React)

1. Navigate to the client directory:
 
```
cd .. (if previously in server folder)
```
```
cd client
```

2. Install the required packages:

```
npm install
```

3. Start the React app:

```
npm start
```

Your app should now open in your default browser. If not, navigate to `http://localhost:3000` in your browser.

### Usage

Current development allows for submitting of 

1. Company Data
2. Financial Data for each company

Future work:
- Parse files for info 
- Make data queryable
- Allow more types of data to be submitted


