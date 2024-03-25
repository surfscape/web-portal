# Web Portal

The source code for the SurfScape web portal (project frontpage, news, updates, content, access to other services, and more).

- [The website](https://surfscape.neocities.org)
- [Neocities site page](https://neocities.org/site/surfscape)

## Structure

```
src/
    data/ Can be treated as the database for SurfScape, here you can find all the data that fills the navbar, directory, site metadata and more.
    includes/ Major parts of the portal that are used everywhere and should always be up-to-date, this includes the header, navbar, toolbar, and some sidebars.
        components/ Reusable pieces of code that can be modified on the go. Only being used on the news and updates pages.
    layouts/ Eleventy layouts that create the bases of any page. Every layout extends our base.njk layout which is responsible to set up the includes mentioned before.
    about/ Includes infomative pages about the projects like the contact page. This is also where the Departments are located.
    css/ Stylesheets, includes the main stylesheet for the portal as well our local, dev-branch of SurfKit.
    developer/ The developer portal.

```

## Uses

- Framework (SSG): [11ty](https://www.11ty.dev/)
- Languages: Nunjucks, HTML, CSS, JSON, JS, Node
- UI Framework: SurfKit (internal as of now)
