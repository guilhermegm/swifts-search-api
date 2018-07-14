const { compose } = require("react-app-rewired")
const { paths } = require("react-app-rewired")
const path = require("path")

function updateReactScriptPath(filename) {
  const originalPaths = require.cache[require.resolve(`${paths.scriptVersion}/config/paths.js`)]

  Object.assign(originalPaths.exports, {
    appIndexJs: filename
  })
}

function rewireEntry(filename) {
  return (config, _env) => {
    updateReactScriptPath(filename)

    const entry = [...config.entry.slice(0, config.entry.length - 1), filename]

    return { ...config, entry }
  }
}

module.exports = compose(
  rewireEntry(path.resolve(__dirname, "src/client/index.js"))
)
