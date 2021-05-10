'use strict'

const { spawn } = require('child_process')

const parent = process.argv[2]
let videos = []

if (process.argv[2]) {
    const start = parseInt(process.argv[3])
    const end = parseInt(process.argv[4])

    for (let i = start; i <= end; i++) {
        videos.push(i)
    }

    videos.reverse()
    processResize()
} else {
    console.log('Provide a directory with your videos')
}

function resize(video, quality) {
    return new Promise((resolve, reject) => {
        const ffmpeg = spawn('ffmpeg', [
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-pre',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/compressed/${video}-${quality}.mp4`
        ])

        ffmpeg.stderr.on('data', (data) => {
            console.log(`Error: ${data}`)
        })

        ffmpeg.on('close', (data) => {
            resolve()
        })
    })
}

async function processResize() {
    let video = videos.pop()

    if (video) {
        try {
            await resize(video, 720)
            await resize(video, 480)
            await resize(video, 360)

            console.log(`Rendered videos - ${video}`)

            processResize()
        } catch (error) {
            console.log(error)
        }
    }
}
