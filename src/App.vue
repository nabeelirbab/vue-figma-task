<template>
  <div class="min-h-screen bg-gray-200 flex items-center justify-center ">
    <div class="w-full max-w-xl bg-white rounded-[20px] shadow-lg">
      <div class=" p-4">
      <SearchBar />
      <div class="mt-4 flex flex-wrap gap-2">
        <SearchTag
            v-for="tag in tags"
            :key="tag"
            :name="tag"
            :isActive="isActiveTag(tag)"
            @tag-clicked="handleTagClicked"
          />
      </div>
      <div class="mt-4 w-full max-w-2xl">
        <SearchLoader v-if="loader" />
      <div v-else-if="results.length === 0 && query !== '' && !error" class="flex flex-col items-center justify-center h-[20rem]">
        <img src="@/assets/image.png" alt="No Results" />
      </div>
      <div v-else-if="error" class="flex flex-col items-center justify-center h-[20rem]">
        <img src="@/assets/error.png" alt="error" />
      </div>
      <div v-else class="mt-4 h-[20rem] overflow-auto">
        <ResultItem v-for="item in results" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
    <div class="mt-4 p-4 border-t border-[#F2F4F8]">
      <p v-if="loader" class="text-[#999FAA] text-[16px]">Searching ...</p>

      <div  v-if="!loader && query !== ''">
        <p v-if="error" class="text-red-500 text-[16px]">{{ error }}</p>
        <p v-else-if="results.length === 0" class="text-[#999FAA] text-[16px]">No results</p>
        <p v-else class="text-[#999FAA] text-[16px]" >{{ results.length }} results</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import SearchTag from './components/SearchTag.vue';
import ResultItem from './components/ResultItem.vue';
import SearchLoader from './components/SearchLoader.vue';

export default {
  components: {
    SearchBar,
    SearchTag,
    ResultItem,
    SearchLoader
  },
  computed: {
    loader() {
      return this.$store.state.loading;
    },
    tags() {
      return this.$store.state.tags;
    },
    results() {
      return this.$store.state.results;
    },
  
    error() {
      return this.$store.state.error;
    },
    activeTags() {
      return this.$store.state.query;
    },
  },
  
  methods: {
    isActiveTag(tag) {
      console.log(this.activeTags === tag);
      return this.activeTags === tag;
    },
    handleTagClicked(tagName) {
      if (this.activeTags === tagName) {
        // Clicked on the active tag, no action needed (optional)
        return;
      }
      // Update query in store
      this.$store.commit('SET_QUERY', tagName);
      // Trigger search action
      this.$store.dispatch('search', tagName);
    }
  }
};
</script>
