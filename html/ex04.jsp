<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>

<body>
    <%
    String userId = request.getParameter("user_id");
    String today = request.getParameter("today");
    String sex = request.getParameter("sex");
    String userEmail = request.getParameter("user_email");
    String agree = request.getParameter("agree");
    String phone = request.getParameter("phone");
    String sPhone = request.getParameter("sphone");
    String lPhone = request.getParameter("lphone");
    String job = request.getParameter("job");
    String [] userSubject = request.getParameterValues("subject");
    String text = request.getParameter("text");
    %>
    <h1>아이디: <%=userId%></h1>
    <h1>생년월일: <%=today%></h1>
    <h1>성별: <%=sex%></h1>
    <h1>이메일: <%=userEmail%></h1>
    <h1>메일수신: <%=agree%></h1>
    <h1>핸드폰: <%=phone%><%=sPhone%><%=lPhone%></h1>
    <h1>직업: <%=job%></h1>

    <%
     for(String subject : userSubject) {
     %>
    <h1>취미: <%=subject%></h1>
    <%    
     }
     %>
    <h1>자기소개: <%=text%></h1>
</body>

</html>