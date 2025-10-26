## Javascript Unit Testing Frameworks

# Jest
Jest is used/recommended by Facebook, and currently one of the most popular Javascript testing frameworks. 

Installation: npm install --save-dev jest

Run: npx jest

Make sure to have a config file for jest (e.g. jest.config.js) and its dependency in package.json.

Pros:
 - Good performance for larger projects. 
 - Large active development and community, which provides a large support system for reaching solutions to bugs fast. 
 - Primarily used to test React applications, but can easily integrate into others (e.g. Angular, Node, Vue, etc.).

Cons: 
 - Doesn't support many libraries or tooling, which can make it harder for debugging test cases in IDEs that do not support Jest.
 - Some feel the learning curve for Jest is difficult.

# Mocha  
Mocha is the second most popular Javascript testing framework--it's specifically a framework that provides just the base test structure.

Installation: npm install --save-dev mocha 
    Optionally: npm install --save-dev mocha chai

Run: npx mocha

Make sure to have a config file for mocha (e.g. .mocharc.js) and its dependency in package.json.

Pros:
 - Good for simpler projects--mocha itself is simple and lightweight. 
 - An older testing framework, meaning large amounts of documentation and tutorials are available.

 Cons: 
 - More difficult to set up (additional libraries are needed for assertions, e.g. chai).
 - Slower for larger projects since it doesn't have built-in test parallelization by default. 
 - Configuration can be extensive. 



# Vitest
Vitest is made by the team that created Vite, and can be used as a replacement of Jest in many projects. 

Installation: npm install --save-dev vitest

Run: npx vitest

Make sure to have a config file for vitest (e.g. vitest.config.js) and its dependency in package.json.

Pros: 
 - Has built in assertions and mocking. 
 - Seamless Vite Integration, since its developed by Vite. 

Cons: 
 - Newer framework, so community support is not as large. 
 - Primarily for Vite projects, may require extra config for Node projects. 
 - Compatability issues with some older libraries/CommonJs-only modules, and may need workarounds.


