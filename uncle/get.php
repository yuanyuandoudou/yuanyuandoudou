<?php
    //接收客户端传过来的参数数据
    $user = $_GET['user'];
    $pwd = $_GET['pwd'];

    //服务器端输出的结果
    echo $user."|".$pwd;
?>