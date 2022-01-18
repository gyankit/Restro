// jshint esversion: 8

module.exports = {
    one: async function (req, res) {
        try {
            var file = req.files.file;
            var filename = `${file.name}.${file.mimetype.split("/", 2)[1]}`
            file.mv(`server/images/${req.body.type}/${filename}`);
            res.status(201).json(true);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    many: async function (req, res) {
        try {
            var owner = req.files.owner;
            var shop = req.files.shop;
            var filename = `${owner.name}.${owner.mimetype.split("/", 2)[1]}`;
            var filename = `${shop.name}.${shop.mimetype.split("/", 2)[1]}`;
            owner.mv(`server/images/${req.body.type1}/${filename}`);
            shop.mv(`server/images/${req.body.type2}/${filename}`);
            res.status(201).json(true);
        } catch (error) {
            res.status(400).send(error);
        }
    }
};