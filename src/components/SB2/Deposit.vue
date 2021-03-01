<template>
  <div>
    <div class="deposit q-ml-lg q-gutter-sm">
      <div class="">
        <p class="campaign">Bien Hoa Universe Complex</p>
        <p class="q-mt-md description">
          Bien Hoa Universe Complex tọa lạc ngay “trái tim” Biên Hòa - một trong
          những thành phố có tốc độ phát triển nhanh nhất, nơi cư dân dễ dàng
          thừa hưởng trọn vẹn nhịp sống sôi động của trung tâm sầm uất bậc nhất
          Đồng Nai. Đồng thời, dự án còn sở hữu vị trí đắt giá khi là tâm điểm
          kết nối các trục giao thông huyết mạch giữ vai trò quan trọng trong
          liên kết vùng Trung Bộ, Tây Nguyên với vùng kinh tế trọng điểm phía
          Nam. Đáp ứng đa dạng nhu cầu của cư dân, Bien Hoa Universe Complex
          cũng chính là nơi kết nối hoàn hảo với hệ thống tiện ích hiện hữu của
          một khu trung tâm kinh tế, chính trị, văn hóa, xã hội của tỉnh… chỉ
          trong tích tắc.
        </p>
      </div>


      <template>
        <div class="progress">
          <Progress
            color="purple"
            :currentValue="currentCap"
            :totalValue="totalValue"
            :percent="currentCap / totalValue"
            :timeout="'60 ngày'"
            :backers="backers"
          />
        </div>

      </template>
    </div>
  </div>
</template>

<script>
import Progress from "../Progress";
import mixins from "../../helper/mixin";

export default {
  mixins: [mixins],
  components: {
    Progress,
  },
  data() {
    return {
      currentCap: 690000000,
      totalValue: 2300000000,
      backers: 24,
    };
  },

  methods: {
    notify(msg, type = "positive") {
      this.$q.notify({
        message: msg,
        position: "top-right",
        color: type,
        timeout: 2200,
        textColor: "white",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.noti {
  color: #000000;
}
.days,
.hours,
.minutes {
  position: relative;
}

.days::after,
.hours::after,
.minutes::after {
  position: absolute;
  content: ":";
  right: -13px;
  font-size: 34px;
}

.titleClock {
  font-weight: bold;
  font-size: 36px;
  color: black;
}

.sub-title {
  color: gray;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 9px;
}

// end counter

.balance {
  width: 100%;
  height: 145px;
  padding: 18px 0px 17px 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
}

.yourKai {
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #000000;
}

.deposit {
  border-top: 7px solid #000000;
  margin-top: 0;
}

.locked {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}

a {
  text-decoration: none;
}
.card {
  height: 498px;
}

.progress {
  margin-top: 54px;
}

._progress {
  margin-top: 29px;
}

.card__amount {
  margin-top: 26px;
}

.campaign {
  font-style: normal;
  font-weight: bold;
  font-size: 37px;
  line-height: 45px;
  color: #000000;
}

.description {
  margin-top: 6px;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}

.company {
  margin-top: 14px;
}

.company__logo {
  width: 55px;
  height: 55px;
}

.company__name {
  font-weight: bold;
  font-size: 14px;
  line-height: 25px;
  color: $black;
}

.company__address {
  font-size: 12px;
  line-height: 21px;
  color: #000000;
}

.company__infor {
  margin-left: 21px;
  flex: 1;
}

.step1-btn,
.step1-btn-claim {
  border-radius: 5px;
  width: 100%;
  height: 55px;
}

.step1-btn {
  background: $purple;
}

.step1-btn-claim {
  background: linear-gradient(191.79deg, #571ee7 16.34%, #7b29ff 92.24%);
  color: white;
}

.step1 {
  width: 100%;
  // margin-top: 29px;
}

.step1-text {
  color: #eeeeee;
  font-weight: bold;
  font-size: 26px;
  line-height: 22px;
  padding: 10px 0px;
}

.step1-text-claim {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}

.btn-submit {
  background: $red;
  border-radius: 5px;
  width: 100%;
  height: 45px;
}

.text-submit {
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
}

.amount {
  width: calc(60% - 5px);
  margin-right: 5px;
}

.card__submit {
  width: calc(40% - 5px);
  margin-left: 5px;
}

.amount__input {
  flex: 1;
}
// end pc

// mobile screen
@media screen and (max-width: 740px) {
  .rank-list > li {
    margin: 0;
  }
  .tem-img {
    width: 125px !important;
    height: 47px !important;
  }
  .time-lock {
    font-size: 9px;
    line-height: 14px;
  }
  .card__infor {
    padding: 10px 29px 0px 9px;
  }

  .deposit {
    padding: 0px 16px 0px 16px;
    margin: 0;
    border: none;
  }

  .campaign {
    font-size: 25px;
    line-height: 30px;
  }

  .card__amount {
    margin-top: 0px;
  }

  .step1-text {
    font-size: 16px;
    line-height: 8px;
  }

  .description {
    margin-top: 6px;
    font-size: 12px;
    line-height: 16px;
  }

  .company__logo {
    width: 40px;
    height: 40px;
  }

  .step1-btn {
    height: 35px;
  }
}

.q-field--dense {
  height: 34px !important;
}

// end mobile

// tablet screen
@media screen and (min-width: 740px) and (max-width: 1024px) {
  .step1 {
    display: none;
  }
  .card {
    height: 242px;
  }

  .campaign {
    font-size: 20px;
    line-height: 24px;
  }

  .description {
    font-size: 12px;
    line-height: 15px;
    margin-top: 12px;
  }

  .card__infor {
    padding: 9px 7px 0px 16px;
  }

  .company {
    margin-top: 29px;
  }

  .company__name {
    font-size: 12px;
    line-height: 12px;
  }

  .company__logo {
    width: 36px;
    height: 36px;
  }

  .company__infor {
    margin-left: 10px;
  }

  .company__address {
    font-size: 12px;
    line-height: 12px;
  }

  .text-submit {
    font-size: 15px;
    line-height: 18px;
  }

  .progress {
    margin-top: 0px;
  }

  .btn-submit {
    height: 27px;
  }

  .q-btn__wrapper {
    min-height: 0;
  }

  .card__amount {
    margin-top: 46px;
    position: absolute;
    bottom: 7px;
    left: 2%;
  }

  .btn-submit {
    height: 34px;
  }
  // end tablet
}

// ipad pro
@media screen and (width: 1024px) {
  .step1 {
    display: block;
  }
  .card {
    height: 311px;
  }

  .progress {
    margin-top: 20px;
  }
}
</style>