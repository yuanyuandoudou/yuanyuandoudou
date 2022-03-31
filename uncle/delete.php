<?php 
//article

//echo $_GET['aId'];

$aId = $_GET['aId'];
if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    header("HTTP/1.0 405 Method Not Allowed");
exit(); }
//页面输出
echo "您要删除的文章的iD是".$aId;
?>