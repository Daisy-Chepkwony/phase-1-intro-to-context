// Your code here
let createEmployeeRecord= (data)=>{
 
return{
    firstName:data[0],
    familyName:data[1],
    title:data[2],
    payPerHour:data[3],
    timeInEvents:[],
    timeOutEvents:[]

}
} 

 let createEmployeeRecords=(employeeData)=>{
    return employeeData.map((data)=>{
        return createEmployeeRecord(data)
    })

    } 
//not working
    let  createTimeInEvent=(workers,dateStamp)=>{
        let [hour,date]=dateStamp.split('')
        workers.timeInEvents.push({
            type:'TimeIn',
            hour:parseInt(hour,10),
            date,
        })
        return workers

    }
    let  createTimeOutEvent=(workers,dateStamp)=>{
        let [hour,date]=dateStamp.split('')
        workers.timeOutEvents.push({
            type:'TimeOut',
            hour:parseInt(hour,10),
            date,
        })
        return workers

    }
     let hoursWorkedOnDate=( workers,workedDate)=>{
        let inEvent=workers.timeInEvents.find((e)=>{
            return e.date === workedDate
        })
        let outEvent=workers.timeoutEvents.find((e)=>{
            return e.date === workedDate
        })
    return (outEvent.hour - inEvent.hour)/100
} 
let wagesEarnedOnDate=(workers,wagesDate,)=>{
    let wages=hoursWorkedOnDate(workers,wagesDate)
    *workers.payPerHour
    return parseFloat(wages.toString())

} 
let allWagesFor=(workers)=>{
    let workingDates=workers.timeInEvents.map((e)=>{
        return e.date
    })
    let salary=workingDates.reduce((data1,t)=>{
        return data1+wagesEarnedOnDate(workers,t)
    },0)
    return salary

} 
let calculatePayroll=(arrayOfWorkersRecords)=>{
    return arrayOfWorkersRecords.reduce((data1,rec)=>{
        return data1+allWagesFor(rec)
    },0)

} 
let sortWorkersByFirstName=((newArray,firstName)=>{
    return newArray.find((rec)=>{
        return rec.firstName===firstName
    })
})
