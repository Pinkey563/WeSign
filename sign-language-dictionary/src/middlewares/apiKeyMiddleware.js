const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key']; // Kiểm tra API key từ header
    if (apiKey !== 'your-secret-api-key') { // Thay thế 'your-secret-api-key' bằng API key thực
      return res.status(403).send('Forbidden: Invalid API Key');
    }
    next(); // Tiếp tục nếu API key hợp lệ
  };
  
  export default apiKeyMiddleware;
  