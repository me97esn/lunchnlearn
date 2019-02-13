const request = require('request')
const {promisify} = require('util')
const requestPromise = promisify(request)

async function run(){
    const courses = await requestPromise({
        url: 'https://kth.test.instructure.com/api/v1/courses',
        auth: {
            bearer: '8779~hUf8NbuPSF2L0Va7EHyhkGWG3NZhEW9Nx99L35RQOI5jakBr0v7nHL8vbbK2unaa'
        },
        method: 'GET',
        json:true,
        headers: {
            'content-type': 'application/json'
        }
    })
    for (const course of courses.body) {
       console.log(course.name)
    }
}

run()

