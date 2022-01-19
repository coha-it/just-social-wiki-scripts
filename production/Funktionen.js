// just
// justConnect
var coha = {}

coha.log = console.log
coha.error = console.error

coha.getActiveChapterTitle = () => {
  // Get 
  const activeChapter = jQuery('.inUXkH.active')?.attr('href');
  const activeWiki = jQuery('.hCcCLR a')?.attr('href');

  return (activeChapter ?? activeWiki)?.split("/")?.pop()
}

coha.httpConvertHtmlToProseMirror = async article => {
  coha.log('HTTP HTML TO PROSE', article)
  try {
    return await jQuery.ajax({
      // url: 'https://prosemirror-converter.tools.corporate-happiness.de/',
      url: 'http://localhost:8000/',
      type: 'GET',
      data: {
        data: article.post_content
      }
    });
  } catch(err) {
    return {}
  }

}

coha.httpCreateArticle = async article => {  
  coha.log('HTTP CREATE ARTICLE', article)
  try {
    const isArticle = article.type !== 'chapter'
    return await jQuery.ajax({
      url: '/wiki/graphql',
      type: 'POST',
      headers: {
        'just-tenant-id': just?.context?.config?.tenantId,
        'just-token': just?.auth?.token,
      },
      contentType: "application/json",
      // data: article.data
      data: JSON.stringify({
        operationName: isArticle ? 'createArticle': 'createChapter',
        query: isArticle 
          ? "mutation createArticle($title: String!, $content: String!, $parentId: ParentId!, $textContent: String!, $contactPerson: ProfileId) {\n  createdArticle: createArticle(\n    article: {title: $title, content: $content, textContent: $textContent, parentId: $parentId, contactPerson: $contactPerson}\n  ) {\n    id\n    title\n    content\n    __typename\n  }\n}\n"
          : "mutation createChapter($title: String!, $parentId: ParentId!) {\n  createdChapter: createChapter(chapter: {title: $title, parentId: $parentId}) {\n    id\n    title\n    __typename\n  }\n}\n",

        variables: {
          title: article.title,
          parentId: coha.getActiveChapterTitle(),
          content: JSON.stringify(article.data),
          // content: "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"strong\"}],\"text\":\"atseatse\"}]}]}",
          textContent: "test",
          contactPerson: "PROFILE,1",
        },
      }),
    });
  } catch(err) {
    return {}
  }
}

coha.run = async () => {
  if(typeof articles !== 'undefined') {
    for(i in articles) {
      let article = articles[i]
      article.data = await coha.httpConvertHtmlToProseMirror(article)
      await coha.httpCreateArticle(article)
    }
    articles = [];
  } else {
    coha.error('Please define the variable "article = [...]" first.')
  }
}

coha.log('Coha initialized');
