const CLIENT_URL = "api/client"

const getHeadersConfiguration = () => {
    const token = localStorage.getItem("token")
    const headers = {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}

    return headers
}

export const getClientById = async(id) => {
    const headers = getHeadersConfiguration()

    return await fetch(`${CLIENT_URL}/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err))
}

export const editClient = async(id, body) => {
    const headers = getHeadersConfiguration()

    return await fetch(`${CLIENT_URL}/${id}`, {method: "PUT", headers, body: JSON.stringify(body)})
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err))
}