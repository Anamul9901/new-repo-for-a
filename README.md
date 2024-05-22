## Here's a README file format for my server project:

**# Assignment-2 README**

This README file provides instructions for setting up and running the application locally.

## Prerequisites

* **Software:**
    * Node.js (version 20.11.1 or higher) 
    * npm Package Manager 

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anamul9901/new-repo-for-a.git
   ```

2. **Navigate to my project directory**
```bash
 cd new-repo-for-a
```

3. **Install dependencies**

    install the required dependencies using npm:

   ```bash
   npm install
   npm install express --save
   npm install mongoose --save
   npm install typescript --save-dev
   npm install cors
   npm install dotenv
   npm install zod
   npm install typescript-eslint
   npm install --save-dev eslint-config-prettier
   npm install ts-node-dev --save-dev
   npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
   npx eslint --init
   ```

4. **Add ENV file**

Add you `.env` file on the root

Add this environment variables on this `.env` file. 
And also add your mongoDB `USER_NAM`E and `PASSWORD` on the `DATABASE_URL`.
```bash
NODE_ENV= development
PORT=5000
DATABASE_URL=mongodb+srv://<USER_NAME>:<PASSWORD>@cluster0.lyb9tdm.mongodb.net/level-2?retryWrites=true&w=majority&appName=Cluster0
```

   

## Running the application

1. **Start the development server**

   Run the following command to start the development server:

   ```bash
   npm run build
   npm run start:dev
   ```

   This will typically start the server on port 5000 by default

2. **Access the application**

   Open your web browser and navigate to http://localhost:5000 to access the running application.

3. **This server have two routes**
* http://localhost:5000/api/products
* http://localhost:5000/api/orders


## Contributing

This format provides clear instructions for running my application locally.