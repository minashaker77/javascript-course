// function that works with strings:

" ".repeat(4);
"mina ".repeat(4);
//'mina mina mina mina '

const hello = "Hello World";

hello.indexOf('a')
// -1

hello.includes('a')
// false

hello.includes('o')
//true

// sensetive in capital and small letter
hello.includes('w')
//false

hello.includes('Hello')
// true

const names = ['ehsan','alex','jack','robert']
names.includes('ehsan')
//true

names.includes("eh")
// false

hello.startsWith('')
// true

hello.startsWith('H')
// true

hello.startsWith('w')
// false

hello.startsWith('Hel')
// true

hello.endsWith('d')
//true

hello.endsWith('b')
//false

location.href
"https://fa.ehsangazar.com/"

location.href.endsWith('/')
//true

location.href.startsWith('https')
// true