<template>
  <div>
    <div class="row q-col-gutter-x-md q-mb-md">
      <template v-for="it in arr">
        <div class="col-md-3">
          <Card :title="it.title" :description="it.description" />
        </div>
      </template>
    </div>
    <p>Cơ cấu gói</p>
    <ul>
      <li>Mức đầu tư tối thiểu 10 triệu VNDT</li>
      <li>Lên đến 15% lợi nhuận trên phần góp vốn.</li>
    </ul>

    <p>Ưu đãi khi tham gia gói</p>
    <ul>
      <li>4% trên vốn góp lợi nhuận ngay khi gói bắt đầu</li>
      <li>6% khi thanh toán nhanh gói góp vốn</li>
      <li>Lời ngay 10% khi thanh toán 100%</li>
    </ul>
  </div>
</template>

<script>
import Card from "../common/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      arr: [
        {
          title: "Giá trị gói gọn",
          description: "2 tỷ 550tr",
        },
        {
          title: "Biên độ tăng",
          description: "10% / năm",
        },
        {
          title: "Thời hạn",
          description: "18 tháng",
        },
        {
          title: "Lợi nhuận",
          description: "15%",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// mobile screen
@media screen and (max-width: 740px) {
  .cast-text,
  .text {
    font-size: 14px !important;
    line-height: 24px !important;
  }
}
</style>