const names = ['ehsan','alex','jack','robert']
// looking for a specific value
names.indexOf('jack')
//2

names.indexOf('mamad')
// -1

const s = new Set()
s.add('mina')
// Set(1) {'mina'}
s.add('robert')
// Set(2) {'mina', 'robert'}
s.add('ali')
// Set(3) {'mina', 'robert', 'ali'}

// looking for a specific value
s.has('mamad')
// false
s.has('ali')
//true

// behavior like array:
s.forEach(item => console.log(item))
// mina
// robbert
// ali

//lentgh:
s.size
3

// s.keys().for()

s.delete('ali')
true
s
// Set(2) {'mina', 'robbert'}

s.entries()
// SetIterator {'mina' => 'mina', 'robbert' => 'robbert'}



