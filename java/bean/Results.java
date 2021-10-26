package bean;

import java.util.ArrayList;
import java.util.List;

public class Results {
    List<Point> pointList;

    public Results(){
        this.pointList=new ArrayList<>();
    }

    public Results(List<Point> pointList) {
        this.pointList = pointList;
    }

    public List<Point> getPointList() {
        return pointList;
    }

    public void setPointList(List<Point> pointList) {
        this.pointList = pointList;
    }
}
