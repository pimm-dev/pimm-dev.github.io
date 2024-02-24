<style lang='scss'>
  div.hero__logo {
    margin: 0;
    * {
      vertical-align: middle;
      font-family: var(--sans);
      background-color: var(--primary);
      color: var(--primary-bg);
    }
    h1 {
      margin: 0;
      margin-bottom: .5rem;
      font-size: 3em;
      span { background-color: rgba(0, 0, 0, 0); }
      padding: .5rem;
      padding-right: 1rem;
    }
    sub {
      font-weight: bold;
      font-size: 1em;
      padding: .5rem;
      padding-right: 1rem;
    }
    p {
      display: inline-block;
      padding: .2rem .5rem;
      font-size: .8em;
      &.links {
        margin-top: 3em;
      }
    }
    @include tiny {
      h1 {
        font-size: 2em;
      }
      sub {
        font-size: 1em;
      }
    }
  }
</style>

<div class="hero__logo">
  <h1>
    <span style="font-weight: bolder">핌;</span>
    <span style="font-weight: bold; font-size: .9em;">PIMM</span>
  </h1>
  <sub>전남대학교 게임개발동아리</sub>
  <br />
  <p class="links">
    <a href="https://github.com/pimm-dev" target="_blank">github</a>
    &nbsp;·&nbsp;
    <a href="https://www.instagram.com/pimm.jnu/" target="_blank">instagram</a>
  </p>
</div>
