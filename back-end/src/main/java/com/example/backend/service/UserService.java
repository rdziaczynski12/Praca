package com.example.backend.service;

import com.example.backend.message.request.ChangeEmailForm;
import com.example.backend.message.request.ChangePasswordForm;
import com.example.backend.message.request.LoginForm;
import com.example.backend.message.response.JwtResponse;
import com.example.backend.model.Role;
import com.example.backend.model.RoleName;
import com.example.backend.model.User;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    AuthenticationManager authenticationManager;

    public Collection<User> getAllUser(){
        return userRepository.findAll();
    }

    public void addUser(User user){
        userRepository.saveAndFlush(user);
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public void editUser(User user){
        userRepository.saveAndFlush(user);
    }

    public void activUser(Long id){
        User user = userRepository.findById(id).get();
            Set<Role> roles =  user.getRoles();
            Role roleActive = roleRepository.findByName(RoleName.ROLE_ACTIVE_USER).get();
            if(roles.contains(roleActive))
                roles.removeIf(role -> role.getName()== RoleName.ROLE_ACTIVE_USER);
            else
                roles.add(roleActive);
            user.setRoles(roles);
            user.setActiv(!user.getActiv());
            userRepository.saveAndFlush(user);
    }

    public User getUserByUserName(String userName){
        return userRepository.findByUsername(userName).get();
    }

    public int existEmailOrLogin(String login, String email){
        int result = 0;
        if(email!="")
            if(userRepository.existsByEmail(email))
                result += 1;
        if(login!="")
            if(userRepository.existsByUsername(login))
                result += 2;
        return result;
    }

    public int changePassword(ChangePasswordForm form){
        User user = userRepository.findByUsername(form.getUserName()).get();
        if (testPassword(form).getStatusCodeValue()==200) {
            user.setPassword(encoder.encode(form.getNewPassword()));
            userRepository.saveAndFlush(user);
            return 0;
        }
        return 1;

    }

    public int changeEmail(ChangeEmailForm body){
        if(userRepository.existsByEmail(body.getEmail()))
            return 1;
        User user = userRepository.findByUsername(body.getUserName()).get();
        user.setEmail(body.getEmail());
        userRepository.saveAndFlush(user);
        return 0;
    }

    public User getUserData(String userName){
        User user = userRepository.findByUsername(userName).get();
        user.setPassword("");
        return user;
    }

    public ResponseEntity<?> testPassword(ChangePasswordForm form) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(form.getUserName(), form.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return ResponseEntity.ok(1);
    }
}
