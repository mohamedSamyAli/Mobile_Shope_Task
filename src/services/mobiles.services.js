import { addDataToLocalStorage, getDataFromLocalStorage } from "./local-storage.crude.services"


export const getAllMobiles = () => {
    let mobiles = getDataFromLocalStorage("mobiles")
    return mobiles ? mobiles : []
}

export const getFilteredMobiles = (model,brand) => {
    
    let mobiles = getAllMobiles()

    return mobiles.filter(el=>{
        return (
            (!model || el.model?.toLowerCase().indexOf(model?.toLowerCase()) >= 0 )&&
            (!brand || el.brand === brand )
        )
    
    })
}
export const addMobile = (data) => {
    
    let mobiles = getAllMobiles()
    mobiles.push(data)
    addDataToLocalStorage("mobiles" , mobiles)
}