# Contributing  

## How we work

We write code and then do commits, as everyone does.

Our commits rely on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) system.

Releases are tied to the commit messages via [semantic-release](https://github.com/semantic-release/semantic-release).

Any commit(a PR merge) into `dev`, which is our main branch, is published to NPM under the [`@logicalclocks/quartz` package](https://www.npmjs.com/package/@logicalclocks/quartz).

## Commit rules

Basically, [Angular commit message conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).


Below is just copy-paste:


Each commit message consists of a **header**, a **body**, and a **footer**.


```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.


#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


#### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests


##### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* `select2`
* `file-explorer`
* `button`
* `storybook`


#### The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

### Examples:

simple:

```
feat(select): add `searchable` prop
docs: add `CONTRIBUTING.MD`
ci: update npm release workflow
fix(file-explorer): selection bug
```

with **BREAKING CHANGE**(this will trigger a major version bump):
```
feat(select): remove `width` prop

BREAKING CHANGE: The `width` prop has been removed.
We no longer need to specify `width` by hand.
```


## Releases:

- if the commit header has `feat`, we do a minor release(1.**2**.0)

- everything else produces a patch(1.1.**2**)

- if the footer has `BREAKING CHANGE`, then it's major release(**2**.0.0)