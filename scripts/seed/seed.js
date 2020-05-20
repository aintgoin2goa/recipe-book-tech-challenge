const AWS = require('aws-sdk');
const {promisify} = require('util');
const fs = require('fs');
const path = require('path');

const readFile = promisify(fs.readFile);

const localDynamo = new AWS.DynamoDB({
  endpoint: 'http://dynamodb:8000',
  region: 'eu-west-1',
});

const doc = new AWS.DynamoDB.DocumentClient({service: localDynamo});

const dropTables = async () => {
	const tables = await localDynamo.listTables({}).promise();
	for(tableName of tables.TableNames) {
	  console.log(`deleting table ${tableName}`);
	  await localDynamo.deleteTable({ TableName: tableName }).promise();
	  console.log('Table deleted');
	}
  }
  

const createTable = async (tableNamePrefix, description) => {
	const TableName = 'recipes';
	const AttributeDefinitions = [
		{
			AttributeName: 'id',
			AttributeType: 'S'
		}
	];
	const KeySchema = [
		{
			AttributeName: 'id',
			KeyType: 'HASH'
		}
	];
	const ProvisionedThroughput = {      
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    };
	const tableDefinition = {AttributeDefinitions, KeySchema, TableName, ProvisionedThroughput};
	await localDynamo.createTable(tableDefinition).promise();
	console.log(`Created table ${TableName}`);
  }

const insertData = async (data) => {
	const items = data.recipes;
	await Promise.all(items.map(Item => {
		console.log({Item});
		return doc.put({TableName: 'recipes', Item}).promise();
	}));
	console.log(`inserted ${items.length} items`);
};

const getData = async (name) => {
	const pth = path.resolve(process.cwd(), 'data', `${name}.json`);
	const data = await readFile(pth, {encoding:'utf8'});
	return JSON.parse(data);
}

const run = async(dataFileName) => {
	await dropTables();
	await createTable();
	const data = await getData(dataFileName);
	await insertData(data);
}

run(process.env.SEED).then(() => {
	console.log('Done');
}).catch(e => console.error(e));