To view this website:
 - npm install
 - npm run start-dev
 - navigate to localhost via link in console (port 3000)

In the given time, I was able to render a list of the videos in the walkthroughs file and load the video.

If I had additional time, I would refactor my code so that each title had an event handler that would change the poster and src tags in the Video component, as right now the player is a static element. Given the way I've currently built my app, I think using Redux might be the best way to change the video player on click, though I might be able to refactor it and stay solely with React. I would also add additional styling as outlined in the task list and add automatic video playing capabilities.
