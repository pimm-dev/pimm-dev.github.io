<script lang='ts'>
  import Hero from '$lib/includes/Hero/Hero.svelte'
  import Intro from '$lib/includes/Intro/Intro.svelte'
  import Join from '$lib/includes/Join/Join.svelte'
  import Careers from '$lib/includes/Careers/Careers.svelte'
  import Footer from '$lib/includes/Footer/Footer.svelte'
  import Padding from '$lib/components/Spacing/Padding.svelte'
  import Hr from '$lib/components/Hr/Hr.svelte'
</script>

<style lang='scss'>
  section {
    max-width: 1000px;
    margin: auto;
    padding: 1.5em;
  }
</style>

<main>
  <Hero />
  <section>
    <Padding height={2} />
    <Intro />
    <Hr />
    <Join />
    <Hr />
    <Careers />
  </section>
  <Footer />
</main>
