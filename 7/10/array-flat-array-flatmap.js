const data = [
    [
        'a',
        ['b', 'c'],
        ['d']
    ]
]
data.flat()
//['a', Array(2), Array(1)]

data.flat(2)
//['a', 'b', 'c', 'd']

const names = ['ehsan gazar', 'alex gazar', 'jack smith ross', 'robert jackson']

// two spaces
names.flatMap(item => item.split(' '))
//['ehsan', 'gazar', 'alex', 'gazar', 'jack', 'smith', 'ross', 'robert', 'jackson']
