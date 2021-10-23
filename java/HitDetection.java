public class HitDetection {
    private Double x;
    private Double y;
    private Integer r;

    public HitDetection(Double x,Double y,Integer r){
        this.x=x;
        this.y=y;
        this.r=r;
    }

    public boolean HitInSquare(Double x,Double y,Integer r){
        return x>=0 && y>=0 && x<=r && y<=r;
    }

    public boolean HitInRectangle(Double x, Double y, Integer r){
        return x<=0 && y>=0 && y<=-x+r;
    }

    public boolean HitInCircle(Double x,Double y,Integer r){
        return x<=0 && y<=0 && x*x+y*y<=r*r;
    }

    public boolean Hit(Double x, Double y, Integer r){
        return HitInCircle(x,y,r) || HitInRectangle(x,y,r) || HitInSquare(x,y,r);
    }

}
