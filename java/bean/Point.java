package bean;

import java.math.BigDecimal;
import java.util.Date;

public class Point {
    private Double x;
    private Double y;
    private Integer r;
    private boolean result;
    private String curTime;
    private BigDecimal exeTime;

    public Point(){
    }

    public Point(Double x,Double y,Integer r, boolean result, String curTime,BigDecimal exeTime){
        this.x=x;
        this.y=y;
        this.r=r;
        this.result=result;
        this.curTime=curTime;
        this.exeTime=exeTime;
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Integer getR() {
        return r;
    }

    public void setR(Integer r) {
        this.r = r;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public String getCurTime() {
        return curTime;
    }

    public void setCurTime(String curTime) {
        this.curTime = curTime;
    }

    public BigDecimal getExeTime() {
        return exeTime;
    }

    public void setExeTime(BigDecimal exeTime) {
        this.exeTime = exeTime;
    }
}
