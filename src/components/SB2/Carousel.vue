<template>
  <div class="wrapCarousel q-mr-lg q-gutter-sm">
    <q-carousel animated v-model="slide" infinite swipeable>
      <q-carousel-slide
        :name="video.name"
        v-for="(video, index) in media"
        :key="index"
      >
        <template v-if="video.type == 'video/youtube'">
          <q-video
            class="absolute-full"
            :src="convertToVideoEmbed(video.url)"
          />
        </template>

        <template v-else>
          <q-img :src="video.url" class="img" :ratio="16 / 9"></q-img>
        </template>
      </q-carousel-slide>
    </q-carousel>

    <div class="moreVideos row">
      <template v-for="(video, index) in media">
        <template v-if="video.type == 'images/jpg'">
          <q-img
            :key="index"
            :src="video.url"
            @click="slide = video.name"
            class="thumbnail q-mr-sm"
          />
        </template>

        <template v-else>
          <q-img
            :key="index"
            :src="getYoutubeThumbnail(video.url)"
            @click="slide = video.name"
            class="thumbnail q-mr-sm"
          />
        </template>
      </template>
    </div>

    <div class="options row justify-center">
      <q-option-group
        v-model="slide"
        :options="media"
        color="gray1"
        inline
        class="q-mb-sm"
        size="20px"
      />
    </div>
  </div>
</template>

<script>
import helper from "../../helper/mixin";
export default {
  mixins: [helper],
  data() {
    return {
      slide: "Trailer 1",
      media: [
        {
          name: "Trailer 1",
          value: "Trailer 1",
          type: "video/youtube",
          url: "https://www.youtube.com/watch?v=gh24p0yVdXE",
        },
        {
          name: "Trailer 2",
          value: "Trailer 2",
          type: "images/jpg",
          url: "ht1.jpg",
        },
        {
          name: "Trailer 3",
          value: "Trailer 3",
          type: "images/jpg",
          url: "ht2.jpg",
        },
        {
          name: "Trailer 4",
          value: "Trailer 4",
          type: "images/jpg",
          url: "ht3.jpg",
        },
        {
          name: "Trailer 5",
          value: "Trailer 5",
          type: "images/jpg",
          url: "ht4.jpg",
        },
        {
          name: "Trailer 6",
          value: "Trailer 6",
          type: "images/jpg",
          url: "ht5.gif",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.img {
  border-radius: 5px;
}
.thumbnail {
  width: 149.69px;
  height: 83.36px;
  flex: 0 0 auto;
}

.moreVideos {
  margin-top: 20px;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

.options {
  display: none;
}

.q-carousel {
  height: 0 auto;
}

.q-carousel__slide {
  padding: 0;
}

// mobile screen
@media screen and (max-width: 740px) {
  .wrapCarousel {
    margin-right: 0;
  }

  .img {
    border-radius: 0;
  }

  .options {
    display: flex;
  }

  .moreVideos {
    display: none;
  }

  .q-carousel {
    height: 211px;
    margin-left: 0;
  }
}

// tablet screen
@media screen and (min-width: 740px) and (max-width: 1024px) {
  .moreVideos {
    display: none;
  }

  .q-carousel {
    height: 232px;
  }

  .options {
    display: flex;
    margin-top: 0;
  }
}
// end tablet

//ipad pro
@media screen and (width: 1024px) {
  .moreVideos {
    display: none;
  }

  .q-carousel {
    height: 317px;
  }

  .options {
    display: flex;
    margin-top: 0;
  }
}
</style>