# indexBy

`indexBy(target, by, transform?)`

Creates a record by indexing the `target` array using the `by` function to generate keys. Optionally transforms values using the `transform` function.

```ts
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

indexBy(users, (user) => user.id);
// { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

indexBy(
    users,
    (user) => user.id,
    (user) => user.name,
);
// { 1: 'Alice', 2: 'Bob' }
```
