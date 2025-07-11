import { Section, PageContent } from '../types/index';

export const gitSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basic Commands', icon: '📝' },
  { id: 'commits', title: 'Commits', icon: '💾' },
  { id: 'branches', title: 'Branches', icon: '🌿' },
  { id: 'remote', title: 'Remote Repos', icon: '🌐' },
  { id: 'history', title: 'History & Logs', icon: '📜' },
  { id: 'staging', title: 'Staging Area', icon: '📦' },
  { id: 'merging', title: 'Merging', icon: '🔀' },
  { id: 'undoing', title: 'Undoing Changes', icon: '↩️' },
  { id: 'tags', title: 'Tags', icon: '🏷️' },
  { id: 'stash', title: 'Stash', icon: '📦' },
  { id: 'config', title: 'Configuration', icon: '⚙️' },
  { id: 'workflow', title: 'Workflow', icon: '🔄' }
];

export const gitContent: PageContent = {
  basics: [
    {
      title: 'How to initialize a repository',
      examples: [
        {
          title: 'Initialize Git Repository',
          code: 'git init'
        },
        {
          title: 'Clone Existing Repository',
          code: 'git clone <repository-url>'
        }
      ]
    },
    {
      title: 'How to check status',
      examples: [
        {
          title: 'Check Repository Status',
          code: 'git status'
        },
        {
          title: 'Short Status',
          code: 'git status -s'
        }
      ]
    }
  ],
  commits: [
    {
      title: 'How to make a commit',
      examples: [
        {
          title: 'Add and Commit',
          code: 'git add .\ngit commit -m "Your commit message"'
        },
        {
          title: 'Add Specific Files',
          code: 'git add filename.js\ngit commit -m "Add specific file"'
        }
      ]
    },
    {
      title: 'How to amend last commit',
      examples: [
        {
          title: 'Amend Commit Message',
          code: 'git commit --amend -m "New commit message"'
        },
        {
          title: 'Add Files to Last Commit',
          code: 'git add forgotten-file.js\ngit commit --amend --no-edit'
        }
      ]
    }
  ]
}; 