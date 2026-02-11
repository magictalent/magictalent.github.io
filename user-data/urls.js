const githubUsername = "";
const mediumUsername = "";
const gitConnectedUsername = "";

const createMediumURL = (username) =>
  username
    ? `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    : "";
const createGitConnectedURL = (username) =>
  username ? `https://gitconnected.com/v1/portfolio/${username}` : "";
const gitRepos = (username) =>
  username ? `https://pinned.berrysauce.dev/get/${username}` : "";

export const URLs = {
  medium: createMediumURL(mediumUsername),
  gitConnected: createGitConnectedURL(gitConnectedUsername),
  gitRepo: gitRepos(githubUsername),
};
