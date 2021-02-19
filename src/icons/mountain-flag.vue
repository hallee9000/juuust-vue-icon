
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 22 24" aria-hidden="true" v-on="$listeners" fill="none"
    >
      <path d="M10 4.60234L10 8M10 1H17L14.5938 2.94444L17 4.92982H10V1Z" class="mountain-flag" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.97767 12.5614L8.28218 13.614L9.58669 12.5614L10.8912 13.614L12.1957 12.5614M9.34688 23H22L15.6734 12.2105L13.8038 15.3684M9.58604 8L18.1721 23H1L9.58604 8Z" class="mountain" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
  </template>
  <script>
    export default {
      name: "IconMountainFlag",
      props: {
        size: {
          type: Number,
          default: 20
        }
      }
    };
  </script>
