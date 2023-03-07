const CAR_URL = "api/car"
const MODEL_URL = "api/model"

const getHeadersConfiguration = () => {
    const token = localStorage.getItem("token")
    const headers = {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}

    return headers
}

//Car
export const createCar = async(request) => {
    const headers = getHeadersConfiguration()

    return await fetch(CAR_URL, {method: "POST", headers, body: JSON.stringify(request)})
        .then(res => res.json())
        .then(data => data)
        .catch(err => err)
}

export const editCar = async(request, id) => {
    const headers = getHeadersConfiguration()

    return await fetch(`${CAR_URL}/${id}`, {method: "PUT", headers, body: JSON.stringify(request)})
        .then(res => res.json())
        .then(data => data)
        .catch(err => err)
}

//Models
export const getModels = async() => {
    const headers = getHeadersConfiguration()

    return await fetch(MODEL_URL, { headers })
        .then(res => res.json())
        .then(data => data["$values"])
        .catch(err => err)
}
