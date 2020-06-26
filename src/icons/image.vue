
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 8a.5.5 0 100 1 .5.5 0 000-1zM6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm0 2a1 1 0 00-1 1v14a1 1 0 00.65.937L15.292 9.293a1 1 0 011.414 0L20 12.586V5a1 1 0 00-1-1H5zm3.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM20 19a1 1 0 01-1 1H7.414L16 11.414l4 4V19zM8.5 8a.5.5 0 100 1 .5.5 0 000-1z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "IconImage",
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
