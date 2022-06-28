// const launches = require('./launches.mongo')

const launches = new Map()

let latestFlightNumber = 100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration',
    rocket: 'Rocket IS1',
    launchDate: new Date('December 11, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber++;

    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ['Zero to Mastery', 'NASA'],
        upcoming: true,
        success: true,
    }))
}

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

function abortLaunchById(launchId) {
   const aborted =  launches.get(launchId)
   aborted.upcoming = false
   aborted.success = false

   return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
}