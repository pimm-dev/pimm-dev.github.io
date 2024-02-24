<script>
  import HeroLogo from './HeroLogo.svelte'
</script>

<style lang='scss'>
  header {
    position: relative;
    width: 100%;
    height: 100vh;
    background: center / cover no-repeat url("/images/hero.png");
    user-select: none;
  }
  #logo {
    position: absolute;
    top: 25%;
    left: 15%;
    @include tiny {
      & {
        left: 0;
      }
    }
  }
</style>

<header>
  <div id="logo">
    <HeroLogo />
  </div>
</header>
