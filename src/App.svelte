<style global lang="postcss">

  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

</style>

<script>
import Navbar from './Navbar.svelte';
import Configurator from './Configurator.svelte';
import Footer from './Footer.svelte';
import BuildBar from './BuildBar.svelte';
</script>

<Navbar/>
<Configurator/>
<Footer/>
<BuildBar/>

