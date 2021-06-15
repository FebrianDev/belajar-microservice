const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64')
const base64Img = require('base64-img')
const {Media} = require('../models')
const fs = require('fs')

router.get('/', async (req, res) => {
    try {
        const media = await Media.findAll()
        const getImgUrl = media.map(m => {
            m.image = `${req.get('host')}/${m.image}`
            return m
        })

        return res.json({
            status: 'success',
            data: getImgUrl
        })

    } catch (e) {
        return res.json({
            code: 500,
            status: 'failed'
        })
    }
})

router.post('/', (req, res, next) => {

    const image = req.body.image

    if (!isBase64(image, {mimeRequired: true})) {
        return res.status(400).json({status: 'error', message: 'invalid image'})
    }

    base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
        if (err) {
            res.status(400).json({status: 'error', message: err.message})
        }

        const filename = filepath.split('\\').pop().split('/').pop()
        const media = await Media.create({image: `images/${filename}`, created_at: Date.now(), updated_at: Date.now()})
        return res.json({
            status: 'Sucess',
            data: {
                id: media.id,
                image: `${req.get('host')}/images/${filename}`
            }
        })
    })

})

router.delete('/:id', async (req, res) => {
    const idMedia = req.params.id
    const media = await Media.findByPk(idMedia)
    console.log(media)
    if (media === null) {
        return res.status(404).json({status: 'error', message: 'media not found'})
    }

    fs.unlink(`./public/${media.image}`, async (err) => {

        if (err) {
            return res.status(400).json({status: 'error', message: err.message})
        }

        await media.destroy()

        return res.status(200).json({status: 'success', message: 'image success deleted'})
    })
})

module.exports = router;
