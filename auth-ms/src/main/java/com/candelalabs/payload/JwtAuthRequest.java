package com.candelalabs.payload;

import java.io.Serializable;

public class JwtAuthRequest implements Serializable {

	private static final long serialVersionUID = 1L;
	private String username;
	private String password;

	public JwtAuthRequest() {
	}

	public JwtAuthRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
