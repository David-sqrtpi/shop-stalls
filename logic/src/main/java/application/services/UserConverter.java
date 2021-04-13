package application.services;

import application.Repository.CompanyRepository;
import application.Repository.RoleRepository;
import application.DTO.UserDTO;
import application.models.Company;
import application.models.Role;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserConverter {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private RoleRepository roleRepository;

    public User toUserEntity(UserDTO user){

        Company company = companyRepository.findById(user.getCompanyId());
        Iterable<Role> roles = roleRepository.findAllById(user.getRoleIds());

        System.out.println(roles);

        User userEntity = new User();

        userEntity.setAge(user.getAge());
        userEntity.setCompany(company);
        userEntity.setEmail(user.getEmail());
        userEntity.setName(user.getName());
        userEntity.setPassword(user.getPassword());
        userEntity.setRoles((List<Role>) roles);

        return userEntity;
    }

    public UserDTO toUserDTO(User userEntity) {

        UserDTO user = new UserDTO();

        user.setId(userEntity.getId());
        user.setAge(userEntity.getAge());
        user.setName(userEntity.getName());
        user.setEmail(userEntity.getEmail());
        user.setCompanyName(userEntity.getCompany().getName());
        user.setCompanyId(userEntity.getCompany().getId());
        for(Role role:userEntity.getRoles()){
            user.getRoleNames().add(role.getName());
        }
        user.setAge(userEntity.getAge());

        return user;
    }

    //Converts every User Entity into a userDTO using method above
    public List<UserDTO> toUserDTOS(List<User> userEntities) {

        List<UserDTO> userDTOS= new ArrayList<>();

        for(User userEntity:userEntities) {
            userDTOS.add(toUserDTO(userEntity));
        }

        return userDTOS;
    }

}
//TODO Optimize the code above