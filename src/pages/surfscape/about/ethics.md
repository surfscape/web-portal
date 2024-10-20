---
title: "Ethics"
description: "Our policies, ideals, and commitments to develop software"
permalink: "/about/ethics/"
layout: "page.njk"
style_slot: true
---

<div class="grid-ethics">

<section class="sk-card">
<h2><ion-icon name="chatbubbles"></ion-icon>Radical Transparency</h2>
<p>We believe that honesty is the best policy. That's why we're committed to being open and transparent in everything we do. From our decision-making processes to our progress updates, we want to keep you in the loop. We're not perfect, and we'll own up to our mistakes. By being transparent, we hope to build a community that trusts us and feels empowered to contribute.</p>
</section>

<section class="sk-card">
<h2><ion-icon name="finger-print"></ion-icon>Privacy Respected</h2>
<p>We're passionate about protecting your personal space. As advocates for an open and free internet, we think it's essential to safeguard your privacy. We keep data collection to a minimum and we only partner with service providers who share the same values. <a href="/privacy-policy">Read our privacy policy</a> to learn more about how we protect your privacy.</p>
</section>

<section class="sk-card">
<h2><ion-icon name="accessibility"></ion-icon>Inclusive by Design</h2>
<p>We believe that everyone deserves equal access to information and opportunities. That's why we're dedicated to making our services and products accessible to everyone, regardless of their abilities. We're committed to creating an inclusive environment that empowers people to participate and contribute. We've developed our own <a href="https://github.com/surfscape/surfkit" target="_blank" rel="noreferrer">UI framework and design language</a> to make customization easy and accessible. And, we're always looking for ways to improve our accessibility features. <a href="/about/accessibility">Learn more about our accessibility efforts</a>.</p>
</section>

<section class="sk-card">
<h2><ion-icon name="shield-half"></ion-icon>Safety First</h2>
<p>We take the safety and security of our community seriously. That's why we've established a <a href="/community">code of conduct</a> that outlines rules on how you should behave. We also have security measures in place to protect our software and services from breaches and vulnerabilities. We're committed to creating a safe and welcoming environment for everyone, and we're always working to improve our security practices.</p>
</section>

</div>

{% slot 'style_slot' %}

<style>
    .grid-ethics {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(17rem, 100%), 1fr));
    padding: var(--spacing);
  }
  .sk-layout--content {
    max-width: 72ch;
  }
</style>

{% endslot %}
