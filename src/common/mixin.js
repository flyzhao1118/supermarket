import backtop from 'components/content/backtop'

export const backtopMixin = {
  components: {
    backtop
  },
  data() {
    return {
      isShowBacktop: false
    }
  },

  methods: {
    backtop() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
  }
}