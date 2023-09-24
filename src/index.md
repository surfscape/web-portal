---
layout: home.njk
title: Home
mainad_link: /news/opening-new-horizons/
mainad_image: open_beta_banner
mainad_title: Open Beta Announcement
altad_link: /directory
altad_title: SurfScape Directory
altad_image: directory_avert
---

<span style="display:none;" class="foxy-sad alert alert-warning">It looks like you have Firefox. Unfortunately, we use the pseudo-class ":has" heavily throughout the site, and Firefox as of now has that feature disabled. We recommend you enable support for ":has" in "about:config." <a href="https://stackoverflow.com/questions/73936048/how-do-you-enable-has-selector-on-firefox#answers-header">Learn More</a></span>

<script>
// show warning for firefox users about the usage of :has
if (navigator.userAgent.indexOf('Firefox') !== -1) {
  const element = document.querySelector('.foxy-sad');
  element.style.display = 'block';
}
</script>

## Begin your journey!

Welcome to the new SurfScape, **your friendly Neocities web portal** inspired by the aesthetics and values of the early web era. Our mission is to **revive** the spirit of a web that is free, creative, open, and community-driven.

SurfScape offers a wide array of services and resources for Neocities users. Relive the best of the web from a time when corporate greed and algorithms didn't dominate the landscape.
[Learn more about us!](/about)

<tab-container data-type="vertical">
<menu class="tab-buttons">
  <li><button class="tab-button" data-tab="tab1" aria-checked="true">Support</button></li>
  <li><button class="tab-button" data-tab="tab2" aria-checked="false">Button</button></li>
  <li><button class="tab-button" data-tab="tab3" aria-checked="false">Labs</button></li>
</menu>
<tab-content-container>

<section class="tab-content" id="tab1" aria-hidden="false">
<h2>Support SurfScape</h2>
<p>While we do not receive funds at the moment, if you are a developer you can help us by improving our services and other projects trough our <a href="https://github.com/surfscape">GitHub</a>!</p>
<p>Anyone can participate but it's recommended that you have some knowledge on HTML, CSS, and some Nunjucks syntax.</p>
</section>
<section class="tab-content" id="tab2" aria-hidden="true">
<h2>SurfScape Button</h2>
<p>Do you like SurfScape? Do you want to link us on your own website? Use our new 88x31 button!</p>
<p>Just use the HTML code below:</p>
<pre><code>&lt;a style="image-rendering: pixelated;" href="https://surfscape.neocities.org"&gt;
  &lt;img src="/static/images/buttons/ss_space.png" alt="SurfScape Button"&gt;
&lt;/a&gt;
</code></pre>
<p>Result:</p>
<a style="image-rendering: pixelated;" href="https://surfscape.neocities.org"><img src="/static/images/buttons/ss_space.png" alt="SurfScape Button"></a>
<p>Note: Please do not hotlink the button. Instead, download the .png and upload it to your website!</p>
</section>
<section class="tab-content" id="tab3" aria-hidden="true">
<h2>SurfScape Labs</h2>
<p>Labs is a project created to share and test inside experiments from the SurfScape project. This includes new services, features, and run code on a production enviroment.</p>
<a href="https://surfscape.github.io/labs/" class="button" role="button">Access SurfScape Labs</a>
</section>
</tab-content-container>
</tab-container>
