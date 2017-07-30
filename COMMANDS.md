
```
heroku apps:create andersdjohnson-borked-heroku
heroku ps:scale web=1
heroku config:set EXCLAMATION_COUNT=3
git push heroku master
```
