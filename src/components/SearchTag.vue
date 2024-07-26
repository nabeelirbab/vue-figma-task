<template>
  <span
   @click="handleTagClick"
   :class="['flex font-medium py-1 px-3 rounded-full text-sm cursor-pointer', isActive ? 'bg-[#6833FF] text-white' : 'bg-gray-100 text-[#6833FF]']">
   
    <svg class="mr-2" v-if="isActive" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z" stroke="white" stroke-width="1.5"/>
    <circle cx="8.83789" cy="8.47278" r="0.625" stroke="white" stroke-width="1.5"/>
    </svg>
     <svg class="mr-2" v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73512 16.8063L5.44219 12.5134C4.85013 11.9214 4.53244 11.1088 4.56591 10.2722L4.74848 5.70787C4.76932 5.18698 5.18682 4.76948 5.70771 4.74864L10.272 4.56607Z" stroke="#6833FF" stroke-width="1.5"/>
      <circle cx="8.83788" cy="8.47278" r="0.625" stroke="#6833FF" stroke-width="1.5"/>
    </svg>

    {{ name }}
  </span>
</template>

<script>
export default {
  props: {
    name: String,
    isActive: Boolean
  },
  methods: {
    handleTagClick() {
      this.$emit('tag-clicked', this.name);
    }
  }
};
</script>

<style scoped>
/* Scoped styles if any */
</style>
