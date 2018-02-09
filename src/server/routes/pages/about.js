export default (req, res, next) => {
  // res.locals.ServerSideComponent = ServerSideComponent();
  res.render('pages/about.html', { title: 'Express' });
};
