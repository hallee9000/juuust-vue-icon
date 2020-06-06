
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :stroke="color" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path d="M10 8H6"></path><path d="M10 12H6"></path><path d="M18 16H6"></path><path d="M14 10a2 2 0 104 0 2 2 0 00-4 0z"></path><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "News",
      props: {
        size: {
          type: Number,
          default: 16
        },
        color: {
          type: String,
          default: "currentColor"
        }
      }
    };
  </script>
