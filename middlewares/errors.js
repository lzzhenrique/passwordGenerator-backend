module.exports = async (err, _req, res, _next) => {
  console.log(err);
  
  if (err.isJoi) {
    console.log(err.details[0].message)
    return res.status(err.details[0].code).json({ message: err.details[0].message });
  }
  if ('code' in err) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });  
};