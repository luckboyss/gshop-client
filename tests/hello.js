;(function(window) {
  const msg = 'hello'
  function say() {
    console.log(msg + ' world')
  }
  function sayTo(name) {
    console.log(msg + ' ' + name)
  }
  window.hello = { say, sayTo }
})(window)
