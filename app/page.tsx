"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, ExternalLink, Star, GitFork, Mail, MapPin, Building, Calendar, Users, BookOpen } from 'lucide-react'

export default function Portfolio() {
  const user = {
  "login": "j1znuneel",
  "id": 201781483,
  "node_id": "U_kgDODAbw6w",
  "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/j1znuneel",
  "html_url": "https://github.com/j1znuneel",
  "followers_url": "https://api.github.com/users/j1znuneel/followers",
  "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
  "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
  "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
  "repos_url": "https://api.github.com/users/j1znuneel/repos",
  "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
  "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Jishnu PN",
  "company": null,
  "blog": "",
  "location": null,
  "email": "jishnuneel04@gmail.com",
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 6,
  "following": 15,
  "created_at": "2025-03-04T16:26:24Z",
  "updated_at": "2025-06-15T05:35:39Z"
}
  const repos = [
  {
    "id": 990555368,
    "node_id": "R_kgDOOwqs6A",
    "name": "crudify",
    "full_name": "j1znuneel/crudify",
    "private": false,
    "owner": {
      "login": "j1znuneel",
      "id": 201781483,
      "node_id": "U_kgDODAbw6w",
      "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/j1znuneel",
      "html_url": "https://github.com/j1znuneel",
      "followers_url": "https://api.github.com/users/j1znuneel/followers",
      "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
      "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
      "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
      "repos_url": "https://api.github.com/users/j1znuneel/repos",
      "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/j1znuneel/crudify",
    "description": "Create viewsets,serializers and routes for Django rest framework from  your models.py",
    "fork": false,
    "url": "https://api.github.com/repos/j1znuneel/crudify",
    "forks_url": "https://api.github.com/repos/j1znuneel/crudify/forks",
    "keys_url": "https://api.github.com/repos/j1znuneel/crudify/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/j1znuneel/crudify/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/j1znuneel/crudify/teams",
    "hooks_url": "https://api.github.com/repos/j1znuneel/crudify/hooks",
    "issue_events_url": "https://api.github.com/repos/j1znuneel/crudify/issues/events{/number}",
    "events_url": "https://api.github.com/repos/j1znuneel/crudify/events",
    "assignees_url": "https://api.github.com/repos/j1znuneel/crudify/assignees{/user}",
    "branches_url": "https://api.github.com/repos/j1znuneel/crudify/branches{/branch}",
    "tags_url": "https://api.github.com/repos/j1znuneel/crudify/tags",
    "blobs_url": "https://api.github.com/repos/j1znuneel/crudify/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/j1znuneel/crudify/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/j1znuneel/crudify/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/j1znuneel/crudify/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/j1znuneel/crudify/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/j1znuneel/crudify/languages",
    "stargazers_url": "https://api.github.com/repos/j1znuneel/crudify/stargazers",
    "contributors_url": "https://api.github.com/repos/j1znuneel/crudify/contributors",
    "subscribers_url": "https://api.github.com/repos/j1znuneel/crudify/subscribers",
    "subscription_url": "https://api.github.com/repos/j1znuneel/crudify/subscription",
    "commits_url": "https://api.github.com/repos/j1znuneel/crudify/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/j1znuneel/crudify/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/j1znuneel/crudify/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/j1znuneel/crudify/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/j1znuneel/crudify/contents/{+path}",
    "compare_url": "https://api.github.com/repos/j1znuneel/crudify/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/j1znuneel/crudify/merges",
    "archive_url": "https://api.github.com/repos/j1znuneel/crudify/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/j1znuneel/crudify/downloads",
    "issues_url": "https://api.github.com/repos/j1znuneel/crudify/issues{/number}",
    "pulls_url": "https://api.github.com/repos/j1znuneel/crudify/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/j1znuneel/crudify/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/j1znuneel/crudify/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/j1znuneel/crudify/labels{/name}",
    "releases_url": "https://api.github.com/repos/j1znuneel/crudify/releases{/id}",
    "deployments_url": "https://api.github.com/repos/j1znuneel/crudify/deployments",
    "created_at": "2025-05-26T09:41:51Z",
    "updated_at": "2025-06-22T16:00:37Z",
    "pushed_at": "2025-06-22T15:08:13Z",
    "git_url": "git://github.com/j1znuneel/crudify.git",
    "ssh_url": "git@github.com:j1znuneel/crudify.git",
    "clone_url": "https://github.com/j1znuneel/crudify.git",
    "svn_url": "https://github.com/j1znuneel/crudify",
    "homepage": "https://crudify-ai.vercel.app",
    "size": 91,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.\n\nThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.\n"
  },
  {
    "id": 1006167297,
    "node_id": "R_kgDOO_jlAQ",
    "name": "test-crudify",
    "full_name": "j1znuneel/test-crudify",
    "private": false,
    "owner": {
      "login": "j1znuneel",
      "id": 201781483,
      "node_id": "U_kgDODAbw6w",
      "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/j1znuneel",
      "html_url": "https://github.com/j1znuneel",
      "followers_url": "https://api.github.com/users/j1znuneel/followers",
      "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
      "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
      "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
      "repos_url": "https://api.github.com/users/j1znuneel/repos",
      "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/j1znuneel/test-crudify",
    "description": "A sample django app to test if crudify is working",
    "fork": false,
    "url": "https://api.github.com/repos/j1znuneel/test-crudify",
    "forks_url": "https://api.github.com/repos/j1znuneel/test-crudify/forks",
    "keys_url": "https://api.github.com/repos/j1znuneel/test-crudify/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/j1znuneel/test-crudify/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/j1znuneel/test-crudify/teams",
    "hooks_url": "https://api.github.com/repos/j1znuneel/test-crudify/hooks",
    "issue_events_url": "https://api.github.com/repos/j1znuneel/test-crudify/issues/events{/number}",
    "events_url": "https://api.github.com/repos/j1znuneel/test-crudify/events",
    "assignees_url": "https://api.github.com/repos/j1znuneel/test-crudify/assignees{/user}",
    "branches_url": "https://api.github.com/repos/j1znuneel/test-crudify/branches{/branch}",
    "tags_url": "https://api.github.com/repos/j1znuneel/test-crudify/tags",
    "blobs_url": "https://api.github.com/repos/j1znuneel/test-crudify/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/j1znuneel/test-crudify/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/j1znuneel/test-crudify/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/j1znuneel/test-crudify/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/j1znuneel/test-crudify/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/j1znuneel/test-crudify/languages",
    "stargazers_url": "https://api.github.com/repos/j1znuneel/test-crudify/stargazers",
    "contributors_url": "https://api.github.com/repos/j1znuneel/test-crudify/contributors",
    "subscribers_url": "https://api.github.com/repos/j1znuneel/test-crudify/subscribers",
    "subscription_url": "https://api.github.com/repos/j1znuneel/test-crudify/subscription",
    "commits_url": "https://api.github.com/repos/j1znuneel/test-crudify/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/j1znuneel/test-crudify/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/j1znuneel/test-crudify/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/j1znuneel/test-crudify/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/j1znuneel/test-crudify/contents/{+path}",
    "compare_url": "https://api.github.com/repos/j1znuneel/test-crudify/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/j1znuneel/test-crudify/merges",
    "archive_url": "https://api.github.com/repos/j1znuneel/test-crudify/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/j1znuneel/test-crudify/downloads",
    "issues_url": "https://api.github.com/repos/j1znuneel/test-crudify/issues{/number}",
    "pulls_url": "https://api.github.com/repos/j1znuneel/test-crudify/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/j1znuneel/test-crudify/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/j1znuneel/test-crudify/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/j1znuneel/test-crudify/labels{/name}",
    "releases_url": "https://api.github.com/repos/j1znuneel/test-crudify/releases{/id}",
    "deployments_url": "https://api.github.com/repos/j1znuneel/test-crudify/deployments",
    "created_at": "2025-06-21T16:38:07Z",
    "updated_at": "2025-06-21T18:43:52Z",
    "pushed_at": "2025-06-22T15:23:27Z",
    "git_url": "git://github.com/j1znuneel/test-crudify.git",
    "ssh_url": "git@github.com:j1znuneel/test-crudify.git",
    "clone_url": "https://github.com/j1znuneel/test-crudify.git",
    "svn_url": "https://github.com/j1znuneel/test-crudify",
    "homepage": null,
    "size": 21,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 4,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 4,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    }
  },
  {
    "id": 1003794940,
    "node_id": "R_kgDOO9Sx_A",
    "name": "blocsfolio",
    "full_name": "j1znuneel/blocsfolio",
    "private": false,
    "owner": {
      "login": "j1znuneel",
      "id": 201781483,
      "node_id": "U_kgDODAbw6w",
      "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/j1znuneel",
      "html_url": "https://github.com/j1znuneel",
      "followers_url": "https://api.github.com/users/j1znuneel/followers",
      "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
      "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
      "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
      "repos_url": "https://api.github.com/users/j1znuneel/repos",
      "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/j1znuneel/blocsfolio",
    "description": "Build your portfolio,block-by-block",
    "fork": false,
    "url": "https://api.github.com/repos/j1znuneel/blocsfolio",
    "forks_url": "https://api.github.com/repos/j1znuneel/blocsfolio/forks",
    "keys_url": "https://api.github.com/repos/j1znuneel/blocsfolio/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/j1znuneel/blocsfolio/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/j1znuneel/blocsfolio/teams",
    "hooks_url": "https://api.github.com/repos/j1znuneel/blocsfolio/hooks",
    "issue_events_url": "https://api.github.com/repos/j1znuneel/blocsfolio/issues/events{/number}",
    "events_url": "https://api.github.com/repos/j1znuneel/blocsfolio/events",
    "assignees_url": "https://api.github.com/repos/j1znuneel/blocsfolio/assignees{/user}",
    "branches_url": "https://api.github.com/repos/j1znuneel/blocsfolio/branches{/branch}",
    "tags_url": "https://api.github.com/repos/j1znuneel/blocsfolio/tags",
    "blobs_url": "https://api.github.com/repos/j1znuneel/blocsfolio/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/j1znuneel/blocsfolio/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/j1znuneel/blocsfolio/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/j1znuneel/blocsfolio/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/j1znuneel/blocsfolio/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/j1znuneel/blocsfolio/languages",
    "stargazers_url": "https://api.github.com/repos/j1znuneel/blocsfolio/stargazers",
    "contributors_url": "https://api.github.com/repos/j1znuneel/blocsfolio/contributors",
    "subscribers_url": "https://api.github.com/repos/j1znuneel/blocsfolio/subscribers",
    "subscription_url": "https://api.github.com/repos/j1znuneel/blocsfolio/subscription",
    "commits_url": "https://api.github.com/repos/j1znuneel/blocsfolio/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/j1znuneel/blocsfolio/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/j1znuneel/blocsfolio/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/j1znuneel/blocsfolio/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/j1znuneel/blocsfolio/contents/{+path}",
    "compare_url": "https://api.github.com/repos/j1znuneel/blocsfolio/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/j1znuneel/blocsfolio/merges",
    "archive_url": "https://api.github.com/repos/j1znuneel/blocsfolio/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/j1znuneel/blocsfolio/downloads",
    "issues_url": "https://api.github.com/repos/j1znuneel/blocsfolio/issues{/number}",
    "pulls_url": "https://api.github.com/repos/j1znuneel/blocsfolio/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/j1znuneel/blocsfolio/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/j1znuneel/blocsfolio/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/j1znuneel/blocsfolio/labels{/name}",
    "releases_url": "https://api.github.com/repos/j1znuneel/blocsfolio/releases{/id}",
    "deployments_url": "https://api.github.com/repos/j1znuneel/blocsfolio/deployments",
    "created_at": "2025-06-17T17:17:31Z",
    "updated_at": "2025-06-17T17:18:35Z",
    "pushed_at": "2025-06-17T17:18:31Z",
    "git_url": "git://github.com/j1znuneel/blocsfolio.git",
    "ssh_url": "git@github.com:j1znuneel/blocsfolio.git",
    "clone_url": "https://github.com/j1znuneel/blocsfolio.git",
    "svn_url": "https://github.com/j1znuneel/blocsfolio",
    "homepage": null,
    "size": 69,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.\n\nThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.\n"
  },
  {
    "id": 998012096,
    "node_id": "R_kgDOO3x0wA",
    "name": "anthakshari-frontend",
    "full_name": "j1znuneel/anthakshari-frontend",
    "private": false,
    "owner": {
      "login": "j1znuneel",
      "id": 201781483,
      "node_id": "U_kgDODAbw6w",
      "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/j1znuneel",
      "html_url": "https://github.com/j1znuneel",
      "followers_url": "https://api.github.com/users/j1znuneel/followers",
      "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
      "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
      "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
      "repos_url": "https://api.github.com/users/j1znuneel/repos",
      "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/j1znuneel/anthakshari-frontend",
    "description": "Frontend of anthakshari app",
    "fork": false,
    "url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend",
    "forks_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/forks",
    "keys_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/teams",
    "hooks_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/hooks",
    "issue_events_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/issues/events{/number}",
    "events_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/events",
    "assignees_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/assignees{/user}",
    "branches_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/branches{/branch}",
    "tags_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/tags",
    "blobs_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/languages",
    "stargazers_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/stargazers",
    "contributors_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/contributors",
    "subscribers_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/subscribers",
    "subscription_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/subscription",
    "commits_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/contents/{+path}",
    "compare_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/merges",
    "archive_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/downloads",
    "issues_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/issues{/number}",
    "pulls_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/labels{/name}",
    "releases_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/releases{/id}",
    "deployments_url": "https://api.github.com/repos/j1znuneel/anthakshari-frontend/deployments",
    "created_at": "2025-06-07T17:19:17Z",
    "updated_at": "2025-06-16T18:18:50Z",
    "pushed_at": "2025-06-16T18:18:46Z",
    "git_url": "git://github.com/j1znuneel/anthakshari-frontend.git",
    "ssh_url": "git@github.com:j1znuneel/anthakshari-frontend.git",
    "clone_url": "https://github.com/j1znuneel/anthakshari-frontend.git",
    "svn_url": "https://github.com/j1znuneel/anthakshari-frontend",
    "homepage": null,
    "size": 95,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 2,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 2,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.\n\nThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.\n"
  },
  {
    "id": 997539145,
    "node_id": "R_kgDOO3U9SQ",
    "name": "Anthakshari-web",
    "full_name": "j1znuneel/Anthakshari-web",
    "private": false,
    "owner": {
      "login": "j1znuneel",
      "id": 201781483,
      "node_id": "U_kgDODAbw6w",
      "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/j1znuneel",
      "html_url": "https://github.com/j1znuneel",
      "followers_url": "https://api.github.com/users/j1znuneel/followers",
      "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
      "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
      "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
      "repos_url": "https://api.github.com/users/j1znuneel/repos",
      "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/j1znuneel/Anthakshari-web",
    "description": "A online anthakshari web-app.",
    "fork": false,
    "url": "https://api.github.com/repos/j1znuneel/Anthakshari-web",
    "forks_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/forks",
    "keys_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/teams",
    "hooks_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/hooks",
    "issue_events_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/issues/events{/number}",
    "events_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/events",
    "assignees_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/assignees{/user}",
    "branches_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/branches{/branch}",
    "tags_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/tags",
    "blobs_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/languages",
    "stargazers_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/stargazers",
    "contributors_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/contributors",
    "subscribers_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/subscribers",
    "subscription_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/subscription",
    "commits_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/contents/{+path}",
    "compare_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/merges",
    "archive_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/downloads",
    "issues_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/issues{/number}",
    "pulls_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/labels{/name}",
    "releases_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/releases{/id}",
    "deployments_url": "https://api.github.com/repos/j1znuneel/Anthakshari-web/deployments",
    "created_at": "2025-06-06T17:47:14Z",
    "updated_at": "2025-06-16T18:18:34Z",
    "pushed_at": "2025-06-16T18:18:30Z",
    "git_url": "git://github.com/j1znuneel/Anthakshari-web.git",
    "ssh_url": "git@github.com:j1znuneel/Anthakshari-web.git",
    "clone_url": "https://github.com/j1znuneel/Anthakshari-web.git",
    "svn_url": "https://github.com/j1znuneel/Anthakshari-web",
    "homepage": null,
    "size": 34,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# Anthakshari-web\n"
  },
  {
    "id": 1003150695,
    "node_id": "R_kgDOO8rdZw",
    "name": "audio-record",
    "full_name": "j1znuneel/audio-record",
    "private": false,
    "owner": {
      "login": "j1znuneel",
      "id": 201781483,
      "node_id": "U_kgDODAbw6w",
      "avatar_url": "https://avatars.githubusercontent.com/u/201781483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/j1znuneel",
      "html_url": "https://github.com/j1znuneel",
      "followers_url": "https://api.github.com/users/j1znuneel/followers",
      "following_url": "https://api.github.com/users/j1znuneel/following{/other_user}",
      "gists_url": "https://api.github.com/users/j1znuneel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/j1znuneel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/j1znuneel/subscriptions",
      "organizations_url": "https://api.github.com/users/j1znuneel/orgs",
      "repos_url": "https://api.github.com/users/j1znuneel/repos",
      "events_url": "https://api.github.com/users/j1znuneel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/j1znuneel/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/j1znuneel/audio-record",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/j1znuneel/audio-record",
    "forks_url": "https://api.github.com/repos/j1znuneel/audio-record/forks",
    "keys_url": "https://api.github.com/repos/j1znuneel/audio-record/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/j1znuneel/audio-record/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/j1znuneel/audio-record/teams",
    "hooks_url": "https://api.github.com/repos/j1znuneel/audio-record/hooks",
    "issue_events_url": "https://api.github.com/repos/j1znuneel/audio-record/issues/events{/number}",
    "events_url": "https://api.github.com/repos/j1znuneel/audio-record/events",
    "assignees_url": "https://api.github.com/repos/j1znuneel/audio-record/assignees{/user}",
    "branches_url": "https://api.github.com/repos/j1znuneel/audio-record/branches{/branch}",
    "tags_url": "https://api.github.com/repos/j1znuneel/audio-record/tags",
    "blobs_url": "https://api.github.com/repos/j1znuneel/audio-record/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/j1znuneel/audio-record/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/j1znuneel/audio-record/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/j1znuneel/audio-record/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/j1znuneel/audio-record/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/j1znuneel/audio-record/languages",
    "stargazers_url": "https://api.github.com/repos/j1znuneel/audio-record/stargazers",
    "contributors_url": "https://api.github.com/repos/j1znuneel/audio-record/contributors",
    "subscribers_url": "https://api.github.com/repos/j1znuneel/audio-record/subscribers",
    "subscription_url": "https://api.github.com/repos/j1znuneel/audio-record/subscription",
    "commits_url": "https://api.github.com/repos/j1znuneel/audio-record/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/j1znuneel/audio-record/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/j1znuneel/audio-record/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/j1znuneel/audio-record/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/j1znuneel/audio-record/contents/{+path}",
    "compare_url": "https://api.github.com/repos/j1znuneel/audio-record/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/j1znuneel/audio-record/merges",
    "archive_url": "https://api.github.com/repos/j1znuneel/audio-record/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/j1znuneel/audio-record/downloads",
    "issues_url": "https://api.github.com/repos/j1znuneel/audio-record/issues{/number}",
    "pulls_url": "https://api.github.com/repos/j1znuneel/audio-record/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/j1znuneel/audio-record/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/j1znuneel/audio-record/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/j1znuneel/audio-record/labels{/name}",
    "releases_url": "https://api.github.com/repos/j1znuneel/audio-record/releases{/id}",
    "deployments_url": "https://api.github.com/repos/j1znuneel/audio-record/deployments",
    "created_at": "2025-06-16T17:46:58Z",
    "updated_at": "2025-06-16T17:47:43Z",
    "pushed_at": "2025-06-16T17:47:39Z",
    "git_url": "git://github.com/j1znuneel/audio-record.git",
    "ssh_url": "git@github.com:j1znuneel/audio-record.git",
    "clone_url": "https://github.com/j1znuneel/audio-record.git",
    "svn_url": "https://github.com/j1znuneel/audio-record",
    "homepage": null,
    "size": 28,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.\n\nThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.\n"
  }
]
  const skills = [
  "TypeScript",
  "Python",
  "JavaScript",
  "HTML"
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white shadow-lg">
              <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
              <AvatarFallback className="text-2xl">{(user.name || user.login).charAt(0)}</AvatarFallback>
            </Avatar>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {user.name || user.login}
            </h1>

            {user.bio && (
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                {user.bio}
              </p>
            )}

            <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm text-gray-600 dark:text-gray-400">
              {user.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
              )}
              {user.company && (
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {user.company}
                </div>
              )}
              {user.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Joined {new Date(user.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
                onClick={() => window.open(user.html_url, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
              {user.blog && (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(user.blog, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Website
                </Button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.public_repos}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Repositories
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.followers}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Followers
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.following}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Following
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <Card 
                key={repo.id} 
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {repo.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      {repo.homepage && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-gray-600 p-1"
                          onClick={() => window.open(repo.homepage, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600 p-1"
                        onClick={() => window.open(repo.html_url, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </div>
                    {repo.language && (
                      <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-xs bg-gray-50 border-gray-200 text-gray-600"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            Built with ❤️ using DevForge Portfolio Generator
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  )
}