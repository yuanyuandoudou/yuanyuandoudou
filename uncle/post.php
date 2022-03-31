<?php
    //接收客户端传过来的参数数据
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];

    //服务器端输出的结果
    echo $user."|".$pwd;
?>