<style lang='scss'>
  ul {
    :global(li) {
      // padding: .5em 0;
      padding-left: 1.2em;
      list-style: none;
      background-image: url(/icons/flower.svg);
      background-position: left center;
      background-repeat: no-repeat;
      background-size: .7em;
      margin-bottom: .3em;
      /*
      &:not(:last-child) {
        border-bottom: 1px solid;
        margin: 0;
      }
      */
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

<ul>
  <slot />
</ul>
