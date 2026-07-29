


export const setItem = (data) =>{
    localStorage.setItem("blog",JSON.stringify(data))
}

export const getItem = () =>{
    const getData = localStorage.getItem("blog")
    return getData ? JSON.parse(getData) : []
}