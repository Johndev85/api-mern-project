import { Router } from "express"

import Video from "./video"

const router = Router()

router.post("/videos", async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url })
    if (videoFound) {
        return res.status(301).json({ message: "The URL already exists" })
    }

    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
})

router.get("/videos", async (req, res) => {
    try {
        const videos = await Video.find()
        if (videos.length === 0) {
            console.log("No found Videos")
            return res.status(204).json()
        }
        return res.json(videos)
    } catch (error) {
        res.json(error)
    }
})

router.get("/videos/:id", async (req, res) => {
    try {
        const videoFound = await Video.findById(req.params.id)
        if (!videoFound) {
            console.log("No Found Video")
            return res.status(204).json()
        }
        return res.json(videoFound)
    } catch (error) {
        res.json(error)
    }
})

router.delete("/videos/:id", async (req, res) => {
    try {
        const videoDeleted = await Video.findByIdAndDelete(req.params.id)
        if (!videoDeleted) {
            console.log("No Found Video")
            return res.status(204).json()
        }
        console.log("Deleted Video")
        return res.json(videoDeleted)
    } catch (error) {
        res.json(error)
    }
})

router.put("/videos/:id", async (req, res) => {
    try {
        const videoUpdated = await Video.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!videoUpdated) {
            console.log("No Found Video")
            return res.status(204).json()
        }

        return res.json(videoUpdated)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router
