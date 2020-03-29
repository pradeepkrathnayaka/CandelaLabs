package com.candelalabs.exception;

public class RecordNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public RecordNotFoundException() {
	}

	public RecordNotFoundException(String msg) {
		super(msg);
	}

	public RecordNotFoundException(String msg, Throwable cause) {
		super(msg, cause);
	}

	public RecordNotFoundException(Throwable cause) {
		super(cause);
	}

}
