<script lang='ts'>
  import Margin from '$lib/components/Spacing/Margin.svelte'
  export let length: number = 5
  export let height: number | undefined = 2
  const ALT__FLOWER_ICON: string = 'flower icon asset used in hr'
</script>

<style lang='scss'>
  p.hr {
    margin: .4em 0;
    user-select: none;
    display: flex;
    gap: .3em;
    text-align: center;
    justify-content: center;
    align-items: center;
    img {
      width: .7em;
      height: 100%;
    }
    @include desktop {
      & {
        padding: 1.4em 0;
      }
      img {
        width: 1em;
      }
    }
  }
</style>

<Margin height={height} />
<p class="hr">
  {#each [...Array(length).keys()] as i}
    <img
      src="/icons/flower.svg"
      style='rotate: { Math.floor(Math.random() * 360) + (360 / length) * (i + 1) }deg;'
      alt={ ALT__FLOWER_ICON }
    />
  {/each}
</p>
<Margin height={height} />
