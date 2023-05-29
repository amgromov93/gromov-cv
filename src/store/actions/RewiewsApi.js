export default class RewiewsApi {
  static URL = 'https://6366959a79b0914b75d41ae9.mockapi.io/api/todo';

  static getList() {
    return fetch(RewiewsApi.URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not retrieve Rewiews list from server');
      })
  }

  static create(Rewiews) {
    return fetch(RewiewsApi.URL, {
      method: 'POST',
      body: JSON.stringify(Rewiews),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not create Rewiews on server');
      })
  }

  static update(id, changes) {
    return fetch(`${RewiewsApi.URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not update Rewiews on server');
      });
  }

  static delete(id) {
    return fetch(`${RewiewsApi.URL}/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not delete Rewiews on server');
      });
  }
}