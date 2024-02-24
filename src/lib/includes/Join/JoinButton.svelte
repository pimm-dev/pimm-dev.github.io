<script lang='ts'>
  export let href: string | undefined
</script>

<style lang='scss'>
  a {
    position: relative;
    text-decoration: none;
    background: var(--primary);
    color: var(--primary-bg);
  }
  /*
  a::after {
    width: 100%;
    height: .2em;
    background-color: var(--primary);
    position: absolute;
    bottom: 0;
  }*/
</style>

<a href={href ?? '#'}>
  <slot />
</a>
