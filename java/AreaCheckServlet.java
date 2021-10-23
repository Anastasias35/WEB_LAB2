import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;


@WebServlet("/areacheckservlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Date dStart= new Date();
        Date dStop= new Date();
        PrintWriter writer=resp.getWriter();
        resp.setContentType("text/html");
        String[] coordX=req.getParameterValues("Coordinates_X");
        Double coordY=Double.parseDouble(req.getParameter("Coordinates_Y"));
        String[] radius=req.getParameterValues("radius");
        String result=" <table  class=\"table-result\">\n";

        for (String r : radius){
            Integer intr=Integer.parseInt(r);
            for(String x: coordX){
                Double doublex=Double.parseDouble(x);
                HitDetection hitDetection=new HitDetection(doublex,coordY,intr);
                boolean val=hitDetection.Hit(doublex,coordY,intr);
                result+="   <tr>\n" +
                        "        <td>" + doublex + "</td>\n"+
                        "        <td>" + coordY +"</td>\n" +
                        "        <td>" + intr +"</td>\n" +
                        "        <td>" + val +"</td>\n" +
                        "        <td colspan=\"2\"> current time </td>\n" +
                        "        <td colspan=\"2\"> spending time </td>\n" +
                        "   </tr>\n";

            }
        }
        result+=" </table>";
        writer.write(result);
    }
}
