/** This class is to maintain the api service properties in a single place.
 * example service object
 * "serviceName": {
 *      url: string;
 *      method: string;
 *      showSpinner?: boolean;
 *      showSuccessMsg?: boolean;
 *      showErrorMsg?: boolean;
 *      successMsg?: string;
 *      errorMsg?: string;
 *      headers?: any;
 * }
 */

export class ApiConstants {
    public static readonly login: any = {
        url: 'appuserprivileges/authenticate',
        method: 'GET',
        showloading: true
    };
    public static readonly deleteStockLevelByHospital: any = {
        url: 'stocklevelbyhospitals/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getStockLevelByHospitalBySid: any = {
        url: 'stockinhospitals/stockinfobyhospital/{id}',
        method: 'GET',
        showloading: true
    };
    public static readonly createStockLevelByHospital: any = {
        url: 'stocklevelbyhospitals',
        method: 'POST',
        showloading: true
    };
    public static readonly updateStockLevelByHospital: any = {
        url: 'stocklevelbyhospitals',
        method: 'PUT',
        showloading: true
    };
    public static readonly createStockLevelByItem: any = {
        url: 'stocklevelbyitems',
        method: 'POST',
        showloading: true
    };
    public static readonly getStockLevelByItemAll_StockLevelByItem: any = {
        url: 'stockinhospitals/stockinfobyitem',
        method: 'POST',
        showloading: true
    };
    public static readonly updateStockLevelByItem: any = {
        url: 'stocklevelbyitems',
        method: 'PUT',
        showloading: true
    };
    public static readonly deleteStockLevelByItem: any = {
        url: 'stocklevelbyitems/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getStockLevelByItemBySid: any = {
        url: 'stocklevelbyitems/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly deleteCountyStateLogin: any = {
        url: 'countystatelogins/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getCountyStateLoginBySid: any = {
        url: 'countystatelogins/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly createCountyStateLogin: any = {
        url: 'countystatelogins',
        method: 'POST',
        showloading: true
    };
    public static readonly updateCountyStateLogin: any = {
        url: 'countystatelogins',
        method: 'PUT',
        showloading: true
    };
    public static readonly updateMeetings: any = {
        url: 'meetings',
        method: 'PUT',
        showloading: true
    };
    public static readonly createMeetings: any = {
        url: 'meetings',
        method: 'POST',
        showloading: true
    };
    public static readonly getMeetingsBySid: any = {
        url: 'meetings/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly deleteMeetings: any = {
        url: 'meetings/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getMeetingsAll_Meetings: any = {
        url: 'meetings/meetings/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly createDoctorActivityLog: any = {
        url: 'doctoractivitylogs',
        method: 'POST',
        showloading: true
    };
    public static readonly getDoctorActivityLogAll_DoctorActivityLog: any = {
        url: 'doctoractivitylogs/doctoractivitylogs/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly updateDoctorActivityLog: any = {
        url: 'doctoractivitylogs',
        method: 'PUT',
        showloading: true
    };
    public static readonly deleteDoctorActivityLog: any = {
        url: 'doctoractivitylogs/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getDoctorActivityLogBySid: any = {
        url: 'doctoractivitylogs/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly updateCoronaTracker: any = {
        url: 'coronatrackers',
        method: 'PUT',
        showloading: true
    };
    public static readonly deleteCoronaTracker: any = {
        url: 'coronatrackers/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly createCoronaTracker: any = {
        url: 'coronatrackers',
        method: 'POST',
        showloading: true
    };
    public static readonly getCoronaTrackerBySid: any = {
        url: 'coronatrackers/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly updateLogin: any = {
        url: 'logins',
        method: 'PUT',
        showloading: true
    };
    public static readonly deleteLogin: any = {
        url: 'logins/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly createLogin: any = {
        url: 'logins',
        method: 'POST',
        showloading: true
    };
    public static readonly getLoginBySid: any = {
        url: 'logins/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly createStockInHospital: any = {
        url: 'stockinhospitals',
        method: 'POST',
        showloading: true
    };
    public static readonly updateStockInHospital: any = {
        url: 'stockinhospitals',
        method: 'PUT',
        showloading: true
    };
    public static readonly getStockInHospitalBySid: any = {
        url: 'stockinhospitals/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly deleteStockInHospital: any = {
        url: 'stockinhospitals/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getStockInHospitalAll_StockInHospital: any = {
        url: 'stockinhospitals/stockinhospitals/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly updateHeatMap: any = {
        url: 'heatmaps',
        method: 'PUT',
        showloading: true
    };
    public static readonly createHeatMap: any = {
        url: 'heatmaps',
        method: 'POST',
        showloading: true
    };
    public static readonly deleteHeatMap: any = {
        url: 'heatmaps/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getHeatMapBySid: any = {
        url: 'heatmaps/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly updateAppUserPrivileges: any = {
        url: 'appuserprivileges',
        method: 'PUT',
        showloading: true
    };
    public static readonly getCurrentUser: any = {
        url: 'appuserprivileges/',
        method: 'GET',
        showloading: true
    };
    public static readonly getAppUserPrivilegesBySid: any = {
        url: 'appuserprivileges/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getAppUserPrivilegesByEmail: any = {
        url: 'appuserprivileges/email/{email}',
        method: 'GET',
        showloading: true
    };
    public static readonly getAppUserPrivilegesAll_AppUserPrivileges: any = {
        url: 'appuserprivileges/appuserprivileges/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly deleteAppUserPrivileges: any = {
        url: 'appuserprivileges/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly createAppUserPrivileges: any = {
        url: 'appuserprivileges',
        method: 'POST',
        showloading: true
    };
    public static readonly updatePatientInformation: any = {
        url: 'patientinformations',
        method: 'PUT',
        showloading: true
    };
    public static readonly getPatientInformationBySid: any = {
        url: 'patientinformations/email/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly deletePatientInformation: any = {
        url: 'patientinformations/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly createPatientInformation: any = {
        url: 'patientinformations',
        method: 'POST',
        showloading: true
    };
    public static readonly patientDetailsFormScheduleConsultation: any = {
        url: 'patientquestionaires/form/patientdetails/scheduleconsultation/{id}',
        method: 'POST',
        showloading: true
    };
    public static readonly getPatientQuestionaireAll_MyPatientsNotScheduled: any = {
        url: 'patientinformations/mypatientsnotscheduleds/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly allPatientsScheduledFormNeedsConsultation: any = {
        url: 'patientinformations/needsconsultation/{id}',
        method: 'POST',
        showloading: true
    };
    public static readonly createPatientQuestionaire: any = {
        url: 'patientquestionaires/submit',
        method: 'POST',
        showloading: true
    };
    public static readonly patientDetailsFormDownloadReport: any = {
        url: 'patientquestionaires/form/patientdetails/downloadreport/{id}',
        method: 'POST',
        showloading: true
    };
    public static readonly getPatientQuestionaireAll_PatientQuestionaire: any = {
        url: 'patientquestionaires/patientquestionaires/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly deletePatientQuestionaire: any = {
        url: 'patientquestionaires/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getPatientQuestionaireAll_MyPatientsScheduled: any = {
        url: 'patientinformations/mypatientsscheduleds/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getPatientQuestionaireAll_NotYetAssigned: any = {
        url: 'patientinformations/allpatientsnotassigned/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly patientDetailsFormNeedsConsultation: any = {
        url: 'patientinformations/needsconsultation/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly updatePatientQuestionaire: any = {
        url: 'patientquestionaires',
        method: 'PUT',
        showloading: true
    };
    public static readonly myPatientsScheduledFormNeedsConsultation: any = {
        url: 'patientinformations/needsconsultation/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly myPatientsScheduledRowNeedsConsultation: any = {
        url: 'patientinformations/needsconsultation',
        method: 'PUT',
        showloading: true
    };
    public static readonly patientDetailsFormConsultationNotRequired: any = {
        url: 'patientquestionaires/form/patientdetails/consultationnotrequired/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly getPatientQuestionaireAll_AllPatientsScheduled: any = {
        url: 'patientquestionaires/allpatientsscheduleds/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getPatientQuestionaireAll_AllPatientsNotScheduled: any = {
        url: 'patientquestionaires/allpatientsnotscheduleds/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly patientDetailsFormCalculateRiskScore: any = {
        url: 'patientquestionaires/form/patientdetails/calculateriskscore/{id}',
        method: 'POST',
        showloading: true
    };
    public static readonly getPatientQuestionaireBySid: any = {
        url: 'patientquestionaires/currentday/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly allPatientsScheduledRowNeedsConsultation: any = {
        url: 'patientinformations/needsconsultation/{id}',
        method: 'POST',
        showloading: true
    };
    public static readonly patientDetailsFormDoWeeklyMonitoring: any = {
        url: 'meetings/completeconsultationwithmonitoring',
        method: 'PUT',
        showloading: true
    };
    public static readonly patientDetailsFormPrescribeTest: any = {
        url: 'meetings/completeconsultation',
        method: 'PUT',
        showloading: true
    };
    public static readonly deleteLandingPage: any = {
        url: 'landingpages/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly createLandingPage: any = {
        url: 'landingpages',
        method: 'POST',
        showloading: true
    };
    public static readonly updateLandingPage: any = {
        url: 'landingpages',
        method: 'PUT',
        showloading: true
    };
    public static readonly getLandingPageBySid: any = {
        url: 'landingpages/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly createHomeScreen: any = {
        url: 'homescreens',
        method: 'POST',
        showloading: true
    };
    public static readonly getHomeScreenBySid: any = {
        url: 'homescreens/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly updateHomeScreen: any = {
        url: 'homescreens',
        method: 'PUT',
        showloading: true
    };
    public static readonly deleteHomeScreen: any = {
        url: 'homescreens/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly createResources: any = {
        url: 'resources',
        method: 'POST',
        showloading: true
    };
    public static readonly deleteResources: any = {
        url: 'resources/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getResourcesBySid: any = {
        url: 'resources/sid/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly updateResources: any = {
        url: 'resources',
        method: 'PUT',
        showloading: true
    };

    public static readonly getScheduledMeetingForPatient: any = {
        url: 'meetings/scheduled/{email}',
        method: 'GET',
        showloading: true
    };

    public static readonly createMeetingForPatient: any = {
        url: 'meetings',
        method: 'POST',
        showloading: true
    };

    public static readonly getPatientMeetingHistory: any = {
        url: 'meetings/meetings/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getPatientAssessmentHistory: any = {
        url: 'patientquestionaires/patientquestionaires/datatable',
        method: 'POST',
        showloading: true
    };

    public static readonly getScheduledMeetingsForDate: any = {
        url: 'meetings/alreadyscheduled/{date}',
        method: 'GET',
        showloading: true
    };
    public static readonly getHospitals: any = {
        url: 'hospitals/getall',
        method: 'GET',
        showloading: true
    };
    public static readonly getHospitalItems: any = {
        url: 'items/getall',
        method: 'GET',
        showloading: true
    };

    public static readonly getHeatMap: any = {
        url: 'patientinformations/heatmap',
        method: 'GET',
        showloading: true
    };

    public static readonly getLatLong: any = {
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address={zipcode}5&key={apikey}',
        method: 'GET',
        showloading: true
    };
}
