// import fetch from 'node-fetch'

function returnSPlatformStatus(data, game, system) {
    return data.statuses.find((s) => s.name === game).services_platforms.find((s) => s.name === system).service_status.status
}

/** @type {string} RedDeadOnline, GTA, RGLauncher - Game names */
let GTA = 'Grand Theft Auto Online'
let RGLauncher = 'Rockstar Games Launcher'
let RedDeadOnline = 'Red Dead Online'

let rockstarGamesSystem = {
    redDeadOnline: [RedDeadOnline, ['PC', 'Xbox One', 'PS4']],
    gtao: [GTA, ['PC', 'Xbox One', 'Xbox Series X/S', 'PS4', 'PS5']],
    launcher: [RGLauncher, ['Authentication', 'Store', 'Cloud Services', 'Downloads']]
}

export let fetchStatus = async (timezone = '', language = '') => {
    let formatStatus = `${language ? `${language}/` : ''}services/status.json${timezone ? `?tz=${timezone}` : ''}`

    const result = await fetch('https://support.rockstargames.com/' + formatStatus)
    const data = await result.json()

    let systemPlatformStatus = {}
    for (const prop in rockstarGamesSystem) {
        let item = rockstarGamesSystem[prop]
        systemPlatformStatus[prop] = {}

        for (let syst in item[1]) {
            let systName = item[1][syst]

            systemPlatformStatus[prop][systName] = returnSPlatformStatus(data, item[0], systName)
        }
    }

    return Object.assign({}, {
        socialClub: {
            all: returnSPlatformStatus(data, 'Social Club', 'All Features')
        },

        lastUpdate: data.updated
    }, systemPlatformStatus)
}
