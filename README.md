# Bookken


# Set Up

## Set Up Google Calendar

- Make a copy of **js/calendar.sample.js** and rename the file as follow

```
    cp js/calendar.sample.js js/calendar.js
```
- Get the embed code of the google calendar
- Paste the code in **calendar.js**

```
    let html = '<iframe src="https://calendar.google.com/calendar/embed?src=1igvc7p0kumtonvav49d5eru3o%40group.calendar.google.com&ctz=America%2FToronto" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
```

- Fix the javascript import in **index.html**

```
  <script type="text/javascript" src="js/calendar.js"></script>  // Rename js/calendar.sample.js to js/calendar.js
```

## Set Up Bookmarks

- Make a copy of **js/bookmarks.sample.js** and rename the file as follow

```
    cp js/bookmarks.sample.js js/bookmarks.js
```
- Add as many bookmarks as you want

```
    let bookmarks = [
        {
            name: 'Bookken',
            url: 'https://github.com/xTEddie/Bookken',
            icon: 'fab fa-github fa-2x'
        },
        {
            name: 'chromecast-backgrounds',
            url: 'https://github.com/dconnolly/chromecast-backgrounds',
            icon: 'fab fa-github fa-2x'   
        }
    ]
```

You can add icon if you want. Fontawesome is supported by default. You can easily add icon from other libraries/frameworks.

- Fix the javascript import in **index.html**

```
  <script type="text/javascript" src="js/bookmarks.js"></script>  // Rename js/bookmarks.sample.js to js/bookmarks.js
```

## Bookmark

- You can open this page and pin this tab to always have this page opened 
- You can add that page as your first bookmark bar without putting any name. It will look as follow

## Credits

[@kemoua](https://github.com/kemoua) for this awesome idea

[@dconolly](https://github.com/dconnolly) for his [chromecast-backgrounds](https://github.com/dconnolly/chromecast-backgrounds) project

