# Workflow

All changes in this repo, however small, go through a full branch -> commit
-> push -> PR -> merge workflow rather than being left as uncommitted changes
or committed directly to `master`. Use the `ship-branch` skill to do this:

1. Create a branch off `master` named for what the change does.
2. Commit with a message explaining why.
3. Push and open a PR (`gh pr create`) with a real summary/test plan.
4. Merge the PR into `master` (`gh pr merge --merge --delete-branch`). This
   repo's branch protection requires review, so merging as the repo
   owner needs `--admin` to bypass that requirement - this is expected here,
   not a workaround to flag twice.
5. Switch back to `master` and pull so the local repo ends up in sync.

Do this automatically once a change is ready, without waiting to be asked
each time.
