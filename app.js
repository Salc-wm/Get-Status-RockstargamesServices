#!/usr/bin/env node
import fetchStatus from './rockstarGames-status.js'
import { readFile, writeFile } from 'fs'

function jsonReader(filePath, cb) {
    readFile(filePath, (err, fileData) => {
        if (err) {
             return cb && cb(err)
        }

        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)

        } catch (err) {
            return cb && cb(err)
        }
    })
}

jsonReader("./LogRockstarsServices.json", (err, customer) => {
    if (err) {
        console.log(err)
        return
    }

    fetchStatus().then((statuses) => {
        writeFile("./LogRockstarsServices.json", JSON.stringify(statuses, null, 4), (error) => {
            if (error) {
                console.log('An error has occurred ', error)
                return
            }

            console.log('Data written successfully to disk')
        })
    })
})

