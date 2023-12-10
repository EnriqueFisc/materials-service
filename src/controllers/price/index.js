const express = require('express');
const Materials = require('../../models/materials');


const getPriceByGrams = async(req = express.request, res, next) => {
    const {
        materialId, 
        grams,
    } = req.body;

    try {
        // FINDING MATERIAL BY MATERIAL ID
        const materialQuery = Materials.where({ materialId });
        const material = await materialQuery.findOne();

        //RETURN E
        if ( !material ) {
            return res.status(200)
                .json({
                    ok: false,
                    msg: "Material doesn't exists",
                })
        }

        // BUILDING PRICE BY GRAMS
        const price = ( grams * material.gramsPrice ) * 0.80;

        // SENDING RESPONSE WITH PRICE
        return res.status(200)
            .json({
                ok: true,
                price
            })
    } catch (error) {
        return res.status(404)
            .json({
                ok: false,
                msg: "Someting went wrong",
            })
    }
}

module.exports = {
    getPriceByGrams
}