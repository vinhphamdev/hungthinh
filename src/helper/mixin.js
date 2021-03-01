import Web3 from "web3";

export default {
    methods: {
        formatNumber: function (number) {
            return new Intl.NumberFormat().format(number);
        },

        getWeb3() {
            return window.ethereum ? new Web3(window.ethereum) : undefined;
        },

        convertToVideoEmbed(src) {
            const newSrc = src.split("=");
            return `https://www.youtube.com/embed/${newSrc[1]}`;
          },
      
          getYoutubeThumbnail(src) {
            const id = src.slice(32, src.length);
            return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
          },
    }
}