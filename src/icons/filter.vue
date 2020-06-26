
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.093 2.58A1 1 0 012 2h20a1 1 0 01.764 1.646L15 12.826V21a1 1 0 01-1.447.894l-4-2A1 1 0 019 19v-6.174l-7.764-9.18a1 1 0 01-.143-1.067zM4.155 4l6.609 7.814a1 1 0 01.236.646v5.922l2 1V12.46a1 1 0 01.236-.646L19.845 4H4.155z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "IconFilter",
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
