<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>
  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import navBar from 'components/common/navbar/navBar'
  import scroll from 'components/common/scroll/scroll'
  import homeSwiper from './childComps/homeSwiper'
  import homeRecommend from './childComps/homeRecommend'
  import tabControl from 'components/content/tabControl'
  import goodList from 'components/content/goods/goodList'


  export default {
    name: "home",
    components: {
      navBar,
      scroll,
      homeSwiper,
      homeRecommend,
      tabControl,
      goodList
    },

    data() {
      return {
        banners: [
          {link: "https://pages.tmall.com/wow/a/act/tmall/tmc/25316/wupr?spm=a21bo.2017.201862-1.d1.5af911d9jm5DP1&amp;pos=1&amp;wh_pid=industry-184397&amp;acm=20140506001.1003.8.7422847&amp;scm=1003.8.20140506001.OTHER_1583911614991_7422847", image: "//img.alicdn.com/tfs/TB1dcjQwebviK0jSZFNXXaApXXa-520-280.jpg_q90_.webp"},
          {link: "https://pages.tmall.com/wow/a/act/tmall/tmc/25786/wupr?spm=a21bo.2017.201862-5.d1.5af911d9jm5DP1&amp;pos=1&amp;wx_navbar_hidden=true&amp;wh_pid=main-186615&amp;disableNav=YES&amp;acm=20140506002.1003.2.7516443&amp;scm=1003.2.20140506002.OTHER_1583711556800_7516443", image: "//img.alicdn.com/tfs/TB1actTy.Y1gK0jSZFMXXaWcVXa-520-280.jpg_q90_.webp"},
          {link: "https://click.mz.simba.taobao.com/ecpm?e=G0xZw8R1guVHp1phml%2FgwukEgPc%2FvVVFpKZl54tBY0NqXMdhu6WdQls%2F9aUO4fuulXkpv7i%2BCL1b21XY8p3njAYpA4Y98xrwtbR9sxq9q4hbP149m5qBPJPRH1ggI8FUUzYkd7Z85oCF1m9e399j5NfuL2LdHntGfix%2FKudUUVE3f%2Fi6RQWDQVE%2BwWYBVLvheG7X2UMQaricosAW3hvDaMazG68%2BAFnE6kyoPlI8kS6PJSqLFl2xrG05KTmcL3Ja3vq1aD8iFB0onlBPU45tz8oTJsevU1AGKFhbmYPb2v3pq01orEoT9sBbNM5tNagihEFES10LxHMArsN1%2FUTzXeJJPF2oez0T%2BmNPpKtf65EI9M7eNqv10YkQTZg7iKVgjGYDtk5xViPBKlbHanoRgnXbVxr%2BBxTPVXI7wP0PNDkRF3BnaTpqXywj9ZCH6FUHCsoNgpIMpGo%3D&amp;u=https%3A%2F%2Fre.taobao.com%2Faction_ecpm_home&amp;k=461", image: "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg"}
        ],

        recommend: [
          {title: "母婴用品", image: "//img.alicdn.com/tps/i4/TB1i.oseQ9E3KVjSZFGwu319XXa.png_300x300Q90s50.jpg_.webp"},
          {title: "休闲零食", image: "//img.alicdn.com/tps/i4/TB10K5beEGF3KVjSZFvwu2_nXXa.png_300x300Q90s50.jpg_.webp"},
          {title: "美容护肤", image: "//img.alicdn.com/tps/i4/TB1r.4zlQT2gK0jSZFkwu3IQFXa.png_300x300Q90s50.jpg_.webp"},
          {title: "方便速食", image: "//img.alicdn.com/tps/i4/TB1Uw6ckfb2gK0jSZK9wu1EgFXa.png_300x300Q90s50.jpg_.webp"},
          {title: "粮油米面", image: "//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_300x300Q90s50.jpg_.webp"},
          {title: "个人护理", image: "//img.alicdn.com/tps/i4/TB1NP.teL1G3KVjSZFkwu1K4XXa.png_300x300Q90s50.jpg_.webp"},
          {title: "电气数码", image: "//img.alicdn.com/tps/i4/TB1leWXevWG3KVjSZFPwu0aiXXa.png_300x300Q90s50.jpg_.webp"},
          {title: "宠物生活", image: "//img.alicdn.com/tps/i4/TB1WrhIdfb2gK0jSZK9wu1EgFXa.png_300x300Q90s50.jpg_.webp"}
        ],

        goods: {
          'pop': {page: 0, list: [{img: "//g-search3.alicdn.com/img/bao/uploaded/i4/i5/TB1wuBGRpXXXXceXVXXYXGcGpXX_M2.SS2_180x180.jpg_.webp",
              title: "日系洛丽塔夏季女萝莉可爱lolita袜子蕾丝白色丝袜超薄打底连裤袜", price: 9.90, payNumber: 190}, {img: "//img.alicdn.com/bao/uploaded/i1/830504935/TB2pXLuXg7pLuJjSZPiXXbP3VXa_!!830504935.jpg_200x200q90.jpg_.webp",
              title: "Macchagirl《喜欢你》珍珠系列蕾丝轻礼服丝绒复古森系连衣裙2020", price: 269, payNumber: 41}, {img: "//img.alicdn.com/bao/uploaded/i2/1893596983/TB1w0guSFXXXXbfapXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
              title: "两人故事原创设计民族风连衣裙秋装女红色印花旗袍裙旅游QZ0041", price: 214.2, payNumber: 4}, {img:
                  "//img.alicdn.com/bao/uploaded/i1/TB1ucV1QXXXXXXEaXXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp",
              title: "大码吊带内衣女高中学生少女抹胸女打底胖mm200斤内搭美背裹胸薄", price: 29.6, payNumber: 10}]},
          'new': {page: 0, list: [{img: "//img.alicdn.com/bao/uploaded/i1/906719374/TB2EIxmkb5YBuNjSspoXXbeNFXa_!!906719374.jpg_200x200q90.jpg_.webp",
              title: "LEIYU吊带背心女外穿潮短款露脐黑色性感露背内搭紧身欧美上衣夏", price: 58, payNumber: 594}, {img:
                  "//img.alicdn.com/bao/uploaded/i4/2433798346/TB29xZxbJ3nyKJjSZFEXXXTTFXa_!!2433798346.jpg_200x200q90.jpg_.webp",
              title: "2019夏季新款韩版露肩雪纺T恤女微胖连衣裙收腰荷叶边中长款裙子", price: 55.55, payNumber: 40}]},
          'selection': {page: 0, list: [{img: "//img.alicdn.com/bao/uploaded/i1/823657541/TB246PElQKWBuNjy1zjXXcOypXa_!!823657541.jpg_200x200q90.jpg_.webp",
              title: "2020夏季新款收腰小清新仙女裙气质网纱法国小众少女连衣裙夏裙子", price: 145, payNumber: 35}, {img:
                  "//img.alicdn.com/bao/uploaded/i3/1015785338/TB2BppVlFuWBuNjSspnXXX1NVXa_!!1015785338.jpg_200x200q90.jpg_.webp",
              title: "韩版甜美仙女裙2020夏季气质两穿短袖露肩背心裙连衣裙A字连衣裙", price: 49.69, payNumber: 31}]}
        },

        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('selection');
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then (res => {
          // this.banners = res.data.banner.list;
          // this.recommend = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page=this.goods[type].page + 1;
        getHomeGoods(type, page).then (res =>{
          // this.goods[type].list.push(...res.data.list)
          // this.goods[type].page += 1;
        })
      },

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'selection';
            break;
        }
      }
    }

  }
</script>

<style scoped>
  #home {
    height: calc(var(--vh) * 100);
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #FFF;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    z-index: 9;
  }

  .content {
    overflow: hidden;
    height: calc(100% - 49px);
  }
</style>