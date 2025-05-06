import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Usuário registrado (simulado)' });
});

router.post('/login', (req, res) => {
  res.json({ token: 'jwt-simulado' });
});

export default router;
