import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Named;
import java.io.Serializable;
import java.time.LocalDateTime;

@Named
@ViewScoped
public class PollView implements Serializable {

    static private String stringDate;


    @PostConstruct
    public void increment() {
        LocalDateTime date = LocalDateTime.now();
        int year= date.getYear();
        int month=date.getMonthValue();
        int day =date.getDayOfMonth();
        int hour = date.getHour();
        int min = date.getMinute();
        int second = date.getSecond();
        stringDate= year +"-"+month+"-"+day +" " +hour+":"+min+":"+second;
    }

    public String getStringDate() {
        return stringDate;
    }
}