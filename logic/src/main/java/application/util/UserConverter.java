package application.util;

import application.DTO.UserDTO;
import application.Repository.CompanyRepository;
import application.Repository.RoleRepository;
import application.entity.Company;
import application.entity.Role;
import application.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserConverter implements DtoConverter<User, UserDTO> {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User fromDto(UserDTO dto) {

        Company company = companyRepository.findById(dto.getCompanyId());

        Iterable<Role> roles = roleRepository.findAllById(dto.getRoleIds());

        User user = new User();

        user.setId(dto.getId());
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setAge(dto.getAge());
        user.setCompany(company);
        user.setRoles((List<Role>) roles);

        return user;
    }

    @Override
    public UserDTO fromEntity(User entity) {
        UserDTO userDto = new UserDTO();

        userDto.setId(entity.getId());
        userDto.setName(entity.getName());
        userDto.setEmail(entity.getEmail());
        userDto.setAge(entity.getAge());
        userDto.setCompanyId(entity.getCompany().getId());
        userDto.setCompanyName(entity.getCompany().getName());

        for (Role role : entity.getRoles()) {
            userDto.getRoleNames().add(role.getName());
            userDto.getRoleIds().add(role.getId());
        }

        return userDto;
    }

}