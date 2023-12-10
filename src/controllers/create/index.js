const express = require('express');
const Materials = require('../../models/materials');

const createMaterial = async(req = express.request, res, next) => {
    const {
        name,
        materialId, 
        gramsPrice
    } = req.body

    // BUILDING MATERIAL DATA TO CREATE COLLECTION
    const materialToCreate = new Materials({
        name,
        materialId,
        gramsPrice
    })

    try {
        const materialCreated = await materialToCreate.save();

        return res.status(200)
        .json({
            ok: true,
            data: materialCreated,
            msg: 'Material created successful',
        })

    } catch (error) {
        console.error('[Error]:', error);

        return res.status(400)
            .json({
                ok: false,
                msg: 'Something went wrong while creating Material'
            })
    }
}

module.exports = {
    createMaterial
}