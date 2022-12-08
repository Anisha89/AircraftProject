package com.app.Registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.Registration.service.EmailService;

import javax.mail.MessagingException;
 
@RestController
public class SendEmailController {

    @Autowired
    private EmailService emailService;

    @RequestMapping(value = "/testSendEmail" , method = RequestMethod.GET)
    public void sendEmail(){
        try {
            emailService.sendMail("test@gmail.com", "Test Subject", "TestMessage");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

}
