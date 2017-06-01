import axios from 'axios';

const FETCH_TESTS = 'FETCH_TESTS';
const CREATE_TEST = 'CREATE_TEST';


export function fetchTests() {
    const request = axios({
        method: 'get',
        url: '/tests',
        headers: []
    })
    .then(function(response) {
        console.log('response', response)
        return response;
    })
    .catch(function(error) {
        console.log('ошибка', error)
    })
    return {
        type: FETCH_TESTS,
        payload: request
    }
}

export function createTest(props) {
    const request = axios.post('/addtest', props);
    return {
        type: CREATE_TEST,
        payload: request
    }
}