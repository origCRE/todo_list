//const MongoClient = require('mongodb').MongoClient;
// using vb6 formatting...
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	db.collection('Users').findOneAndDelete({
		//completed: false
		_id: new ObjectID('5a54f366f8771032663129e2')
		}).then((result) => {
		console.log(result);
	});

// db.collection('Todos').find({
    // 	//completed:false
    // 	_id: new ObjectID('5a54d2dc75f9fcd1d0435c3e')
    // 	}).toArray().then((docs) => {
    // 	console.log('Todos');
    // 	console.log(JSON.stringify(docs, undefined, 2));
    // 	}, (err) => {
    // 	console.log('Unable to fetch todos', err);
    // 	});

	// db.close();
});