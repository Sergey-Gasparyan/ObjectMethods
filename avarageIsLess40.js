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
    score: 50
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
    studentId: 3, // Unique identifier for each student
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


// function avarageIsBigger40 (arr = []) {
//     let sortedArr = []
//     let result = []
//     let studentId = "" // ID
//     let sortedArrCount = {}
//     for(let value of arr) {
//         let res = true
//         x : for(let val of sortedArr) {
//             if(value.studentId === val.studentId){
//                 sortedArrCount[studentId + value.studentId]++
//                  val.score += value.score
//                  res = false
//                  break x
//             }
//         } 
//         if(res) {
//             sortedArr.push({...value})
//             sortedArrCount[studentId + value.studentId] = 1 
//         }
//     }
//      for(let value of sortedArr) {
//         let idx = value.studentId + ""
//         let avarage = value.score / sortedArrCount[idx]
//         if(avarage < 40) {
//             result.push(Object.assign(value , { score : avarage}))
//         }
//     }
//     return result
// }
// console.log(avarageIsBigger40(evaluations))


function avarageIsLess40 (arr = []) {
    let sortedArr = []
    let result = []
    let count = 1
    for(let value of arr) {
        let res = true
        x : for(let val of sortedArr) {
            if(value.studentId === val.studentId){
                 val.count++
                 val.score += value.score
                 res = false
                 break x
            }
        } 
        if(res) {
            sortedArr.push({...value , "count" : count})
        }
    }
     result = sortedArr.map((it) => {
        if(it.score / count > 40) return Object.assign(it,{"Avarage" : it.score / it.count})
        }
    )
    result.forEach((it) => {
        delete it.score
        delete it.count
    })
    return result
}
console.log(avarageIsLess40(evaluations))