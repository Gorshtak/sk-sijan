package main.repository;

import main.entity.Raspored;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RasporedRepository extends CrudRepository<Raspored, Long> {

    @Query("Select u from Raspored u where u.dan LIKE %:dan% and u.ucionica LIKE %:ucionica% and u.grupe LIKE %:grupa%")
    Iterable<Raspored> getRasporedByFilters(@Param("dan") String dan, @Param("ucionica") String ucionica, @Param("grupa") String grupa);

    @Query("Select grupe from Raspored")
    Iterable<String> getRasporedGroups();

}
