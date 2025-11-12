# Convenção de nomes

**Componentes React**

O arquivo em Kebab Case `page-example.tsx`, o componente em Pascal Case `HeaderButton`, padrão usado no React.

Exemplo:

```tsx
export function HeaderAction() {
  return <h1>Header Action</h1>;
}
```

**`auth-form.tsx`**
**`header.tsx`**

**Hooks**

Kebab Case `use-auth.ts`, sempre começando com **use**.

A função em Camel Case.

Exemplo:

```ts
export function useAuth() {
  return "useAuth";
}
```

**`use-auth.ts`**

**Utils/funções helpers**

Arquivos em Kebab Case `format-date.ts`.

As funções em Camel Case `formatDate`.

Exemplo:

```ts
export function formatDate() {
  return "formatDate";
}
```

`format-date.ts`
`validate-email.ts`

**Constantes**

As váriaveis exportadas deve ser em SNAKE CASE `STORAGE_KEY_SNAKE_CASE`.

Já o arquivo em Kebab Case `storage-key.ts`.

Exemplo:

```ts
export const STORAGE_KEYS = {
  accessToken: "fincheck:accessToken",
};
```
