import { getHeadersConfiguration } from "../utils/httpUtils"

const CAR_URL = "api/car"
const MODEL_URL = "api/model"

//Car
export const getCarByID = async(id) => {
    const headers = getHeadersConfiguration()

    return await fetch(`${CAR_URL}/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err)
}

export const fetchCarAndModelData = async(carId) => {
    const headers = getHeadersConfiguration()

    return await Promise.all(
        [
            fetch(`${CAR_URL}/${carId}`, { headers }),
            fetch(MODEL_URL, { headers })
        ]
    ).then(responses => Promise.all(responses.map(res => res.json())))
     .then(data => {
        const [data1, data2] = data;

        return {
            car: data1,
            model: data2
        }
    })
      .catch(err => err)
}

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
