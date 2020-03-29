package com.candelalabs;

import java.util.Arrays;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.candelalabs.domain.Employee;

@ExtendWith(SpringExtension.class)
@TestInstance(Lifecycle.PER_CLASS)
@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("dev")
class IntegrationTests {
	
	@Autowired
	private TestRestTemplate restTemplate;
	
	@Test
	@Order(1)
	void test_saveOrUpdateEmployee() throws JSONException {
		System.out.println("test_saveOrUpdateEmployee");
		
		HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    JSONObject empJsonObject = new JSONObject();
	    empJsonObject.put("id", 1L);
	    empJsonObject.put("firstName", "John");
	    empJsonObject.put("lastName", "John");
	    empJsonObject.put("email", "John");
	    
	    HttpEntity<String> request = 
	    	      new HttpEntity<String>(empJsonObject.toString(), headers);
	    	     
		String empResultAsJsonStr = restTemplate.postForObject("/employees/", request, String.class);
		System.out.println(empResultAsJsonStr);
		
		//Employee empRtn = restTemplate.postForObject("/employees/", request, Employee.class);
		//System.out.println(empRtn.toString());

	}
	
	@Test
	@Order(2)
	void test_getAll() {
		System.out.println("test_getAll");
		//ResponseEntity<List<Employee>> resp = restTemplate.getForEntity("/employees/", Employee.class);
		ResponseEntity<Employee[]> responseEntity = restTemplate.getForEntity("/employees/", Employee[].class);
		List<Employee> empList = Arrays.asList(responseEntity.getBody()); //responseEntity.getBody();
		MediaType contentType = responseEntity.getHeaders().getContentType();
		HttpStatus statusCode = responseEntity.getStatusCode();
		
		System.out.println(empList.toString());
	}
	
	@Test
	@Order(3)
	void test_findEmployeeById() {
		System.out.println("test_findEmployeeById");
		ResponseEntity<Employee> resp = restTemplate.getForEntity("/employees/1", Employee.class);
		System.out.println(resp.getBody().toString());
		System.out.println(resp.getBody().toString());
	}

}
