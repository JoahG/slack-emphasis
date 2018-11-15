const request = require('request')

exports.index = (req, res) => {
	// fire and forget
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
}
