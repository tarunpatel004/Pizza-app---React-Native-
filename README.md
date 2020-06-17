# Create your own pizza

This is a sample project of react-native to create your own pizza. I have used React-Navigation for navigation and Redux to manage local storage. In the future might add firebase to manage data rather than keep in local. 

## Installation

Install node modules first after cloning this repo

```bash
npm install
```

Then you are good to go to install in the iOS or Android. The below command is to install in the Android device or emulator.

```bash
react-native run-android
```

## Folder Structure in App 

Folder Name | Usage
------------- | -------------
navigation  | Which contains files for the routing only
reducer  | This is the main reducer of the app so application state is managing from here 
actions  | This folder contains files to manage Action's type and action function's
store | Application's main store file is located in this file
screens | All the four screens file kept in this folder 
common | As per the name it contains the common style, color, and dummy data files.
assets | Images are stored in this folder    
