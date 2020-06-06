
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16 9a1 1 0 100 2 1 1 0 000-2z"></path><path fillRule="evenodd" clipRule="evenodd" d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm2 5a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h12a1 1 0 100-2H6zm7-5a3 3 0 116 0 3 3 0 01-6 0z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "NewsFill",
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
