var express = require('express');
var router = express.Router();
var Products = require('./../models/Product');

router
    .get('/', function (req, res, next) {
        Products
            .find({})
            .exec()
            .then((data) => {
                if (!data) {
                    return res.json({
                        status: false,
                        data: {}
                    })
                }

                return res.json({
                    status: true,
                    data
                })
            })
            .catch((err) => {
                return res.json({
                    status: false,
                    data: err
                })
            })
    })
    .post('/', function (req, res) {
        let product = new Products(req.body);

        product
            .save()
            .then((data) => {
                return res.json({
                    status: true,
                    data
                })
            })
            .catch((err) => {
                return res.json({
                    status: false,
                    data: err
                })
            })
    })
    .get('/:id', (req, res) => {
        Products
            .findById(req.params.id)
            .then((data) => {
                if (!data) {
                    return res.json({
                        status: false,
                        data: {}
                    });
                }
                return res.json({
                    status: true,
                    data
                });
            })
            .catch((err) => {
                return res.json({
                    status: false,
                    err
                })
            });
    })
    .put(':id', (req, res) => {
        Products
            .update({
                _id: req.params.id
            }, req.body)
            .then((data) => {
                return res.json({
                    status: true,
                    data
                });
            })
            .catch((err) => {
                return res.json({
                    status: false,
                    err
                })
            });
    })
    .delete(':id', (req, res) => {
        Products
            .remove({
                _id: req.params.id
            })
            .then((data) => {
                if (!data) {
                    return res.json({
                        status: false,
                        data: {}
                    });
                }

                return res.json({
                    status: true,
                    data
                });
            })
            .catch((err) => {
                return res.json({
                    status: false,
                    err
                })
            });
    });

module.exports = router