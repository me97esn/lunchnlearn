const request = require('request')
const {promisify} = require('util')
const requestPromise = promisify(request)

async function run(){
    const courses = await requestPromise({
        url: 'https://kth.test.instructure.com/api/v1/courses',
        auth: {
            bearer: '8779~z7nnmNhExm9ErPyR0NrZcPn2GBC331x5q52QINgI5vrZEU7hK5dheK9pi2cCPF6O'
        },
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    console.log(courses.body)
}

run()

