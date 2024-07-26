<template>
  <div class="relative">
    <input
      v-model="localQuery"
      @input="handleInput"
      :class="['bg-gray-100 w-full p-4 rounded-lg pl-10 focus:outline-none focus:ring-2 text-[20px]', error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#6833FF]']"
      placeholder="Search technologies we use at DC..."
    />

    <svg class="absolute left-[0.6rem] top-[1.3rem] " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M16.9816 9.61047C16.9816 13.1526 13.9625 16.2209 9.9908 16.2209C6.01908 16.2209 3 13.1526 3 9.61047C3 6.06828 6.01908 3 9.9908 3C13.9625 3 16.9816 6.06828 16.9816 9.61047ZM15.3467 17.7247C13.7988 18.6721 11.9614 19.2209 9.9908 19.2209C4.47303 19.2209 0 14.9182 0 9.61047C0 4.30275 4.47303 0 9.9908 0C15.5086 0 19.9816 4.30275 19.9816 9.61047C19.9816 11.9596 19.1054 14.1118 17.6503 15.7813L24.0019 21.9159L21.8441 24L15.3467 17.7247Z" fill="black"/>
    </svg>
  </div>
</template>

<script>
export default {
  computed: {
    localQuery: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit('SET_QUERY', value);
      }
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    handleInput() {
      this.$store.dispatch('search', this.localQuery);
    }
  }
};
</script>

<style scoped>
/* Scoped styles if any */
</style>
