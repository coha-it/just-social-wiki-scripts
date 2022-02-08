// just
// justConnect
var coha = {}

coha.log = console.log
coha.error = console.error

coha.jQueryHeaders = {
  'just-tenant-id': just?.context?.config?.tenantId,
  'just-token': just?.auth?.token,
}

coha.escapeRegExp = string => new RegExp(string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&')) // $& means the whole matched string

coha.getActiveChapterTitle = () => {
  // Get 
  const activeChapter = jQuery('.inUXkH.active')?.attr('href');
  const activeWiki = jQuery('.hCcCLR a')?.attr('href');

  return (activeChapter ?? activeWiki)?.split("/")?.pop()
}

coha.asyncForEach = async function(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

coha.httpUploadImages = async article => {
  coha.log('DOWNLOAD AND UPLOAD IMAGES', article)

  try {
    // Get all Source-Links
    var imgUrls = article?.post_content?.match(/<img [^>]*src=["'][^"]*["'][^>]*>/gm).map(x => x.replace(/.*src=["']([^"]*)["'].*/, '$1'))

    // Download all Source-Links
    // imgUrls.forEach(imgUrl => {
    await coha.asyncForEach(imgUrls, async (imgUrl) => {
      // Download Image | For example 'https://happiness-edutainment.de/medien/35.jpg'
      const img = await fetch(imgUrl).then(r => r.blob());

      // Upload Image
      let fd = new FormData();
      fd.append('files', img);

      // Call the API
      const driveUrls = await jQuery.ajax({
        url: '/drive/api/tmp/upload',
        type: 'POST',
        headers: coha.jQueryHeaders,
        data: fd,
        processData: false,
        contentType: false,
      });

      // Get the Drive URL
      const driveUrl = driveUrls[0]

      // Add to SRC the drive-id
      // article.post_content = article.post_content.replaceAll(/(<img [^>]*src=["'][^"]*["'])([^>]*>)/gm, '$1 drive-id="" $2')
      article.post_content = article.post_content?.replaceAll(new RegExp(`(<img [^>]*src=["']${imgUrl}["'])([^>]*>)`, "gm"), '$1 drive-id="' + driveUrl + '" $2')

      console.log('the driveUrl is: ', driveUrl , 'and the imgUrl is', imgUrl)
    });

    console.log(article)

    return article

  } catch (error) {
    console.error('Error on httpUploadImages: ', error)
    return article
  }
}

coha.httpConvertHtmlToProseMirror = async article => {
  coha.log('HTTP HTML TO PROSE', article)
  try {
    article.data = await jQuery.ajax({
      url: 'https://prosemirror-converter.tools.corporate-happiness.de/',
      // url: 'http://localhost:8000/',
      type: 'GET',
      data: {
        data: article.post_content
      }
    });
    return article
  } catch(error) {
    console.error('Error on httpConvertHtmlToProseMirror: ', error)
    return article
  }
}

coha.httpCreateArticle = async article => {  
  coha.log('HTTP CREATE ARTICLE', article)
  try {
    const isArticle = article.type !== 'chapter'
    return await jQuery.ajax({
      url: '/wiki/graphql',
      type: 'POST',
      headers: coha.jQueryHeaders,
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
  } catch(error) {
    return {}
  }
}

coha.httpDeleteArticleOrChapter = async id => {  
  try {
    return await jQuery.ajax({
      url: '/wiki/graphql',
      type: 'POST',
      headers: coha.jQueryHeaders,
      contentType: "application/json",
      // data: article.data
      data: JSON.stringify({
        operationName: 'deleteArticle',
        query: "mutation deleteArticle($id: ArticleId!) {\n  deletedArticle: deleteArticle(id: $id) {\n    id\n    title\n    content\n    parentId\n    __typename\n  }\n}\n",
        variables: {
          id,
        },
      }),
    });
  } catch(error) {
    return {}
  }
}

coha.run = async () => {
  if(typeof articles !== 'undefined') {
    for(i in articles) {
      let article = articles[i]
      article = await coha.httpUploadImages(article)
      article = await coha.httpConvertHtmlToProseMirror(article)

      if(article.data) {
        await coha.httpCreateArticle(article)
      } else {
        console.error('Error! no article.data found! ', article, article?.data)
      }
    }
    coha.log(` ===> SUCCESS <=== created all ${articles?.length} articles`)
    articles = [];
  } else {
    coha.error('Please define the variable "article = [...]" first.')
  }
}

coha.log('Coha initialized');
