package com.candelalabs.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

@ExtendWith(SpringExtension.class)
@TestInstance(Lifecycle.PER_CLASS)
@TestMethodOrder(OrderAnnotation.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("dev")
class EmployeeControllerTests {

	@Autowired
	private MockMvc mockMvc;
	
	private static final ObjectMapper mapper = new ObjectMapper(); 

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	public void test_getAllEmployee() throws Exception {
		ResultActions andDo = mockMvc.perform(MockMvcRequestBuilders
				.get("/employees/"))
				.andExpect(status().isOk()).andDo(print());
		System.out.println(andDo.andReturn().getResponse().getContentAsString());
	}
	@Test
	public void test_saveOrUpdateEmployee() throws Exception {
		ResultActions andDo = mockMvc.perform(MockMvcRequestBuilders
				.get("/employees/"))
				.andExpect(status().isOk()).andDo(print());
		System.out.println(andDo.andReturn().getResponse().getContentAsString());
	}
	@Test
	public void test_findEmployeeById() throws Exception {
		ResultActions andDo = mockMvc.perform(MockMvcRequestBuilders
				.get("/employees/"))
				.andExpect(status().isOk()).andDo(print());
		System.out.println(andDo.andReturn().getResponse().getContentAsString());
	}

}
