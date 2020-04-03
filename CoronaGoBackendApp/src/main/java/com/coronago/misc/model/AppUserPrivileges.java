package com.coronago.misc.model;

import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.AppUserPrivilegesPerimeter;

@Table(name = "ApplicationUser",keys= {"email"}, acl = @ACLProvider(value = AppUserPrivilegesPerimeter.class))
public class AppUserPrivileges extends AppUserPrivilegesBase {
	private static final long serialVersionUID = -3683204871233803119L;
	private String gotoMeetingUserName;
	private String gotoMeetingPassword;

	public String getGotoMeetingUserName() {
		return gotoMeetingUserName;
	}

	public void setGotoMeetingUserName(String gotoMeetingUserName) {
		this.gotoMeetingUserName = gotoMeetingUserName;
	}

	public String getGotoMeetingPassword() {
		return gotoMeetingPassword;
	}

	public void setGotoMeetingPassword(String gotoMeetingPassword) {
		this.gotoMeetingPassword = gotoMeetingPassword;
	}
}
