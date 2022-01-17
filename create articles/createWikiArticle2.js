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
			title: "ja test titel",
			parentId: "WIKI_WIKI,20ba5faf-dfdc-43aa-a255-495c212759a0",
			content: "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"text\",\"text\":\"Hallo Welt!\"}]},{\"type\":\"paragraph\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"text\",\"text\":\"Ich bin \"},{\"type\":\"text\",\"marks\":[{\"type\":\"strong\"}],\"text\":\"FETT\"},{\"type\":\"text\",\"text\":\" geschrieben!\"}]}]}",
			textContent: "Hallo Welt!\nIch bin FETT geschrieben!",
			contactPerson: "PROFILE,4",
		},
	}),
	// dataType: 'json',
	success: function(data) {
		console.info(data);
	}
});