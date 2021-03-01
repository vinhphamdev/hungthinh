<template>
  <div>
    <div class="row q-col-gutter-x-sm q-col-gutter-y-sm q-mb-md">
      <div class="col-xs-12 col-md-6">
        <q-img src="~assets/tienich1.png" />
      </div>
      <div class="col-xs-12 col-md-6">
        <q-img src="~assets/tienich2.png" />
      </div>
      <div class="col-xs-12 col-md-6">
        <q-img src="~assets/tienich3.png" />
      </div>
      <div class="col-xs-12 col-md-6">
        <q-img src="~assets/tienich4.png" />
      </div>
    </div>

    <div class="row justify-center">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Thông tin chi tiết</div>

          <ul v-for="it in arr" :key="it.id" class="list">
            <li class="row justify-between">
              <p>{{ it.title }}</p>
              <p>{{ it.description }}</p>
            </li>
          </ul>
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>

    <p class="text q-mt-md nunito" style="font-weight: 300">
      Bien Hoa Universe Complex tọa lạc ngay “trái tim” Biên Hòa - một trong
      những thành phố có tốc độ phát triển nhanh nhất, nơi cư dân dễ dàng thừa
      hưởng trọn vẹn nhịp sống sôi động của trung tâm sầm uất bậc nhất Đồng Nai.
      Đồng thời, dự án còn sở hữu vị trí đắt giá khi là tâm điểm kết nối các
      trục giao thông huyết mạch giữ vai trò quan trọng trong liên kết vùng
      Trung Bộ, Tây Nguyên với vùng kinh tế trọng điểm phía Nam. Đáp ứng đa dạng
      nhu cầu của cư dân, Bien Hoa Universe Complex cũng chính là nơi kết nối
      hoàn hảo với hệ thống tiện ích hiện hữu của một khu trung tâm kinh tế,
      chính trị, văn hóa, xã hội của tỉnh… chỉ trong tích tắc.
    </p>

    <q-img src="ht5.gif" />
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
          title: "Mã căn",
          description: "C.19.09",
          id: 1,
        },
        {
          title: "Dự án",
          description: "BHU",
          id: 2,
        },
        {
          title: "Hướng cửa",
          description: "ĐB",
          id: 3,
        },
        {
          title: "View",
          description: "Hồ bơi",
          id: 4,
        },

        {
          title: "Tiến độ",
          description: "Đang cọc",
          id: 5,
        },
        {
          title: "Giá m2",
          description: "35.1tr / m2",
          id: 6,
        },
        {
          title: "Số phòng ngủ",
          description: "2",
          id: 7,
        },
        {
          title: "Số phòng tắm",
          description: "2",
          id: 8,
        },
        {
          title: "DT",
          description: "72.66 m2",
          id: 9,
        },

        {
          title: "DT sử dụng",
          description: "65.00 m2",
          id: 10,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding-left: 0;
}

.my-card {
  width: 550px;
}
</style>