const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

const run = async () => {
    core.notice('Hello from my custom JavaScript Action!')
}

run()