export default (req, res, next) => {
  res.render('pages/index.html', { title: 'Express' });
};
