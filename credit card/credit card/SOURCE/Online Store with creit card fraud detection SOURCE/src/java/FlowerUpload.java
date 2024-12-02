import com.oreilly.servlet.MultipartRequest;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import javax.swing.JOptionPane;
import org.apache.catalina.Session;
import sun.security.pkcs11.wrapper.Functions;

/**
 * Servlet implementation class FlowerUpload
 */
@WebServlet("/FlowerUpload")
@MultipartConfig(maxFileSize = 10177215) // upload file's size up to 16MB
public class FlowerUpload extends HttpServlet {
    private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FlowerUpload() {
        super();
    }

    private String dbURL = "jdbc:mysql://localhost:3306/credit card fraud";
    private String dbUser = "root";
    private String dbPass = "admin";
     
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
     String path = request.getSession().getServletContext().getRealPath("/");
         String patt=path.replace("\\build", "");
         System.out.println(patt);
          
         String p=patt+"product";
         System.out.println("product"+p);
         MultipartRequest m = new MultipartRequest(request,p);  
        InputStream inputStream = null; // input stream of the upload file
         
        // obtains the upload file part in this multipart request
       String pname=m.getParameter("pname");
       String price=m.getParameter("price");
           String qty=m.getParameter("qty");
            Part filePart = request.getPart("img");
       /* Part part=request.getPart("img");
        String fileName=extractfileName(part);
        String savepath="C:\\Users\\Skive6\\Documents\\NetBeansProjects\\registration_with_image\\web\\images\\"+File.separator+fileName;
        File filesavedir=new File(savepath);
        part.write(savepath + File.separator);
        JOptionPane.showMessageDialog(null, filesavedir);
        JOptionPane.showMessageDialog(null, fileName);*/
         
        if (filePart != null) {
//             prints out some information for debugging
            System.out.println(filePart.getName());
            System.out.println(filePart.getSize());
            System.out.println(filePart.getContentType());
           
            // obtains input stream of the upload file
            inputStream = filePart.getInputStream();
        }
         String filepath=""+m.getFile("img");
               System.out.println(filepath+"filepath");
               Path pp = Paths.get(filepath);
               String profilepic = pp.getFileName().toString();
        Connection conn = null; // connection to the database
        String message = null;  // message will be sent back to client
         
        try {
            // connects to the database
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            conn = DriverManager.getConnection(dbURL, dbUser, dbPass);
 
            // constructs SQL statement
            String sql = "INSERT INTO product (pname,price,qty,profile)  values ('"+pname+"','"+price+"','"+qty+"','"+profilepic+"')";
            
            PreparedStatement statement = conn.prepareStatement(sql); 
        /*  statement.setString(1, name);
               statement.setString(2, ename);
               statement.setString(3, mobile);
               statement.setString(4, pass);
                  
            if (inputStream != null) {
                // fetches input stream of the upload file for the blob column
              
                statement.setBlob(5, inputStream);
            }
              */
            // sends the statement to the database server
            int row = statement.executeUpdate();
           
            if (row > 0) {
            
                JOptionPane.showMessageDialog(null, "Product Added Successfully");
                response.sendRedirect("addproduct.jsp");
            }
        } catch (SQLException ex) {
     //      JOptionPane.showMessageDialog(null, ex);
     //      message = "ERROR: " + ex.getMessage();
           // System.out.println(ex);
            ex.printStackTrace();
        }
        finally {
            if (conn != null) {
                // closes the database connection
                try {
                    conn.close();
                } catch (SQLException ex) {
                  
                    ex.printStackTrace();
                }
            }
        
        }
    }
}