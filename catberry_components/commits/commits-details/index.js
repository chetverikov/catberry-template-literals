'use strict';

class CommitsDetails {

	/**
	 * Gets data context for component.
	 * This method is optional.
	 * @returns {Promise<Object>|Object|null|undefined} Data context
	 */
	render() {
		return this.$context.getStoreData()
			.then(data => `
				<div class="panel panel-default">
					<div class="panel-body">
						<ul class="list-inline">
							<li>
								<span class="glyphicon glyphicon-plus"></span>
							</li>
							<li class="additions">${data.stats.additions}</li>
							<li>
								<span class="glyphicon glyphicon-minus"></span>
							</li>
							<li class="deletions">${data.stats.deletions}</li>
							<li>
								<span class="glyphicon glyphicon-asterisk"></span>
							</li>
							<li class="total">${data.stats.total}</li>
							<li>
								<span class="glyphicon glyphicon-comment"></span>
							</li>
							<li class="comment-count">${data.commit.comment_count}</li>
							<li>
								<a target="_blank" class="comments-link" href="${data.html_url}">
									Show comments
								</a>
							</li>
						</ul>
					</div>
				</div>
			`);
	}
}

module.exports = CommitsDetails;

