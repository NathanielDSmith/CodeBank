export default [
  {
    title: 'API Calls & Data Fetching',
    examples: [
      {
        title: 'The problems with naive useEffect fetching',
        explanation: `Fetching data in useEffect works for simple cases, but quickly develops problems: race conditions when props change rapidly, no deduplication of identical requests, no caching, no background refetching, and awkward error/loading state management.

For real applications, React Query (TanStack Query) or SWR solve all of these automatically. Understanding the manual approach first helps you appreciate what those libraries handle for you.`,
        keyIdeas: [
          'Race conditions: if userId changes twice quickly, the second response might arrive before the first — you need cleanup to cancel stale requests',
          'Each component that fetches the same data creates its own request — no sharing',
          'Manual fetch has no cache — navigating back to a page triggers a full refetch',
        ],
        pitfalls: [
          'Not handling the case where the component unmounts before the fetch completes',
          'Not handling non-2xx responses — fetch only rejects on network errors, not HTTP errors',
          'Showing a blank screen instead of cached/stale data while refetching',
        ],
        code: `// ✅ Manual fetching — correct but verbose
function useUser(userId: number) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');

    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => {
        setUser(data);
        setStatus('success');
      })
      .catch(err => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setStatus('error');
      });

    return () => controller.abort(); // cancel on userId change or unmount
  }, [userId]);

  return { user, status, error };
}

// ✅ React Query — handles caching, deduplication, background refetch
import { useQuery, useMutation } from '@tanstack/react-query';

function useUser(userId: number) {
  return useQuery({
    queryKey: ['user', userId],   // cache key
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000,    // consider fresh for 5 minutes
  });
}

function useUpdateUser() {
  return useMutation({
    mutationFn: (data: Partial<User>) => updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] }); // refetch
    },
  });
}

function UserProfile({ userId }: { userId: number }) {
  const { data: user, isPending, error } = useUser(userId);
  const updateUser = useUpdateUser();

  if (isPending) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  return <form onSubmit={() => updateUser.mutate({ name: 'New name' })}> ... </form>;
}`
      },
    ]
  },
];
