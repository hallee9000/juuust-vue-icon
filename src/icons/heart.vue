
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 22" aria-hidden="true" v-on="$listeners" fill="none"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.84 3.60999C19.8085 2.57799 18.4091 1.99817 16.95 1.99817C15.4909 1.99817 14.0915 2.57799 13.06 3.60999L12 4.66999L10.94 3.60999C8.79161 1.46161 5.30838 1.46161 3.16 3.60999C1.01161 5.75838 1.01161 9.24161 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.872 10.3585 22.4518 8.95913 22.4518 7.49999C22.4518 6.04086 21.872 4.64152 20.84 3.60999Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconAgent",
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
