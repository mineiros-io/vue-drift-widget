# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.5] - 2020-03-04

### Added

- Add `@microsoft/api-extractor` for generating `.d.ts` files
- Use eslint everywhere

## [0.0.4] - 2020-03-04

### Added

- Set `isolatedmodules` to `false` in .tsconfig to guarantee a seamless build
- Optimize various tsconfig settings
- Only add relevant files to production build.
- Add build page to README.md

## [0.0.3] - 2020-03-03

### Fixed

- Only trigger GitHub actions on push
- Rename Build to CI Pipeline
- Drift types shouldn't be a global type file since it's ignored by tsc

### Removed

- Remove @microsoft/api-extractor

## [0.0.2] - 2020-03-03

### Added

- Add examples and README.md
- Add GitHub Action to publish a new version to NPM for each created release

## [0.0.1] - 2021-02-16

### Added

- Dynamically load drift dependencies and initialize the Drift Widget
- Initial repository structure

[unreleased]: https://github.com/mineiros-io/vue-drift-widget/compare/v0.0.5...HEAD
[0.0.5]: https://github.com/mineiros-io/vue-drift-widget/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/mineiros-io/vue-drift-widget/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/mineiros-io/vue-drift-widget/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/mineiros-io/vue-drift-widget/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/mineiros-io/vue-drift-widget/releases/tag/v0.0.1
