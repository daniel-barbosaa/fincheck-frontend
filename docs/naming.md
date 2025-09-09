# Convenção de nomes

**Componentes React** → `PascalCase`

```
AuthForm.tsx
Header.tsx
Button.tsx
```

**Hooks** → `camelCase`, sempre começando com **use**

```
useAuth.ts
useLocalStorage.ts
```

**Utils/funções helpers** → `camelCase`

```
formatDate.ts
validateEmail.ts
```

**Constantes** → `SCREAMING_SNAKE_CASE` dentro do arquivo, mas o arquivo em si pode ser `camelCase` ou `kebab-case`

**routes.ts** → exporta

```
ROUTES.LOGIN,
ROUTES.REGISTER
```
