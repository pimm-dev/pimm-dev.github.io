<script lang='ts'>
  const ALT__FOOTER_LOGO: string = 'pimm logo used in footer'
</script>

<style lang='scss'>
  footer {
    background-color: var(--primary);
  }

  div.footer {
    display: flex;
    flex-direction: row;
    gap: 0.7em;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 2em .5em;
    max-width: 1000px;
    p {
      margin: 0;
      line-height: 1.6;
    }
  }

  div.logo {
    img {
      width: 4em;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5em;
  }

  p, a {
    color: white;
    font-family: var(--sans);
    &.sub {
      font-size: .7em;
    }
  }
</style>

<footer>
  <div class='footer'>
    <div class='logo'>
      <img src='/images/pimm_white.png' alt={ ALT__FOOTER_LOGO } />
    </div>
    <div class='content'>
      <p>&copy; PIMM</p>
      <p>광주광역시 북구 용봉로 77 전남대학교 공과대학 6호관</p>
      <div
        style={`
          display: flex;
          flex-direction: row;
          gap: .5em;
        `}
      >
        <p class="sub"><a href="https://github.com/pimm-dev/privacy-policy">개인정보 처리방침</a></p>
        <p class="sub"><a href="https://github.com/pimm-dev">GitHub</a></p>
    </div>
    </div>
  </div>
</footer>
