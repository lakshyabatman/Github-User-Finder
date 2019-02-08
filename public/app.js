const myText = document.getElementById('user');
const github = new Github;
const ui = new UI();
const myForm = document.getElementById('myForm');
myText.addEventListener("keyup", () => {

    const usertext = myText.value;


    if (usertext != '') {
        github.getUser(usertext)
            .then(data => {
                if (data.profile.message == 'Not Found') {
                    ui.showAlert();
                    ui.clearResp();

                } else {
                    ui.showProfile(data.profile);
                    github.getResp(data.profile.repos_url)
                        .then(respData => {

                            ui.showResp(respData.resp);
                        });
                }
            })
    } else {
        ui.clearProfile();
        ui.clearResp();
    }
})

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
})