<template>
  <div>
    <div class="top row justify-between">
      <p class="money text-bold" :class="{ fs16: progressSmall }">
        {{ currentValue ? formatNumber(currentValue) : "0" }} VNDT
      </p>
      <p class="money text-bold" :class="{ fs16: progressSmall }">
        {{ backers ? backers + " người đầu tư" : "" }}
      </p>
    </div>
    <q-linear-progress
      :size="size ? size : '25px'"
      class="progress"
      :value="currentValue / totalValue"
      :color="color"
      :class="{ sizeProgress: progressSmall }"
    ></q-linear-progress>
    <div class="bottom row justify-between">
      <p class="money" :class="{ fs16: progressSmall }">
        {{
          currentValue
            ? ((currentValue / totalValue) * 100).toFixed(2) + "%"
            : "0"
        }}
        of {{ totalValue ? `${formatNumber(totalValue)} VNDT` : "VNDT" }}
      </p>
      <p class="time">{{ timeout ? `${timeout}` : "" }}</p>
    </div>
  </div>
</template>

<script>
import mixins from "../helper/mixin";

export default {
  props: [
    "color",
    "currentValue",
    "backers",
    "totalValue",
    "percent",
    "timeout",
    "size",
    "progressSmall",
  ],
  mixins: [mixins],
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.fs16 {
  font-size: 16px !important;
}
.progress {
  margin: 0px 0px;
}

.sizeProgress {
  font-size: 13px;
}

.money,
.time {
  color: #464646;
  font-size: 21px;
  line-height: 33px;
}

.time {
  color: #00be2a;
}

@media screen and (max-width: 1024px) {
  .money,
  .time {
    font-size: 12px;
  }

  .progress {
    margin: 0px;
    font-size: 24px;
  }

  .sizeProgress {
    margin: 0px;
    font-size: 13px !important;
  }
}
</style>