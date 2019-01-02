'use strict';

class Document {
	render() {
		return `
			<!DOCTYPE html>
			<html lang="en">
			<head cat-store="Pages"></head>
			<body>
				<cat-pages-navigation cat-store="Pages"></cat-pages-navigation>
				<cat-pages-content cat-store="Pages"></cat-pages-content>
			</body>
			</html>
		`;
	}
}

module.exports = Document;

