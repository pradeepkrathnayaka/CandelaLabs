package com.candelalabs.payload;

import java.io.Serializable;

public class JwtAuthResponse implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private final String jwttoken;

	public JwtAuthResponse(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getToken() {
		return this.jwttoken;
	}
}
