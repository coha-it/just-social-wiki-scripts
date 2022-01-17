
var articles = [
	{
    title: "a",
    text: "Ich bin ein text"
	},
  {
    title: "b",
    text: "Ich bin ein text"
	},
  {
    title: "c",
    text: "Ich bin ein text"
	},
]

async function call(article) {
  try {
    const res = await jQuery.ajax({
      url: 'www.google.de',
      type: 'GET',
    });
    console.log(res, article)
  } catch(err) {
    console.log(err);
  }
}

for(i in articles) {
  let article = articles[i]
  console.log(article)

  await call(article)
}
