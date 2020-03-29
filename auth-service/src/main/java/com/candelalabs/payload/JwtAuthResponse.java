package com.candelalabs.payload;

import java.io.Serializable;

public class JwtAuthResponse implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String jwttoken;
	private String tokenType = "Bearer";
	
	public JwtAuthResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public String getJwttoken() {
		return jwttoken;
	}
	
	
}
