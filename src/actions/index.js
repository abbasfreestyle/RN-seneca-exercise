export const completed = (count) =>  {
  return {
    type: 'completed',
    payload: count
  }
}

export const undo = (count) =>  {
  return {
    type: 'undo',
    payload: count
  }
}

export const save = (id) =>  {
  return {
    type: 'save',
    payload: id
  }
}

export const unsave = (id) =>  {
  return {
    type: 'unsave',
    payload: id
  }
}

export const timer = (time) =>  {
  return {
    type: 'timer',
    payload: time
  }
}
