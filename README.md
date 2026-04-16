[![npm version](https://badge.fury.io/js/@jaspero%2Fweb-components.svg)](https://badge.fury.io/js/@jaspero%2Fweb-components)

# @Jaspero/web-components

A collection of web components.

```
npm i --save-exact @jaspero/web-components
```

Visit our documentation site for more details.

[Documentation](https://jaspero.github.io/web-components/)

## Releasing (npm)

Versions are published with [semantic-release](https://semantic-release.gitbook.io/) from `main`. The package version in `package.json` stays `0.0.0-development`; the real version comes from git tags and [Conventional Commits](https://www.conventionalcommits.org/).

**Next release from current `main`:** **v1.205.0** (minor bump after `v1.204.2`, includes `jp-multisearch` `itemremove`).

1. Ensure `main` has the commits you want in the release.
2. In GitHub: **Actions → Publish → Run workflow** (or push a change under `packages/**`, which also triggers the workflow).
3. The **Release** step needs a valid **`NPM_TOKEN`** repository secret; without it, publish will fail.

After npm shows `1.205.0`, you can bump consumers (for example `docs/package.json` dependency `@jaspero/web-components`) to `^1.205.0` in a follow-up commit.
