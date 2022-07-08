<template>
  <v-card elevation="2"
          outlined
          shaped
          tile>
    <v-card-title>
      Search Tickets
    </v-card-title>

    <v-card-text cols="12">
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  v-model="originCity"
                  :counter="255"
                  :rules="cityRules"
                  label="Ciudad de origen"
                  max="255"
                  required/>
            </v-col>

            <v-col cols="12">
              <v-text-field
                  v-model="destinationCity"
                  :counter="255"
                  :rules="cityRules"
                  label="Ciudad de destino"
                  max="255"
                  required/>
            </v-col>

            <v-col cols="12">
              <date-range @onPickDate="handleDatePick"
                          :initFrom="dates?.from"
                          :initTo="dates?.to"/>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn block
             color="primary"
             elevation="2"
             @click="search">
        Search
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import DateRange from '@/components/DateRange'
import { flights } from '@/store/fakeData'
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  components: {
    DateRange,
  },

  data: () => ({
    originCity: '',
    destinationCity: '',
    dates: {},
    cityRules: [
      v => !!v || 'City is required',
      v => (v && v.length >= 3) || 'Name must be less than 3 characters',
    ],
  }),

  computed: {
    searchData: function () {
      const { originCity, destinationCity, dates } = this

      return {
        originCity, destinationCity, dates,
      }
    },
  },

  created: function () {
    const { originCity, destinationCity, dates } = this.$store.state.searchParams

    this.originCity = originCity
    this.destinationCity = destinationCity
    this.dates = dates
  },

  methods: {
    ...mapActions({
      storeFlights: 'setFlights',
      storeParams: 'setSearchParams',
    }),

    search () {
      if (!this.$refs.form.validate())
        return

      // save search data into storage
      this.storeParams(this.searchData)

      // get some results and save it into storage
      this.storeFlights(flights)

      // redirect
      this.$router.push('tickets')
    },

    handleDatePick (payload) {
      this.dates = { ...payload.dates }
    },
  },
}
</script>
