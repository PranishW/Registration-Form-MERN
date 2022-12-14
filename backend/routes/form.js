const express = require('express');
const router = express.Router();
const getUser = require('../middleware/getUser');
const { body, validationResult } = require('express-validator');
const Form = require('../databases/Form');
// ROUTE:1 fetch Form information using GET localhost:6000/api/form/forminfo Login required
router.get('/forminfo', getUser, async (req, res) => {
    try {
        const form = await Form.find({user:req.user.id})
        res.json(form);
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json("Internal Server Error"); // sending to user 
    }
})
// ROUTE:2 Fill the form using POST localhost:6000/api/form/fillform Login required
router.post('/fillform', getUser, [
    body('age', 'Age must be above 15 and below 22').isNumeric(),
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('address','Address should contain atleast 10 characters').isLength({min:10}),
    body('gender','Gender must be valid').isLength({min:4}),
    body('mobno','Phone no must be valid').isMobilePhone()
], async (req, res) => {
    let success = false;
    try {
        let mail = await Form.findOne({email: req.body.email})
        if (mail) {
            return res.status(400).json({ success, error: "Sorry a user with this email and mobile no already filled the form" })
        }
        // destructuring
        const { name,email,age,dob,address,gender,mobno } = req.body
        // if there are errors, return bad requests and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let mob = await Form.findOne({ mobno: req.body.mobno });
        if (mob) {
            return res.status(400).json({ success, error: "Sorry a user with this mobno already flled the form" })
        }
        const form = new Form({
            name,email,age,dob,address,gender,mobno , user: req.user.id
        })
        const savedForm = await form.save()
        success = true;
        res.json(savedForm);
    } catch (error) {
        console.error(error.message)
        res.status(500).json("Internal Server Error"); // sending to user 
    }

})
module.exports = router;