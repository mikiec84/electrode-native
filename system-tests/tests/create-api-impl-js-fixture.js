const run = require('../utils/run')
const assert = require('../utils/assert')
const sameDirContent = require('../utils/sameDirContent')
const f = require('../fixtures/constants')

const filesToIgnore = [
  'ElectrodeApiImpl.xcodeproj',
  'project.pbxproj',
  'package.json',
  '.DS_Store',
  'index.android.bundle',
  'index.android.bundle.meta',
  'yarn.lock',
  'README.md',
  'WalmartItemApi.spec.js',
  'SysteTestEventApi.spec.js',
  'SystemTestsApi.spec.js',
  '.yarn-integrity'
]

run(`create-api-impl ${f.movieApiPkgName} -p ${f.movieApiImplPkgName} --skipNpmCheck --jsOnly --outputDirectory ${process.cwd()} --force`)
assert(sameDirContent(f.pathToJsApiImplFixture, process.cwd(), filesToIgnore), 'Generated API JS Impl differ from reference fixture !')