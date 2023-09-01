---
title: Opening New Horizons
description: Announcement of the open beta of version 1.0 codenamed "Horizon".
date: 2023-09-01T00:00:52.000Z
---

## History - How It Started

SurfScape started as a web portal on Codeberg and then GitHub called NaviNet where it offered a search engine for Neocities and a flash gaming portal. The project became abandoned because lack of motivation and no users.

It was later rebranded to [Eversoul](https://web.archive.org/web/20230319223259/https://netfind.neocities.org/) in January of 2023 as a personal site on Neocities which then became both a web portal and a personal place for me, as my ambition grown larger it was rebranded to NetFind to reflect it's meaning (Finding the Net), however the project also failed because of the poor code quality and lack of documentation for new users. NetFind then got rebranded to SurfScape ([Archive of the rebranding process](https://web.archive.org/web/20230604174947/https://surfscape.neocities.org/)).

SurfScape had some popularity on Neocities (we can call it a sort of an underground Neocities portal), but even though there were some interest on the project, most of the promised content and services were never created or were on a broken state because of poor time managment and because of a hude influx of ideas at the same time, there was also a lack of update from the portal and the community.

## Horizon Release

After all of this, I've decided to rewrite all of SurfScape portal (mostly from scratch) focusing o code, design, and user experience. That took 2 months of procrastination, 1 month of planing, and a week of speedruning code (which is minimally documented). Even though there's lack of content and features, this relase a big step up from the older SurfScape and remember, this is an open beta!

## The New Features

The major change is the design. The old SurfScape design was written using a single `.css` file which is the same case on this new rewriten version, however, this time it's treated as a framework making code easier to manage and (in the future) being able to port it into other projects and even be able to be used on external sites including yours! The framework is called SurfKit and will be available on GitHub and npm as a seperate project when it reaches `v1.0`.

Another major change is the layout which is (in my opinion) more cozier, familiar, and more on par with the old 2000's web. The design is inspired by the old [Microsoft.com](https://web.archive.org/web/20070320090600/http://www.microsoft.com/) website from 2007, [OpenBooks](https://openbooks.neocities.org) [8 Series](https://openbooks.neocities.org/timewarp/8.0/), and other inspirations from [Web Design Museum](https://www.webdesignmuseum.org).

Now for the underlying code, there will be created layouts specific for different types of content instead of using the same layout for different pages, this will help us create content that can impact people but also create unique pages that can make the search of specific content easily, like our new SurfKit component `nav-box` and `nav-box-linkker` which is the navigation list on the sidebar that is available troughout the site.

For web servives, we have finally created and released our links [Directory](/directory) that offers both internet services but also the ability for you to add your own personal site!

Last but not least, what is coming on version 1.0 stable? Well, I can't promise but with the new setup of deploying and how easily is to create content, some of the ideas include:

- Web services like a search engine for Neocities and a rewriten version of [GameVortex](https://surfscape.github.io/gamevortex). -In planing-
- A privacy portal to help users learn on what we collect and how we handle your data but also offer the option to give or not that data. -Planned-
- A blog written by actual humans about the old web and old tech but also development logs for users that are curious on what is being _cooked_. -Planned-
- Developer resources from SurfScape documentation but also tips on web development for your neocities website. -In planing-
- An rss reader for people that don't wanna lose any new updates, news, or posts. -Planned-

## Closing

So this is it for what is coming on Version 1.0 **"Horizon"**. Remember, if you want to receive new updates join our [community](/community) or follow us on the [fediverse](https://fosstodon.org/@surfscape).

> Thank you for using SurfScape!
