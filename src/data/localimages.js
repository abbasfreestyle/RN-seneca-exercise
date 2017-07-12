export const Imgs = {
  trashCause: require('../images/stevetrash.jpg'),
  trashEffect: require('../images/stevereward.jpg'),
  greenCause: require('../images/lightturngreen.jpg'),
  greenEffect: require('../images/crossroad.jpg'),
  studyCause: require('../images/studyhard.jpg'),
  studyEffect: require('../images/passtest.jpg'),
  hotCause: require('../images/hotsun.jpg'),
  hotEffect: require('../images/turnfanon.jpg'),
  sleepCause: require('../images/markclass.jpg'),
  sleepEffect: require('../images/markasleep.jpg'),
}

//require only accepts static calls, so variables cannot be called in require(), instead create an object with static locations and call them dynamically via getImage(objectName). Remote images can accept dynamic calls which makes it much easier. I've stored images locally for demo purposes only.
export function getImage(name) { return Imgs[name] }
