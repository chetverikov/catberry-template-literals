'use strict';

class SearchResults {

	/**
	 * Gets data context for component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} Data context
	 */
	render() {
		return this.$context.getStoreData()
			.then(data => {
				if (data.hasResults) {
					const itemsList = data.items.map(item => `
						<a class="list-group-item" href="${item.html_url}" target="_blank">
							${item.name} - ${item.path}
						</a>
					`);

					return `
						<div class="well"><h3>Found ${data.total_count} file(s)</h3></div>
						<div class="list-group">
							${itemsList}
						</div>
					`;
				}

				return `
					<div class="well"><h3>No results found</h3></div>
				`;
			});
	}
}

module.exports = SearchResults;

