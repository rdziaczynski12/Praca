package com.example.backend.service;

import com.example.backend.model.Role;
import com.example.backend.model.RoleName;
import com.example.backend.model.User;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

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
}
