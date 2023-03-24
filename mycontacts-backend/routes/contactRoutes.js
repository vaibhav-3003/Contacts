const express = require("express");
const router = express.Router();
const { getContacts,getContact, createContact,updateContact,deleteContact } = require("../controllers/contactControllers"); 
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route('/').get(getContacts).post(createContact);

// router.route('/').post(createContact); same route so add in above

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// router.route('/:id').put(updateContact);

// router.route('/:id').delete(deleteContact);

module.exports = router;