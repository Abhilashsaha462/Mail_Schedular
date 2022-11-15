const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const secret = '$3cr3t';
const app = express();
const registrations = [];

const validateToken = (req, res, next) => {
    console.log(req.headers["authorization"]);
    if (req.headers["authorization"]) {
        const authorizationToken = req.headers["authorization"].split(/\s/)[1];
        try {
            const payload = jwt.verify(authorizationToken, secret)
            res.status(200).send();
        } catch(err) {
            res.status(400).json({ message: "Bad Authorization token" });
        }
    } else {
        res.status(401).json({ message: "Authorization Token not found in the Header" });
    }
    next();
};

const register = (req, res, next) => {
    try {
        const registration = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(registration);
        registrations.push(registration);
        res.status(201).send();
    } catch (err) {
        res.status(400).send({message: err})
    }
};

const generateToken = (payload) => {
    return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: "1h" })
}

const authenticate = (req, res, next) => {
    const loginDetails = {
        email: req.body.email,
        password: req.body.password,
    }
    const existingRegistration = registrations.filter((r) => (r.email === loginDetails.email && r.password === loginDetails.password));
    if (existingRegistration.length > 0) {
        const registration = {...existingRegistration[0]};
        delete registration.password;
        const token = generateToken({ ...registration });
        res.json({ token });
    } else {
        res.status(401).send({ message: "Unauthorized User" });
    }
};

app.get('/token', (req, res, next) => {
    const token = jwt.sign({ user: 'test' }, secret, { algorithm: 'HS256', expiresIn: "1h" });
    res.json({token});
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/register', register);
app.post('/authenticate', authenticate);
app.post('/validate', validateToken);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});