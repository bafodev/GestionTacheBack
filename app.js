

import express from 'express';
import { db } from './models/index.js';
import userRoute from './routes/userRoutes.js';

const app = express ();

app.use(express.json());

app.use('/api', 
    userRoute
);

app.get('/', (req, res) => {
    res.send('Le serveur fonctionne');
});

(async () => {
    try {
        await db.sync({alter: false});
        console.log ('Modèles OK');
        const PORT = process.env.SERVER_PORT || 3000;
        app.listen(PORT, () => {
            console.log (`Serveur is running on port ${PORT} baby`)
        });
    } catch (error) {
        console.error('Erreur dans la synchronisation des modèles', error)
    }
})();
