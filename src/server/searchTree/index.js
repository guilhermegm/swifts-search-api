const glob = require("glob")
const { promisify } = require("util")
const SearchTree = require("search-tree-trie")

const globPromise = promisify(glob)

const getCountriesPaths = async () => await globPromise(`${__dirname}/swifts/*.json`)

const getCountries = function*({ countriesPaths }) {
  for (const countryPath of countriesPaths) {
    const countryFile = require(countryPath)

    yield countryFile
  }
}

const getCountriesTree = async () => {
  const countriesTree = {}

  const countriesPaths = await getCountriesPaths()
  const countries = getCountries({ countriesPaths })

  for (const country of countries) {
    if (!countriesTree[country.country_code]) {
      countriesTree[country.country_code] = {
        searchTree: new SearchTree()
      }
    }

    country.list.forEach(countrySwift => {
      countriesTree[country.country_code]["searchTree"].addWord({
        word: countrySwift.swift_code,
        result: countrySwift
      })
    })
  }

  return countriesTree
}

const search = ({ countriesTree }) => ({ query, countryCode }) =>
  countriesTree[countryCode]["searchTree"].search({ query })

const factory = {}

getCountriesTree().then(countriesTree => {
  factory.search = search({ countriesTree })
})

module.exports = factory
