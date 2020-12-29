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
We have 3 subfolders here, *header*, *sidebar* and *posts*, in header folder we have `TheHeader` component that use in Dashboard and CreateArticle views. in sidebar folder we have `TheSidebar` component that is used as a sidebar in CreateArticle and Dashboard views. the challenge i face is that header and sidebar are both separated component and in *vuetify* when width of page goes to less than 1200px, sidebar goes hide. this was tricky to handle, because they are two separated components i use `event bus` to send data from header to sidebar and this data was reactive .   
`VPosts` component use to show posts in dashboard, **note** vuetify doesn't let us to add counter (the row's number), and for that, i coerced to add a little filled circle before each row.    

#### `mixins`   
In mixin folder i put some input rules logic to use in all of my input fields, such as minimum password length rule, required rule and checking email with regex.    

#### `plugins`   
Plugin folder contains vuetify.js setup, i set app colors pallete here.    

#### `router`
Just like another router files, but i add some more logic here, first of all, i added some logic to keep some routes safe (show *dashboard & create article* just when user logged in). also we have 404 page and when user goes to wrong path, we will show not found view.

#### `store`    
Here we have 3 main parts, first modules folder, that contains articles, article and auth modules, in types folder we have 2 files, actions and mutations. Reasonf of doing that is make codes more modular and readable and when user want to change mutation or action name, just change that in 1 file, not everywhere in app.    

#### `views`   
We have all views (pages) here.    

#### `main.js`    
Here our main file, and i create my event bus here, calling ApiService to use over the app and Keep user logged in over the app with beforeEach and promise.all .    


### NOTE:   
Edit article and fetching tags in create article doesnt work properly, i will fixed that ASAP, and push it to another branch to keep that separated because deadline of project finished.


<p align="center">Thanks for the attention</p>
