
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 22 24" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path d="M1.32001 6.15997L11 11M11 11L20.68 6.15997M11 11L11 22.76M11.89 1.45003L19.89 5.45003C20.5696 5.78776 20.9996 6.48108 21 7.24003V16.77C20.9996 17.529 20.5696 18.2223 19.89 18.56L11.89 22.56C11.3266 22.8419 10.6634 22.8419 10.1 22.56L2.09999 18.56C1.42098 18.2179 0.994696 17.5203 0.999988 16.76V7.24003C1.00039 6.48108 1.43033 5.78776 2.10999 5.45003L10.11 1.45003C10.6706 1.17144 11.3294 1.17144 11.89 1.45003Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconBox",
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
