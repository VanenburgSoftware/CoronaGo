package com.coronago.misc.model;

import com.vs.eva.gaelibrary.authentication.GAEAppUserPrivilegeBase;

public class AppUserPrivilegesBase extends GAEAppUserPrivilegeBase {

	private static final long serialVersionUID = -3683194871233808119L;
	private boolean devadmin;
	private boolean pat=true;
	private boolean doc;
	private boolean ha;
	private boolean admin;
	private boolean scl;

	public void setDevadmin(boolean devadmin) {
		this.devadmin = devadmin;
	}

	public boolean isDevadmin() {
		return devadmin;
	}

	public void setPat(boolean pat) {
		this.pat = pat;
	}

	public boolean isPat() {
		return pat;
	}

	public void setDoc(boolean doc) {
		this.doc = doc;
	}

	public boolean isDoc() {
		return doc;
	}

	public void setHa(boolean ha) {
		this.ha = ha;
	}

	public boolean isHa() {
		return ha;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setScl(boolean scl) {
		this.scl = scl;
	}

	public boolean isScl() {
		return scl;
	}


}