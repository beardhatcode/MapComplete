#! /bin/bash

# Automerge translations automatically fetches the translations from weblate

git remote update weblate-github
git merge --no-commit weblate-github/weblate-mapcomplete-layers
git merge --no-commit weblate-github/weblate-mapcomplete-layer-translations
git merge --no-commit weblate-github/weblate-mapcomplete-core

npm run generate:translations
 if [ "$?" = "0" ]; then
  # Translation generation went fine - commit
  git add langs/
  git add assets/
  git commit -m "Merge weblate translations and regenerate translations"
 else
  echo "Generation of translations failed!"
  git checkout HEAD
 fi