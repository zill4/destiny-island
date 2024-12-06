# Destiny Island

## Description

Destiny Island is a story management tool.

Given a script, or any story, Destiny Island will identify the Noun's create a relational map of each.

Then, using generative AI, allow users create storyboards for scenes within a give story.

## TODO
- refactor dashboard as side-nav and create page as dashboard
- set up secrets
- set up env vars
- set up deployment pipeline
- add endpoints for... stories, scenes, storyboards - Nouns
- set up relational map of Nouns
- set up storyboard generation with generative Images
...

Running the app
Frontend
```
cd client
npm install
npm run dev
```

Backend (Make sure you have docker installed, and the docker daemon running)
```
docker compose up --build
```

# User Flow

1. User logs in is navigated to the dashboard:create page
2. User creates a new story by uploading a script, or pasting in a script
A Story has...
- Title
- Description
- Nouns
    - Characters
    - Locations
    - Objects
    - etc.
- Chapters
    - Title
    - Description
    - Characters
    - Locations
    - Objects
    - etc.
3. After a story is created, the user is navigated to the dashboard:story page
The story page has a list of chapters, and a button to create a new chapter
4. User clicks on a generated chapter to navigate to the dashboard:chapter page
The chapter page has a list of scenes, and a button to create a new scene
5. User clicks on a generated scene to navigate to the dashboard:scene page
A scene is a collection of images that tell a story with a discription of the scene, and a list of characters, locations, and objects that are in the scene.

Every Story should have a Nouns Relationship Map.
Showing the relationships between all the people, places, and things in the story.
Which scenes they are in, and which characters interact with which other characters.

Each character should have a profile where you can learn everything about them.
Ideally, in the future you should be able to ask "What if" questions, and the system will generate a new story board for that scenario.