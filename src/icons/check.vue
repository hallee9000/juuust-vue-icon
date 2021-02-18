
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 18 13" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path d="M17 1L6 12L1 7" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconCheck",
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
