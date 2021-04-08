export const addDataToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getDataFromLocalStorage = (key) => {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
}