// const {insert2dbOne} = require('../Database/Dconnection')
const mongo = require('../Database/Dconnection');

const stuEnrollmentOne = async (req, res) => {
	const incomingData = req.body;
	try {
		// const result = await insert2dbOne(incomingData);
		const result = await mongo.insert2dbOne(incomingData);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `One document was successfully added in collection.`, result: result }, data: incomingData });
	} catch (error) {
		console.log(`Something went wrong while inserting single document`, error);
		res.status(500).send({ message: `Something went wrong while inserting single document` });
	}
	// return res.status(200).send({ response: { message: `Controller is working.` }, actionPerformed: result, data: incomingData });
};

const stuEnrollmentMany = async (req, res) => {
	const incomingData = req.body;
	// while(incomingData.isArray())
	try {
		const result = await mongo.insert2dbMany(incomingData);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `Multiple documents were successfully added in collection.`, result: result }, data: incomingData });
	} catch (err) {
		console.log(`Something went wrong while inserting multiple documents`, err);
		res.status(500).send({ message: `Something went wrong while inserting multiple documents` });
	}
};

const stuFindOne = async (req, res) => {
	const query = req.query;
	console.log('query is: ', query);
	try {
		const result = await mongo.findInDbOne(query);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `One document found in collection for given query.`, result: result }, data: query });
	} catch (err) {
		console.log(err);
	}
};

const stuUpdateOne = async (req, res) => {
	const query = req.query;
	console.log('query is: ', query);
	try {
		const result = await mongo.findInDbOne(query);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller is working.` }, actionPerformed: result, data: query });
	} catch (err) {
		console.log(err);
	}
};

const stuDeleteOne = async (req, res) => {
	const query = req.query;
	console.log('query is: ', query);
	try {
		const result = await mongo.findInDbOne(query);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller is working.` }, actionPerformed: result, data: query });
	} catch (err) {
		console.log(err);
	}
};

module.exports = { stuEnrollmentOne, stuEnrollmentMany, stuFindOne, stuUpdateOne, stuDeleteOne };
