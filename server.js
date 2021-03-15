const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');

const app = express();

// Connect to DB
mongoose.connect('mongodb://localhost/markdownblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Routes
app.use('/articles', articleRouter);

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc',
  });
  res.render('articles/index', { articles: articles });
});

app.listen(5000);
