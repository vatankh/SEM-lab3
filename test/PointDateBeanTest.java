import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import java.util.List;

public class PointDateBeanTest {

    private PointDateBean pointDateBean;

    @Before
    public void setUp() {
        // Initialize the PointDateBean object before each test
        pointDateBean = new PointDateBean();
    }

    @Test
    public void testNewPointNotNull() {
        // Test that a new point is initialized in the constructor
        Assert.assertNotNull(pointDateBean.getNewPoint());
    }

    @Test
    public void testGetPointsTableNotNull() {
        // Test that the points table is not null
        List<Point> points = pointDateBean.getPointsTable();
        Assert.assertNotNull(points);
    }

    @Test
    public void testSetNewPoint() {
        // Create a new Point object
        Point newPoint = new Point();
        newPoint.setX(10);
        newPoint.setY(15);

        // Set the new point and check if it is properly set
        pointDateBean.setNewPoint(newPoint);
        Assert.assertEquals(newPoint, pointDateBean.getNewPoint());
    }

    @Test
    public void testDoCode() {
        // Test that the doCode method executes without errors
        Point newPoint = new Point();
        newPoint.setX(10);
        newPoint.setY(20);

        pointDateBean.setNewPoint(newPoint);
        pointDateBean.doCode();

        // After running doCode, newPoint should be reset to a new Point object
        Assert.assertNotNull(pointDateBean.getNewPoint());
        Assert.assertNotEquals(newPoint, pointDateBean.getNewPoint());
    }
}
