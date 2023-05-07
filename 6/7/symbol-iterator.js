//generator
function* fetchAPI() {
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
// START fetching
myFetch.next()
// {value: 'START', done: false}

// customize value:
let loop = {
    // key: generator
    [Symbol.iterator]: function* () {
        for (let i = 0; i < 10; i++) {
            yield i;
        }
    }
}
let myLoop = loop[Symbol.iterator]()

myLoop.next()
// {value: 0, done: false}
myLoop.next()
// {value: 1, done: false}
myLoop.next()
// {value: 2, done: false}
myLoop.next()
// {value: 3, done: false}
myLoop.next()
// {value: 4, done: false}
myLoop.next()
// {value: 5, done: false}

let loop2 = {
    [Symbol.iterator]: function () {
        let i = 0
        return {
            next: function () {
                return {
                    value: i++,
                    done: i > 10
                }
            }
        }
    }
}

let myLoop2 = loop[Symbol.iterator]()
myLoop2.next()
myLoop2.next()
// {value: 0, done: false}
myLoop2.next()
// {value: 1, done: false}
myLoop2.next()
// {value: 2, done: false}
myLoop2.next()
// {value: 3, done: false}