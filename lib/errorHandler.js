function errorHandler(err, req, res, next) { //eslint-disable-line
  if(err.name === 'ValidationError'){
    return res.status(422).json({ message: err.toString() });
  }
  res.status(500).json({ message: 'Something broke : Internal Server Error' });
}

module.exports = errorHandler;