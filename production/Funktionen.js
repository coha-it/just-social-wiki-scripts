// just
// justConnect

var coha = {}

coha.getActiveChapterTitle = () => {
  // Get 
  const activeChapter = jQuery('.inUXkH.active')?.attr('href');
  const activeWiki = jQuery('.hCcCLR a')?.attr('href');

  return (activeChapter ?? activeWiki)?.split("/")?.pop()
}

coha.asyncCall = async article => {
  try {
    const res = await jQuery.ajax({
      url: 'https://www.google.de/'+article.title,
      type: 'GET',
    });
    console.log(res, article)
  } catch(err) {
    console.log(err);
  }
}

if(typeof articles !== 'undefined') {
  for(i in articles) {
    await coha.asyncCall(articles[i])
  }
}
