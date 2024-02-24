<script lang='ts'>
  export let id: string | undefined
  export let classes: Array<string> | undefined
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 2em;
    font-size: .9em;
  }
</style>

<div id={id ?? ''} class={(classes ?? []).concat('body-section').join(' ')}>
  <slot />
</div>
