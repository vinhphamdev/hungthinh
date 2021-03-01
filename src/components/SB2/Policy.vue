<template>
  <div class="wrapPolicy q-ml-lg q-gutter-sm">
    <q-timeline color="secondary">
      <q-timeline-entry heading>Tiến trình</q-timeline-entry>

      <q-timeline-entry
        title="Đã đề xuất"
        subtitle="12/10/2019"
        icon="done_all"
        side="left"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="Bắt đầu gọi vốn"
        subtitle="20/10/2019"
        side="left"
        icon="done_all"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="Giao dịch mua bán"
        subtitle="21/05/2020"
        side="left"
        icon="done_all"
      >
      </q-timeline-entry>

      <q-timeline-entry title="Khai thác" subtitle="12/06/2020" side="left">
      </q-timeline-entry>

      <q-timeline-entry title="Bắt đầu thanh lý" side="left">
      </q-timeline-entry>

      <q-timeline-entry title="Chốt lời" side="left"> </q-timeline-entry>

      <q-timeline-entry title="Chia lời" side="left"> </q-timeline-entry>

      <q-timeline-entry title="Kết thúc" side="left"> </q-timeline-entry>
    </q-timeline>
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
  // margin-top: 89px;
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