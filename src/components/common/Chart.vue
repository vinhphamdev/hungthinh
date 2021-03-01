<template>
  <div>
    <p
      class="text-center text-uppercase q-mb-md text-bold title-report"
      style="font-size: 24px; line-height: 28px; color: rgba(0, 0, 0, 0.76)"
    >
      weekly revenue report
    </p>
    <VueApexCharts
      width="100%"
      type="line"
      :options="dataCampaign.chart.options"
      :series="dataCampaign.chart.series"
    ></VueApexCharts>

    <div class="wrap flex">
      <div
        class="card column bg-red q-pa-lg q-mr-sm rounded-borders items-center justify-center"
        style="flex: 1"
      >
        <p class="text-white q-mb-sm">{{dataCampaign.chart.view}}</p>
        <p class="text-white">
          <q-icon name="visibility" class="q-mr-sm" />View
        </p>
      </div>

      <div
        class="card column bg-primary q-pa-lg q-mr-sm rounded-borders items-center justify-center"
        style="flex: 1"
      >
        <p class="text-white q-mb-sm">{{dataCampaign.chart.like}}</p>
        <p class="text-white"><q-icon name="thumb_up" class="q-mr-sm" />Like</p>
      </div>

      <div
        class="card column bg-green q-pa-lg rounded-borders items-center justify-center"
        style="flex: 1"
      >
        <p class="text-white q-mb-sm">{{dataCampaign.chart.comment}}</p>
        <p class="text-white">
          <q-icon name="comment" class="q-mr-sm" /> Comment
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts,
  },
  computed: {
    dataCampaign() {
      return this.$store.state.campaign.dataCampaign;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 740px) {
  .card {
    padding: 24px 10px;
  }

  .title-report {
    font-size: 18px !important;
    line-height: 22px !important;
  }
}
</style>