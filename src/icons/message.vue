
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20 20" aria-hidden="true" v-on="$listeners" fill="none"
    >
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 9.5C19.0034 10.8199 18.6951 12.1219 18.1 13.3C16.661 16.1793 13.7189 17.9988 10.5 18C9.18013 18.0034 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.5C2.00125 6.28109 3.82067 3.33904 6.7 1.9C7.87812 1.30493 9.18013 0.996557 10.5 0.999998H11C15.3158 1.2381 18.7619 4.68419 19 9V9.5V9.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconMessage",
      props: {
        size: {
          type: Number,
          default: 20
        }
      }
    };
  </script>
