'use strict';

class PagesNavigation {

	/**
	 * Gets data context for component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} Data context
	 */
	render() {
		return this.$context.getStoreData()
			.then(({isActive}) => `
				<ul class="nav nav-tabs" role="tablist">
					<li ${isActive.about && 'class="active"'}>
						<a href="/about">About</a>
					</li>
					<li ${isActive.commits && 'class="active"'}>
						<a href="/commits">Commits</a>
					</li>
					<li ${isActive.search && 'class="active"'}>
						<a href="/search">Search</a>
					</li>
				</ul>
			`);
	}
}

module.exports = PagesNavigation;

