## Installation

##### Frontend    
Run `npm install`  
Run `npm run hmr` &rarr; this will run the app in Hot Module Replacement mode. Configure the port number in `package.json` file. Default Port is 4202  
Run `ng build` or `ng build --prod`.   
Then copy the files in `dist` folder and paste it in the `Webcontent` folder in the backend

##### Backend
This is a GAE application.So add your respective GAE environment in appengine-web.xml.

All the configurations related files are uploaded into GCS bucket and from GCS bucket it is loaded into the application/Firestore for security reasons.
Create a bucket for configuration file upload.
Generate firestore sdk json and upload it in the configuration bucket.

Mention the GCS bucketname where your configuration files are uploaded in web.xml context param config_bucket.
Name of the firestore sdk json for firestore(type = db) and cloudstorage(type = files) should be mentioned in context param in the following format PROJECTID_FILETYPE_auth_file_json. 
If your project id is test-app, then you have to mention context param name as test-app-db_auth_file_json and the value should be the name of the configuration file uploaded for firestore credential. 
If it is for clould storage (now we use the same credential for both), then the context param name should be test-app-files_auth_file_json.

Menu information and the role information are present inside the application as menu.json & role.json.Upload it in the configuraion bucket and use the following url to load menu & role into the application.
YOUR_PROJECT_ID/rest/configuration/load/menu?bucket=NAME_OF_THE_BUCKET&file=NAME_OF_THE_MENU_FILE
YOUR_PROJECT_ID/rest/configuration/load/role?bucket=NAME_OF_THE_BUCKET&file=NAME_OF_THE_ROLE_FILE

Configuration.json contains rest of the configuration info needed for the application and it should be uploaded into the congiguration bucket and by using the following url, it can be loaded into the application.
YOUR_PROJECT_ID/rest/configuration/load/config?bucket=NAME_OF_THE_BUCKET&file=NAME_OF_THE_CONFIG_FILE

### GOTOMEETING
GOTOMEETING is used by this application.
Create a GOTOMEETING account for urself and configure the respective consumer key,consumer secret and default username & password into the configuration.json file.

### BigQuery
This app uses Google BigQuery
Create a dataset in the Google BigQuery and configure the dataset name in configuration.json

### Hospital & Items
Hospital and Stock items are available in hospitals.json & items.json respectively.
Use the following url to load hospitals & items into firestore
YOUR_PROJECT_ID/rest/configuration/load/hospitals
YOUR_PROJECT_ID/rest/configuration/load/items
Configure the default hospital id and name in the configuration.json

### Attachment Bucket
Create and configure the name of the bucket to be used for uploading the GOTOMEETING recording files in the configuration.json

##### Demo
Please [click here for the demo.](https://1-0-dot-vg-eva.appspot.com/#/homescreen/homescreendetail)

## API Codes needed
`MAPS_API_KEY` &rarr; replace this variable in `index.html` & `app-constants.ts` with your maps api key.
Please checkout [this link](https://developers.google.com/maps/documentation/javascript/get-api-key) to find out how to get an api key. 

## Supported Login Methods
The application currently supports `Google login` method. But the application is extendable to accomodate login with `email` and `OTP`

## Logic
The application has 4 types of users in primary.
* Patient
* Doctor
* Hospital Admin
* State/Goverment Login
Any user of the application is a patient by default. The other permissions can be given in the `Applicaion Users` page.
    ##### Patient Information
    Patient can provide his basic information in this section. 
    ##### Patient Questionaire
    Patient fills the questions which mainly focuses on the symptoms. Based on the data provided in `Patient Information` and `Patient Questionaire`, the `Risk Level` (High, Medium, Low) of the patient is calculated.
    ##### Doctor Login &rarr; Not Yet Assigned
    Doctor can view the list of patients along with the risk score in this view. Based on the risk score doctor can decide wheter `Consultation is Required` or `Not Required` for that patient.
    ##### Doctor Login &rarr; My Patients &rarr; Not Yet Scheduled
    All the patients who are marked as `Consultation Required` will be shown here.
    ##### Doctor Login &rarr; My Patients &rarr; Scheduled
    Doctor can schedule consultation for a patient under the `Doctor Consultation` tab in `Patient Questionaire` page. The call will be over a GoToMeeting service. All the patients with whom the call is scheduled will be listed here.
    ##### Hospital Admin &rarr; Doctor Activity Log
    The admin can view the consultation status of each doctor for a particular day.
    ##### Hospital Admin &rarr; Stock in Hospital
    The admin can log the number of items (Gloves, Gown, Sanitizer) etc, which is in stock with the hospital and how many more are required.
    ##### State Admin &rarr; Heatmap
    This view shows the density of High risk patients on each area based on the zipcode they entered in the `Patient Information` page.
    ##### State Admin &rarr; Stock Level by Hospital
    This view shows the stock of items in each hosptial
    ##### State Admin &rarr; Stock Level by Item
    This view shows the stock in every hospital by each item.

## Contributing to the Project
Please refer the [CONTRIBUTING.md](https://github.com/VanenburgSoftware/CoronaGo/blob/master/CONTRIBUTING.md) file for more information

## Issue Reporting
All issues should be reported in the format given in [ISSUE_TEMPLATE.md](https://github.com/VanenburgSoftware/CoronaGo/blob/master/ISSUE_TEMPLATE.md) file.

## Code of Conduct
Any discussion/contribution on the project should follow the code of conduct as documented in [CODE_OF_CONDUCT.md](https://github.com/VanenburgSoftware/CoronaGo/blob/master/CODE_OF_CONDUCT.md) file.

## License
This project is having Apache License V2.0.  
Please refer the [LICENSE.md](https://github.com/VanenburgSoftware/CoronaGo/blob/master/LICENSE.md) file for more information.

    

