
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
    >
      <g clipPath="url(#clip0)"><path d="M12.652 21.382l10.865-9.945c.04-.036.083-.069.125-.102a.94.94 0 00.354-.83.651.651 0 00-.138-.316L18.905 3.41a1 1 0 00-.808-.41H5.86a1 1 0 00-.81.414l-4.911 6.79a.652.652 0 00-.128.28.95.95 0 00.367.898l10.924 10a1 1 0 001.35 0z"></path></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0V0z"></path></clipPath></defs>
    </svg>
  </template>
  <script>
    export default {
      name: "SketchFill",
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
