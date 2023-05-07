const fetchGoogle = ()=>{
    return "GOOGLE"
}


function fetchAPI(){
    console.log('START fetching');

    fetchGoogle();
    console.log('DOING fetching');

    console.log('DONE fetching');

    console.log('ERROR fetching');
}

// fetchAPI()
// START fetching
// DOING fetching
// DONE fetching
// ERROR fetching

function * fetchAPI(){
    console.log('START fetching');
    yield 'START'

    fetchGoogle();
    console.log('DOING fetching');
    yield 'DOING'

    console.log('DONE fetching');
    yield 'DONE'

    console.log('ERROR fetching');
    yield 'ERROR'
}
const myFetch = fetchAPI()
myFetch.next()
// START fetching
// {value: 'START', done: false}
myFetch.next()
// DOING fetching
// {value: 'DOING', done: false}
myFetch.next()
// DONE fetching
// {value: 'DONE', done: false}
myFetch.next()
// ERROR fetching
// {value: 'ERROR', done: false}

//redux saga project