const Listr = require('listr');
const { buildConfigs } = require('./tasks');

const tasks = new Listr(buildConfigs);

tasks.run().then(() => console.log('Success')).catch(err => {
	console.error(err);
});