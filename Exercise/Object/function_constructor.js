function Post (title, body, author) {
  this.title = title
  this.body = body
  this.author = author
  views = 10
  comments: [
    {
      author: author,
      body: body
    },
    {
      author: 'dfg',
      body: 'lmn'
    }
  ],
    (isLive = true)
}
Post1 = new Post(1, 2, 3)
console.log(Post1)
