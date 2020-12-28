# arvancloud-frontend

## Project Overview

### Folders Structure
First of all we are looking to folders and specially `src` folder.   
#### `common` folder

includes `config` files and `services` files.   
in `services` folder we have 3 files, `apiService`, `articlesService` & `tagsService`. `apiService` designed to implement methods of request for whole project, based on axios.   
`tagsService` for get tags and `articlesService` for request for articles, get, post & etc ...   

`config.js` file is a simple file that include api_url for requests.    
`jwt.js` is a file to manage Token for authentication and in `storage.js` we CRUD on that token.    

#### `components` folder
We have 3 subfolders here, *header*, *sidebar* and *posts*, in header folder we have `TheHeader` component that use in Dashboard and CreateArticle views. in sidebar folder we have `TheSidebar` component that is used as a sidebar in CreateArticle and Dashboard views. the challenge i face is that header and sidebar are both separated component and in *vuetify* when width of page goes to less than 1200px, sidebar goes hide. 
