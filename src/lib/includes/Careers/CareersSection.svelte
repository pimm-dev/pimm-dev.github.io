<script lang='ts'>
  import List from '$lib/components/List/List.svelte'
  export let title: string = ''
</script>

<style lang='scss'>
  .careers-section {
    margin: .2em 0;
  }
</style>

<div class="careers-section">
  <h3>{ title }</h3>
  <List>
    <slot />
  </List>
</div>
