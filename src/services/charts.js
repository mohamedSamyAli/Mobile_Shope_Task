import { getAllMobiles } from "./mobiles.services"

export const getDataForDonutChart = ()=>{
    let mobiles = getAllMobiles()
    let sum = {}
    let data = [["Brand", "mobile count"]]
    mobiles.forEach(ele => {
        sum[ele.brand]  = sum[ele.brand]?sum[ele.brand]+1:1
    });
    Object.getOwnPropertyNames(sum)?.forEach(el=>{
        data.push([el,sum[el]])
    })
    return data
}


export const getDataForColumnChart = ()=>{
    let mobiles = getAllMobiles()
    let sum = {}
    let data = [["Manfactoring Year", "mobile count"]]
    mobiles.forEach(ele => {
    console.log("🚀 ~ file: charts.js ~ line 22 ~ getDataForColumnChart ~ ele", ele)
        
        sum[ele.manfactoringYear.slice(0,4)]  = sum[ele.manfactoringYear.slice(0,4)]?sum[ele.manfactoringYear.slice(0,4)]+1:1
    });
    Object.getOwnPropertyNames(sum)?.forEach(el=>{
        data.push([el,sum[el]])
    })
    return data
}