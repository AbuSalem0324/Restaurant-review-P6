#Restaurant Review App

In this project, I upgraded the starter code in to an offline useable web app, with responsive design.
Also improved the accesibility (a11y) features, to make it more confortable for users with any kind disability.

#How to run?

Set up a python server in command line, or console. If you are not familiar with python, and/or not installed, visit [python offical] (www.python.org)
If you have python installed, run python -m http.server 8000 (if this port is used for anything else,use different port,  then set the same port in the js/dbhelper.js line: 12)

#DEPENDENCIES

##css/styles.css:
*stylesheet for styleing, visual assets*

##data/restaurant.json:
*restaurant database*

##img/
*restaurant images*

##js/

    dbhelper.js
     *this manage the fetch requests*
    main.js
    *this manage the DOM manipulation, and function beheviour*
    restaurant_info.js
    *This manage the DOm, and function behaviour for the individual restaurants*

##index.html/
*Main page*

##restaurant.html
*[Restaurants review page. Filled by:] {js/restaurant_info.js}*

##serviceworker.js
*This manage the offline behaviour, error handling, cacheing.* 



