const router = require('express').Router();
const Customer = require('../models/customerModel');
const auth = require("../middleware/auth")


// add
router.post('/', auth, async (req, res) => {
    try {
        const { name } = req.body;
        const newCustomer = new Customer({
            name,
        })

        const savedCustomer = await newCustomer.save();
        res.json(savedCustomer)

    } catch (error) {
        console.log(error)
        res.status(500).send()
    }

})

// get
router.get('/', auth, async (req, res) => {
    try {
        const customers = await Customer.find();

        res.json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
})



// delete
router.delete('/:id', auth, async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) throw Error('No customer found');
        const removed = await customer.remove();
        res.json(removed);
    } catch (err) {
        res.status(400).json({ msg: err.message });

    }
})


module.exports = router;