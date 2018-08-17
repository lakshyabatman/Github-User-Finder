class Github {
    constructor() {
        this.client_id = '38c595213c81513a05c7';
        this.api_key = 'd30f53f9adbea5728f0641b267bf0a6748fdc521';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.api_key}`);

        const profileData = await profileResponse.json();
        return {
            profile: profileData
        }
    }


    async getResp(resp) {
        const respResponse = await fetch(`${resp}?client_id=${this.client_id}&client_secret=${this.api_key}`);

        const respData = await respResponse.json();
        return {
            resp: respData
        }
    }
}