export default class Api {
  constructor(options) {
    this.url=options.url;
    this.headers=options.headers;
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: 'GET',
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  getUserProfile() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  patchProfile(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this.handleResponse)
  }

  patchAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    })
      .then(this.handleResponse)
  }

  postCard( {name, link} ) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(this.handleResponse)
  }

  likeCard(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  dislikeCard(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  handleResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка при обращении к серверу");
  }
}