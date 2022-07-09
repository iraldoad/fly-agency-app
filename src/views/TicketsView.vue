<template>
  <div>
    <ticket-card v-for="f in flights" :flight="f"/>
  </div>
</template>

<script>
import TicketCard from '@/components/TicketCard'

export default {
  name: 'Tickets',
  components: { TicketCard },

  data: () => ({
    flights: [],
    searchParams: '',
  }),

  mounted () {
    this.searchParams = this.$store.state.searchParams
    this.flights = this.$store.state.flights

    this.flights.length

    if (this.flights.length === 0)
      this.$router.push('search')
  },
}
</script>
