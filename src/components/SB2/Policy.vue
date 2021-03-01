<template>
  <div class="wrapPolicy q-ml-lg q-gutter-sm">
    <p class="title">Lock & Earn Policy</p>
    <div class="content column justify-between">
      <ul>
        <li>
          <p class="_content firstRow" style="padding-top: 16px">
            Participating period:
            <span style="font-weight: 300">30th NOV 2020 to 3rd DEC 2020 </span>
          </p>
        </li>
        <li>
          <p class="_content">
            Locking period:
            <span style="font-weight: 300">3rd DEC 2020 to 3rd MAR 2021</span>
          </p>
        </li>
        <li>
          <p class="_content">
            Total cap:
            <span style="font-weight: 300">10,000,000 KAI</span>
          </p>
        </li>
        <li>
          <p class="_content">
            Personal cap:
            <span style="font-weight: 300">500,000 KAI</span>
          </p>
        </li>
        <li>
          <p class="_content">
            Amount must be in multiples of
            <span style="font-weight: 300">1,000 KAI</span>
          </p>
        </li>

        <li>
          <p class="_content">
            Revenue share payout:
            <span style="font-weight: 300">USDT</span>
          </p>
        </li>

        <li>
          <p class="_content" style="padding-bottom: 0px">
            Payout calculation:
          </p>
          <p>
            <i
              class="_content formula"
              style="font-weight: 300; padding: 0 84px"
              >Payout = Total revenue * (your locked KAI / total cap)
            </i>
          </p>
          <p>
            <i class="_content" style="font-weight: 300; padding-bottom: 16px"
              >*Total revenue is the entire advertising revenue from Youtube
              during the locking period applied for all 6 episodes of Sugar Baby
              2 series.</i
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    policy() {
      return this.$store.state.campaign.policy;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapPolicy {
  margin-top: 89px;
}
.content {
  background: #fafafa;
}

._content {
  padding-left: 0 !important;
  padding: 8px 0px 8px 50px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  font-weight: 500;
}

.content__text {
  padding: 44px 48px 0px 50px;
  font-size: 16px;
  line-height: 35px;
  color: #000000;
  font-weight: 300;
}

.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 37px;
  color: rgba(0, 0, 0, 0.76);
}

// mobile screen
@media screen and (max-width: 740px) {
  .firstRow {
    padding-top: 0px;
  }
  .title {
    font-size: 24px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.76);
    margin-left: 25px;
    margin-bottom: 15px;
  }

  .wrapPolicy {
    margin-left: 0;
    margin-top: 20px;
  }

  .content {
    margin-left: 0;
  }

  .content__text {
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    padding: 23px 76px 56px 24px;
  }

  ._content {
    padding: 8px 13px 8px 13px;
  }

  .formula {
    padding: 0px 13px !important;
  }
}

// end mobile screen

// tablet screen
@media screen and (min-width: 740px) and (max-width: 1024px) {
  .title {
    font-size: 15px;
    line-height: 18px;
  }
}
</style>