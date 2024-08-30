/**
 * problem - 1
 * Create an array with 5 students names, after that create a function which takes
 * 2 parameters(allStudents and studentName) iterate over all students and find
 * that specific user "studentName".
 */

const allStudents = ["joy", "moy", "toy", "noy", 'doy']

function findStudent(allStudents, studentName){
        for(let i= 0; i < allStudents.length; i++){
            console.log(allStudents[i])
        }
}

findStudent(allStudents, studentName[0])