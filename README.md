SUMMARY
=========

This simple Vue app persists to Firebase db. 

HOW TO RUN
-------------------------------

just clone repo to local and open via file protocol

STACK
-------------------------------

__why Vue?__
* relearning AngularJS neither fun nor valuable, Angular5 seemed like overkill, React learning curve too steep for a week (or at least a week of nights)
* Vue seemed friendly, hews to web standards, in the spirit of jQuery
* didn't want to bikeshed on issue with my local NPM install

__why Firebase?__
* seemed cool!

DEPENDENCIES
-------------------------------

None. Why? 
* can set up Vue using [vue-cli and webpack](https://www.youtube.com/watch?v=5LYrN_cAJoA&index=1&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa), but CDN works for simple apps; sticking with low-config here
* Firebase connection (no auth) and security (write away, world!) are as stripped down as possible 

CHALLENGES
-------------------------------

* __Vue__: learn new framework from scratch :)
* __Firebase__ 
    + __versions__: piece together docs between versions 1, 2, 3; lot of examples use v1 and v2, so had to sift through some misinformation
    + __management console when using CDN__: fair amount of magic button pushing (example: CDN config starter doesn't indicate how to dervive variables for config; 30 mins of Youtube until the "aha! click this button and then that button and this other button, in that order, to get your config")

NEXT STEPS
-------------------------------

* __Vue__ 
	+ __ditch CDN__: fix local NPM install, start using `vue-cli`
	+ __tooling__: add `vuex` and `vue-router`
* __Firebase__ 
    + __security__: finish PluralSight course to see how auth and security worked for v2, then move to v3
    + __tooling__: start using `firebase-tools` CLI