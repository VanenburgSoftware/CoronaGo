package com.coronago.mail;

import java.io.InputStream;

public class InlineAttachments {
	private InputStream inlineFinStream;
	private String inlineFileName;
	
	public String getInlineFileName() {
		return inlineFileName;
	}
	
	public InputStream getInlineFinStream() {
		return inlineFinStream;
	}
	
	public void setInlineFileName(String inlineFileName) {
		this.inlineFileName = inlineFileName;
	}
	
	public void setInlineFinStream(InputStream inlineFinStream) {
		this.inlineFinStream = inlineFinStream;
	}
}
