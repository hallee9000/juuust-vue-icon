
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20 22" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path d="M8 2.1547C9.2376 1.44017 10.7624 1.44017 12 2.1547L16.6603 4.8453C17.8979 5.55983 18.6603 6.88034 18.6603 8.3094V13.6906C18.6603 15.1197 17.8979 16.4402 16.6603 17.1547L12 19.8453C10.7624 20.5598 9.2376 20.5598 8 19.8453L3.33975 17.1547C2.10214 16.4402 1.33975 15.1197 1.33975 13.6906V8.3094C1.33975 6.88034 2.10214 5.55983 3.33975 4.8453L8 2.1547Z" :stroke="color" stroke-width="2"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconHexagon",
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
