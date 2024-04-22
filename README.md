# Memory Lane

#### An application where users can create a log of various types of memories that they want to remember.

#### By Brian Scherner

## Technologies Used

* React
* JavaScript
* JSX
* HTML
* Webpack
* Node Package Manager
* Babel
* ES Lint
* CSS
* Bootstrap
* Firebase

## Description

This application presents users with a home page. In order to use the app, they must be signed into an account, which they can create by clicking on `Sign In`. Here they will be shown a form where they enter their email and password to create their account. Note that signing up for an account will mean you are already signed in. Using the `Sign In` form below is not necessary if you have just signed up for an account.

After signing in, users can create memories to add them to a dynamic list. Users can click `Create Memory`, which will show them a dropdown menu, where they can select the type of memory they want to create. Depending on which type they select, a different form will be rendered. When users submit the form, they are taken back to the home page, where they can view their list of memories. Memories in the list are shown by the memory's name, the user who created it, and the date of creation.

Users can also click on a memory to view its details. After doing so, the memory's details will expand and all of the memory's details are shown. Users can optionally `Edit` or `Delete` a memory, but only if it is for a memory that they created.

When a user is finished, they can simply select `Sign In`, and then select `Sign Out` to log out of their account.

This application features Firebase. All data for memories and authenticated users is stored here.

## Setup/Installation Requirements

#### Cloning and Using Repository

* Select the green `Code` button, and clone this repository to your desktop.

* In your terminal, navigate to this project's folder, and run the command `$ npm install`. This will install all of the necessary packages.

* Run the command `$ npm run start` to start a live development server. This will open the project in your web browser at the URL `localhost:3000`, allowing you to use the application.

#### Setting Up Firebase

To set up a Firebase project for this repository, please follow along with these lessons from [fidgetechcode.org](https://fidgetechcode.org/react/react-with-nosql/4-4-0-9-setting-up-a-firebase-project-firestore-database-and-web-app). Follow the setup instructions for lessons `4.4.0.9`, `4.4.0.10`, and `4.4.0.11`.

## Known Bugs

None.

## License

MIT

Copyright(c) 2024 Brian Scherner