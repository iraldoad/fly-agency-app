<template>
  <div>
    <v-text-field label="Date range"
                  readonly
                  v-model="dateRangeText"/>

    <v-date-picker v-model="dates"
                   :min="current"
                   :events="handleEvents"
                   range
                   full-width/>
  </div>
</template>

<script>
export default {
  name: 'DateRange',

  props: {
    initFrom: String,
    initTo: String,
  },

  data: () => ({
    dates: [
      new Date().toISOString().slice(0, 10),
      '',
    ],
  }),

  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
    current () {
      return new Date().toISOString().slice(0, 10)
    },
  },

  created: function () {
    if (this.initFrom?.length > 0)
      this.dates[0] = this.initFrom

    if (this.initTo?.length > 0)
      this.dates[1] = this.initTo
  },

  methods: {
    handleEvents () {
      const [from, to] = this.dates

      if (!from || !to || from > to)
        return

      this.$emit('onPickDate', { dates: { from, to } })
    },
  },
}
</script>

<style scoped>

</style>
