function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  let list = document.getElementsByClassName('ranked-list')

  for (let index in list) {
    list[index].innerHTML = parseInt(list[index]) + n
  }
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node')
  let childNode = grandNode.children[0]

  while (childNode) {
    grandNode = childNode
    childNode = grandNode.children[0]
  }
  return grandNode
}
