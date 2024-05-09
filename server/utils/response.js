module.exports = {
  responseMiddleware: (res, statusCode, message, data, status) => {
    res.status(statusCode).json({
      status: status,
      code: statusCode,
      message: message,
      data: data || null,
    });
  },
  genericResponse: (statusCode, message, data, status) => {
    return {
      status: status,
      code: statusCode,
      message: message,
      data: data || null,
    };
  },
};