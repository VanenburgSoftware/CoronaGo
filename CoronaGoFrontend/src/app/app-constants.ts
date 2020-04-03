export class AppConstants {
	public static isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;
	/** Menu animations */
	public static animationDuration = '200ms';
	public static menuWidth = '312px';
	public static collapsedMenuWidth = AppConstants.isMobile ? '0px' : '100px';
	public static appDirectoryRoot = '/assets/images/';
	public static defaultMenuItemIcon = 'fa fa-file-o';
	

	/** Services */
	public static defaultContentType = 'application/json';
	public static apihost = 'rest';
	public static fileDownloadUrl = '/attachments/download/attachment/';

	/** Conversions */
	public static dateFormat = 'dd-MMM-yyyy';
	public static dateTimeFormat = 'dd-MMM-yyyy hh:mm';
	public static defaultLocale = 'en-US';
	public static defaultCurrency = 'EUR';

	public static notificationTimeInterval = 6000;
	public static defaultSuccessMsg = 'RECORD_CREATION_SUCCESS';
	public static recordUpdatedMsg = 'RECORD_UPDATED_SUCCESS';
	public static recordDeletedMsg = 'RECORD_DELETION_SUCCESS';

	public static maxRowsAllowedToSelect = 10;

	public static isFromTab = false;

	public static MAPS_API_KEY = "MAPS_API_KEY";

}
