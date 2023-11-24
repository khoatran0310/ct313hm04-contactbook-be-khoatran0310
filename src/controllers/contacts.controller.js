function createContact(req, res) {
    return res.send({ message: 'createContact handler' });
}

function getContactsByFilter(req, res) {
    let filters = [];
    const { favorite, name } = req.query;

    if (favorite != undefined) {
        filters.push(`favorite=${favorite}`);
    }
    if (name != undefined) {
        filters.push(`name=${name}`);
    }
    return res.send({
        message: `getContactsByFilter handler with query {
            ${filters.join(', ')}
        }`,
    });
}

function getContact(req, res) {
    return res.send({ message: 'getContact handler' });
}

function updateContact(req, res) {
    return res.send({ message: 'updateContact handler' });
}

function deleteContact(req, res) {
    return res.send({ message: 'deleteContact handler' });
}

function deleteAllContacts(req, res) {
    return res.send({ message: 'deleteAllContacts handler' });
}

module.exports = {
    getContactsByFilter,
    deleteAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};