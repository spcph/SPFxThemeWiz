# SPFx Theme Wizard

Create a SharePoint Modern Theme in minutes

[Download latest version sppkg package](https://github.com/spcph/SPFxThemeWiz/raw/master/files/themewiz.sppkg)

## The Idea

If you ever worked with SharePoint Modern Themes, you know that finding the right combination of colors can be a tidious task.
First you need to know which themeColors are used on which elements on the page. Then you need to find you hex color codes before finally building your PowerShell theme array, and deploying it to SharePoint. 

If one of the colors are off, the entire process more or less has to be repeated. 

On the projects I have been working on somewhere between 10 or 15 iterations hasn't been unusual.

## The Solution

![SPFx Theme Wizard](https://github.com/spcph/SPFxThemeWiz/raw/master/files/ThemeWiz.png "SPFx Theme Wizard")

When ever you use "Change the look" in Modern SharePoint, the theme you choose is instantly applied to the page, so I was pretty confident that there had to be a way to do something similar. I looked around for a long time, poking around window.__themeState__.theme but nothing would actually let med apply the theme.

Until one day I was reading through the Office UI Fabric docs and found the loadTheme function. 

My colleague Fredrik used a couple of hours doing a POC, and I used roughly the same to add some spiffy color pickers and a PowerShell download function. 

Badabing badaboom and this little tool easily saves me an hour or 2 whenever i have to come up with a theme.

I hope it does the same to you.

## Development

Some improvements would probably make it even nicer, so feel free to branch out and submit a PR.
