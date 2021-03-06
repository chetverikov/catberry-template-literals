'use strict';

class Head {

	/**
	 * Gets data context for component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} Data context
	 */
	render() {
		return this.$context.getStoreData()
			.then(({title, subtitle}) => `
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>${title} - ${subtitle}</title>
				<link href="/css/bootstrap.min.css" rel="stylesheet">
				<link href="/css/bootstrap-theme.min.css" rel="stylesheet">
				<link href="/css/loader.css" rel="stylesheet">
				<script src="/externals.js"></script>
				<script src="/app.js"></script>
			`);
	}
}

module.exports = Head;

