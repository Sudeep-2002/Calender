import java.time.LocalDate;
import java.util.List;

public class controller {
    @RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventRepository eventRepository;
    
    @GetMapping("/{date}")
    public List<Event> getEventsByDate(@PathVariable("date") String date) {
        LocalDate eventDate = LocalDate.parse(date);
        return eventRepository.findByDate(eventDate);
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }
}
}
