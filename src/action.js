const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    
    const octokit = github.getOctokit(GITHUB_TOKEN);

    const { context = {} } = github;
    const { issue } = context.payload;

    await octokit.issues.createComment({
        ...context.repo,
        body: 'Issue closed. Please leave feedback'
    });
}

run();