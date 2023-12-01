// response.js

const handleResponse = (res, success, data = null, error = null) => {
    const status = success ? 200 : 400;
    return res.status(status).json({ success, data, error });
  };
  
  module.exports = handleResponse;
  