package com.candelalabs.exception;

public class EmployeeNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public EmployeeNotFoundException() {
	}

	public EmployeeNotFoundException(String msg) {
		super(msg);
	}

	public EmployeeNotFoundException(String msg, Throwable cause) {
		super(msg, cause);
	}

	public EmployeeNotFoundException(Throwable cause) {
		super(cause);
	}

}
