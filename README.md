# Seneca Exercise

Seneca Cause and Effect app created in React Native

## Idea
I've used general examples of cause and effect particularly with the english language in this case.
I've chosen to use images to display examples of cause and effect and highlighted keywords to help understand when a cause and effect is taking place.
Images are easily remembered and absorbed within the brain, this is why i've chosen unique animal for two reasons, they're adorable and funny!
Once each example is marked complete, you can view your progression that logs your time for each example viewed and shows a progress bar

## Technical Features
 - App uses React Navigation for navigation
 - Redux is used to manage the states
 - App design is responsive in both portrait and landscape. Aspect ratio of images are preserved
 - Tabs respect the platform design, iOS tabs placed in the bottom, Android tabs placed at top
 - Several re-useable components created such as card, bubble, progress bar, button etc...
 - Images and icons are stored locally deliberately for demo purposes, remote images are a simple swap over.
 - Completed button animates when pressed
 - A timer is logged when viewing an example.
 - data is retrieved from a json file. feel free to change, add, remove examples in the causeandeffect.json file.


## Requirements
React Native 0.46

## Installation

If you haven't react native check out these instructions:
[Install React Native](https://facebook.github.io/react-native/docs/getting-started.html)

Once you have downloaded or cloned this repository, run `npm install` inside the directory.

then

`react-native run-android`

or

`react-native run-ios`
