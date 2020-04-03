package com.coronago.misc.model;
import com.eva.base.annotations.ACLProvider;
import com.eva.base.annotations.Table;
import com.coronago.misc.logic.MeetingsPerimeter;
@Table(name="Meetings", acl = @ACLProvider(value = MeetingsPerimeter.class))
public class Meetings extends MeetingsBase {
	private static final long serialVersionUID = -3683194871243803119L;

}