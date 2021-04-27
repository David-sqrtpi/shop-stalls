package application.util;

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

    default List<D> fromEntity(List<E> entities) {
        if (entities == null) {
            return null;
        }
        List<D> dtos = new ArrayList<>();
        for (E entity : entities) {
            dtos.add(fromEntity(entity));
        }
        return dtos;
    }
}
