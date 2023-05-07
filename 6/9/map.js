// look like json with key value:

let m = new Map()

m.set('name','Ehsan')
m.set('family','Gazar')
// Map(2) {'name' => 'Ehsan', 'family' => 'Gazar'}

m.get('name')
// 'Ehsan'

m.delete('name')
// true
m
// Map(1) {'family' => 'Gazar'}

let s = new Set()
s.add('melborne')
// Set(1) {'melborne'}
m.set(s,'city')
// Map(2) {'family' => 'Gazar', Set(1) => 'city'}
m
// Map(2) {'family' => 'Gazar', Set(1) => 'city'}
m.get(s)
// 'city'

m.set('family', 'Naseri')
// Map(2) {'family' => 'Naseri', Set(1) => 'city'}

m.has('family')
// true