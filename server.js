const express = require('express');
const articleRouter = require('./routes/articles');

const app = express();

app.set('view engine', 'ejs');

// Routes
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test',
      createdAt: new Date(),
      description: 'Test Desc',
    },
  ];
  res.render('articles/index', { articles: articles });
});

app.listen(5000);
