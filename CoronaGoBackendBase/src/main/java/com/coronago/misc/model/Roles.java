package com.coronago.misc.model;

import java.util.HashMap;
import java.util.Map;

public enum Roles {
	DEVADMIN(6,"Development Administrator"),
ADMIN(1,"App Admin"),
DOC(2,"Doctor"),
PAT(3,"Patient"),
HA(4,"Hospital Admin"),
SCL(5,"State County Login");

	private static final Map<String, Roles> roleNameMap = new HashMap<String, Roles>();
	static {
		for (Roles roleNameEnum : Roles.values()) {
			roleNameMap.put(roleNameEnum.getRoleName(), roleNameEnum);
		}
	}
	
	private Integer roleId;
	private String roleName;

	Roles(Integer roleId,String roleName) {
		this.setRoleId(roleId);
		this.setRoleName(roleName);
	}

	public static Roles getRoleNameEnum(String roleName) {
		return roleNameMap.get(roleName);
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
}
