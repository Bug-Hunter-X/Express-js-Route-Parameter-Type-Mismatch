# Express.js Route Parameter Type Mismatch

This repository demonstrates a common error in Express.js route parameter handling and its solution.  The bug arises from incorrect type handling of route parameters, leading to unexpected behavior and potential errors. The solution showcases how to correctly handle type conversion to ensure the application functions as expected. 

## Bug
The `bug.js` file contains an Express.js route that attempts to use a route parameter (`id`) as a number without explicitly converting it from a string. This can lead to incorrect results, especially when querying a database.