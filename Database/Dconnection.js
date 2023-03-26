// const mongo = require('mongodb')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const url = process.env.localUrl;
console.log('Db url is: ', url);

// const client = new mongo.MongoClient(url)
const client = new MongoClient(url);
const db = client.db(process.env.localDb);
const coll = db.collection(process.env.localColl);

const insert2dbOne = async (someData) => {
	try {
		await client.connect();
		const dbResponse = await coll.insertOne(someData);
		await client.close();
		return dbResponse;
	} catch (error) {
		return error.message;
	}
};

const insert2dbMany = async (data) => {
	try {
		await client.connect();
		const dbResponse = await coll.insertMany(data);
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const findInDbOne = async (queryData) => {
	try {
		await client.connect();
		const dbResponse = await coll.find(queryData).toArray();
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const updateInDbOne = async (filter, data) => {
	try {
		await client.connect();
	} catch (err) {
		console.log(err);
	}
};

const deleteInDbOne = async (filterQuery) => {
	try {
		await client.connect();
	} catch (err) {
		console.log(err);
	}
};

module.exports = { insert2dbOne, insert2dbMany, findInDbOne, updateInDbOne, deleteInDbOne };
