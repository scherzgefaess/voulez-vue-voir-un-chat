const app = {
    data() {
        return {
            picture: "cato.jpeg",
            visible: 'display:none'
        }
    },
    methods: {
        async getCat() {
            const response = await fetch("https://api.thecatapi.com/v1/images/search")
            const json = await response.json()
            this.picture = json[0].url
            this.visible = "display:block"
        }
    }
}

Vue.createApp(app).mount('#app')