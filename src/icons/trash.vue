
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20 22" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path d="M1 5H3M3 5H19M3 5V19C3 20.1046 3.89543 21 5 21H15C16.1046 21 17 20.1046 17 19V5M6 5V3C6 1.89543 6.89543 1 8 1H12C13.1046 1 14 1.89543 14 3V5M8 10V16M12 10V16" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconTrash",
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
