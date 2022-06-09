export let dataHandler = {
  getContract: async function (id) {
    const response = await apiGet(`/contract/${id}`);
    return response;
  },

  getContractGroups: async function () {
    const response = await apiGet(`/contract_group/names`);
    return response;
  },

  updateAttr: async function (data) {
    const response = await apiPut(`/sheet/update_attr`, data);
    return response;
  },

  updateSkill: async function (data) {
    const response = await apiPut(`/sheet/update_skill`, data);
    return response;
  },

  addContract: async function (data) {
    const response = await apiPost(`/contract`, data);
    return response;
  }
};

async function apiGet(url) {
  let response = await fetch(url, {
    method: "GET"
  });
  if (response.ok) {
    let data = response.json();
    return data;
  }
}

async function apiPost(url, payload) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    let data = response.json()
    return data;
  }
}

async function apiDelete(url) {
  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  });
  if (response.ok) {
    let data = response.json()
    return data;
  }
}

async function apiPut(url, payload) {
  let response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    let data = response.json()
    return data;
  }
}
