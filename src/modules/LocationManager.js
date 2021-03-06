const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}`)
    .then(res=> res.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(res => res.json())
}

export const deleteLocations = id => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }