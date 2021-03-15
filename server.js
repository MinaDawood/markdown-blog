const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');

const app = express();

// Connect to DB
mongoose.connect('mongodb://localhost/markdownblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/articles', articleRouter);

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc',
  });
  res.render('articles/index', { articles: articles });
});

app.listen(5000);
