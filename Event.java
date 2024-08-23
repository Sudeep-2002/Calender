//set up for spring boot Use Spring Initializr to create a Spring Boot project with dependencies like Spring Web, Spring Data JPA, and an in-memory database like H2 or MySQL if you want persistent storage.
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private LocalDate date;
    private LocalTime time;
    
    
}