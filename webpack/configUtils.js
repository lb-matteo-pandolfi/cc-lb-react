// https://webpack.js.org/plugins/split-chunks-plugin/#configuration
const makeChunkName = (module, chunks, cacheGroupKey) => {
  const moduleFileName = module
    .identifier()
    .split('/')
    .reduceRight((item) => item.replace('.js', ''))
  // const allChunksNames = chunks.map((item) => item.name).join('~')
  return `${cacheGroupKey}-${moduleFileName}`
}

module.exports = { makeChunkName }
