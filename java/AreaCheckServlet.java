import bean.Point;
import bean.Results;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;


@WebServlet("/areacheckservlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long startTime = System.nanoTime();
        PrintWriter writer=resp.getWriter();
        resp.setContentType("text/html");
        Results results=(Results) req.getSession().getAttribute("point");
        if (results==null) results=new Results();
        String coordX=req.getParameter("Coordinates_X");
        Double coordY=Double.parseDouble(req.getParameter("Coordinates_Y"));
        String radius=req.getParameter("radius");

        Integer intr=Integer.parseInt(radius);
        Double doublex=Double.parseDouble(coordX);
        HitDetection hitDetection=new HitDetection(doublex,coordY,intr);
        boolean val=hitDetection.Hit(doublex,coordY,intr);
        String result=" <table  class=\"table-result\">\n";
        result+="   <tr>\n" +
                "        <td class=\"table_x\">" + doublex + "</td>\n"+
                "        <td class=\"table_y\">" + coordY +"</td>\n" +
                "        <td class=\"table_r\">" + intr +"</td>\n" +
                "        <td>" + val +"</td>\n" +
                "        <td colspan=\"2\"> "+new SimpleDateFormat("HH:mm:ss").format(new Date())+" </td>\n" +
                "        <td colspan=\"2\">"+ BigDecimal.valueOf(Double.parseDouble(String.valueOf(BigDecimal.valueOf((System.nanoTime() - startTime) / 1000000000d)).substring(0, 8))) +" </td>\n" +
                "   </tr>\n";
        result+=" </table>";
        Point point=new Point(doublex,coordY,intr,val,new SimpleDateFormat("HH:mm:ss").format(new Date()),BigDecimal.valueOf(Double.parseDouble(String.valueOf(BigDecimal.valueOf((System.nanoTime() - startTime) / 1000000000d)).substring(0, 8))));

        results.getPointList().add(point);
        req.getSession().setAttribute("point",results);


        writer.write(result);
    }
}
