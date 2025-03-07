## NextJs Social login using next-auth.js

- First install next-auth 
```bash
npm i next-auth
```

- Create route  /api/auth/[...nextauth]/route.ts

- Import NextAuth function from next-auth
- Import login providers of your choice like GithubProvider, GoogleProvider then call the NextAuth function along with the configurations [See the code](./src//app/api/auth/[...nextauth]/route.ts)

import session provider in rootlayout and wrap the body in it

then go to github ---> settings ---> developer settings ---> OAuth ---> new application url="http://localhost:3000" and authorizationcallback = "http://localhost:3000/api/auth/callback/github" 
then get the secret id and generate a new secret key get both key and id and store it using a .env file 