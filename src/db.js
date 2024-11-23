const { MongoClient } = require('mongodb');

// Replace with your cluster connection string
const uri ='mongodb://mongodb:mongo123@docdb-2024-11-23-08-12-48.cfgqg8eyamfy.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&retryWrites=false';

// Set up MongoClient options
const options = {
  sslValidate: true,
  sslCA: './global-bundle.pem', // Path to Amazon RDS CA bundle
};

const client = new MongoClient(uri, options);

const connectToDatabase = async () =>{
  try {
    await client.connect();
    console.log('Connected to AWS DocumentDB successfully!');

    

  } catch (error) {
    console.error('Error connecting to DocumentDB:', error);
  } finally {
    await client.close(); // Close the connection when done
  }
}

module.exports = connectToDatabase ;
