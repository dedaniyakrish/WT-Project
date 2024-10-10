const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/carShowroom', { useNewUrlParser: true, useUnifiedTopology: true });

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    description: String,
    image: String  // Added image field
})

const Car = mongoose.model('Car', carSchema);

// User authentication
const users = [{ username: 'KRISH', password: bcrypt.hashSync('6102004', 8) }];

app.post('/login', (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ id: user.username }, 'secret', { expiresIn: 86400 });
        return res.status(200).send({ auth: true, token });
    }
    return res.status(401).send('Invalid credentials');
});

app.get('/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

app.post('/cars', async (req, res) => {
    const car = new Car(req.body);
    await car.save();
    res.json(car);
});

app.delete('/cars/:id', async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.send('Car deleted');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
