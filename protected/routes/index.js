import express from 'express';
import calculate from '../models/calculate';
let router = express.Router();

router.route('/calculate')
    .post(function (req, res, next) {
        res.json({hello: 'word'});
    })
    .get(function (req, res, next) {
        const result = calculate(req);
        res.json(result);
    });

module.exports = router;