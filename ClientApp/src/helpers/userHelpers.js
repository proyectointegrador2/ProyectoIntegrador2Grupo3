import { getHeadersConfiguration } from "../utils/httpUtils"

const USER_URL = "api/user"

export const getCurrentUser = async(id) => {
    const headers = getHeadersConfiguration()

    return await fetch(`${USER_URL}/current`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err)
}