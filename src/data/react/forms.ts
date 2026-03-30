export default [
  {
    title: 'Forms & Inputs',
    examples: [
      {
        title: 'Controlled vs uncontrolled inputs',
        explanation: `Controlled inputs store their value in React state — React is the source of truth. Uncontrolled inputs store their value in the DOM — you read it with a ref when you need it.

Controlled inputs give you instant access to the current value on every keystroke (useful for live validation, search-as-you-type). Uncontrolled inputs are simpler and perform better for large forms where you only need the value on submit.`,
        keyIdeas: [
          'Controlled: value comes from state, onChange updates state — React owns the value',
          'Uncontrolled: no value prop, DOM owns the value, ref reads it on demand',
          'For most forms with validation, controlled inputs are the right default',
          'React Hook Form uses uncontrolled inputs under the hood for performance',
        ],
        pitfalls: [
          'Switching between controlled and uncontrolled mid-lifecycle — set a default value from the start',
          'Controlled input without an onChange handler — React will warn and the input becomes read-only',
          'Re-rendering the whole form on every keystroke — colocate state or use useForm',
        ],
        code: `// ✅ Controlled — live validation as user types
function EmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = (value: string) => {
    if (!value) return 'Email is required';
    if (!value.includes('@')) return 'Invalid email';
    return '';
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          setError(validate(e.target.value));
        }}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

// ✅ Uncontrolled — read value on submit only
function SimpleForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    submitForm({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}`
      },
      {
        title: 'React Hook Form — forms at scale',
        explanation: `React Hook Form is the standard for complex forms. It uses uncontrolled inputs by default (near-zero re-renders), has built-in validation with schema support (Zod, Yup), and handles field arrays, watch, and nested objects elegantly. Worth learning properly — it shows up everywhere.`,
        keyIdeas: [
          'register() connects an input to the form without making it controlled',
          'handleSubmit only calls your callback if all validations pass',
          'watch() lets you react to field values — useful for conditional fields',
          'Pair with Zod for end-to-end type safety from schema to form values',
        ],
        code: `import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be 18 or older').optional(),
});

type FormData = z.infer<typeof schema>;

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await createAccount(data); // TypeScript knows the shape
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name')} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <input {...register('email')} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Sign up'}
      </button>
    </form>
  );
}`
      },
    ]
  },
];
