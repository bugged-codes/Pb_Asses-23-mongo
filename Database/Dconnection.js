// const mongo = require('mongodb')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// * Local Connection method
const url = `${process.env.LOCAL_URL}`;
// console.log('Db url is: ', url);

// const client = new mongo.MongoClient(url)
const client = new MongoClient(url);
// console.log(client);
const db = client.db(process.env.LOCAL_DB);
const coll = db.collection(process.env.LOCAL_COLL);
// console.log(coll);

const insert2dbOne = async (someData) => {
	try {
		await client.connect();
		const dbResponse = await coll.insertOne(someData);
		return dbResponse;
	} catch (error) {
		return error.message;
	} finally {
		await client.close();
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
	if (queryData.hasOwnProperty('age') && queryData.age !== Number) {
		const ageQuery = { age: { $eq: parseInt(queryData.age) } };

		try {
			await client.connect();
			const dbResponse = await coll.findOne(ageQuery);
			await client.close();
			return dbResponse;
		} catch (err) {
			console.log(err);
		}
	}
	try {
		await client.connect();
		const dbResponse = await coll.findOne(queryData);
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const findInDbMany = async (queryData) => {
	if (queryData.hasOwnProperty('age') && queryData.age !== Number) {
		const ageQuery = { age: { $eq: parseInt(queryData.age) } };

		try {
			await client.connect();
			const dbResponse = await coll.find(ageQuery).toArray();
			await client.close();
			return dbResponse;
		} catch (err) {
			console.log(err);
		}
	}
	try {
		await client.connect();
		const dbResponse = await coll.find(queryData).toArray();
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const updateInDbOne = async (queryData) => {
	const filterCondition = queryData.filter;
	const updateValue = { $set: queryData.value };

	try {
		await client.connect();
		const dbResponse = await coll.updateOne(filterCondition, updateValue);
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const updateInDbMany = async (queryData) => {
	const filterCondition = queryData.filter;
	const updateValue = { $set: queryData.value };

	try {
		await client.connect();
		const dbResponse = await coll.updateMany(filterCondition, updateValue);
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const deleteInDbOne = async (queryData) => {
	if (queryData.hasOwnProperty('age') && queryData.age !== Number) {
		const ageQuery = { age: { $eq: parseInt(queryData.age) } };

		try {
			await client.connect();
			const dbResponse = await coll.deleteOne(ageQuery);
			await client.close();
			return dbResponse;
		} catch (err) {
			console.log(err);
		}
	}
	try {
		await client.connect();
		const dbResponse = await coll.deleteOne(queryData);
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

const deleteInDbMany = async (queryData) => {
	if (queryData.hasOwnProperty('age') && queryData.age !== Number) {
		const ageQuery = { age: { $eq: parseInt(queryData.age) } };

		try {
			await client.connect();
			const dbResponse = await coll.deleteMany(ageQuery);
			await client.close();
			return dbResponse;
		} catch (err) {
			console.log(err);
		}
	}
	try {
		await client.connect();
		const dbResponse = await coll.deleteMany(queryData);
		await client.close();
		return dbResponse;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { insert2dbOne, insert2dbMany, findInDbOne, findInDbMany, updateInDbOne, updateInDbMany, deleteInDbOne, deleteInDbMany };
