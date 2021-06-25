*--  Package.json --*

yarn init -y

*--  Add typescript developer --*

yarn add typescript -d 

*--  Add tsconfig.json --*

yarn tsc --init

*--  Add express for server listen --*

yarn add express  

*--  Add @types/express for server listen --*

yarn add @types/express  

*--  Create Migration --*

yarn typeorm migration:create -n

*--  Add script auto run with yarn dev --*

yarn add ts-node-dev -D

*-- install sql lite BD  --*

yarn add typeorm reflect-metadata sqlite3

*-- Add types for uuid --*

yarn add @types/uuid -D

*-- library async errors --*

yarn add express-async-errors

*-- library encript --*

yarn add bcryptjs

yarn add @types/bcryptjs -D

*-- library jwtoken --*

yarn add jsonwebtoken

yarn add @types/jsonwebtoken

*-- library dotEnv --*

yarn add dotenv