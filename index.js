import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.js';
import noteRoutes from './routes/note.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.listen(3001, () => {
  console.log('Backend Notadoamor rodando na porta 3001');
});
