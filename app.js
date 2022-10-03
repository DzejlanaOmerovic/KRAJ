const app = Vue.createApp({
    data() {
        return {
            members: [
                {
                    id: "1",
                    name: "ToJuri Nagasaki",
                    phone: "066/154-14-87",
                    email: "kakosezove,najbrži.kinez@gmail.com",
                   image: "https://i.pravatar.cc/300?img=33",
                },
                {
                    id: "2",
                    name: "Mica Ubica",
                    phone: "063/124-48-72",
                    email: "ubio.se.od.posla@gmail.com",

                    image: "https://i.pravatar.cc/300?img=3",
                },
                {
                    id: "3",
                    name: "Len Čuga",
                    phone: "061/148-55-67",
                    email: "kakosezove.kinez.koji.je.lenj@gmail.com",

                    image: "https://i.pravatar.cc/300?img=52",
                },

            ],
            counter: 0,
            donateVisible: false,
            thanks: false,
        };
    },

});

app.component("member", {
    props: ["name", "phone", "email", "message", "image"],
    template: `
  <li>
    <h2>{{ name }}</h2>
    <ul v-if="detailsAreVisible" class="inner">
    <li><img :src='image' /></li>
      <li><i class="fas fa-phone-alt"></i> &nbsp;&nbsp; {{ phone }}</li>
      <li><i class="fas fa-envelope"></i> &nbsp;&nbsp; {{ email }}</li>
      
    </ul>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? (title == 'Our team' ? 'Hide' : 'Sakrij') : (title == 'Our team' ? 'Show' : 'Prikaži') }}  {{ title == 'Our team' ? 'details' : 'detalje' }}
    </button>
    
  </li>
  `,
    data() {
        return {
            detailsAreVisible: false,
            title: document.title,
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");