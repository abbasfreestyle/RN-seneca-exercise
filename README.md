# Seneca Exercise

Seneca Cause and Effect app created in React Native

## Idea
I opted to design a lesson focussing on cause and effect as would be taught in the English language. Utilising mainly images to demonstrate examples of cause and effect, I highlighted keywords to help create an understanding of how sentences with cause and effect may be structured. The main objective behind using imagery to deliver the lesson was to facilitate ease of understanding and reinforcing the key areas of learning the lesson aims to deliver. The two main reasons behind using pictures of animals was to inject humour and uniqueness to the lesson. You would work through the lesson by studying the definitions and navigate your way through the examples, which you can then mark as complete after you have studied these. You can then also check your progression logs to see how much of the course you have completed and the time it has taken you to get through it.

## Technical Features
 - Uses React Navigation throughout
 - Uses Redux to manage the states
 - Design is responsive for both portrait and landscape. Image aspect ratios are preserved
 - Respects platform designs, iOS tabs placed at the bottom, Android swipeable tabs placed at the top
 - Color theme matches the Seneca website
 - Re-useable components created such as card, bubble, progress bar, button etc...
 - Images and icons are deliberately stored locally for demo purposes, remote images are a simple swap over.
 - Completed button animates when pressed and saves progression
 - Timer is logged when viewing each example, this stops when navigating away or completing the example
 - Data is deliberately stored in a local json file for demo purposes. feel free to change, add or remove examples inside causeandeffect.json to see changes in the app.
 - Android Back Button listener added because React Navigation documents state you must add your own if using Redux.

## Timeframe
App completion time 2-3 days

## Requirements
React Native 0.46

## Installation

If you haven't installed react native you can follow this guide:
[Install React Native](https://facebook.github.io/react-native/docs/getting-started.html)

Once you've downloaded or cloned this repository, run `npm install` inside the directory.

then

`react-native run-android`

or

`react-native run-ios`
