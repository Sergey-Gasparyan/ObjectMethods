const evaluations = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 35
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 6
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 500
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    
    score: 60
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 6
    },

    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 10
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 20
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 30
    }
    ];


function getAvarage (arr = []) {
    let result = []
    let count = 1
    let res = true
    let sortedArr = []
    for(let value of arr) {
       x: for(let val of sortedArr) {
            if(val.courseName === value.courseName) {
                val.SumOfScore += value.score
                val.count++
                res = false
                    break x
            }

        }
         if(res) {
            sortedArr.push({'courseId': value.courseId , 'courseName' : value.courseName , 'SumOfScore' : value.score ,"count" : count})
            
        }

    }
   result = sortedArr.map((it) => Object.assign(it , {'AvarageScore' : it.SumOfScore / it.count}))
   result.forEach((it) => {
    delete it.count 
    delete it.SumOfScore

   })
   return result
    
}
console.log(getAvarage(evaluations))


