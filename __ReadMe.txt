// created via when angular project created - do you want to to add routing?


/*

-------------------------------------------------------------------------------------
-- Tour of Heroes project - angular.io
-------------------------------------------------------------------------------------

Do this project.
https://angular.io/tutorial/toh-pt1

-------------------------------------------------------------------------------------
-- Creating and attaching to repository
-------------------------------------------------------------------------------------

1. create new project for hero
2. within that folder, initialize a new repository locally
   You don't go to github
   proj-folder>git init
   This allows to push stage to the local git on your machine
3. Push to github - you have to add a remmte repository
   3.1 go to github and create new repository, 
       It shows local steps 
       We'll do the second steps this time (since we already created it locally 
        this time). The URL is the URL for github.
       You are adding existing repository (it exists on local from above steps).
       This is better.

   3.2 If you push before you do remote, from VS Code, you can create a public or private repo. 
4. Ready to do commit, VS Code left source control, Name it, Commit, Push

-------------------------------------------------------------------------------------
-- Questions and Answers
-------------------------------------------------------------------------------------

Questions:
1. does it matter what folder I'm in when I do ng generate component heroes?
I did it from C:\projects\angular-tour-of-heroes>
It put it in the src\app\heroes folder.

Answer: You can import into another module.
He groups modules into business logic.
Or by routes.  If you had one route with a bunch of different components.
He sometimes puts one componenet per module.
If you see each module might grow then you might keep it all in one module.


2. adding hero property 
   hero = 'Windstorm';

   Should it be typed?  It doesn't show typed in the turorial, but why not?
   Explain class thing where we had to type a bunch of stuff for latest version of Angular.

