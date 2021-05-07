# Contact API - Front End
Client for manage the contact api information.

## Table of contents

- [Project description](#project-description)
- [Instructions](#instructions)
- [Project structure](#project-structure)
- [Future updates](#future-updates)

## Project description
The purpose of this project is to provide a user interface to consult the contact API data in an easy way.
You can see the contact API by clicking [here](#https://github.com/Ivan12273/contact-api-back).

## Instructions
Download the project and run the command "npm install" to install all the dependencies used in this project, to run the api use the command "ng serve".
The api is configured to run on port 4200. This project connects with contact API.

## Project structure
This project was made in Angular, inside the src folder, the application folder contains all the logic and data of the project. All the components, templates, and styles that were created are here. In this section I am going to explain only the structure of this folder, to see more information about Angular, you can visit their website [here](#https://angular.io/guide/file-structure).

I used bootstrap to style the project, you can see more about this library [here](#https://getbootstrap.com/).

The structure of the project is the following:

### Models
This folder only contains the user model, this file has the following attributes:
- id: string
- name: string
- lastName: string
- company: string
- phoneNumber: string
- email: string
And also has a constructor.

### Services
The services folder contains a global file with the URL of the API. The other file is user.service.ts, this file is intended to connect with the API and perform POST, GET, PUT and DELETE queries. The functions are as follows:
- saveUser(user): Do a consult for add a user's contact information, create a record of the name, last name, company, phone number and email.
- getUsers(): Do a consult for get the contact data of all registered users.
- getUserById(id): Do a consult for get the specific contact data of a user by the id.
- updateUser(id): Do a consult for update the contact data of a user.
- deleteUser(id): Do a consult for delete a record of a user's contact information from the database.

### Components
The components are the main building block for Angular applications. Each component consists of: 
- An HTML template that declares what renders on the page. 
- A Typescript class that defines behavior. 
- A CSS selector that defines how the component is used in a template.
- A CSS styles applied to the template (optional)
Four components were created in this project: User, Create, Edit and Error.

#### Users
This component manages the main view of the project, it shows the list of all users with two buttons for each one: edit and delete. Also, there is a button at the top of the view to create a new contact.
Here you can find three functions: getUsers(), createNewContact() and deleteContact().

#### Create
This component consists of a form to enter the data of a new contact. The user accesses this view when he presses the "create new contact" button, when a user presses the button to save a contact, the onSubmit () function sends the data to the service.

#### Edit
This component uses the same view as "create contact", it works almost the same, with the exception that the onSubmit function does the update function.

#### Error
This component is to show the user an error view in case they type an invalid url, for reasons of time this component could not be finished.

## Future updates
There are many updates that I considered but at the end I couldn't implement them:
- Filer by name and last name.
- More complex validations, especially for the phone number input.
- Make the site responsive for mobile devices.
- A more attractive header and footer.
- Cleaner and more good looking error messages.
- A success message when the user edited or created a new contact.
- A confimation message when the user press the delete button.
- Implement a more complex pagination functionality.
