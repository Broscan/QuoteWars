const { createApp } = Vue;

createApp({
  data() {
    return {
      quotes: [],
    };
  },
  methods: {
    getApi() {
      fetch("https://dummyjson.com/quotes")
        .then((res) => res.json())
        .then((data) => {
          this.quotes = data;
        });
    },
  },

  mounted() {
    this.getApi();
  },
}).mount("#app");
