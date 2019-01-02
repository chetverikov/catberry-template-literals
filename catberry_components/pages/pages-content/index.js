'use strict';

class PagesContent {

	/**
	 * Gets data context for component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} Data context
	 */
	render() {
		return this.$context.getStoreData()
			.then(({isActive}) => `
				<cat-loader></cat-loader>
				${isActive.about ? '<cat-about cat-store="About" ></cat-about>' : ''}
				${isActive.commits ? '<cat-commits-list cat-store="commits/List" ></cat-commits-list>' : ''}
				${isActive.search ? `
					<cat-search-form cat-store="commits/Search" ></cat-search-form>
					<cat-search-results cat-store="commits/Search" ></cat-search-results>
				` : ''}
			`);
	}

	/**
	 * Returns event binding settings for the component.
	 */
	bind() {
		this.hideLoader();
	}

	/**
	 * Hides loader in template.
	 */
	hideLoader() {
		const loaders = this.$context.element.getElementsByTagName('cat-loader');
		for (let i = 0; i < loaders.length; i++) {
			loaders[i].style.display = 'none';
		}
	}
}

module.exports = PagesContent;

