import { Section, PageContent } from '../types/index';

export const pythonSections: Section[] = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Basics', icon: '📚' },
  { id: 'functions', title: 'Functions', icon: '⚙️' },
  { id: 'lists', title: 'Lists', icon: '📋' },
  { id: 'dicts', title: 'Dictionaries', icon: '📖' },
  { id: 'strings', title: 'Strings', icon: '📝' },
  { id: 'loops', title: 'Loops & Comprehensions', icon: '🔄' },
  { id: 'oop', title: 'Classes & OOP', icon: '🏗️' },
  { id: 'errors', title: 'Error Handling', icon: '⚠️' },
  { id: 'modules', title: 'Modules & stdlib', icon: '📦' }
];

export const pythonContent: PageContent = {
  basics: [
    {
      title: 'Types and Variables',
      examples: [
        {
          title: 'Python\'s type system — dynamic but not untyped',
          explanation: "Python is dynamically typed — variables don't have declared types, values do. Python 3.5+ added type hints which are ignored at runtime but used by type checkers like mypy. Write them for any code that will be read by others (or your future self).",
          keyIdeas: [
            'Variables are just labels pointing to objects — reassigning to a different type is fine',
            'Type hints annotate intent but don\'t enforce at runtime',
            '`type()` returns the type of any object; `isinstance()` checks membership including subclasses',
            'Everything in Python is an object — even integers and functions'
          ],
          pitfalls: [
            'Variables are references, not copies — assigning `b = a` where a is a list makes both point to the same list',
            'Type hints are ignored at runtime — `x: int = "hello"` raises no error without a type checker',
            'Avoid mutable default arguments (see Functions section) — one of Python\'s most common bugs'
          ],
          code: `# Dynamic typing — the variable holds whatever you assign
x = 42          # int
x = "hello"     # now a string — no error
x = [1, 2, 3]  # now a list

# Type hints — not enforced, but document intent and enable static analysis
name: str = "Alice"
age: int = 30
scores: list[int] = [90, 85, 92]
data: dict[str, int] = {"a": 1, "b": 2}

# Optional type
from typing import Optional
def find_user(user_id: int) -> Optional[str]:
    return None  # or a name

# Checking types
print(type(42))         # <class 'int'>
print(isinstance(42, int))     # True
print(isinstance(True, int))   # True — bool is a subclass of int

# References, not copies
a = [1, 2, 3]
b = a           # b points to the SAME list
b.append(4)
print(a)        # [1, 2, 3, 4] — a is affected!

# Make an actual copy
c = a.copy()    # or list(a) or a[:]`
        },
        {
          title: 'Truthiness, None, and comparisons',
          explanation: "Python has a flexible concept of truthiness — many values are falsy beyond just `False`. Understanding this lets you write idiomatic Python. `None` is Python's null equivalent, and identity (`is`) is different from equality (`==`).",
          keyIdeas: [
            'Falsy: `False`, `None`, `0`, `0.0`, `""`, `[]`, `{}`, `()`, `set()`',
            'Everything else is truthy — including `"0"`, `[0]`, `{False: 0}`',
            '`is` checks identity (same object); `==` checks equality (same value)',
            'Use `is None` not `== None` — `None` is a singleton'
          ],
          pitfalls: [
            'Using `== None` instead of `is None` — technically works but is non-idiomatic and slower',
            'Checking `if len(mylist) > 0:` — just write `if mylist:`',
            'Confusing `is` and `==` for strings — small strings may be interned (same object), but this is an implementation detail'
          ],
          code: `# Falsy values
if not None:    print("None is falsy")
if not []:      print("empty list is falsy")
if not {}:      print("empty dict is falsy")
if not "":      print("empty string is falsy")
if not 0:       print("zero is falsy")

# Idiomatic truthiness checks
users = []
if users:                    # preferred over: if len(users) > 0:
    print("has users")
else:
    print("no users")

# None checks — always use is
value = None
if value is None:            # correct
    print("is None")
# if value == None:          # works but non-idiomatic

# is vs ==
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)   # True — same values
print(a is b)   # False — different objects

c = a
print(a is c)   # True — same object

# Conditional expression (ternary)
role = "admin" if user.is_staff else "user"`
        }
      ]
    },
    {
      title: 'Unpacking and Multiple Assignment',
      examples: [
        {
          title: 'Destructuring and starred unpacking',
          explanation: "Python's unpacking syntax lets you assign multiple variables at once from any iterable. The starred `*` operator captures the 'rest'. This is more expressive than indexing and is widely used in idiomatic Python.",
          keyIdeas: [
            'Tuple unpacking works on any iterable, not just tuples',
            '`*rest` captures remaining items into a list',
            'Swap variables without a temp: `a, b = b, a`',
            'Works in `for` loops and function returns'
          ],
          pitfalls: [
            'The number of variables must match the iterable length unless using `*`',
            '`*` can only appear once on the left side',
            'Deeply nested unpacking is allowed but hurts readability'
          ],
          code: `# Basic unpacking
x, y = 10, 20
a, b, c = [1, 2, 3]
first, *rest = [1, 2, 3, 4, 5]
# first = 1, rest = [2, 3, 4, 5]

*start, last = [1, 2, 3, 4, 5]
# start = [1, 2, 3, 4], last = 5

head, *middle, tail = [1, 2, 3, 4, 5]
# head = 1, middle = [2, 3, 4], tail = 5

# Swap without temp variable
a, b = 1, 2
a, b = b, a  # a=2, b=1

# Unpacking in for loops
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
for num, letter in pairs:
    print(f"{num}: {letter}")

# Ignoring values
_, important, _ = (1, 2, 3)

# Function returning multiple values (returns a tuple)
def min_max(nums):
    return min(nums), max(nums)

low, high = min_max([3, 1, 4, 1, 5, 9])`
        }
      ]
    }
  ],

  functions: [
    {
      title: 'Arguments and Signatures',
      examples: [
        {
          title: '*args, **kwargs, and argument ordering',
          explanation: "Python functions have a rich argument system. `*args` collects positional overflow into a tuple; `**kwargs` collects keyword overflow into a dict. The `/` and `*` markers in signatures enforce positional-only and keyword-only arguments.",
          keyIdeas: [
            '`*args` — positional overflow → tuple',
            '`**kwargs` — keyword overflow → dict',
            'Argument order: positional → *args → keyword-only → **kwargs',
            '`*` alone in a signature makes everything after it keyword-only'
          ],
          pitfalls: [
            'Mutable default arguments (`def f(x=[])`) are shared across all calls — use `None` as default and create inside',
            '`*args` and `**kwargs` together accept anything — lose the type safety of explicit params',
            'Keyword-only args after `*` are easy to miss when reading call sites'
          ],
          code: `# Mutable default — the classic bug
def append_to(item, lst=[]):  # lst is created ONCE
    lst.append(item)
    return lst

append_to(1)  # [1]
append_to(2)  # [1, 2] — not [2]!

# Fix: use None as default
def append_to(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

# *args — variable positional arguments
def sum_all(*args: int) -> int:
    return sum(args)

sum_all(1, 2, 3, 4)  # 10

# **kwargs — variable keyword arguments
def create_user(name: str, **kwargs):
    user = {"name": name}
    user.update(kwargs)
    return user

create_user("Alice", age=30, role="admin")

# Keyword-only arguments (after *)
def query(table: str, *, limit: int = 100, offset: int = 0):
    pass

query("users", limit=10)       # OK
# query("users", 10)            # Error! limit is keyword-only

# Positional-only (before /)
def distance(x, y, /):
    return (x**2 + y**2) ** 0.5

distance(3, 4)        # OK
# distance(x=3, y=4)  # Error! x,y are positional-only`
        },
        {
          title: 'Decorators — wrapping functions with behaviour',
          explanation: "A decorator is a function that takes a function and returns a new function. They're syntactic sugar for `fn = decorator(fn)`. Used for logging, caching, auth checks, retry logic — anything you want to apply to many functions without repeating code.",
          keyIdeas: [
            'A decorator is just a callable that wraps another callable',
            '`functools.wraps` preserves the original function\'s name and docstring',
            'Decorators with arguments need an extra layer of nesting',
            'Class-based decorators are useful when the decorator needs to maintain state'
          ],
          pitfalls: [
            'Forgetting `functools.wraps` breaks introspection — `fn.__name__` becomes the wrapper\'s name',
            'Decorators execute at import time (when the module loads), not when the function is called',
            'Stacked decorators apply bottom-up: `@a\\n@b\\ndef f` is `a(b(f))`'
          ],
          code: `import functools
import time

# Basic decorator
def timer(func):
    @functools.wraps(func)  # preserves func.__name__, __doc__
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.3f}s")
        return result
    return wrapper

@timer
def slow_operation():
    time.sleep(0.1)

# Decorator with arguments — needs an extra layer
def retry(max_attempts: int = 3, exceptions=(Exception,)):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}")
        return wrapper
    return decorator

@retry(max_attempts=3, exceptions=(ConnectionError,))
def fetch_data(url: str):
    pass  # makes an HTTP request

# Caching with functools.lru_cache
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n: int) -> int:
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)`
        }
      ]
    },
    {
      title: 'Closures and Lambda',
      examples: [
        {
          title: 'Closures — functions that remember their scope',
          explanation: "A closure is a function that captures variables from its enclosing scope. The inner function retains access to those variables even after the outer function has returned. This enables factory patterns and stateful functions without classes.",
          keyIdeas: [
            'The inner function "closes over" variables from the outer scope',
            'Closures are one way to implement function factories and partial application',
            '`functools.partial` is often cleaner than hand-rolling a closure',
            'Use `nonlocal` to modify an outer variable from the inner function'
          ],
          pitfalls: [
            'Loop variable capture bug: closures in loops capture the variable, not the value — use a default arg to capture the value',
            '`nonlocal` only goes up one scope level at a time',
            'Overusing closures for state that belongs in a class'
          ],
          code: `# Basic closure — function factory
def make_multiplier(factor: int):
    def multiply(n: int) -> int:
        return n * factor  # captures 'factor' from enclosing scope
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))  # 10
print(triple(5))  # 15

# Loop closure bug — classic trap
fns = [lambda: i for i in range(3)]
print([f() for f in fns])  # [2, 2, 2] — all see i=2!

# Fix: capture the value as a default argument
fns = [lambda i=i: i for i in range(3)]
print([f() for f in fns])  # [0, 1, 2]

# nonlocal — modify outer variable
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = counter()
print(c())  # 1
print(c())  # 2

# functools.partial — cleaner than a closure for partial application
from functools import partial

def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
cube = partial(power, exp=3)
print(square(4))  # 16`
        }
      ]
    }
  ],

  lists: [
    {
      title: 'List Operations and Patterns',
      examples: [
        {
          title: 'Slicing, sorting, and common patterns',
          explanation: "Python lists have a powerful slicing syntax and a rich set of methods. Understanding slicing and the difference between `sort()` (in-place) and `sorted()` (new list) is essential for idiomatic Python.",
          keyIdeas: [
            'Slice: `lst[start:stop:step]` — all parts optional',
            '`lst.sort()` mutates in place; `sorted(lst)` returns a new list',
            '`key=` accepts any callable — use it for custom sort logic',
            '`enumerate()` gives you index+value; `zip()` pairs two iterables'
          ],
          pitfalls: [
            '`a = b` for lists is a reference copy — both point to the same list',
            '`list.sort()` returns `None`, not the list — a common mistake when chaining',
            'Modifying a list while iterating over it causes skipped items — iterate over a copy or use a list comprehension'
          ],
          code: `# Slicing
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
nums[2:5]       # [2, 3, 4]
nums[:3]        # [0, 1, 2]
nums[7:]        # [7, 8, 9]
nums[::2]       # [0, 2, 4, 6, 8] — every other
nums[::-1]      # [9, 8, 7, ..., 0] — reversed

# Sorting
words = ["banana", "apple", "cherry"]
words.sort()                           # in-place, returns None
ordered = sorted(words)               # new list, original unchanged

# Custom sort key
people = [{"name": "Bob", "age": 30}, {"name": "Alice", "age": 25}]
people.sort(key=lambda p: p["age"])   # sort by age
people.sort(key=lambda p: p["name"]) # sort by name

# Multiple sort keys
from operator import itemgetter
people.sort(key=itemgetter("age", "name"))

# enumerate — index and value together
for i, name in enumerate(["Alice", "Bob", "Carol"], start=1):
    print(f"{i}. {name}")

# zip — pair up two lists
names = ["Alice", "Bob"]
scores = [90, 85]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

combined = list(zip(names, scores))  # [('Alice', 90), ('Bob', 85)]
name_dict = dict(zip(names, scores)) # {'Alice': 90, 'Bob': 85}`
        },
        {
          title: 'List comprehensions — Python\'s superpower',
          explanation: "List comprehensions are a concise way to build lists by transforming and filtering iterables. They're faster than equivalent `for` loops and considered the most Pythonic way to create lists.",
          keyIdeas: [
            'Syntax: `[expression for item in iterable if condition]`',
            'The `if` condition is optional — filters items where condition is falsy',
            'Nested comprehensions replace nested loops',
            'Dict and set comprehensions follow the same pattern'
          ],
          pitfalls: [
            'Multi-line comprehensions with complex logic belong in a regular for loop',
            'Nested comprehensions beyond two levels are usually unreadable',
            'Using comprehensions just for side effects (printing, etc.) — use a regular loop for that'
          ],
          code: `# Basic: transform
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With filter
evens = [x for x in range(20) if x % 2 == 0]

# Combining transform and filter
processed = [x.strip().lower() for x in lines if x.strip()]

# Nested comprehension — flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Dict comprehension
word_lengths = {word: len(word) for word in ["hello", "world", "python"]}
# {'hello': 5, 'world': 5, 'python': 6}

# Invert a dict
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}

# Set comprehension
unique_lengths = {len(word) for word in words}

# Generator expression — lazy version (no brackets)
total = sum(x**2 for x in range(1000000))  # doesn't build the full list`
        }
      ]
    }
  ],

  dicts: [
    {
      title: 'Dictionary Patterns and Techniques',
      examples: [
        {
          title: 'Safe access, merging, and dict comprehensions',
          explanation: "Dicts are one of Python's most-used data structures. Key patterns: safe access with `.get()`, merging dicts, and using dicts as dispatch tables instead of long if/elif chains.",
          keyIdeas: [
            '`.get(key, default)` — safe access that returns default instead of raising KeyError',
            '`|` (Python 3.9+) or `{**a, **b}` — merge dicts',
            '`.setdefault()` and `defaultdict` — auto-initialize missing keys',
            '`.items()`, `.keys()`, `.values()` — iterate over parts of a dict'
          ],
          pitfalls: [
            'Iterating over a dict while modifying it raises a RuntimeError — iterate over `list(d.keys())`',
            'Dict ordering is guaranteed (insertion order) from Python 3.7+, but don\'t rely on it for logic',
            'Nested dict access like `d["a"]["b"]` raises KeyError if "a" is missing'
          ],
          code: `# Safe access
user = {"name": "Alice", "age": 30}
email = user.get("email")           # None (no error)
email = user.get("email", "")       # "" as default

# KeyError with plain access
# role = user["role"]  # raises KeyError

# Merging dicts
defaults = {"timeout": 30, "retries": 3}
overrides = {"timeout": 60}

# Python 3.9+
config = defaults | overrides      # {'timeout': 60, 'retries': 3}

# Earlier Python
config = {**defaults, **overrides}

# Update in place
defaults |= overrides              # Python 3.9+
defaults.update(overrides)         # all versions

# defaultdict — auto-initialize missing keys
from collections import defaultdict

word_count: defaultdict[str, int] = defaultdict(int)
for word in text.split():
    word_count[word] += 1  # no KeyError on first access

groups: defaultdict[str, list] = defaultdict(list)
for user in users:
    groups[user.role].append(user)  # no need to check if key exists

# setdefault — initialize if not present
cache = {}
cache.setdefault("results", []).append(new_result)

# Dict as dispatch table — replaces long if/elif
def add(a, b): return a + b
def sub(a, b): return a - b

operations = {"+": add, "-": sub, "*": lambda a, b: a * b}
result = operations["+"](10, 5)  # 15`
        },
        {
          title: 'Counter, OrderedDict, and ChainMap from collections',
          explanation: "The `collections` module has several specialized dict subclasses that solve common problems more elegantly than a plain dict. `Counter` for frequency counts, `ChainMap` for layered configs.",
          keyIdeas: [
            '`Counter` — counts occurrences, has `most_common()`, supports arithmetic',
            '`OrderedDict` — mainly useful for `move_to_end()` — regular dicts are ordered since 3.7',
            '`ChainMap` — read from multiple dicts as one, writes go to the first',
            '`namedtuple` and `dataclass` — better than plain dicts for structured data'
          ],
          pitfalls: [
            'Counter adds missing keys as 0 — iterating over it includes keys with 0 count',
            'ChainMap lookups go first dict first — mutations only affect the first map'
          ],
          code: `from collections import Counter, ChainMap

# Counter — frequency counting
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = Counter(words)
# Counter({'apple': 3, 'banana': 2, 'cherry': 1})

counts.most_common(2)  # [('apple', 3), ('banana', 2)]
counts["apple"]        # 3
counts["mango"]        # 0 — not KeyError

# Counter arithmetic
c1 = Counter({"a": 3, "b": 2})
c2 = Counter({"a": 1, "b": 4})
print(c1 + c2)  # Counter({'b': 6, 'a': 4})
print(c1 - c2)  # Counter({'a': 2}) — negatives dropped

# ChainMap — layered config
import os
from collections import ChainMap

defaults = {"debug": False, "host": "localhost", "port": 8000}
env_config = {"host": os.environ.get("HOST", "localhost")}
cli_config = {"port": 9000}

# CLI > env > defaults
config = ChainMap(cli_config, env_config, defaults)
print(config["port"])  # 9000 — from cli_config
print(config["debug"]) # False — from defaults`
        }
      ]
    }
  ],

  strings: [
    {
      title: 'String Methods and Formatting',
      examples: [
        {
          title: 'f-strings and string formatting in depth',
          explanation: "f-strings (Python 3.6+) are the modern way to format strings. They're faster than `.format()` and `%` formatting, and more readable. Python 3.12 added inline expressions and debugging with `=`.",
          keyIdeas: [
            'f-strings evaluate expressions inline: `f"{value:.2f}"`, `f"{obj.name!r}"`',
            '`!r` applies `repr()`, `!s` applies `str()`, `!a` applies `ascii()`',
            'Format spec: `{value:width.precisionftype}` — same as `format()` mini-language',
            '`f"{value=}"` (3.8+) prints `value=<repr>` — great for debugging'
          ],
          pitfalls: [
            'f-strings evaluate at definition time — you can\'t reuse an f-string as a template',
            'Deeply nested f-strings become unreadable — build the value in a variable first',
            'Backlashes can\'t appear inside f-string expressions — extract to a variable'
          ],
          code: `name = "Alice"
score = 95.678
items = [1, 2, 3]

# Basic interpolation
greeting = f"Hello, {name}!"

# Format specifiers
f"{score:.2f}"          # '95.68' — 2 decimal places
f"{score:10.2f}"        # '     95.68' — width 10, right-aligned
f"{score:<10.2f}"       # '95.68     ' — left-aligned
f"{1000000:,}"          # '1,000,000' — thousands separator
f"{255:08b}"            # '11111111' — binary, padded to 8 digits
f"{255:#x}"             # '0xff' — hex with prefix

# Conversion flags
f"{name!r}"             # "'Alice'" — repr()
f"{name!s}"             # "Alice" — str()

# Debug with = (Python 3.8+)
x = 42
print(f"{x=}")          # x=42
print(f"{len(items)=}") # len(items)=3

# Multiline f-string
query = (
    f"SELECT * FROM users "
    f"WHERE age > {min_age} "
    f"LIMIT {limit}"
)

# Template pattern (when you need a reusable template)
from string import Template
tmpl = Template("Hello, $name!")
print(tmpl.substitute(name="Bob"))`
        },
        {
          title: 'Essential string methods',
          explanation: "Python strings are immutable sequences with a large method library. Knowing the right method for the job — `split`/`join`, `strip`, `replace`, `startswith`/`endswith` — leads to cleaner code than manual character manipulation.",
          keyIdeas: [
            '`str.join(iterable)` — join a list of strings (note: join is on the separator, not the list)',
            '`str.split(sep)` — split on separator; `str.splitlines()` — split on newlines',
            '`str.strip()` — remove leading/trailing whitespace (or specified chars)',
            'Strings are sequences — you can slice, iterate, and use `in` on them'
          ],
          pitfalls: [
            'String concatenation in a loop (`s += x`) is O(n²) — use `"".join(parts)` instead',
            '`str.replace()` replaces all occurrences — use `count=1` to limit',
            '`str.find()` returns -1 on miss; `str.index()` raises ValueError — pick the right one'
          ],
          code: `text = "  Hello, World!  "

# Stripping
text.strip()          # "Hello, World!"
text.lstrip()         # "Hello, World!  "
text.rstrip()         # "  Hello, World!"
"...hello...".strip(".")  # "hello"

# Splitting
"a,b,c".split(",")           # ['a', 'b', 'c']
"a,b,c".split(",", maxsplit=1) # ['a', 'b,c']
"line1\nline2\nline3".splitlines()  # ['line1', 'line2', 'line3']

# Joining — note the idiom
words = ["Hello", "World"]
" ".join(words)       # "Hello World"
", ".join(words)      # "Hello, World"

# Build string from parts efficiently
parts = []
for item in data:
    parts.append(str(item))
result = ", ".join(parts)  # O(n) — not O(n²)

# Searching
"hello world".find("world")      # 6
"hello world".find("xyz")        # -1 (not ValueError)
"hello".startswith("he")         # True
"hello".endswith("lo")           # True
"world" in "hello world"         # True

# Checking content
"abc123".isalnum()   # True
"abc".isalpha()      # True
"123".isdigit()      # True
"  ".isspace()       # True`
        }
      ]
    }
  ],

  loops: [
    {
      title: 'Iteration Patterns',
      examples: [
        {
          title: 'Pythonic for loops — avoid range(len())',
          explanation: "Python's `for` loop is more expressive than most languages. Instead of iterating over indices, iterate over the values directly. When you need indices too, use `enumerate()`. When you need to loop over pairs, use `zip()`.",
          keyIdeas: [
            'Iterate directly: `for item in items` not `for i in range(len(items))`',
            '`enumerate(iterable, start=0)` — yields (index, value) pairs',
            '`zip(a, b)` — pairs items from two iterables (stops at the shorter)',
            '`zip_longest` from `itertools` pads to the longer iterable'
          ],
          pitfalls: [
            '`for i in range(len(lst))` is the Java-style anti-pattern — use `enumerate` if you need the index',
            'Modifying a list while iterating causes bugs — collect changes and apply after',
            '`zip` silently drops extra items from the longer iterable — use `zip_longest` if that matters'
          ],
          code: `names = ["Alice", "Bob", "Carol"]

# Anti-pattern — Java style
for i in range(len(names)):
    print(names[i])

# Pythonic — iterate the values directly
for name in names:
    print(name)

# Need the index?
for i, name in enumerate(names, start=1):
    print(f"{i}. {name}")

# Iterate two lists in parallel
scores = [90, 85, 92]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# Loop over dict
user = {"name": "Alice", "age": 30, "role": "admin"}
for key, value in user.items():
    print(f"{key}: {value}")

# Reversing and sorting without mutating
for name in reversed(names):
    print(name)

for name in sorted(names):
    print(name)

# Iterating over a copy when mutating
to_remove = []
for item in items:
    if should_remove(item):
        to_remove.append(item)
for item in to_remove:
    items.remove(item)`
        },
        {
          title: 'Generators — lazy sequences',
          explanation: "Generators produce values one at a time instead of building the whole sequence in memory. A function with `yield` is a generator function. Generator expressions are lazy list comprehensions. Essential for large datasets or infinite sequences.",
          keyIdeas: [
            'Generator functions use `yield` — they pause and resume on each `next()` call',
            'Generator expressions: `(x**2 for x in range(n))` — lazy, memory efficient',
            '`yield from` delegates to a sub-generator',
            'Generators can only be iterated once — call the function again to reset'
          ],
          pitfalls: [
            'Generators can only be iterated once — if you need to reuse, convert to a list',
            'Calling a generator function returns a generator object — it doesn\'t start executing until you iterate',
            '`return value` in a generator raises `StopIteration(value)` — use `yield from` to compose'
          ],
          code: `# Generator function
def count_up(start: int, stop: int):
    current = start
    while current <= stop:
        yield current
        current += 1

for n in count_up(1, 5):
    print(n)  # 1, 2, 3, 4, 5

# Generator expression — lazy
squares_gen = (x**2 for x in range(10**6))  # no memory used yet
total = sum(squares_gen)  # computes on demand

# Practical: read a large file line by line
def read_lines(filename: str):
    with open(filename) as f:
        for line in f:
            yield line.strip()

# yield from — compose generators
def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)  # recurse
        else:
            yield item

list(flatten([1, [2, [3, 4]], 5]))  # [1, 2, 3, 4, 5]

# Infinite generator
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

from itertools import islice
first_10 = list(islice(fibonacci(), 10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
        }
      ]
    }
  ],

  oop: [
    {
      title: 'Classes and Instances',
      examples: [
        {
          title: 'Defining classes with dataclasses',
          explanation: "Python classes use `__init__` for setup. But for data-holding classes, `@dataclass` (Python 3.7+) eliminates boilerplate — it auto-generates `__init__`, `__repr__`, and `__eq__`. Use regular classes for behaviour-heavy objects, dataclasses for data containers.",
          keyIdeas: [
            '`self` is the instance — the first parameter of every method',
            '`@dataclass` generates `__init__`, `__repr__`, `__eq__` automatically',
            '`@dataclass(frozen=True)` creates an immutable dataclass (hashable)',
            'Class variables (defined outside `__init__`) are shared across instances'
          ],
          pitfalls: [
            'Class variables are shared — modifying a mutable class variable affects all instances',
            'Forgetting `self.` creates a local variable, not an instance attribute',
            '`@dataclass` fields with mutable defaults need `field(default_factory=list)`'
          ],
          code: `# Regular class
class User:
    user_count = 0  # class variable — shared across all instances

    def __init__(self, name: str, email: str):
        self.name = name        # instance variable
        self.email = email
        User.user_count += 1

    def __repr__(self) -> str:
        return f"User(name={self.name!r}, email={self.email!r})"

    def __eq__(self, other) -> bool:
        if not isinstance(other, User):
            return NotImplemented
        return self.email == other.email  # same email = same user

# @dataclass — much less boilerplate
from dataclasses import dataclass, field

@dataclass
class Product:
    name: str
    price: float
    tags: list[str] = field(default_factory=list)  # mutable default
    in_stock: bool = True

    def apply_discount(self, percent: float) -> "Product":
        return Product(self.name, self.price * (1 - percent / 100), self.tags)

p = Product("Widget", 9.99, tags=["sale"])
print(p)  # Product(name='Widget', price=9.99, tags=['sale'], in_stock=True)

# Frozen dataclass — immutable, hashable (usable in sets/dict keys)
@dataclass(frozen=True)
class Point:
    x: float
    y: float

    def distance_to(self, other: "Point") -> float:
        return ((self.x - other.x)**2 + (self.y - other.y)**2) ** 0.5`
        },
        {
          title: 'Dunder methods and the Python data model',
          explanation: "Dunder (double-underscore) methods let your classes integrate with Python's syntax and builtins. Implement `__len__` and your class works with `len()`. Implement `__iter__` and it works in `for` loops. This is how Python achieves duck typing at the protocol level.",
          keyIdeas: [
            '`__repr__` — developer string (shown in REPL); `__str__` — user-facing string',
            '`__len__`, `__contains__`, `__getitem__` — sequence protocol',
            '`__enter__`/`__exit__` — context manager protocol (`with` statement)',
            '`__call__` — make an instance callable like a function'
          ],
          pitfalls: [
            '`__repr__` should ideally return a string that can recreate the object',
            '`__eq__` without `__hash__` makes the class unhashable (can\'t be used in sets/dict keys)',
            'Don\'t implement `__del__` unless you understand the garbage collector — it\'s called unpredictably'
          ],
          code: `class BoundedList:
    """A list with a maximum size."""

    def __init__(self, maxsize: int):
        self._items: list = []
        self.maxsize = maxsize

    def __repr__(self) -> str:
        return f"BoundedList(maxsize={self.maxsize}, items={self._items!r})"

    def __len__(self) -> int:
        return len(self._items)

    def __contains__(self, item) -> bool:
        return item in self._items

    def __iter__(self):
        return iter(self._items)

    def __getitem__(self, index):
        return self._items[index]

    def append(self, item):
        if len(self._items) >= self.maxsize:
            raise OverflowError(f"List is full ({self.maxsize} items)")
        self._items.append(item)

bl = BoundedList(3)
bl.append("a")
bl.append("b")
print(len(bl))       # 2
print("a" in bl)     # True
for item in bl:      # works because __iter__
    print(item)

# Context manager protocol
class TempFile:
    def __enter__(self):
        self.file = open("temp.txt", "w")
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        return False  # don't suppress exceptions

with TempFile() as f:
    f.write("data")`
        }
      ]
    },
    {
      title: 'Inheritance and Properties',
      examples: [
        {
          title: 'Inheritance, super(), and properties',
          explanation: "Python supports single and multiple inheritance. `super()` calls the parent class method in MRO (Method Resolution Order) order. `@property` lets you define computed attributes that look like plain attribute access.",
          keyIdeas: [
            '`super()` in Python 3 needs no arguments — it figures out the class and instance automatically',
            'MRO determines method lookup order in multiple inheritance — Python uses C3 linearization',
            '`@property` — getter; `@prop.setter` — setter; `@prop.deleter` — deleter',
            'Properties let you add validation/computation without changing the interface'
          ],
          pitfalls: [
            'Calling `ParentClass.method(self)` directly instead of `super()` breaks multiple inheritance',
            'Properties with only a getter are read-only — setting raises AttributeError',
            'Heavy logic in property getters is surprising — properties should feel like attribute access'
          ],
          code: `class Animal:
    def __init__(self, name: str, sound: str):
        self.name = name
        self.sound = sound

    def speak(self) -> str:
        return f"{self.name} says {self.sound}"

class Dog(Animal):
    def __init__(self, name: str, breed: str):
        super().__init__(name, sound="Woof")
        self.breed = breed

    def speak(self) -> str:
        return super().speak() + "!"  # extend parent behaviour

# @property — computed attribute
class Circle:
    def __init__(self, radius: float):
        self._radius = radius  # private by convention

    @property
    def radius(self) -> float:
        return self._radius

    @radius.setter
    def radius(self, value: float):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def area(self) -> float:
        import math
        return math.pi * self._radius ** 2  # computed on access

    @property
    def diameter(self) -> float:
        return self._radius * 2

c = Circle(5)
print(c.area)      # 78.53... — computed, looks like a field
c.radius = 10      # calls the setter
# c.radius = -1    # raises ValueError`
        }
      ]
    }
  ],

  errors: [
    {
      title: 'Exception Handling',
      examples: [
        {
          title: 'try/except/else/finally and exception hierarchy',
          explanation: "Python's exception system has four clauses: `try` (attempt), `except` (on failure), `else` (if try succeeded), `finally` (always). Understanding which exceptions to catch and which to let propagate is as important as the syntax.",
          keyIdeas: [
            '`except Exception` catches most runtime errors but not `KeyboardInterrupt`, `SystemExit`',
            '`else` block runs only if no exception was raised — useful for keeping the happy path clear',
            '`finally` always runs — use it for cleanup (file closing, DB connections)',
            '`raise` alone re-raises the current exception; `raise X from Y` chains exceptions'
          ],
          pitfalls: [
            'Bare `except:` catches everything including `KeyboardInterrupt` and `SystemExit` — avoid it',
            'Catching `Exception` broadly and silencing it hides bugs — log at minimum',
            'Using exceptions for control flow (catching expected conditions) is slow and un-Pythonic'
          ],
          code: `# All four clauses
def parse_config(path: str) -> dict:
    try:
        with open(path) as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Config not found: {path}")
        return {}
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON in {path}") from e  # chain exceptions
    else:
        # Runs only if no exception — keep happy path here
        print(f"Loaded config from {path}")
        return data
    finally:
        # Always runs — cleanup goes here
        print("parse_config finished")

# Catching multiple exception types
try:
    result = risky_operation()
except (TypeError, ValueError) as e:
    print(f"Input error: {e}")
except RuntimeError:
    raise  # re-raise without modification

# Exception groups (Python 3.11+)
try:
    async with asyncio.TaskGroup() as tg:
        tg.create_task(task1())
        tg.create_task(task2())
except* ValueError as eg:
    for exc in eg.exceptions:
        print(f"ValueError: {exc}")`
        },
        {
          title: 'Custom exceptions and context managers',
          explanation: "Custom exceptions make error handling more precise and self-documenting. Context managers (`with` statement) ensure cleanup code always runs — the `contextlib` module makes writing them easy without a full class.",
          keyIdeas: [
            'Create exception hierarchies: a base `AppError` with specific subclasses',
            'Add attributes to exceptions to carry structured error info',
            '`contextlib.contextmanager` decorator turns a generator into a context manager',
            '`contextlib.suppress(ExcType)` silently ignores specific exceptions'
          ],
          pitfalls: [
            'Catching your own base exception too broadly can still hide bugs — keep the hierarchy granular',
            'Context managers should handle the exception in `__exit__` by returning True to suppress, False to propagate'
          ],
          code: `# Custom exception hierarchy
class AppError(Exception):
    """Base exception for this application."""
    pass

class NotFoundError(AppError):
    def __init__(self, resource: str, resource_id):
        self.resource = resource
        self.resource_id = resource_id
        super().__init__(f"{resource} with id {resource_id!r} not found")

class ValidationError(AppError):
    def __init__(self, field: str, message: str):
        self.field = field
        super().__init__(f"Validation failed for {field!r}: {message}")

# Usage
def get_user(user_id: int):
    user = db.find(user_id)
    if not user:
        raise NotFoundError("User", user_id)
    return user

try:
    user = get_user(999)
except NotFoundError as e:
    print(f"Missing {e.resource}: {e.resource_id}")

# Context manager with contextlib
from contextlib import contextmanager, suppress

@contextmanager
def managed_transaction(db):
    transaction = db.begin()
    try:
        yield transaction
        transaction.commit()
    except Exception:
        transaction.rollback()
        raise

with managed_transaction(db) as txn:
    txn.execute("INSERT INTO ...")

# suppress — silently ignore specific exceptions
with suppress(FileNotFoundError):
    os.remove("temp_file.txt")  # no error if file doesn't exist`
        }
      ]
    }
  ],

  modules: [
    {
      title: 'Imports and the Standard Library',
      examples: [
        {
          title: 'Import patterns and best practices',
          explanation: "Python's import system is flexible. Understanding the difference between absolute and relative imports, how `__init__.py` works, and when to use `importlib` for dynamic imports helps you structure larger projects cleanly.",
          keyIdeas: [
            'Absolute imports (from project root) are preferred over relative imports',
            '`from x import y` binds `y` locally — changes to `x.y` after import won\'t be reflected',
            '`import x as y` aliases the module — useful for long names or resolving conflicts',
            'Lazy imports inside functions avoid circular imports and speed up startup'
          ],
          pitfalls: [
            'Circular imports: A imports B which imports A — restructure into a third module or use lazy imports',
            '`from module import *` pollutes the namespace and makes it unclear where names come from',
            'Shadowing stdlib names (`import os; os = "something"`) causes confusing errors'
          ],
          code: `# Absolute imports — preferred
from myapp.models import User
from myapp.services.auth import authenticate

# Relative imports — use within a package
from .models import User           # same package
from ..utils import format_date    # parent package

# Aliasing
import numpy as np
import pandas as pd
from datetime import datetime as dt

# Lazy import — only import when function is called
def process_image(path: str):
    from PIL import Image  # heavy dependency, only load when needed
    img = Image.open(path)
    return img

# __all__ — controls what 'from module import *' exports
__all__ = ["User", "authenticate", "create_user"]

# Conditional import — handle optional dependencies
try:
    import ujson as json  # faster JSON library if available
except ImportError:
    import json           # fall back to stdlib

# importlib — dynamic imports
import importlib

def load_plugin(name: str):
    module = importlib.import_module(f"plugins.{name}")
    return module.Plugin()`
        },
        {
          title: 'Essential stdlib modules',
          explanation: "Python's standard library is huge — knowing which modules exist saves you from reimplementing wheels. The most frequently useful ones beyond the basics: `pathlib`, `itertools`, `functools`, `datetime`, `dataclasses`, `typing`.",
          keyIdeas: [
            '`pathlib.Path` — object-oriented file paths, far nicer than `os.path`',
            '`itertools` — combinatorics, infinite iterators, grouping, chaining',
            '`functools` — `lru_cache`, `partial`, `reduce`, `wraps`',
            '`datetime` — date/time manipulation; `zoneinfo` (3.9+) for timezones'
          ],
          pitfalls: [
            '`datetime.datetime.now()` returns local time without timezone — use `datetime.now(tz=timezone.utc)` for UTC',
            '`os.path.join` still works but `pathlib.Path /` operator is more readable',
            '`itertools` functions return lazy iterators — wrap in `list()` to see the values'
          ],
          code: `# pathlib — modern file path handling
from pathlib import Path

project_root = Path(__file__).parent.parent
config_path = project_root / "config" / "settings.json"

if config_path.exists():
    content = config_path.read_text()  # no open() needed

# Glob patterns
python_files = list(project_root.glob("**/*.py"))

# itertools — powerful iteration tools
import itertools

# Chain multiple iterables
for item in itertools.chain([1, 2], [3, 4], [5]):
    print(item)  # 1 2 3 4 5

# Group by key
from itertools import groupby
data = sorted([("a", 1), ("b", 2), ("a", 3)], key=lambda x: x[0])
for key, group in groupby(data, key=lambda x: x[0]):
    print(key, list(group))

# Combinations and permutations
list(itertools.combinations([1, 2, 3], 2))  # [(1,2), (1,3), (2,3)]

# functools
from functools import lru_cache, partial, reduce

@lru_cache(maxsize=None)  # unlimited cache
def expensive(n: int) -> int:
    return sum(range(n))

double = partial(lambda x, y: x * y, 2)  # partial application

# datetime
from datetime import datetime, timezone, timedelta

now_utc = datetime.now(tz=timezone.utc)
tomorrow = now_utc + timedelta(days=1)
formatted = now_utc.strftime("%Y-%m-%d %H:%M:%S")`
        }
      ]
    }
  ]
};
