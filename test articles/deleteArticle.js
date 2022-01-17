jQuery.ajax({
	url: 'https://www.kultour.club/wiki/graphql',
	type: 'post',
	headers: {
		'just-tenant-id': just?.context?.config?.tenantId,
		'just-token': just?.auth?.token,
	},
	contentType: "application/json",
	data: JSON.stringify({
		"operationName":"deleteArticle",
		"variables": {
			"id":"WIKI_ARTICLE,438cfe14-d052-4275-a0f7-7d271645a201"},
			"query": "mutation deleteArticle($id: ArticleId!) {\n  deletedArticle: deleteArticle(id: $id) {\n    id\n    title\n    content\n    parentId\n    __typename\n  }\n}\n"}
	),
	// dataType: 'json',
	success: function(data) {
		console.info(data);
	}
});