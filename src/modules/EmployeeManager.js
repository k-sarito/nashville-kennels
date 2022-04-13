const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
    return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
    .then(res=> res.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees?_expand=location`)
    .then(res => res.json())
}

export const deleteEmployees = id => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addEmployee = newEmployee => {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }).then(response => response.json())
}

export const getEmployeeByLocation = (id) => {
    return fetch(`${remoteURL}/employees?locationId=${id}`)
    .then(res => res.json())
}
export const updateEmployee = (editedEmp) => {
    return fetch (`${remoteURL}/employees/${editedEmp.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(editedEmp)
    }).then(data => data.json());
}