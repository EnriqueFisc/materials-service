const express = require('express');
const Materials = require('../../models/materials');

const getAllMaterials = async(req = express.request, res, next) => {
    try {
        // FINDING MATERIALS
        const materials = await Materials.find();

        return res.status(200)
        .json({
            ok: true,
            data: materials,
        })

    } catch (error) {
        console.error('[Error]:', error);

        return res.status(400)
            .json({
                ok: false,
                error: 'Something went wrong while getting Material'
            })
    }
}

module.exports = {
    getAllMaterials
}