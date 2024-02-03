---
title: Updates
description: See the major patch and release notes of SurfScape.
---

{% import "components/updateCard.njk" as updateCard %}

{{ updateCard.updateCard('Welcome SurfScape!', '2024-02-01', 'After much work and needed redesign, we welcome the new (still alpha) SurfScape web portal to the public!') }}

<p style="text-align:center;"><em>---- No more updates ----</em></p>

<style>
.release--update--card {
    display: grid;
    gap: var(--spacing-xsm);
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, white, rgb(237, 237, 237));
    border-radius: var(--radius);
    padding: var(--spacing-sm);
}

.release--update--card * {
    margin: 0;
}

.release--update--card time {
    margin-right: var(--spacing-xsm);
    font-size: 0.75em;
}

.release--update--card p {
    text-indent: 16px;
}

</style>
