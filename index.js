const request = require('request')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Everything is 200 OK');
});

app.post('/slack', (req, res) => {
	// fire and forget
	console.log(req.body);

	request({
		uri: req.body.response_url,
		method: 'POST',
		json: {
			response_type: 'in_channel',
			text: req.body.text.split(' ').filter(w => w).join(' :clap: ')
		}
	})

	return res.status(200).json({
		text: 'I got you fam',
		delete_original: true
	})
});

app.listen(process.env.PORT || 8080);
