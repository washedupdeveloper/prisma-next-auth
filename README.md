## Self hosting

To selfhost you will need the following:

- [nodejs](https://nodejs.org)

and a node package manager like npm or yarn

- [npm](https://www.npmjs.com/)
- [yarn](https://yarnpkg.com/)

**Step 1**

install all the dependencies
```console
npm install
```

or if you use yarn
```console
yarn
```

> remember to look at the .env.example file and adding the relevant information. For making it secret, rename it to .env

**Step 2**

run the command:
```console
npx prisma migrate reset --force
```

or of if you use yarn
```console
yarn prisma migrate reset --force
```

**Step 4 - Final step**

start the application (It will give a link in the terminal to open a localhost with port 3000 by default)

```console
npm run dev
```

or if you use yarn

 ```console
yarn dev
```

*Step 5 - Optional step*

start the application as production code (It will give a link in the terminal to open a localhost with port 3000 by default)

```console
npm run build
```
and 
```console
npm run start
```

or if you use yarn

 ```console
yarn build
```
and
```console
yarn start
```
