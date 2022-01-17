jQuery.ajax({
	url: 'https://www.kultour.club/wiki/graphql',
	type: 'post',
	headers: {
		'just-tenant-id': just?.context?.config?.tenantId,
		'just-token': just?.auth?.token,
	},
	contentType: "application/json",
	data: JSON.stringify({
		operationName: "createArticle",
		query: "mutation createArticle($title: String!, $content: String!, $parentId: ParentId!, $textContent: String!, $contactPerson: ProfileId) {\n  createdArticle: createArticle(\n    article: {title: $title, content: $content, textContent: $textContent, parentId: $parentId, contactPerson: $contactPerson}\n  ) {\n    id\n    title\n    content\n    __typename\n  }\n}\n",
		variables: {
			title: "test",
			parentId: "WIKI_CHAPTER,7b0d0a7e-2a32-4417-99cb-076884f017db",
			content: "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"text\",\"text\":\"test\"}]}]}",
			textContent: "test",
			contactPerson: "PROFILE,4",
		},
	}),
	// dataType: 'json',
	success: function(data) {
		console.info(data);
	}
});