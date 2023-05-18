export default function handler(req, res) {
    console.log(req.method); 
    res.status(200).json({text: req.query, method: req.method})
  }