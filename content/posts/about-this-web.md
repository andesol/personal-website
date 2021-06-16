---
date: "2021-06-06"
title: "[Meta] Building blocks of this website"
author: "andesol"
summary: "Opinions on what I liked or disliked"
---

I recently deployed this very website and I wanted to share some opinions (subjective, of course). I'm still with the plumbing and will keep updating this and adding new features.

## Design

Maybe calling this "design" is a bit excessive.

At first I got creative and chose a "charming" color palette, with the "help" of [Coolors](https://coolors.co/).

![Color palette](/post-img/color-palette.png)

Hmm... let's say that the resulting website looked like a poster for the upcoming carnival.

Later I backtracked and adhered to a minimalist approach, which is the perfect excuse for us who doesn't know how to properly design. Get some grays, a vivid color to emphasize certain parts and call it a day.

By the way, I used [Figma](https://www.figma.com/) for doing a quick sketch before starting to code.

## Static site generator

I used [Next.js](https://nextjs.org/) as a static site generator. Using a React framework (as they define their product) for a simple static page may be an overkill. In other circumstances, I would've chosen something lighter like [11ty](https://www.11ty.dev/).

The good:

✅ The "React experience". Components, hooks, routing, etc. Powerful but performant.

I wasn't a fan of:

🟨 [Creating a simple blog](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/?utm_source=github&utm_medium=blog-cs&utm_campaign=devex) seems more cumbersome than expected.

## CSS

I used [Theme UI](https://theme-ui.com/home/) as a CSS (CSS-in-JS) library.

Good:

✅ The idea is great. You define properties (like colors, spacing, etc.) in a file (`theme.js`) and then you can apply them in your jsx elements.

Not so good:

🟨 Defining styles as a javascript object is confusing if you're not used to it.

🟨 If you don't think like a designer (having a systematic approach to styling) it's difficult to make the most out of it. My development workflow got a bit messy. That's my problem, of course.

## Content

Simply local Markdown. I'm the only one writing, after all, so there's no point in adding a headless CMS.

Mdx was tempting, but I didn't want to overengineer stuff.

## Deployment

Being this site static, we can leverage some services that emerged to make Jamstack easy.

My first choice was Netlify, which I've already used for other experiments. Unfortunately, there seems to be an issue with the `next/image` component. The avatar image took several seconds to load. I [could've investigated](https://rhnmht30.dev/blog/next-image-with-netlify) further, but instead took the easy path: I deployed in Vercel, which is almost as easy as Netlify.

I add a post, pushed to github and bam!, the web rebuilds itself and it's ready in a few seconds.
