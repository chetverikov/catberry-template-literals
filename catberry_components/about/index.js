'use strict';

class About {

	/**
	 * Gets data context for component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} Data context
	 */
	render() {
		return this.$context.getStoreData()
			.then(({readmeHTML}) => `
				<div class="container">
					${readmeHTML}
				</div>
			`);
	}
}

module.exports = About;

