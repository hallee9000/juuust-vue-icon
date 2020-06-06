
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :stroke="color" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path d="M12 21l10.5-9.5a.84.84 0 00.35-.94L18 4H6l-4.8 6.56a.84.84 0 00.3.94L12 21z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Sketch",
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
