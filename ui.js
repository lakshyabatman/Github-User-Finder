class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.resp = document.getElementById('resp');
    }

    clearProfile() {
        this.profile.innerHTML = ``;
    }
    clearResp() {
        this.resp.innerHTML = '';
    }

    showResp(respArray) {
        var respOutput = "";
        respArray.forEach(resp => {
            respOutput += `<div class="alert alert-primary" role="alert">
                 <b>ID:</b> ${resp.id}  <b>Name:</b> ${resp.name} 
              </div><br>`;

        });

        this.resp.innerHTML = respOutput;
    }

    showAlert() {
        this.profile.innerHTML = `<div class="alert alert-warning" role="alert">
        User not found!!!
      </div>`
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
                <div class="d-flex card-img-top justify-content-center">
                    <img class="mb-2" src="${user.avatar_url}" alt="Sorry User Not Found">
                </div>
            
            <div class="d-flex justify-content-center">
                <h4 class="lead">${user.name}</h4>
            </div>
            <div class="row  mb-3">
                <a class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
            </div>
            <div class="d-flex justify-content-around mb-3">
                <div class="badge badge-primary">Public Respos: ${user.public_repos}</div>
                <div class="badge badge-success">User ID: ${user.id}</div>
                <div class="badge badge-secondary">Following: ${user.following}</div>
                <div class="badge badge-danger">Followers: ${user.followers}</div>
            </div>
            
        </div>
        `;
    }
}