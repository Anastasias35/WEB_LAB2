import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@WebServlet("/controllerservlet")
public class ControllerServlet extends HttpServlet {
    Double[] coordX=new Double[]{-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0};
    Integer mincoordY=-3;
    Integer maxcoordY=5;
    Integer[] radius={1,2,3,4,5};

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ssss");
        if( request.getMethod().equals("GET")){
            if (request.getParameterValues("Coordinates_X")!=null && request.getParameter("Coordinates_Y")!=null && request.getParameterValues("radius")!=null){
                for (String x: request.getParameterValues("Coordinates_X")){
                    for (String r: request.getParameterValues("radius")){
                        if(Arrays.asList(coordX).contains(Double.parseDouble(x)) && (Double.parseDouble(request.getParameter("Coordinates_Y")))>=mincoordY &&
                            (Double.parseDouble(request.getParameter("Coordinates_Y"))<=maxcoordY && Arrays.asList(radius).contains(Integer.parseInt(r)))){
                            RequestDispatcher requestDispatcher=request.getRequestDispatcher("/areacheckservlet");
                            requestDispatcher.forward(request,response);
                        }
                        else{
                            RequestDispatcher requestDispatcher=request.getRequestDispatcher("/areacheckservlet");
                            requestDispatcher.forward(request,response);
                        }
                    }
                }
            }else{
                RequestDispatcher requestDispatcher=request.getRequestDispatcher("/index.jsp");
                requestDispatcher.forward(request,response);
            }
        }
    }

}
