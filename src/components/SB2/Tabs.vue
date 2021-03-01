<template>
  <div class="wrap q-mr-lg q-gutter-sm">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="black"
      indicator-color="black"
      narrow-indicator
    >
      <q-tab
        class="tab"
        :name="tab.tab_name"
        :label="tab.tab_name"
        v-for="(tab, index) in tabs"
        :key="index"
      />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="card-body">
      <q-tab-panel
        :name="tab.tab_name"
        class="content"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <component :is="tab.component"></component>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Description from "./Description";
import Cast from "./Cast";
import Timeline from "../common/Timeline";
import Chart from "../common/Chart";

export default {
  components: {
    Description,
    Cast,
    Timeline,
    Chart,
  },
  data() {
    return {
      tab: "Thông tin chung",
      tabs: [
        {
          tab_name: "Thông tin chung",
          component: "Description",
        },
        {
          tab_name: "Đề xuất gọi vốn",
          component: "Cast",
        }
      ],
    };
  },
};
</script>

<style lang="scss">
.text {
  font-size: 17px;
  line-height: 34px;
  font-weight: 300;
}

.title {
  font-weight: bold;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 37px;
}

.content {
  font-size: 16px;
  line-height: 20px;
  color: $black;
  font-weight: 500;
}

.tab {
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: $black;
}

// mobile screen
@media screen and (max-width: 740px) {
  .wrap {
    padding-bottom: 13px;
    padding-left: 9px;
    padding-right: 15px;
    margin-right: 0;
  }

  .content {
    font-size: 12px;
    line-height: 12px;
    padding: 23px 0px 0px 20px;
  }

  .cast-text,
  .text {
    font-size: 14px !important;
    line-height: 24px !important;
  }

  .title {
    font-size: 24px !important;
    line-height: 32px !important;
  }

  .title {
    margin-bottom: 45px;
  }

  .q-tabs {
    margin-left: 11px;
  }
}

// tablet screen
@media screen and (min-width: 740px) and (max-width: 1024px) {
  .content {
    font-size: 12px;
    line-height: 15px;
    padding: 10px 18px 0px 19px;
  }
}
</style>