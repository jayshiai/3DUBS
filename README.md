Welcome to the repository containing 3dubs.in's source code.

Feel free to clone it and run it locally. You can even modify and deploy it as long as you make sure to credit us.

Also to get basic idea of what some components do and how they are coded, you can refer to the ReadMe below. Some of the code has been explained below.
## Getting Started

First, clone the repo:
```bash
git clone https://github.com/jayshiai/3DUBS.git
```

Then, cd into the cloned directory:
```bash
cd 3DUBS
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How does the site randomizer works?

If you have accessed the website, then you might have noticed that, each time you open the website in new tab or window, you get a new "experience".

This works using session storage and randomized configuration.

Basically, every time you open new session (new tab / window), the home page triggers a function that assigns a random configuration based on available variants.

Object of current variants looks like this:
```javascript
const items = {
        "intro": 3,
        "about": 2,
        "home": 9,
        "contact": 2,
        "projects": 1,
        "loading": 6,
        "cursor": 8,
        "individual": 6,
        "nav": 3
      };
```

Randomized Configuration is created using following code:
```javascript
// Define an object to store the selected configuration
      const selectedConfig = {};      
      // Iterate through each item in the list
      for (const item in items) {
        if (items.hasOwnProperty(item)) {
          // Randomly select a variant for the current item
          const randomVariant = Math.floor(Math.random() * items[item]);
          // Store the selected variant in the configuration object
          selectedConfig[item] = randomVariant;
        }
      }
```

We store this configuration into the session storage in JSON format:
```javascript
 // Convert the selected configuration object to a JSON string
      const configJSON = JSON.stringify(selectedConfig);
      // Store the configuration in Session Storage
      sessionStorage.setItem('config', configJSON);
      setVariantIndex(selectedConfig['home']);
      // Output the selected configuration
      console.log("Configuration stored in Session Storage:", selectedConfig);
    }

    const configString = sessionStorage.getItem('config');
```

Now every time a page loads in that session, it checks this stored config and uses that variant:
```javascript
 if (configString) {
      // Parse the config JSON string
      const config = JSON.parse(configString);
      // Update the variant index based on the 'home' key in the config
      setVariantIndex(config['home']);
      if (config['home'] != 5) {
        setIntroVariantIndex(config['intro']);
      }
      else {
      //special case for bindows
        setIntroVariantIndex(2);
      }
    }
    else {
    //default config in case config is missing
      setVariantIndex(0)
      setIntroVariantIndex(0);
    }
```


#### In case you want to avoid randomized pages, just directly access the page containing that variant. You can find the routes to all variants in `/src/app` . If you can't find the page variant you want, just create new route and import the desired components into it.
