
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20 22" aria-hidden="true" v-on="$listeners" fill="none"
    >
<path d="M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10M1 10H4C5.10457 10 6 10.8954 6 12V14C6 15.1046 5.10457 16 4 16H3C1.89543 16 1 15.1046 1 14V10ZM19 10H16C14.8954 10 14 10.8954 14 12V14C14 15.1046 14.8954 16 16 16H17C18.1046 16 19 15.1046 19 14V10ZM19 10V17C19 19.2091 17.2091 21 15 21H10" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconHeadset",
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
