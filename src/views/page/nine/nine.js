export default {
  props: {
    numbner: {
      type: Number
    }
  },
  render (h) {
    const tag = 'h' + this.numbner
    return <tag style={{ color: 'red' }}>{this.$slots.default}</tag>
  }
}
