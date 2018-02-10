# Bookken


# Set Up

## Set Up Google Calendar

- Get the embed code of the google calendar
- Paste the code in **calendar.js**

```
    let html = '<iframe src="url" style="border-width:0" width="800" height="500" frameborder="0" scrolling="no"></iframe>';
```

## Set Up Bookmarks

- Open **bookmarks.js**
- Add as many bookmarks as you want

```
    let bookmarks = [
        {
            name: 'Bookken',
            url: 'https://github.com/xTEddie/Bookken',
            icon: 'fab fa-github fa-2x'
        },
        {
            name: 'Linux',
            url: 'https://github.com/torvalds/linux',
            icon: 'fab fa-github fa-2x'
        }
    ]
```

You can add icon if you want. Fontawesome is supported by default. You can easily add icon from other libraries/frameworks.

## Credits

[@kemoua](https://github.com/kemoua) for this awesome idea

[@dconolly](https://github.com/dconnolly) for his [chromecast-backgrounds](https://github.com/dconnolly/chromecast-backgrounds) project

