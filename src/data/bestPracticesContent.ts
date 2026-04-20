import { Section, PageContent } from '../types/index';

export const bestPracticesSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'debugging-mindset', title: 'Debugging Mindset', icon: '🧠' },
  { id: 'ui-issues', title: 'UI & Frontend Issues', icon: '🖥️' },
  { id: 'logic-issues', title: 'Logic & Data Issues', icon: '🔢' },
  { id: 'error-messages', title: 'Reading Error Messages', icon: '🔴' },
  { id: 'browser-console', title: 'Browser DevTools', icon: '🔍' },
  { id: 'when-stuck', title: 'When You\'re Stuck', icon: '💡' },
  { id: 'good-habits', title: 'Good Habits', icon: '✅' },
];

export const bestPracticesContent: PageContent = {
  'debugging-mindset': [
    {
      title: 'Reproduce it first',
      examples: [
        {
          title: 'Can you make it happen again?',
          explanation: 'Before doing anything else, confirm you can consistently reproduce the problem. A bug you can reproduce is a bug you can fix. If you cannot reliably trigger it, you cannot know when you have fixed it.',
          keyIdeas: [
            'Can you make it happen again on demand?',
            'Does it happen every time, or only sometimes?',
            'Does it happen for everyone, or just you?',
            'What are the exact steps to trigger it?',
          ],
          pitfalls: [
            'Trying to fix something you cannot reliably reproduce',
            'Assuming it\'s fixed just because it stopped happening once',
            'Fixing the wrong thing because you misidentified what triggers it',
          ],
          code:
`// Reproduce checklist:
// 1. Clear your cache and hard-refresh (Ctrl+Shift+R)
// 2. Open an incognito/private window
// 3. Try on a different browser
// 4. Try on a different device or screen size
// 5. If intermittent: note the pattern
//    - Does it happen after a specific action?
//    - Is there a timing element?
//    - Does specific data cause it?`,
        },
      ],
    },
    {
      title: 'Isolate the problem',
      examples: [
        {
          title: 'Narrow down where the problem lives',
          explanation: 'Before touching code, figure out which layer the problem is in. Is it the UI rendering? The data? The logic? A network call? A third-party service? Half the battle is knowing where to look.',
          keyIdeas: [
            'What changed recently? Start there.',
            'Is it all data, or only specific data?',
            'Does it work with hardcoded values?',
            'Is it a frontend, backend, or network issue?',
          ],
          pitfalls: [
            'Diving into code before narrowing down the layer',
            'Changing multiple things at once — you won\'t know what fixed it',
            'Fixing symptoms at the wrong layer (e.g. patching UI when the data is wrong)',
          ],
          code:
`// Isolation steps:
// 1. Check what changed recently (git log, git diff)
// 2. Hardcode a value to bypass the data layer
//    Does the problem go away? → data issue
//    Still there? → logic or rendering issue
// 3. Check the network tab — is the right data arriving?
// 4. Log at each step to find where values change
//
// Divide and conquer:
// Comment out half the suspects, test.
// Problem gone? The bug is in what you removed.
// Still there? It's in the other half.`,
        },
      ],
    },
  ],

  'ui-issues': [
    {
      title: 'A button has stopped working',
      examples: [
        {
          title: 'Work backwards from the symptom',
          explanation: 'Don\'t assume the onClick handler is broken. There are several reasons a button might not respond, and most of them have nothing to do with the handler logic itself. Start from the outside and work inward.',
          keyIdeas: [
            'Is there a JavaScript error stopping execution before the click?',
            'Has the button been accidentally disabled?',
            'Is something transparent overlapping and intercepting the click?',
            'Did a CSS change add pointer-events: none?',
          ],
          pitfalls: [
            'Going straight to the handler logic without checking for JS errors first',
            'Forgetting that a transparent overlay or absolutely-positioned element can block all clicks',
            'Not checking whether the button is disabled via a prop or attribute',
          ],
          code:
`// Debug a non-working button — in order:
// 1. Open DevTools > Console (F12)
//    Any errors? Fix those first.
//
// 2. Add a log as the very first line of the handler:
//    console.log('button clicked')
//    Does it fire? If not, the handler isn't reaching.
//
// 3. Inspect the element:
//    - Is it disabled? (disabled attribute or prop)
//    - Is it hidden? (display: none, visibility: hidden)
//    - Is it covered? (another element on top)
//
// 4. Check CSS:
//    pointer-events: none  → blocks all clicks
//    z-index               → something else may be on top
//    opacity: 0            → invisible but still there
//
// 5. Check for a parent capturing the event:
//    e.stopPropagation() being called somewhere above?`,
        },
      ],
    },
    {
      title: 'An element isn\'t showing up',
      examples: [
        {
          title: 'Rendered, hidden, or never there?',
          explanation: 'Visibility issues fall into three categories: the element was never rendered (conditional logic), it\'s in the DOM but invisible (CSS), or it\'s rendered but off-screen. Each has a different fix.',
          keyIdeas: [
            'Is it in the DOM at all? Right-click > Inspect and search.',
            'Is the condition controlling it actually true?',
            'Is it hidden by CSS? Check computed styles.',
            'Is the data it depends on null or loading?',
          ],
          pitfalls: [
            'Hunting through CSS when the element was never rendered in the first place',
            'Assuming a condition is true without logging the value',
            'Not accounting for async data — the component renders before the data arrives',
          ],
          code:
`// Element not showing — checklist:
// 1. Is it in the DOM?
//    Right-click the page > Inspect, then Ctrl+F in the Elements panel
//
// 2. Is the condition true? Log it:
//    console.log('should show?', isVisible, userData)
//
// 3. Is it hidden by CSS?
//    DevTools > Elements > Computed tab
//    Check: display, visibility, opacity, height, overflow
//
// 4. Temporarily add a background to find it:
//    style={{ background: 'red', minHeight: 20 }}
//
// 5. Is it waiting on async data?
//    Add a loading state — render a placeholder first`,
        },
      ],
    },
  ],

  'logic-issues': [
    {
      title: 'A value is not what I expect',
      examples: [
        {
          title: 'Trace the value backwards',
          explanation: 'When a value looks wrong at the point you\'re using it, trace it back to where it originated. Don\'t assume — log it at every step. You\'ll find the exact point where it goes wrong.',
          keyIdeas: [
            'Log the value where you see the problem, then one step earlier, and keep going',
            'Check the type — a string "5" and a number 5 behave differently',
            'Is it null or undefined somewhere in the chain?',
            'Is the data stale — old state, cached response, or previous render?',
          ],
          pitfalls: [
            'Fixing where the value is used instead of where it goes wrong',
            'Not checking type: "5" + 1 = "51" in JavaScript',
            'Logging after the fact and seeing the mutated value, not the original',
          ],
          code:
`// Trace a bad value:
// 1. Log it where you see it wrong:
//    console.log('value at render:', myValue, typeof myValue)
//
// 2. Log it one step earlier (where it was set or passed)
// 3. Keep going until the log looks correct
// 4. The step where it changed is where the bug lives
//
// Common culprits:
// - Type coercion: "10" - 1 = 9, but "10" + 1 = "101"
// - Off-by-one in loops or array indices
// - Mutating shared/global state
// - Async code running in the wrong order
// - Wrong key name in an object (typo, case)
// - Default value masking the real value`,
        },
      ],
    },
    {
      title: 'Something works, then randomly breaks',
      examples: [
        {
          title: 'Intermittent bugs',
          explanation: 'Intermittent bugs are usually caused by timing (async code), state that accumulates over time, or dependency on data that isn\'t always the same. The goal is to make the bug happen consistently.',
          keyIdeas: [
            'Can you make it happen every time? That\'s the real goal.',
            'Is there a race condition — two things happening in the wrong order?',
            'Does it only break after a specific sequence of user actions?',
            'Is stale state or cached data involved?',
          ],
          pitfalls: [
            'Declaring it fixed because it worked once',
            'Not clearing localStorage, cookies, or cache when testing state-related bugs',
            'Testing in isolation when the bug only appears after prior state has built up',
          ],
          code:
`// Intermittent bug approach:
// 1. Try to reproduce it consistently
//    Note the exact sequence of steps that triggers it
//
// 2. Add logging around the area:
//    console.log('state before:', state)
//    console.log('action fired:', action)
//    console.log('state after:', newState)
//
// 3. Check if timing is involved:
//    Is data being read before it's ready?
//    Are two async operations completing in varying order?
//
// 4. Reset all local state:
//    Clear localStorage, sessionStorage, cookies
//    Open a fresh incognito window
//
// 5. Check if a specific sequence triggers it:
//    Does it only happen after navigating away and back?
//    Only after a failed request? Only on the second load?`,
        },
      ],
    },
  ],

  'error-messages': [
    {
      title: 'Don\'t skip the error message',
      examples: [
        {
          title: 'Read the whole thing before Googling',
          explanation: 'Error messages tell you exactly what went wrong, which file, and which line. Most developers scan too quickly and miss the key information. Slow down and read the first line — that is the actual error.',
          keyIdeas: [
            'The first line is the error. The rest is the stack trace.',
            'The stack trace shows you the chain of calls that led to the crash',
            'Your code is at the top of the stack — library code is further down',
            'Google the exact error message in quotes for precise results',
          ],
          pitfalls: [
            'Ignoring the line number and hunting randomly through the code',
            'Googling only part of the message and getting irrelevant results',
            'Assuming the error is in your code when the stack trace points to the boundary with a library',
          ],
          code:
`// How to read a stack trace:
//
// TypeError: Cannot read properties of undefined (reading 'map')
//   at UserList (UserList.jsx:42)      <-- YOUR code, line 42
//   at renderWithHooks (react-dom.js)  <-- React internals
//   at mountIndeterminateComponent...
//
// Translation:
// Something is undefined on line 42 of UserList.jsx
// and you're calling .map() on it.
// → Go to line 42, log the variable on line 41.
//
// Google tip:
// Search: "Cannot read properties of undefined reading map" site:stackoverflow.com`,
        },
      ],
    },
    {
      title: 'Common error patterns',
      examples: [
        {
          title: 'Recognise the category, speed up the fix',
          explanation: 'Most errors fall into a handful of categories. Once you recognise the pattern, you know where to look without reading the full stack trace each time.',
          code:
`// TypeError
//   → null or undefined where you expected a value
//   → Check the data coming in. Add a guard: if (!value) return

// ReferenceError
//   → Using a variable that doesn't exist in this scope
//   → Check spelling, imports, and where it was declared

// SyntaxError
//   → Broken code structure (missing bracket, bad syntax)
//   → Usually flagged in your editor before you even run it

// 404 Not Found
//   → Wrong URL for a resource, image, or API endpoint
//   → Check the Network tab for the exact URL being requested

// 500 Internal Server Error
//   → Something broke on the server side
//   → Check server logs — the browser error won't tell you much

// CORS Error
//   → Browser blocked the request to a different origin
//   → The backend needs to set the correct Access-Control headers`,
        },
      ],
    },
  ],

  'browser-console': [
    {
      title: 'The console is your best friend',
      examples: [
        {
          title: 'Learn the tools before you need them',
          explanation: 'The browser DevTools are the fastest way to see what\'s actually happening at runtime. Learning to use them before you hit a bug makes debugging significantly faster. Most developers only use the Console tab — the others are just as valuable.',
          keyIdeas: [
            'F12 (or Cmd+Option+I on Mac) opens DevTools in most browsers',
            'Console tab: errors, warnings, and your log statements',
            'Network tab: every request the page makes — check status codes and responses',
            'Elements tab: the live DOM — not just what you wrote, but what the browser rendered',
            'Sources tab: set breakpoints and step through code line by line',
          ],
          pitfalls: [
            'Only ever looking at the Console and missing a failing network request',
            'Not checking the Network tab when data looks wrong',
            'Reading the source HTML instead of the live Elements tab (they can differ)',
          ],
          code:
`// Console cheatsheet:
// console.log(value)          → print any value
// console.log({ a, b, c })   → log multiple values with labels
// console.table(array)        → format an array as a table
// console.error(msg)          → shows in red
// console.warn(msg)           → shows in yellow
// console.group('label')      → group related logs together

// Network tab tips:
// - Filter by Fetch/XHR to see only API calls
// - Status 200 = OK, 201 = Created, 400 = Bad request,
//   401 = Unauthorized, 403 = Forbidden,
//   404 = Not found, 500 = Server error
// - Check "Response" tab to see what the server returned
// - Check "Payload" tab to see what you sent`,
        },
      ],
    },
    {
      title: 'Using breakpoints',
      examples: [
        {
          title: 'Stop time and inspect everything',
          explanation: 'A console.log tells you one value at one moment. A breakpoint pauses execution and lets you inspect every variable in scope. For tricky bugs, this is far faster than adding log after log.',
          keyIdeas: [
            'Click the line number in the Sources tab to set a breakpoint',
            'The debugger keyword in your code also pauses execution',
            'Step Over (F10): run the next line without entering functions',
            'Step Into (F11): enter the function on the current line',
            'The Scope panel shows every variable in the current context',
          ],
          pitfalls: [
            'Writing ten console.log statements when one breakpoint would show everything',
            'Not knowing that debugger; works in any browser dev environment',
          ],
          code:
`// Setting a breakpoint in code:
function handleSubmit(data) {
  debugger; // ← execution pauses here in DevTools
  const result = processData(data);
  return result;
}

// Or click the line number in DevTools > Sources tab

// Once paused, you can:
// - Hover over any variable to see its value
// - Type variable names in the Console to inspect them
// - Step through line by line with F10
// - Resume execution with F8`,
        },
      ],
    },
  ],

  'when-stuck': [
    {
      title: 'The rubber duck method',
      examples: [
        {
          title: 'Explain it out loud',
          explanation: 'Explaining your problem out loud — to a colleague, a rubber duck, or even just yourself — forces your brain to process the problem differently. More often than not, you\'ll spot the issue mid-explanation. This isn\'t a joke; it works.',
          keyIdeas: [
            'Verbalise what the code should do',
            'Then describe what it actually does',
            'The gap between the two is your bug',
            'You often catch yourself saying "...and then it should— oh."',
          ],
          pitfalls: [
            'Spending hours staring at code before trying this',
            'Skipping it because it feels silly',
            'Only doing it in your head — saying it out loud is what makes it work',
          ],
          code:
`// The rubber duck process:
//
// 1. Say out loud: "When I do X, I expect Y to happen"
//
// 2. Say out loud: "But instead, Z happens"
//
// 3. Walk through the code line by line, out loud,
//    explaining every line as if to someone who has
//    never seen code before
//
// 4. Explain every assumption you are making
//    "This variable should be an array here..."
//    "This condition should be true because..."
//
// You will often catch yourself mid-sentence:
// "...so this should return the user object, and then
//  I call .name on it— oh. It returns a promise."`,
        },
      ],
    },
    {
      title: 'Take a break',
      examples: [
        {
          title: 'Tunnel vision is real',
          explanation: 'After staring at the same bug for too long, your brain gets tunnel vision. You stop seeing obvious things. A short break resets your perspective, and the solution often appears within minutes of returning.',
          keyIdeas: [
            'Set a timer — if stuck for 25 minutes, step away',
            'Do something completely unrelated',
            'Sleeping on a hard problem genuinely works',
            'Write down your current thinking before stepping away',
          ],
          pitfalls: [
            'Feeling like taking a break is giving up or wasting time',
            'Not writing down your state — you\'ll lose your thread',
            'Continuing to think about the bug during the break',
          ],
          code:
`// Signs it's time for a break:
// - You've read the same line 10+ times
// - You're changing things "just to see what happens"
// - You're not sure what you changed anymore
// - You feel frustrated, anxious, or defeated
// - Your changes are getting more random, not more targeted

// Before stepping away, write down:
// 1. "I think the problem is ___"
// 2. "I've already tried ___"
// 3. "The next thing I was going to try is ___"
//
// This gives you a clear starting point when you return
// and often looks obviously wrong when you come back fresh.`,
        },
      ],
    },
    {
      title: 'Asking for help',
      examples: [
        {
          title: 'Make your question easy to answer',
          explanation: 'When asking for help, the quality of your question determines the quality of the answer. A well-formed question often leads you to the answer yourself — and if it doesn\'t, it makes it much easier for someone else to help.',
          keyIdeas: [
            'Describe what you expected vs what actually happened',
            'Share the error message (the full thing, not a summary)',
            'Share the relevant code — not the whole file',
            'Mention what you\'ve already tried',
          ],
          pitfalls: [
            '"It\'s broken" with no context — nobody can help from that',
            'Sharing too much code — narrow it down first',
            'Asking before trying rubber ducking and a fresh read-through',
            'Not including the error message',
          ],
          code:
`// A good help request includes:
//
// 1. What are you trying to do?
//    "I'm trying to fetch user data and render it in a list"
//
// 2. What is happening instead?
//    "The list renders empty even though the request succeeds"
//
// 3. What does the error say? (paste the full message)
//    "No error in the console — the array just has 0 items"
//
// 4. What have you already tried?
//    "I logged the response — the data is there (200 OK)"
//    "I confirmed setState is being called with the data"
//    "It works with hardcoded data, so the component is fine"
//
// 5. Paste the smallest snippet that shows the problem
//    Not 200 lines — just the relevant function`,
        },
      ],
    },
  ],

  'good-habits': [
    {
      title: 'Make one change at a time',
      examples: [
        {
          title: 'Know what fixed it',
          explanation: 'When debugging, the temptation is to throw multiple changes at the problem and see what sticks. This is "shotgun debugging" — and even when it works, you don\'t know why, which means the next similar bug starts from zero again.',
          keyIdeas: [
            'Change one thing, then test',
            'Keep a note of what you\'ve tried and what happened',
            'If it breaks worse, undo immediately',
            'Commit working state before starting an experiment',
          ],
          pitfalls: [
            'Changing three things at once and not knowing which one helped',
            'Losing track of what the code looked like before you started',
            'Accidentally fixing a symptom with an unrelated change',
          ],
          code:
`// The single-change rule:
//
// Before touching anything:
//   git stash   (or commit the current working state)
//
// Make ONE change. Test.
//   → Did it help?  Keep it. Note why it helped.
//   → Did it break more?  git stash pop, back to baseline.
//
// This keeps you in control at every step.
// It also builds genuine understanding of the codebase
// rather than a collection of things you tried until
// something worked.`,
        },
      ],
    },
    {
      title: 'Read the docs',
      examples: [
        {
          title: 'Most bugs are misunderstandings',
          explanation: 'A large proportion of bugs come from assuming a function, API, or framework works differently than it does. The documentation describes the intended behaviour — including the edge cases, return values, and gotchas that trip people up.',
          keyIdeas: [
            'Check the version — old docs for a new version are worse than no docs',
            'Look for "common mistakes", "caveats", or "gotchas" sections',
            'Check whether a method mutates the original or returns a new value',
            'Check what a function returns when it fails (undefined? null? false? throws?)',
          ],
          pitfalls: [
            'Assuming a method works the same as a similar one from another language',
            'Not checking the return type and treating it as something it\'s not',
            'Skimming the first example and missing the caveats below it',
          ],
          code:
`// Easy-to-miss behaviours worth knowing:

// Array.sort() mutates the original array
// Array.map() returns a NEW array — original unchanged
// Array.forEach() returns undefined — you can't chain it

// String methods NEVER mutate — strings are immutable
//   str.toUpperCase() returns a new string

// fetch() does NOT throw on 4xx/5xx errors
//   Check response.ok or response.status manually

// parseInt('10px') === 10  (ignores trailing characters)
// Number('10px')   === NaN (stricter)

// setTimeout callback runs AFTER the current call stack
//   State set inside it may already be stale

// JSON.stringify doesn't include undefined values or functions`,
        },
      ],
    },
    {
      title: 'Version control as a safety net',
      examples: [
        {
          title: 'Commit before you experiment',
          explanation: 'Git isn\'t just for collaboration — it\'s a personal safety net. Committing before a risky change means you can always get back to a known-good state. Many developers only commit when something works, which means experiments carry real risk.',
          keyIdeas: [
            'Commit (or stash) before starting any significant change',
            'Commit whenever something works — even if it\'s messy',
            'Small, frequent commits make it easy to pinpoint what broke',
            'git diff shows you exactly what you\'ve changed so far',
          ],
          pitfalls: [
            'Making twenty changes before committing and not knowing what caused a regression',
            'Using "big cleanup" commits that mix unrelated changes',
            'Not using git stash for quick experiments',
          ],
          code:
`// Before experimenting:
git stash          // save current work, revert to last commit
// ... try the experiment ...
git stash pop      // bring your work back (if you want it)

// Quick save before a risky change:
git add .
git commit -m "wip: working state before refactor"

// See what you've changed since the last commit:
git diff

// Find when a bug was introduced:
git log --oneline  // find the last known-good commit
git diff abc123 HEAD src/components/MyComponent.tsx`,
        },
      ],
    },
  ],
};
