<template>
  <div class="wrapCampaign">
    <div class="row row1">
      <div class="col-xs-12 col-sm-6 col-md-7">
        <Carousel />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-5">
        <Deposit />
      </div>
    </div>

    <div class="border"></div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-7">
        <Tabs />
      </div>
      <div class="borderT"></div>
      <div class="row justify-center col-xs-12 col-sm-6 col-md-5">
        <Policy />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/SB2/Carousel";
import Tabs from "../components/SB2/Tabs";
import Policy from "../components/SB2/Policy";
import Deposit from "../components/SB2/Deposit";

export default {
  name: "Index",
  components: {
    Carousel,
    Tabs,
    Policy,
    Deposit,
  },
  methods: {
    getDataCampaignByName() {
      this.$store.commit("setDataCampaignByName", "sb2");
    },
  },
  created() {
    this.getDataCampaignByName();
  },
};
</script>
<style lang="scss" scoped>
.wrapCampaign {
  margin-top: 33px;
  padding-bottom: 60px;
}
.borderT {
  display: none;
}

.border {
  margin-top: 58px;
  border: 4px solid #000000;
  margin-bottom: 44px;
}
// mobile screen
@media screen and (max-width: 740px) {
  .wrapCampaign {
    margin-top: 0px;
  }
  .blank {
    display: none;
  }

  .row1 {
    margin-bottom: 0px;
  }

  .border {
    margin-top: 34px;
    margin-bottom: 23px;
    margin-left: 25px;
    margin-right: 16px;
  }

  .borderT {
    display: block;
    border: 4px solid black;
    margin-top: 20px !important;
    width: 100%;
    margin: 0px 24px;
  }
}

// tablet screen
@media screen and (min-width: 740px) and (max-width: 1024px) {
  .row1 {
    margin-bottom: 0px;
  }
}
</style>
