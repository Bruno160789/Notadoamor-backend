import express from 'express';
const router = express.Router();

router.post('/emit', (req, res) => {
  res.json({ status: 'Nota emitida com sucesso (simulado)' });
});

export default router;
