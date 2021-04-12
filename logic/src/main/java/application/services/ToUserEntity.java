package application.services;

import application.Repository.CompanyRepository;
import application.Repository.RoleRepository;
import application.api.DTO.UserDTO;
import application.models.Company;
import application.models.Role;
import application.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToUserEntity {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private RoleRepository roleRepository;

    public User toUserEntity(UserDTO user){

        Company company = companyRepository.findById(user.getCompany());
        Role role = roleRepository.findById(user.getRole());

        User userEntity = new User();

        userEntity.setAge(user.getAge());
        userEntity.setCompany(company);
        userEntity.setEmail(user.getEmail());
        userEntity.setName(user.getName());
        userEntity.setPassword(user.getPassword());
        userEntity.addRole(role);

        return userEntity;
    }
}
