package application.util;

import application.DTO.ProductDTO;

import java.util.ArrayList;
import java.util.List;

public interface DtoConverter<E, D> {
    E fromDto(D dto);

    D fromEntity(E entity);

    default List<E> fromDto(List<D> dtos) {
        if (dtos == null) {
            return null;
        }
        List<E> entities = new ArrayList<>();
        for (D dto : dtos) {
            entities.add(fromDto(dto));
        }
        return entities;
    }



}
