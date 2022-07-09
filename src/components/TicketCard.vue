<template>
  <v-card class="mx-auto my-12"
          max-width="374">
    <template v-slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate/>
    </template>

    <v-img height="250"
           :src="flight.city_image"/>

    <v-card-title>{{ flight.city_name }}</v-card-title>

    <v-card-text>
      <v-row align="center"
             class="mx-0">
        <v-rating color="amber"
                  :value="4.5"
                  dense
                  half-increments
                  readonly
                  size="14"/>

        <div class="grey--text ms-4">
          {{ flight.city_rank }} ({{ randomRank }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • {{ flight.price }}
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
    </v-card-text>

    <v-divider class="mx-4"/>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2"
             text
             @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TicketCard',

  props: {
    flight: {},
  },

  data: () => ({
    loading: false,
    selection: 1,
    success: false,
  }),

  computed: {
    randomRank: function () {
      return Math.floor(Math.random() * 1500)
    },
  },

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => {
        this.loading = false

        this.success = true
      }, 2000)
    },
  },
}
</script>
