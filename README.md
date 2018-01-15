BASIC VUE SITE, BASIC FIREBASE DB
=========

This simple Vue app persists to Firebase db. 

DEPENDENCIES
-------------------------------

None. Why? 
* can set up Vue using [vue-cli and webpack](https://www.youtube.com/watch?v=5LYrN_cAJoA&index=1&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa), but CDN works for simple apps; sticking with low-config here
* Firebase connection (no auth) and security (write away, world!) are as stripped down as possible 

CHALLENGES, NEXT STEPS
-------------------------------

* __Vue__: learn new framework from scratch :)
* __Firebase__ 
    + __versions__: piece together docs between versions 1, 2, 3; lot of example use v1 and v2, so had to sift through some misinformation
    + __management console when using CDN__: fair amount of magic button pushing (example: CDN config starter doesn't indicate how config variables derviced, 30 mins of Youtube until the "aha, click this button and then that button and this other button, in that order, to get your config")