const { Router } = require('express');
const Sender = require('./sender')
const express = require('express')

const sender = new Sender();

const router = Router()

router.post('/send', async (req, res) => {
    const { number, message } = req.body;
    
    try {
        await sender.sendText(`${number}@c.us`, `${message}`);
        
        return res.status(200).json();
    } catch (error) {
        console.error("error", error)
        res.status(500).json( { status: "error", message: error })
    }
})

module.exports = router