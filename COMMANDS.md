
```
heroku apps:create adjohnson916-borked-heroku-app
heroku ps:scale web=1
heroku config:set EXCLAMATION_COUNT=3
git push heroku master
```
