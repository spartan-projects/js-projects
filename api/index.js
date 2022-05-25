// import express framework
import express from 'express';
import router from './routes/route.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", router)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
