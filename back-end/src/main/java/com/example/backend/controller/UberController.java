package com.example.backend.controller;

import com.example.backend.model.UberMenu;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.MapType;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ClientHttpRequest;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.*;

//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://localhost:4200/*")
@RestController
@RequestMapping({"/api"})
//@CrossOrigin(origins = "*", maxAge = 3600)
public class UberController {

    @GetMapping(value = "/menu")
    public Object getAllMenu(){
        return getTweetsNonBlocking();
    }
    @GetMapping(value = "/tweet")
    public Object getTweetsNonBlocking() {

//        WebClient client = WebClient.builder()
//                .baseUrl("http://localhost:8080")
//                .build();
//        WebClient.RequestBodySpec uri1 = client
//                .post()
//                .uri("/api/slow");
//        Object response2 = uri1.exchange()
//                .block()
//                .bodyToMono(Object.class)
//                .block();
//        return response2.toString();

        WebClient client = WebClient.builder()
                .baseUrl("https://www.ubereats.com/api")
                .build();
        WebClient.RequestBodySpec uri = (WebClient.RequestBodySpec) client
                .post()
                .uri("/getStoreV1?localeCode=pl-PL")
                .header("x-csrf-token", "x")
                .header("Content-Type", "application/json")
                .body(BodyInserters.fromFormData("storeUuid", "f2bd6100-4e14-4cae-9ad0-370077f7d31e"));
        Object response = uri.exchange()
                .block()
                .bodyToMono(Object.class)
                .block();

        ObjectMapper mapper = new ObjectMapper();
        UberMenu response2 = mapper.convertValue(response, UberMenu.class);
        List<String> SectionEntitiesMap = kayToArray(response2.getData().getSectionEntitiesMap());
        String test = response2.getData().getSectionEntitiesMap().toString();
        //response2.getData().getSectionEntitiesMap();
        
        return response2;

//        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
//        body.set("storeUuid", "f2bd6100-4e14-4cae-9ad0-370077f7d31e");
//        BodyInserter<MultiValueMap<String, String>, ClientHttpRequest>
//                inserter = BodyInserters.fromFormData(body);
//
//        WebClient client = WebClient
//                .builder()
//                .baseUrl("https://www.ubereats.com/api")
//                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE, "x-csrf-token", "x")
//                .build();
////        WebClient.RequestBodySpec uri = client
////                .post()
////                .uri("/getStoreV1?localeCode=pl-PL")
////                .body(BodyInserters.fromObject(
////                        "{ \"title\": \"foo\", \"body\": \"bar\", \"userId\": \"1\"}"))
////                .retrieve()
////                .bodyToMono(JsonNode.class)
////                .block();;
////
////    Flux<Object> test = uri
////            .retrieve()
////            .bodyToFlux(Object.class);
//
//        Mono<String> test =client
//                .post()
//                .uri("/getStoreV1?localeCode=pl-PL")
//                .body(BodyInserters.fromObject(
//                        "{ \"storeUuid\": \"f2bd6100-4e14-4cae-9ad0-370077f7d31e\"}"))
//                .exchange()
//                .bodyToMono(String.class);
//        String response = test.block();
//        System.out.println(response);

    }

    public List<String> kayToArray(Object data){
        JSONObject reader = new JSONObject((Map) data);
        Iterator iteratorObj = reader .keys();
        ArrayList<String> al_getAllKeys=new ArrayList<String>();
        while (iteratorObj.hasNext())
        {
            String getJsonObj = (String)iteratorObj.next();
            al_getAllKeys.add(getJsonObj);
        }
        return al_getAllKeys;
    }
}


