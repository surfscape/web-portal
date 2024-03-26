---
title: Alpha release announcement
description: The official press release for the new alpha version of SurfScape web portal, including the new changes, features, design choices and upcoming content.
date: 2024-02-02T00:21:48.000Z
---

Welcome to the new improved and redesigned SurfScape! In this post we will go trough everything that has changed during the past 4 months.

Now, before we get ahead of ourselves, let's talk about the reason behind the redesign. Firtsly, I wasn't happy with the design of the old portal, some design elements looked out of place and the websites was slow, ugly, and wasn't a web portal per-say.

Most of the promised features were missing, like the Services page, and the directory wasn't really helpful, and if you guessed it, this redesign tackled those UX problems.

To make this easy for everyone, the post is divided into the most important parts that were changed, first, the improvements made over the old portal (since the codebase is still the same), then the new features (this includes new pages that didn't exist before), and since this is still an alpha, what is missing as of now.

## Improvements

As previsously mentioned, the design and UX is the most notable improvement, however it still has some flaws that will be fixed in the upcoming releases, afterall that's why it's an alpha, this also means the portal is not optimized for mobile (yet), there's some bandage to make it a little more readable and usable on mobile but it's not enough to make it pleasant to use.

Another improvement is the new navigation+homepage. Before, the navigation had a combination of links and dropdown lists. At the time it worked well enough but to make the code simpler and less hacky, we just removed the dropdowns with simple links. But now you're wondering: "_There are lots of pages that have sub-pages inside, how can I access them?_" Well, our new page layout has a navigation component that is shown whenever a page has configured the sub-pages for that page directory, meaning that every page with the navigation setup, will now show a small navbar on top of the page with all it's sub-pages, this means that the links only load on the page itself and makes the mobile experience better since the dropdowns did suck a bit on mobile.

Also, most pages now have a banner which makes the portal more alive and friendlier.

Another thing related to the navigation is with the main navigation that it's now scrollable, so we don't need JS anymore to make it mobile responsive!

For the homepage, we made a major redesign of the hero, which will now show promotional images related to the latest content released. Since we haven't released anything yet, there's just a welcoming image with some links to guide users. The rest of the homepage stayed the same with some improvements on the tab container and the removal of the sidebar navigation for a sidebar that shows the latest updates to the website, services, and small notices.

## New features

For the feature side, we have since started moving to SurfKit (our in-house UI framework) for some design components which makes some page (if not all) more pleasant to use and more cohesive as well, one of them being the [Directory](/directory) that finally has the option to submit new sites (and the inclusion of descriptions for personal websites as well).

Another feature that can be noticed is the share button shown across all pages, this is pretty simple, I known, but it's important for an upcoming feature (I hope).

To make this post short, I've decided to make a list of the new pages (+ some that were drastically changed):

- The community page has been redesigned with a linear layout and a less abstract list of rules;
- The services page has been created with two of the services that will come out in the next months;
- The news page was also been redesign, now using components for posts;
- The updates page has been divided into two sections: major release summary for when something major has happened, and the old release notes which shows the change log of every release;
- The directory has some major UX improvements that should help people find their next favourite site or service.
- and much more!

Another thing you might find new, are the new links at the top of the header, more importantly the UserVoice page, that is a project that has been planned out for a long time, probably at the start of the development 3 months ago. The idea behind UserVoice is, well, get feedback from users about new features, issues, or request of new content. In there, you can find an active form related to this Alpha release, that was made to gather feedback of new and past users so I can get a view on what should be worked out more and what should be brought back to the drawing table.


## Missing/Incomplete

Since this is still an alpha, there is missing stuff, but... it's much less stuff then the beta of the old web portal (which was horrendous).

The first thing missing or rather incomplete, is the new [Developer Portal](/developer) which is a way to guide everyone to understand and later improve SurfScape or learn from our work (for example using SurfKit on your own website). However since the codebase is not mature and SurfKit is also in alpha, the developer portal will stay incomplete.

Another missing piece is the projects and resources pages. The main reason behind the missing resources page is that I would like to get resources send to me to then share trough there but also because I haven't got the time to write our own resources. The projects page on the other hand is, well, lack of projects, as of now we only have one project, that being, [SurfScape Labs](https://surfscape.github.io/labs/) and it doesn't make sense to have a fully fledge page to talk about a single project.

## A word about Services/Projects

One of the main goals of SurfScape is to offer services that are free, open, and accessible, which we haven't achieved yet, however we are much closer to that dream than before. Projects on the other hand is more of an abstract thing, it's more of a thing for developers/experienced users where we share fresh stuff that we are working on, which might include, you guessed it, new services.

## Closing

So, that's it, this is the new SurfScape that we hope will stay alive and helpful to newcommers on Neocities. Thanks for reading!
