const payments = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    
    year: 2020
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
    }
    ];


    function totalSum (arr = []) {
        let result = []
        for (let value of arr) {
            let res = true
           x: for(let val of result) {
                if(val.studentId === value.studentId) {
                    val.payedAmount += value.payedAmount
                    res = false
                    break x
                }
            }
            if(res) {
                result.push(Object.assign(value))
            }
        }  result.forEach((val) => delete val.year)
        return result
    }
    console.log(totalSum(payments))