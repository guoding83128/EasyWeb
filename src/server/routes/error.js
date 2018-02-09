var returnError = (errCode, errMessage) => (req, res, next) => {
  var err = new Error(errMessage);
  err.status = errCode;
  next(err);
}

var logError = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
}

var errorPage = (err, req, res, next) => {
  res.locals.errorCode = err.status;
  res.locals.errorMessage = err.message;
  res.status(err.status || 500);
  res.render('pages/error.html');
}

exports.returnError = returnError;

exports.errorHandler = [logError, errorPage];