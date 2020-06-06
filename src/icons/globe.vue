
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :stroke="color" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path><path fillRule="evenodd" clipRule="evenodd" d="M1 12a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1z"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 12a14.3 14.3 0 003 8.45A14.3 14.3 0 0015 12a14.3 14.3 0 00-3-8.45A14.3 14.3 0 009 12zm3-10l-.738-.674A16.3 16.3 0 007 12.02a16.3 16.3 0 004.262 10.653 1 1 0 001.476 0A16.3 16.3 0 0017 11.98a16.3 16.3 0 00-4.262-10.653L12 2z"></path>
    </svg>
  </template>
  <script>
    export default {
      name: "Globe",
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
