# Travel journal (one page)

This is one of the solo studying projects for Scrimba course.

<p>
  <img src="https://github.com/DariaMordvinov/travel_blog_page/blob/main/src/images/Screenshot.png" width="550">
</p>

## Summary

This is a single page project with React, HTML, and CSS for styling.
Scrimba's requirements were:
- use props
- store data in a separate js file
- use .map()

## Challenges

I needed to use Font Awesome, which I only used with plain HTML before, not React. To use it with React, you have to install Font Awesome module, import FontAwesome component and then import those icons you want to use.

```
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
  
  const planet = <FontAwesomeIcon className="nav--icon" icon={faEarthAmericas} />
```
