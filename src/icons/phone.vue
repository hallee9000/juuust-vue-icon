
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 22 22" aria-hidden="true" v-on="$listeners" fill="none"
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 15.92V18.92C21.0023 19.4831 20.767 20.0212 20.3521 20.4019C19.9371 20.7826 19.3809 20.9707 18.82 20.92C15.7428 20.5856 12.787 19.5341 10.19 17.85C7.77383 16.3147 5.72534 14.2662 4.19 11.85C2.49998 9.2412 1.44824 6.27099 1.12 3.18C1.06947 2.62087 1.25627 2.06625 1.63477 1.65162C2.01326 1.23699 2.5486 1.00053 3.11 0.999999H6.11C7.11387 0.990119 7.9695 1.72597 8.11 2.72C8.23662 3.68007 8.47145 4.62273 8.81 5.53C9.08474 6.26087 8.90902 7.08481 8.36 7.64L7.09 8.91C8.51356 11.4135 10.5865 13.4864 13.09 14.91L14.36 13.64C14.9152 13.091 15.7391 12.9153 16.47 13.19C17.3773 13.5286 18.3199 13.7634 19.28 13.89C20.2856 14.0319 21.0252 14.9048 21 15.92Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </template>
  <script>
    export default {
      name: "IconPhone",
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
