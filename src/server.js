import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.post('/convert', async (req, res) => {
  const { amount, originalCurrency, requestedCurrency } = req.body; 
  res.json({
    originalAmount: amount,
    convertedAmount: 0,
    originalCurrency: originalCurrency.toUpperCase(),
    requestedCurrency: requestedCurrency.toUpperCase()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));