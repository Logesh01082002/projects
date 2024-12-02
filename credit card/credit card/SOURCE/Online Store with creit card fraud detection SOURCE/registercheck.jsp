
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="javax.swing.JOptionPane"%>
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
        String fname=request.getParameter("fname");
        String lname=request.getParameter("lname");
        String email=request.getParameter("email");
        String mno=request.getParameter("mno");
        String psw=request.getParameter("psw");
        String atm1=request.getParameter("atm1");
        String atm2=request.getParameter("atm2");
        String atm3=request.getParameter("atm3");
        String atm4=request.getParameter("atm4");
        String cvv=request.getParameter("cvv");
        String stg1=request.getParameter("stg1");
        String stg2=request.getParameter("stg2");
        String stg3=request.getParameter("stg3");
        String stg4=request.getParameter("stg4");
        
        Class.forName("com.mysql.jdbc.Driver");
                    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/credit card fraud","root","admin");
                    PreparedStatement check=con.prepareStatement("insert into user(fname,lname,email,mno,psw,atm1,atm2,atm3,atm4,cvv,stg1,stg2,stg3,stg4) value('"+fname+"','"+lname+"','"+email+"','"+mno+"','"+psw+"','"+atm1+"','"+atm2+"','"+atm3+"','"+atm4+"','"+cvv+"','"+stg1+"','"+stg2+"','"+stg3+"','"+stg4+"')");
                    int f=check.executeUpdate();
                    if(f>0)
                    {
                        JOptionPane.showMessageDialog(null, "Registration Successfully....!");
                        response.sendRedirect("userlogin.jsp");
                    }
            }catch(Exception e)
            {
                JOptionPane.showMessageDialog(null, e);
            }
        %>
    </body>
</html>
