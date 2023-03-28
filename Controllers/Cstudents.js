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
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `${result.insertedCount} documents were successfully added in collection.`, result: result }, data: incomingData });
	} catch (err) {
		console.log(`Something went wrong while inserting multiple documents`, err);
		res.status(500).send({ message: `Something went wrong while inserting multiple documents` });
	}
};

const stuFindOne = async (req, res) => {
	const query = req.query;
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log(`query is: ${query} \n request URL is: ${fullUrl}`);
	try {
		const result = await mongo.findInDbOne(query);
		console.log(`Result is: `, result);
		if (result === null) {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `No document found in collection for given query.`, result: result }, query: query });
		} else {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `One document found in collection for given query.`, result: result }, query: query });
		}
	} catch (err) {
		console.log(err);
	}
};

const stuFindMany = async (req, res) => {
	const query = req.query;
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log(`query is: ${query} \nrequest URL is: ${fullUrl}`);
	try {
		const result = await mongo.findInDbMany(query);
		console.log(`Result is: `, result);
		if (result.length === 0) {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `No documents found in collection for given query.`, result: result }, query: query });
		} else {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `${result.length} documents were found in collection for given query.`, result: result }, query: query });
		}
	} catch (err) {
		console.log(err);
	}
};

const stuUpdateOne = async (req, res) => {
	const query = req.body;
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log(`query is: ${query} \n request URL is: ${fullUrl}`);
	try {
		const result = await mongo.updateInDbOne(query);
		console.log(`Result is: `, result);
		if (result.modifiedCount === 0) {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `No document updated in collection for given query.`, result: result }, query: query });
		} else {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `One document updated in collection for given query.`, result: result }, query: query });
		}
	} catch (err) {
		console.log(err);
	}
};

const stuUpdateMany = async (req, res) => {
	const query = req.body;
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log(`query is: ${query} \n request URL is: ${fullUrl}`);
	try {
		const result = await mongo.updateInDbMany(query);
		console.log(`Result is: `, result);
		if (result.modifiedCount === 0) {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `No documents updated in collection for given query.`, result: result }, query: query });
		} else {
			return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `${result.modifiedCount} documents were updated in collection for given query.`, result: result }, query: query });
		}
	} catch (err) {
		console.log(err);
	}
};

const stuDeleteOne = async (req, res) => {
	const query = req.query;
	console.log('query is: ', query);
	try {
		const result = await mongo.deleteInDbOne(query);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `One document deleted from collection which matched given query.`, result: result }, query: query });
	} catch (err) {
		console.log(err);
	}
};

const stuDeleteMany = async (req, res) => {
	const query = req.query;
	console.log('query is: ', query);
	try {
		const result = await mongo.deleteInDbMany(query);
		console.log(`Result is: `, result);
		return res.status(200).send({ response: { message: `Controller and Database are working fine.` }, actionPerformed: { message: `${result.deletedCount} documents deleted from collection which matched given query.`, result: result }, query: query });
	} catch (err) {
		console.log(err);
	}
};

module.exports = { stuEnrollmentOne, stuEnrollmentMany, stuFindOne, stuFindMany, stuUpdateOne, stuUpdateMany, stuDeleteOne, stuDeleteMany };
