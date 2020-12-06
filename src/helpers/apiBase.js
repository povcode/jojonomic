import axios from 'axios'
const target = 'http://localhost:3000/tasks'
export default () => {
    const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJKb2pvbm9taWMiLCJpYXQiOjE2MDY2OTYyOTYsImV4cCI6MTYzODIzMjI5NiwiYXVkIjoiam9qb25vbWljLmNvbSIsInN1YiI6Impvam9hcmllZiIsImNvbXBhbnlfaWQiOiIxMzAiLCJ1c2VyX2lkIjoiMTIwIn0.jdnqi7hHmeeQlOJ1o-nZBxynTah-QuDj-SjItbol8XE';
    return axios.create({
        baseURL: target,
        timeout: 60000,
        crossdomain: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
