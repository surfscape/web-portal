---
layout: base.njk
title: Page not found
permalink: not_found.html
eleventyExcludeFromCollections: true
---

## 404 Not Found 😔

Looks like <code id="url"></code> doesn't exist.

<script>
  var x = document.URL;
  document
    .getElementById("url")
    .innerHTML = x;
</script>
