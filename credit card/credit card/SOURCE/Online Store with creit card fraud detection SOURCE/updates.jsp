
<%@page import="javax.swing.JOptionPane"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
        
        try{
                    Class.forName("com.mysql.jdbc.Driver");
                    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/credit card fraud","root","admin");
                    PreparedStatement check=con.prepareStatement("update product set pname='"+(request.getParameter("pname"))+"',price='"+(request.getParameter("price"))+"',qty='"+(request.getParameter("qty"))+"' where id="+(request.getParameter("pid"))+"");
                    int c=check.executeUpdate();
                    if(c>0)
                    {
                        JOptionPane.showMessageDialog(null, "Your product updated successfully..");
                        response.sendRedirect("updateproduct.jsp");
                    }
        }catch(Exception e)
        {
            JOptionPane.showMessageDialog(null, e);
        }
        
        %>
    </body>
</html>
