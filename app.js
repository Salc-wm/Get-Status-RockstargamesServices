#!/usr/bin/env node
import { fetchStatus } from './rockstarGames-status.js'

fetchStatus().then((statuses) => {
    console.log('All...', statuses, '\n')
    console.log('GTA PC:', statuses.gtao.PC)

    Object.entries(statuses).forEach(([key, value]) => {
        console.log(`\n${key}:`)

        if (key != 'lastUpdate') {
            Object.entries(value).forEach(([key, value]) => {
                console.log(`\t${key}: ${value}`)
            })
        } else {
            console.log('\t', value)
        }
    })
})
