var fs = require('fs'),
	path = require('path'),
	gitty = require('gitty'),
	DeepFstream = require('punch').Utils.DeepFstream;

module.exports = {

	client: null,

	timeoutId: null,

	retrieveOptions: function(supplied_config) {
		var error = "Cannot find git settings in config';

		if(supplied_config.hasOwnProperty('publish') &&
				supplied_config['publish'].hasOwnProperty('options')) {
			return supplied_config['publish']['options'];
		} else {
			throw error;
		}
	},

	isModified: function(modified_date) {
		var self = this;

		return (modified_date > self.lastPublishedDate);
	},

	connectToRemote: function(supplied_config, callback) {
		// correct the private key
		if(supplied_config.hasOwnProperty('private_key')) {
			supplied_config['privateKey'] = supplied_config['private_key'];
		}

		var error = 'Cannot find remote_path in config',
			retrieved_options = self.retrieveOptions(supplied_config);

		if(retrieved_options.hasOwnProperty('remote_path') && retrieved_options != '') {
			return new gitty.Repository('/path/to/repo');
		else
			throw error;
		}
	 },

	checkAndCloneRemoteRepository: function() {
		// TODO
		// May not need this function
		// User may have to do this manually do to permissions
	},

	publish: function(supplied_config, last_published_date, complete) {
		var self = this,
			retrieved_options = self.retrieveOptions(supplied_config),
			remote_path = retrieved_options['remote_path'];

		self.lastPublishedDate = last_published_date;

		self.client = self.connectToRemote(retrieved_options, function() {

			var git = this;

			// do git stuff to publish

		});
	 }
};
