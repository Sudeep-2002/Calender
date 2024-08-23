import java.time.LocalDate;
import java.util.List;

public public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByDate(LocalDate date);
} {
    
}
