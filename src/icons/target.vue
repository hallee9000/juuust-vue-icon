
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" fill="none"
    >
<path d="M4.13043 4.13043L5.17391 1L8.32939 4.15548M4.13043 4.13043L1 5.17391L4.15548 8.32939M4.13043 4.13043L8.56522 8.56522M13 13L8.56522 8.56522M8.56522 8.56522L9.34783 5.17391L8.32939 4.15548M8.56522 8.56522L5.17391 9.34783L4.15548 8.32939M8.32939 4.15548C9.72348 3.41776 11.313 3 13 3C18.5228 3 23 7.47715 23 13C23 18.5228 18.5228 23 13 23C7.47715 23 3 18.5228 3 13C3 11.313 3.41776 9.72348 4.15548 8.32939M13 19C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7C9.68629 7 7 9.68629 7 13C7 16.3137 9.68629 19 13 19ZM13 15C14.1046 15 15 14.1046 15 13C15 11.8954 14.1046 11 13 11C11.8954 11 11 11.8954 11 13C11 14.1046 11.8954 15 13 15Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconTarget",
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
