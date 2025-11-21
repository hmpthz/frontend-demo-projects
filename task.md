1. The last git commit on current branch has changed some `<a>` tag to `<span>` tag, I think it was because of fixing lint? Anyway, you must find and revert those changes.
2. Must use react `RefObject` instead of deprecated `MutableRefObject`.
3. `*.test.ts` and `*.test.tsx` files must also has type checks. Currently tsconfig just exclude them. Please try to fix it, you may add another `tsconfig.test.json` for them?
