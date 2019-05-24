class REST {
  handleGET = url => {
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(result => result.json());
  };

  handlePOST = data => {
    const { url, body } = data;
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: body
    }).then(result => result.json());
  };

  handlePUT = data => {
    const { url, body } = data;
    return fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: body
    }).then(result => result.json());
  };

  handleDELETE = url => {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(result => result.json());
  };
}

export default REST;
