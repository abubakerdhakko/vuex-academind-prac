const students = [
    {
        'id' : '1',
        'name' : 'iron man',
        'games' : ['Tennis', 'football'],
        'selected' : 'false'
    },
    {
        'id' : '2',
        'name' : 'batman man',
        'games' : ['Tennis', 'football'],
        'selected' : 'false'
    },
    {
        'id' : '3',
        'name' : 'superman man',
        'games' : ['Tennis', 'football'],
        'selected' : 'false'
    },
    {
        'id' : '4',
        'name' : 'spider man',
        'games' : ['Tennis', 'football'],
        'selected' : 'false'
    }

]

export default {
    getStudents(){
        return students;
    }
}