
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 14 8" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path d="M1 1L7 7L13 1" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconChevronDown",
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
