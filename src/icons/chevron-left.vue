
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 8 14" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path d="M7 13L1 7L7 1" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconChevronLeft",
      props: {
        size: {
          type: Number,
          default: 20
        },
        color: {
          type: String,
          default: "currentColor"
        }
      }
    };
  </script>
