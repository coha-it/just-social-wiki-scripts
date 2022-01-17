jQuery.ajax({
	url: 'https://www.kultour.club/wiki/graphql',
	type: 'post',
	headers: {
		'just-tenant-id': 'TENANT,bac0c971-1fad-4c13-94cb-ddf38c311f0c',
		'just-token': 'eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiY3R5IjoiSldUIn0.q6RIiu5b5I3A2Hpw3RO11WcvlklV4obyQY1DMXjgSkfHhX-bFrbS8M0WdXwR81EdPZd_C5y9fUzKtdx_9ZEpRRAS8MwqFHwBc_kLnrCUuHK8vjdNx_g1Aeo13i9gdQhKTiCVw8T5tD8c50Fv3qLg6etX8qXDAXBtlqRYoRvwS3ITN1i0tzS0twFxlSN1eYb0BBbtUQyOxFpAwuP9DmsAAYxHsRnbp-FtX2-GuYcwil3HqUmM6eg5uc5uAK0-OToiEV30udSGG9TiI5MZFbs-iN8SSTB701Tk7PJt67O2hq2-QtMnDrSuy4YICutUpzvcu9PKnFBvHuOkqI67eaUxfZehR7uz39eyO5sw605_81dKgHIBmNpID_kXJiRV6pkU67jfisvP0LvqBi1QjI-bVgimBP5iqOgWFZYIVHoOUqTJCvn1FATE08XOhBKG1podaMQQIGJw8kdzDhr2BJ5IU86priBPhrnoji7PuGjH28-WWJVKP1PAv1j3IsvxAX1k8DQGAVAAtP1I8ktW3k3DQXz6-ZfXFW91HDdfV1aQZyDJznbpdh46J5QXUG52MRZmJIRC-2YoNlpS61depwXbMo6pVoJw5A8DhAhQEqUEh8Bt5JkGhyD-EDoTcsl-7JYzqndjnFHkPpJcRLCSFHNWbJgHVOlW7PsYs0yx1De9zzQ.MPwBCPyROmLFmpzsPS1nKQ.iXsd16GiLK8I-01S6Ajz4w92db-6eAEzCUIz-CfFt8-S1ut6uQ9LhyYQw25A5ZU1M0Yf31iPD2yUE3FiH8BRCTjWEltrxv9YqtAxRBXT_pwlZzwD2PrBfPgxbyZpLYTQUqtnWLGOQrFL9SyD66YO49M2AAq7JVcIMJyugicGU_-pddsh8HUpcrLtrutMPkL882drvPwpPWom4fb7fPTMCx_xhMr1zXcKItWrqAieqL7nsU-WrV6_q1zEcPD1Krxdz83xF25Aa3A08bqX0nIrG9S7AJRuuNbOlwBHOlgNANlLi_wsTxxbEFXoyrZ9oIrtPtPShvTjCa6_-9Jb7LYSa4s13r9r50NPijqPqIVK4UkEG-AV_c1aQY49LeQrDHUFwVwLay_SU4TCrtwsMXfJIAve9vi5Xmiqg_p2kopMlRMmokWl65gRCEIf61asgI3Aq5xbZne5LAOph0_k85ipGMVjW2wn8y1VZqZocj7-vpcmlernAo-Fxg90w6I3A9H0XTCS9CQFgPWPqpMCTXHSnPrQIlKq8Nw0bWsq7dYOOPaYVoyyt3ZVnq21GacNSDaKRA7ZdB9Quq3F8P7B2IpFjPubdGHBXGmqcDJPFI1PHr0ZBDE_5GOAq-ffBtomNMTGKE0pSVmzNHaud1OhY6AaWSs754DNVfkloPni06wSPgces85f4nVgAvVrM1uVkX6eiDcVqpHFxnsarbu7aQQqfqyos0vDh-Zo_3psXzuvlR0X3Tj1G2TaPHLA8wrhmeHPOLD_pZaDpDJiQv-5BeFz3YdbR_Wh3RacNeQGLvU3KCK2KQXLeadQhXjoVe_QfZIkBadAgkSJ9zBzzJGuTL6lxXAvR_YXpDxKsHo6VJAI2QFPR4UegIGwLNIvkDnr-aHOcJC8PY2EKrRcnxx1geTyHyR4e6Gn7-ufB7mDMW1maHWynWN8ADWt5qVpJyerGVNLyr0xhams3fIBiAZWFMeLNDyUBltSc-0VvXkomtDwV2TPAAPAIw1j1SIq4RZCT2bnSHBxoBwCkNRgmI-SnPAI-cCI4QkB9wwzy1d7c4P6oddMYWK7osLEB4WpAJI13uk2rAuybqU7a9n9KSF7A-Orn6RWuYptPr-cPA6OthIu6Ae9058QMbrOGMuDaElPXnRG8XUv8Znokyy1m7NbDCH7z12-TlZz_01jLqb1WKTRlLv1H3r7lYMjsh4FJEL6L7KI.q1ZBZXLtzqSpj1KHyDk0GQ',
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