const express = require('express');
const contactsController = require('../controllers/contacts.controller');
const router = express.Router();
router
.route('/')
    .get(contactsController.getContactsByFilter)
    .post(contactsController.createContact)
    .delete(contactsController.deleteAllContacts)
router
    .route('/:id')
    .get(contactsController.getContact)
    .put(contactsController.updateContact)
    .delete(contactsController.deleteContact)
module.exports = router;